// "use client"
// import {
//   Navbar as HeroUINavbar,
//   NavbarContent,
//   NavbarMenu,
//   NavbarMenuToggle,
//   NavbarBrand,
//   NavbarItem,
//   NavbarMenuItem,
// } from "@heroui/navbar";
// import { Button } from "@heroui/button";
// import { Link } from "@heroui/link";
// import { link as linkStyles } from "@heroui/theme";
// import NextLink from "next/link";
// import clsx from "clsx";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// import { siteConfig } from "@/src/config/site";
// import { ThemeSwitch } from "@/src/components/theme-switch";
// import { TwitterIcon, GithubIcon, DiscordIcon, Logo } from "@/src/components/icons";
// import { useUser } from "../context/userProvider";
// import { logout } from "../services/auth";

// export const Navbar = () => {
//   const { user, isLoading, setIsLoading } = useUser();
//   const router = useRouter();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleLogout = async () => {
//     try {
//       await logout();
//       router.refresh();
//       setIsLoading(true);
//       setIsMenuOpen(false);
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="sticky top-0 z-50 w-full">
//         <HeroUINavbar maxWidth="xl" className="border-b">
//           <NavbarContent justify="end"> {/* Changed to justify-between */}
//             <NavbarBrand as="li" className="gap-3 max-w-fit">
//               <div className="flex items-center gap-1">
//                 <Logo />
//                 <p className="font-bold text-inherit">ACME</p>
//               </div>
//             </NavbarBrand>
//             <NavbarMenuToggle className="sm:hidden" /> {/* Added toggle here */}
//           </NavbarContent>
//         </HeroUINavbar>
//       </div>
//     );
//   }

//   return (
//     <div className="sticky top-0 z-50 w-full">
//       <HeroUINavbar 
//         maxWidth="xl" 
//         className="border-b"
//         isMenuOpen={isMenuOpen}
//         onMenuOpenChange={setIsMenuOpen}
//       >
//         <NavbarContent justify="end"> {/* Changed to justify-between */}
//           {/* Left-aligned brand and navigation */}
//           <NavbarContent className="flex-grow" justify="start">
//             <NavbarBrand as="li" className="gap-3 max-w-fit mr-4">
//               <NextLink className="flex items-center gap-1" href="/">
//                 <Logo />
//                 <p className="font-bold text-inherit">ACME</p>
//               </NextLink>
//             </NavbarBrand>
            
//             <ul className="hidden md:flex gap-4">
//               {siteConfig.navItems
//                 .filter(item => !(user && item.label.toLowerCase() === "login"))
//                 .map((item) => (
//                   <NavbarItem key={item.href}>
//                     <NextLink
//                       className={clsx(
//                         linkStyles({ color: "foreground" }),
//                         "data-[active=true]:text-primary data-[active=true]:font-medium",
//                       )}
//                       href={item.href}
//                     >
//                       {item.label}
//                     </NextLink>
//                   </NavbarItem>
//                 ))}
//             </ul>
//           </NavbarContent>

//           {/* Right-aligned mobile menu button and desktop items */}
//           <NavbarContent justify="end">
//             <NavbarMenuToggle className="md:hidden" /> {/* Mobile menu button */}

//             {/* Desktop items (hidden on mobile) */}
//             <div className="hidden md:flex items-center gap-2">
//               <NavbarItem>
//                 <Link isExternal href={siteConfig.links.twitter}>
//                   <TwitterIcon className="text-default-500" />
//                 </Link>
//               </NavbarItem>
//               <NavbarItem>
//                 <Link isExternal href={siteConfig.links.discord}>
//                   <DiscordIcon className="text-default-500" />
//                 </Link>
//               </NavbarItem>
//               <NavbarItem>
//                 <Link isExternal href={siteConfig.links.github}>
//                   <GithubIcon className="text-default-500" />
//                 </Link>
//               </NavbarItem>
//               <NavbarItem>
//                 <ThemeSwitch />
//               </NavbarItem>
//               <NavbarItem>
//                 {user ? (
//                   <Button onClick={handleLogout} color="danger" variant="flat">
//                     Logout
//                   </Button>
//                 ) : (
//                   <Button as={NextLink} href="/login" color="primary" variant="solid">
//                     Login
//                   </Button>
//                 )}
//               </NavbarItem>
//             </div>
//           </NavbarContent>
//         </NavbarContent>

//         {/* Mobile menu content */}
//         <NavbarMenu className="pt-4">
//           <div className="mx-4 mt-2 flex flex-col gap-2">
//             {siteConfig.navMenuItems
//               .filter(item => !(!user && item.label.toLowerCase() === "logout"))
//               .map((item) => (
//                 <NavbarMenuItem key={item.href}>
//                   <NextLink
//                     href={item.href}
//                     className="w-full py-2 px-4 rounded-lg hover:bg-default-100 transition-colors"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.label}
//                   </NextLink>
//                 </NavbarMenuItem>
//               ))}
            
//             <div className="flex gap-4 py-4 px-4">
//               <Link isExternal href={siteConfig.links.twitter}>
//                 <TwitterIcon className="text-default-500" />
//               </Link>
//               <Link isExternal href={siteConfig.links.discord}>
//                 <DiscordIcon className="text-default-500" />
//               </Link>
//               <Link isExternal href={siteConfig.links.github}>
//                 <GithubIcon className="text-default-500" />
//               </Link>
//               <ThemeSwitch />
//             </div>
            
