// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { cookies } from 'next/headers';
// import { jwtDecode } from 'jwt-decode';
// import { getCurrentUser } from "./services/auth";

// interface DecodedToken {
//   userId?: string;
//   _id?: string;
//   role?: string;
//   [key: string]: any;
// }



// const PUBLIC_ROUTES = ["/login", "/register", "/", "/api/login", "/api/register"];
// const AUTH_ROUTES = ["/login", "/register"];

// const ROLE_BASED_ROUTES = {
//   customer: [
//     /^\/dashboard(\/customer)?\/my-parcels(\/.*)?$/,
//     /^\/dashboard(\/customer)?\/history(\/.*)?$/,
//   ],
//   admin: [
//     /^\/dashboard\/admin(\/.*)?$/,
//     /^\/admin(\/.*)?$/,
//     /^\/profile(\/.*)?$/
//   ],
//   deliveryagent: [
//     /^\/dashboard\/agent(\/.*)?$/,
//     /^\/agent(\/.*)?$/,
//     /^\/profile(\/.*)?$/
//   ]
// };

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   console.log(`Middleware processing: ${pathname}`);

//   // Handle public routes
//   if (PUBLIC_ROUTES.some(route => route === pathname || pathname.startsWith(route))) {
//     if (AUTH_ROUTES.includes(pathname)) {
//       const user = await getCurrentUser();
//       console.log({user});
//       if (user) {
//         const DEFAULT_ROUTES = {
//           customer: "/dashboard/customer/my-parcels",
//           admin: "/dashboard/admin",
//           deliveryagent: "/dashboard/agent"
//         };
//         const defaultRoute = DEFAULT_ROUTES[user.role as keyof typeof DEFAULT_ROUTES] || "/";
//         console.log(`Redirecting authenticated user from ${pathname} to ${defaultRoute}`);
//         return NextResponse.redirect(new URL(defaultRoute, request.url));
//       }
//     }
//     return NextResponse.next();
//   }

//   // Check authentication for protected routes
//   const user = await getCurrentUser();
//   console.log("User from middleware:", user);

//   if (!user) {
//     console.log(`No user found, redirecting to login with redirect=${pathname}`);
//     return NextResponse.redirect(
//       new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url)
//     );
//   }

//   // Validate user role
//   const userRole = user.role;
//   if (!userRole || !ROLE_BASED_ROUTES[userRole as keyof typeof ROLE_BASED_ROUTES]) {
//     console.warn(`Invalid user role: ${userRole}`);
//     return NextResponse.redirect(new URL("/unauthorized", request.url));
//   }

//   // Check route access
//   const allowedPatterns = ROLE_BASED_ROUTES[userRole as keyof typeof ROLE_BASED_ROUTES];
//   const hasAccess = allowedPatterns.some(pattern => pattern.test(pathname));

//   if (hasAccess) {
//     return NextResponse.next();
//   }

//   // Redirect to appropriate dashboard if no access
//   const DEFAULT_ROUTES = {
//     customer: "/dashboard/customer/my-parcels",
//     admin: "/dashboard/admin",
//     deliveryagent: "/dashboard/agent"
//   };

//   const defaultRoute = DEFAULT_ROUTES[userRole as keyof typeof DEFAULT_ROUTES] || "/";
//   console.log(`Redirecting ${userRole} from ${pathname} to ${defaultRoute}`);
//   return NextResponse.redirect(new URL(defaultRoute, request.url));
// }

// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/login",
//     "/register",
//     "/admin/:path*",
//     "/agent/:path*",
//     "/profile/:path*"
//   ]
// };
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getCurrentUser } from "./services/auth";

// const PUBLIC_ROUTES = ["/login", "/register", "/", "/api/login", "/api/register"];
// const AUTH_ROUTES = ["/login", "/register"];

// // More strict route definitions
// const ROLE_BASED_ROUTES = {
//   customer: [
//     /^\/dashboard\/customer(\/.*)?$/,  // Only customer dashboard
//     /^\/profile(\/.*)?$/               // Profile access
//   ],
//   admin: [
//     /^\/dashboard\/admin(\/.*)?$/,     // Only admin dashboard
//     /^\/admin(\/.*)?$/,
//     /^\/profile(\/.*)?$/
//   ],
//   deliveryagent: [
//     /^\/dashboard\/agent(\/.*)?$/,     // Only agent dashboard
//     /^\/agent(\/.*)?$/,
//     /^\/profile(\/.*)?$/
//   ]
// };

// // Default routes for each role when redirect is needed
// const DEFAULT_ROUTES = {
//   customer: "/dashboard/customer/my-parcels",
//   admin: "/dashboard/admin",
//   deliveryagent: "/dashboard/agent"
// };

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   console.log(`Middleware processing: ${pathname}`);

