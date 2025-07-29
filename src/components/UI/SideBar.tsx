// // "use client";
// // import { useUser } from '@/src/context/userProvider';
// // import {
// //   Drawer,
// //   DrawerContent,
// //   DrawerHeader,
// //   DrawerBody,
// //   DrawerFooter,
// //   Button,
// //   useDisclosure,
// //   Link,
// //   Divider
// // } from '@heroui/react';
// // import NextLink from 'next/link';
// // import { FiMenu, FiX, FiUsers, FiPackage, FiTruck, FiClock, FiLogOut } from 'react-icons/fi';
// // import { useState, useEffect } from 'react';

// // const adminLinks = [
// //   { name: 'All Users', href: '/dashboard/admin/all-users', icon: <FiUsers /> },
// //   { name: 'All Parcels', href: '/dashboard/admin/all-parcels', icon: <FiPackage /> },
// // ];

// // const deliveryLinks = [
// //   { name: 'My Deliveries', href: '/dashboard/agent/delivery', icon: <FiTruck /> },
// // ];

// // const customerLinks = [
// //   { name: 'My Parcels', href: '/dashboard/customer/my-parcels', icon: <FiPackage /> },
// //   { name: 'Order History', href: '/dashboard/customer/history', icon: <FiClock /> },
// // ];

// // export default function sideBar() {
// //   const { user } = useUser();
// //   const { isOpen, onOpen, onClose } = useDisclosure();
// //   const [isDesktop, setIsDesktop] = useState(false);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsDesktop(window.innerWidth >= 768);
// //     };
    
// //     handleResize(); // Initial check
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   const links = 
// //     user?.role === 'admin' ? adminLinks :
// //     user?.role === 'deliveryagent' ? deliveryLinks :
// //     customerLinks;

// //   // Desktop Sidebar (persistent)
// //   if (isDesktop) {
// //     return (
// //       <aside className="hidden md:flex md:w-64 h-full bg-white border-r fixed">
// //         <div className="w-full p-4 flex flex-col h-full">
// //           <div className="p-4 border-b">
// //             <h1 className="text-xl font-bold flex items-center gap-2">
// //               <FiPackage className="text-primary" />
// //               Excel Parcel
// //             </h1>
// //             <p className="text-sm text-gray-500 capitalize mt-1">
// //               {user?.role} Dashboard
// //             </p>
// //           </div>
          
// //           <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
// //             {links.map((link) => (
// //               <NextLink
// //                 key={link.href}
// //                 href={link.href}
// //                 className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
// //               >
// //                 <span className="text-lg">{link.icon}</span>
// //                 <span>{link.name}</span>
// //               </NextLink>
// //             ))}
// //           </nav>
          
// //           <div className="p-4 border-t">
// //             <NextLink
// //               href="/logout"
// //               className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
// //             >
// //               <FiLogOut className="text-lg" />
// //               <span>Logout</span>
// //             </NextLink>
// //           </div>
// //         </div>
// //       </aside>
// //     );
// //   }

// //   // Mobile Drawer (toggleable)
// //   return (
// //     <>
// //       {/* Mobile Hamburger Button */}
// //       <Button 
// //         variant="ghost" 
// //         onClick={onOpen}
// //         className="md:hidden fixed top-4 left-4 z-50"
// //         aria-label="Open menu"
// //       >
// //         <FiMenu className="text-xl" />
// //       </Button>

// //       {/* Mobile Drawer */}
// //       <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
// //         <DrawerContent className="max-w-xs">
// //           <DrawerHeader className="flex justify-between items-center p-4 border-b">
// //             <div>
// //               <h2 className="text-xl font-bold flex items-center gap-2">
// //                 <FiPackage className="text-primary" />
// //                 Excel Parcel
// //               </h2>
// //               <p className="text-sm text-gray-500 capitalize">
// //                 {user?.role} Dashboard
// //               </p>
// //             </div>
// //             <Button variant="ghost" onClick={onClose} aria-label="Close menu">
// //               <FiX />
// //             </Button>
// //           </DrawerHeader>
          
// //           <DrawerBody className="p-4">
// //             <nav className="space-y-2">
// //               {links.map((link) => (
// //                 <Link
// //                   key={link.href}
// //                   as={NextLink}
// //                   href={link.href}
// //                   className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
// //                   onClick={onClose}
// //                 >
// //                   <span className="text-lg">{link.icon}</span>
// //                   <span>{link.name}</span>
// //                 </Link>
// //               ))}
// //             </nav>
// //           </DrawerBody>
          