//             {user ? (
//               <Button onClick={handleLogout} color="danger" variant="flat" className="w-full">
//                 Logout
//               </Button>
//             ) : (
//               <Button 
//                 as={NextLink}
//                 href="/login"
//                 color="primary" 
//                 variant="solid"
//                 className="w-full"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Login
//               </Button>
//             )}
//           </div>
//         </NavbarMenu>
//       </HeroUINavbar>
//     </div>
//   );
// };

"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { TwitterIcon, GithubIcon, DiscordIcon, Logo } from "@/src/components/icons";
import { useUser } from "../context/userProvider";
import { logout } from "../services/auth";

export const Navbar = () => {
  const { user, isLoading, setIsLoading } = useUser();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      router.refresh();
      setIsLoading(true);
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Get dashboard link based on user role
  const getDashboardLink = () => {
    if (!user) return null;
    
    switch(user.role) {
      case 'admin':
        return { label: "Dashboard", href: "/dashboard/admin" };
      case 'deliveryagent':
        return { label: "Dashboard", href: "/dashboard/agent" };
      case 'customer':
        return { label: "Dashboard", href: "/dashboard/customer/my-parcels" };
      default:
        return { label: "Dashboard", href: "/dashboard" };
    }
  };

  if (isLoading) {
    return (
      <div className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900">
        <HeroUINavbar maxWidth="xl" className="border-b">
          <NavbarContent justify="end">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
              <div className="flex items-center gap-1">
                <Logo />
                <p className="font-bold text-inherit text-green-600">ACME</p>
              </div>
            </NavbarBrand>
            <NavbarMenuToggle className="sm:hidden" />
          </NavbarContent>
        </HeroUINavbar>
      </div>
    );
  }

  const dashboardLink = getDashboardLink();
  
  // Add dashboard link to nav items when user is logged in
  const navItems = [
    ...siteConfig.navItems,
    ...(dashboardLink ? [dashboardLink] : [])
  ];

  // Add dashboard link to mobile menu items when user is logged in
  const navMenuItems = [
    ...siteConfig.navMenuItems,
    ...(dashboardLink ? [dashboardLink] : [])
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900">
      <HeroUINavbar 
        maxWidth="xl" 
        className="border-b bg-green-50 dark:bg-green-900/20"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent justify="end">
          <NavbarContent className="flex-grow" justify="start">
            <NavbarBrand as="li" className="gap-3 max-w-fit mr-4">
              <NextLink className="flex items-center gap-1" href="/">
                <Logo className="text-green-600" />
                <p className="font-bold text-green-600">ACME</p>
              </NextLink>
            </NavbarBrand>
            
            <ul className="hidden md:flex gap-4">
              {navItems
                .filter(item => !(user && item.label.toLowerCase() === "login"))
                .map((item) => (
                  <NavbarItem key={item.href}>
                    <NextLink
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "data-[active=true]:text-green-600 data-[active=true]:font-medium hover:text-green-600",
                      )}
                      href={item.href}
                    >
                      {item.label}
                    </NextLink>
                  </NavbarItem>
                ))}
            </ul>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarMenuToggle className="md:hidden" />

            <div className="hidden md:flex items-center gap-2">
              <NavbarItem>
                <Link isExternal href={siteConfig.links.twitter}>
                  <TwitterIcon className="text-green-600 hover:text-green-700" />
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link isExternal href={siteConfig.links.discord}>
                  <DiscordIcon className="text-green-600 hover:text-green-700" />
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link isExternal href={siteConfig.links.github}>
                  <GithubIcon className="text-green-600 hover:text-green-700" />
                </Link>
              </NavbarItem>
              <NavbarItem>
                <ThemeSwitch />
              </NavbarItem>
              <NavbarItem>
                {user ? (
                  <Button 
                    onClick={handleLogout} 
                    color="danger" 
                    variant="flat"
                    className="text-green-600 hover:bg-green-100 dark:hover:bg-green-800/30"
                  >
                    Logout
                  </Button>
                ) : (
                  <Button 
                    as={NextLink} 
                    href="/login" 
                    color="primary" 
                    variant="solid"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Login
                  </Button>
                )}
              </NavbarItem>
            </div>
          </NavbarContent>
        </NavbarContent>

        <NavbarMenu className="pt-4 bg-green-50 dark:bg-green-900/20">
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {navMenuItems
              .filter(item => !(!user && item.label.toLowerCase() === "logout"))
              .map((item) => (
                <NavbarMenuItem key={item.href}>
                  <NextLink
                    href={item.href}
                    className="w-full py-2 px-4 rounded-lg hover:bg-green-100 dark:hover:bg-green-800/30 text-green-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NextLink>
                </NavbarMenuItem>
              ))}
            
            <div className="flex gap-4 py-4 px-4">
              <Link isExternal href={siteConfig.links.twitter}>
                <TwitterIcon className="text-green-600 hover:text-green-700" />
              </Link>
              <Link isExternal href={siteConfig.links.discord}>
                <DiscordIcon className="text-green-600 hover:text-green-700" />
              </Link>
              <Link isExternal href={siteConfig.links.github}>
                <GithubIcon className="text-green-600 hover:text-green-700" />
              </Link>
              <ThemeSwitch />
            </div>
            
            {user ? (
              <Button 
                onClick={handleLogout} 
                color="danger" 
                variant="flat" 
                className="w-full text-green-600 hover:bg-green-100 dark:hover:bg-green-800/30"
              >
                Logout
              </Button>
            ) : (
              <Button 
                as={NextLink}
                href="/login"
                color="primary" 
                variant="solid"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Button>
            )}
          </div>
        </NavbarMenu>
      </HeroUINavbar>
    </div>
  );
};