//   // Handle public routes
//   if (PUBLIC_ROUTES.some(route => route === pathname || pathname.startsWith(route))) {
//     if (AUTH_ROUTES.includes(pathname)) {
//       const user = await getCurrentUser();
//       if (user) {
//         const defaultRoute = DEFAULT_ROUTES[user.role as keyof typeof DEFAULT_ROUTES] || "/";
//         console.log(`Redirecting authenticated user from ${pathname} to ${defaultRoute}`);
//         return NextResponse.redirect(new URL(defaultRoute, request.url));
//       }
//     }
//     return NextResponse.next();
//   }

//   // Check authentication for protected routes
//   const user = await getCurrentUser();
//   console.log(user?.role);
//   if (!user) {
//     return NextResponse.redirect(
//       new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url)
//     );
//   }

//   // Validate user role exists
//   const userRole = user.role;
//   if (!userRole || !ROLE_BASED_ROUTES[userRole as keyof typeof ROLE_BASED_ROUTES]) {
//     return NextResponse.redirect(new URL("/unauthorized", request.url));
//   }

//   // Check if user is trying to access their own dashboard
//   const roleDashboard = `/dashboard/${userRole}`;
//   if (pathname.startsWith('/dashboard') && !pathname.startsWith(roleDashboard)) {
//     // Trying to access a dashboard that's not for their role
//     const defaultRoute = DEFAULT_ROUTES[userRole as keyof typeof DEFAULT_ROUTES];
//     return NextResponse.redirect(new URL(defaultRoute, request.url));
//   }

//   // Check route access against allowed patterns
//   const allowedPatterns = ROLE_BASED_ROUTES[userRole as keyof typeof ROLE_BASED_ROUTES];
//   const hasAccess = allowedPatterns.some(pattern => pattern.test(pathname));

//   if (!hasAccess) {
//     const defaultRoute = DEFAULT_ROUTES[userRole as keyof typeof DEFAULT_ROUTES] || "/";
//     return NextResponse.redirect(new URL(defaultRoute, request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/login",
//     "/register",
//     "/admin/:path*",
//     "/agent/:path*",
//     "/profile/:path*"
//   ]
// };
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getCurrentUser } from "./utils/cookiesUser";
import { cookies } from "next/headers";

// 1. Define strict types for user roles
type UserRole = 'customer' | 'admin' | 'deliveryAgent';

interface User {
  role: UserRole;
  // Add other user properties as needed
  // id: string;
  // email: string;
}

// 2. Define route constants with proper typing
const PUBLIC_ROUTES = new Set<string>([
  "/login",
  "/register",
  "/",
  "/api/login",
  "/api/register"
]);

const AUTH_ROUTES = new Set<string>(["/login", "/register"]);

// 3. Strictly typed role-based routes
const ROLE_BASED_ROUTES: Record<UserRole, string[]> = {
  customer: [
    "/dashboard/customer",
    "/profile"
  ],
  admin: [
    "/dashboard/admin",
    "/admin",
    "/profile"
  ],
  deliveryAgent: [
    "/dashboard/agent",
    "/agent",
    "/profile"
  ]
};

// 4. Default routes with type safety
const DEFAULT_ROUTES: Record<UserRole, string> = {
  customer: "/dashboard/customer/my-parcels",
  admin: "/dashboard/admin",
  deliveryAgent: "/dashboard/agent"
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(`[Middleware] Processing path: ${pathname}`);

  // 5. Handle public routes
  if (PUBLIC_ROUTES.has(pathname)) {
    if (AUTH_ROUTES.has(pathname)) {
      try {
        
        const user = await getCurrentUser();
        console.log({user});
        if (user && isUserRole(user.role)) {
          const defaultRoute = DEFAULT_ROUTES[user.role];
          console.log(`Redirecting authenticated user to ${defaultRoute}`);
          return NextResponse.redirect(new URL(defaultRoute, request.url));
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
    return NextResponse.next();
  }

  // 6. Authentication check
  let user: User | null;
  try {
    const userData = await getCurrentUser();
    console.log({userData});
    if (!userData || !isUserRole(userData.role)) {
      console.log('No valid user found - redirecting to login');
      return NextResponse.redirect(
        new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url)
      );
    }
    user = userData;
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.redirect(
      new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url)
    );
  }

  // 7. Route access check
  const hasAccess = ROLE_BASED_ROUTES[user.role].some(basePath => 
    pathname.startsWith(basePath)
  );

  if (!hasAccess) {
    console.log(`Access denied for ${user.role} to ${pathname}`);
    const defaultRoute = DEFAULT_ROUTES[user.role];
    return NextResponse.redirect(new URL(defaultRoute, request.url));
  }

  return NextResponse.next();
}

// 8. Type guard for user roles
function isUserRole(role: string): role is UserRole {
  return role in DEFAULT_ROUTES;
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