// //           <DrawerFooter className="p-4 border-t">
// //             <Link
// //               as={NextLink}
// //               href="/logout"
// //               className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
// //             >
// //               <FiLogOut className="text-lg" />
// //               <span>Logout</span>
// //             </Link>
// //           </DrawerFooter>
// //         </DrawerContent>
// //       </Drawer>
// //     </>
// //   );
// // }
// // Sidebar component
// "use client";
// import { useUser } from '@/src/context/userProvider';
// import {
//   Drawer,
//   DrawerContent,
//   DrawerHeader,
//   DrawerBody,
//   DrawerFooter,
//   Button,
//   useDisclosure,
//   Link,
// } from '@heroui/react';
// import NextLink from 'next/link';
// import { FiMenu, FiX, FiUsers, FiPackage, FiTruck, FiClock, FiLogOut, FiHome } from 'react-icons/fi';
// import { useState, useEffect } from 'react';

// import { useRouter } from 'next/navigation';

// const adminLinks = [
//   { name: 'All Users', href: '/dashboard/admin/all-users', icon: <FiUsers /> },
//   { name: 'All Parcels', href: '/dashboard/admin/all-parcels', icon: <FiPackage /> },
// ];

// const deliveryLinks = [
//   { name: 'My Deliveries', href: '/dashboard/agent/delivery', icon: <FiTruck /> },
// ];

// const customerLinks = [
//   { name: 'Book-Parcel', href: '/dashboard/customer/book-parcel', icon: <FiClock /> },
//   { name: 'My Parcels', href: '/dashboard/customer/my-parcels', icon: <FiPackage /> },
//   { name: 'Order History', href: '/dashboard/customer/history', icon: <FiClock /> },
  
// ];

// export default function Sidebar() {
//   const { user, setIsLoading } = useUser();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [isDesktop, setIsDesktop] = useState(false);
//   const router = useRouter();
 
//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 768);
//       if (window.innerWidth >= 768) onClose(); // Close drawer when resizing to desktop
//     };
    
//     handleResize(); // Initial check
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [onClose]);

//   const links = [
//     { name: 'Dashboard', href: '/dashboard', icon: <FiHome /> },
//     ...(user?.role === 'admin' ? adminLinks :
//       user?.role === 'deliveryAgent' ? deliveryLinks :
//       customerLinks)
//   ];

 
  
//   return (
//     <>
//       {/* Desktop Sidebar (persistent) */}
//       <aside className="hidden md:flex md:w-64 h-full bg-green-500 dark:bg-gray-800 border-r dark:border-gray-700 fixed">
//         <div className="w-full p-4 flex flex-col h-full">
//           <div className="p-4 border-b dark:border-gray-700">
//             <h1 className="text-xl font-bold flex items-center gap-2 dark:text-white">
//               <FiPackage className="text-primary" />
//               Excel Parcel
//             </h1>
//             <p className="text-sm  capitalize mt-1">
//               {user?.role} Dashboard
//             </p>
//           </div>
          
//           <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
//             {links.map((link) => (
//               <NextLink
//                 key={link.href}
//                 href={link.href}
//                 className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
//               >
//                 <span className="text-lg">{link.icon}</span>
//                 <span>{link.name}</span>
//               </NextLink>
            
//             ))}
//           </nav>
          
//           {/* <div className="p-4 border-t dark:border-gray-700">
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-3 w-full px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
//             >
//               <FiLogOut className="text-lg" />
//               <span>Logout</span>
//             </button>
//           </div> */}
//         </div>
//       </aside>

//       {/* Mobile Hamburger Button */}
//       <Button 
//         variant="ghost" 
//         onClick={onOpen}
//         className="md:hidden fixed top-4 left-4 z-50"
//         aria-label="Open menu"
//       >
//         <FiMenu className="text-xl" />
//       </Button>

//       {/* Mobile Drawer */}
//       <Drawer placement="right" isOpen={isOpen} onClose={onClose} size="xs">
//         <DrawerContent className="max-w-xs bg-cyan-500 dark:bg-gray-800">
//           <DrawerHeader className="flex justify-between items-center p-4 border-b dark:border-gray-700">
//             <div>
//               <h2 className="text-xl font-bold flex items-center gap-2 dark:text-white">
//                 <FiPackage className="text-primary" />
//                 Excel Parcel
//               </h2>
//               <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
//                 {user?.role} Dashboard
//               </p>
//             </div>
//             <Button variant="ghost" onClick={onClose} aria-label="Close menu">
//               <FiX className="dark:text-white" />
//             </Button>
//           </DrawerHeader>
          
