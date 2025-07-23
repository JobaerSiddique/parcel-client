import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  userId?: string;
  _id?: string;
  role?: string;
  [key: string]: any;
}

export const getCurrentUser = async () => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("accessToken")?.value || cookieStore.get("refreshToken")?.value;

    if (!token) {
      console.log("No token found in cookies");
      return null;
    }

    const decodedToken = jwtDecode(token) as DecodedToken;
    console.log("Decoded Token:", decodedToken);
    
    return {
      _id: decodedToken?.userId || decodedToken?._id,
      role: decodedToken?.role?.toLowerCase() // Normalize role to lowercase
    };
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

const PUBLIC_ROUTES = ["/login", "/register", "/", "/api/login", "/api/register"];
const AUTH_ROUTES = ["/login", "/register"];

const ROLE_BASED_ROUTES = {
  customer: [
    /^\/dashboard(\/customer)?\/my-parcels(\/.*)?$/,
    /^\/dashboard(\/customer)?\/history(\/.*)?$/,
  ],
  admin: [
    /^\/dashboard\/admin(\/.*)?$/,
    /^\/admin(\/.*)?$/,
    /^\/profile(\/.*)?$/
  ],
  deliveryagent: [
    /^\/dashboard\/agent(\/.*)?$/,
    /^\/agent(\/.*)?$/,
    /^\/profile(\/.*)?$/
  ]
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(`Middleware processing: ${pathname}`);

  // Handle public routes
  if (PUBLIC_ROUTES.some(route => route === pathname || pathname.startsWith(route))) {
    if (AUTH_ROUTES.includes(pathname)) {
      const user = await getCurrentUser();
      if (user) {
        const DEFAULT_ROUTES = {
          customer: "/dashboard/customer/my-parcels",
          admin: "/dashboard/admin",
          deliveryagent: "/dashboard/agent"
        };
        const defaultRoute = DEFAULT_ROUTES[user.role as keyof typeof DEFAULT_ROUTES] || "/";
        console.log(`Redirecting authenticated user from ${pathname} to ${defaultRoute}`);
        return NextResponse.redirect(new URL(defaultRoute, request.url));
      }
    }
    return NextResponse.next();
  }

  // Check authentication for protected routes
  const user = await getCurrentUser();
  console.log("User from middleware:", user);

  if (!user) {
    console.log(`No user found, redirecting to login with redirect=${pathname}`);
    return NextResponse.redirect(
      new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url)
    );
  }

  // Validate user role
  const userRole = user.role;
  if (!userRole || !ROLE_BASED_ROUTES[userRole as keyof typeof ROLE_BASED_ROUTES]) {
    console.warn(`Invalid user role: ${userRole}`);
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  // Check route access
  const allowedPatterns = ROLE_BASED_ROUTES[userRole as keyof typeof ROLE_BASED_ROUTES];
  const hasAccess = allowedPatterns.some(pattern => pattern.test(pathname));

  if (hasAccess) {
    return NextResponse.next();
  }

  // Redirect to appropriate dashboard if no access
  const DEFAULT_ROUTES = {
    customer: "/dashboard/customer/my-parcels",
    admin: "/dashboard/admin",
    deliveryagent: "/dashboard/agent"
  };

  const defaultRoute = DEFAULT_ROUTES[userRole as keyof typeof DEFAULT_ROUTES] || "/";
  console.log(`Redirecting ${userRole} from ${pathname} to ${defaultRoute}`);
  return NextResponse.redirect(new URL(defaultRoute, request.url));
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
    "/register",
    "/admin/:path*",
    "/agent/:path*",
    "/profile/:path*"
  ]
};