//           <DrawerBody className="p-4 overflow-y-auto">
//             <nav className="space-y-2">
//               {links.map((link) => (
//                 <Link
//                   key={link.href}
//                   as={NextLink}
//                   href={link.href}
//                   className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
//                   onClick={onClose}
//                 >
//                   <span className="text-lg">{link.icon}</span>
//                   <span>{link.name}</span>
//                 </Link>
//               ))}
//             </nav>
//           </DrawerBody>
          
//           <DrawerFooter className="p-4 border-t dark:border-gray-700">
//             <Link
//              href='/'
//               color="danger"
              
//               className="w-full flex items-center gap-3"
             
//             >
//               <FiLogOut className="text-lg" /> Home
//             </Link>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// }

"use client";
import { useUser } from '@/src/context/userProvider';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  Link,
} from '@heroui/react';
import NextLink from 'next/link';
import { FiMenu, FiX, FiUsers, FiPackage, FiTruck, FiClock, FiLogOut, FiHome } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { logout } from '@/src/services/auth';

const adminLinks = [
  { name: 'All Users', href: '/dashboard/admin/all-users', icon: <FiUsers /> },
  { name: 'All Parcels', href: '/dashboard/admin/all-parcels', icon: <FiPackage /> },
];

const deliveryLinks = [
  { name: 'My Deliveries', href: '/dashboard/agent/delivery', icon: <FiTruck /> },
];

const customerLinks = [
  { name: 'Book-Parcel', href: '/dashboard/customer/book-parcel', icon: <FiClock /> },
  { name: 'My Parcels', href: '/dashboard/customer/my-parcels', icon: <FiPackage /> },
  { name: 'Order History', href: '/dashboard/customer/history', icon: <FiClock /> },
];

export default function Sidebar() {
  const { user, setIsLoading } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
      if (window.innerWidth >= 768) onClose();
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [onClose]);

  const links = [
    { name: 'Dashboard', href: '/dashboard', icon: <FiHome /> },
    ...(user?.role === 'admin' ? adminLinks :
      user?.role === 'deliveryAgent' ? deliveryLinks :
      customerLinks)
  ];

  const handleLogout = async () => {
    try {
      await logout();
      setIsLoading(true);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 h-full bg-green-500 dark:bg-gray-800 border-r dark:border-gray-700 fixed">
        <div className="w-full p-4 flex flex-col h-full">
          <div className="p-4 border-b dark:border-gray-700">
            <h1 className="text-xl font-bold flex items-center gap-2 dark:text-white">
              <FiPackage className="text-primary" />
              Excel Parcel
            </h1>
            <p className="text-sm capitalize mt-1">
              {user?.role} Dashboard
            </p>
          </div>
          
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {links.map((link) => (
              <NextLink
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.name}</span>
              </NextLink>
            ))}
          </nav>
          
          <div className="p-4 space-y-2 border-t dark:border-gray-700">
            <NextLink
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-gray-200"
            >
              <FiHome className="text-lg" />
              <span>Home</span>
            </NextLink>
            
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <FiLogOut className="text-lg" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Hamburger Button */}
      <Button 
        variant="ghost" 
        onClick={onOpen}
        className="md:hidden fixed top-4 left-4 z-50"
        aria-label="Open menu"
      >
        <FiMenu className="text-xl" />
      </Button>

      {/* Mobile Drawer */}
      <Drawer placement="right" isOpen={isOpen} onClose={onClose} size="xs">
        <DrawerContent className="max-w-xs bg-cyan-500 dark:bg-gray-800">
          <DrawerHeader className="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2 dark:text-white">
                <FiPackage className="text-primary" />
                Excel Parcel
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                {user?.role} Dashboard
              </p>
            </div>
            <Button variant="ghost" onClick={onClose} aria-label="Close menu">
              <FiX className="dark:text-white" />
            </Button>
          </DrawerHeader>
          
          <DrawerBody className="p-4 overflow-y-auto">
            <nav className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  as={NextLink}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-gray-200"
                  onClick={onClose}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </DrawerBody>
          
          <DrawerFooter className="p-4 space-y-2 border-t dark:border-gray-700">
            <Link
              as={NextLink}
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-gray-200"
              onClick={onClose}
            >
              <FiHome className="text-lg" />
              <span>Home</span>
            </Link>
            
            <button
              onClick={() => {
                handleLogout();
                onClose();
              }}
              className="flex items-center gap-3 w-full px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <FiLogOut className="text-lg" />
              <span>Logout</span>
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}