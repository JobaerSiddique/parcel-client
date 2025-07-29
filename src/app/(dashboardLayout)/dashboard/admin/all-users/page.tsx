'use client'
import { getAllUser } from '@/src/services/admin';
import { Button } from '@heroui/button';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from '@heroui/react';
import { useEffect, useState } from 'react';




type UserData = {
  _id: string;
  name: string;
  email: string;
  role: string;
  phone: string;
  isVerified: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

type ApiResponse = {
  success: boolean;
  message: string;
  data: {
    meta: {
      page: number;
      limit: number;
      total: number;
      totalPage: number;
    };
    result: UserData[];
  };
};

export default function AllUserPage() {
  const [loading, setLoading] = useState<boolean>(true);
      const [error, setError] = useState<string | null>(null);
    useEffect(() => {
         
          
          const fetchData = async () => {
              try {
                  setLoading(true);
                  const data = await getAllUser();
                  console.log(data);
                  
                  
              } catch (error) {
                  console.error("Error fetching parcels:", error);
                  setError(error instanceof Error ? error.message : "Failed to fetch data");
              } finally {
                  setLoading(false);
              }
          };
          
          fetchData();
  
          
      }, []);

  

 
  const columns = [
    { name: 'NAME', uid: 'name' },
    { name: 'EMAIL', uid: 'email' },
    { name: 'ROLE', uid: 'role' },
    { name: 'PHONE', uid: 'phone' },
    { name: 'STATUS', uid: 'status' },
    { name: 'ACTIONS', uid: 'actions' },
  ];

//   const renderCell = (user: UserData, columnKey: React.Key) => {
//     switch (columnKey) {
//       case 'name':
//         return user.name;
//       case 'email':
//         return user.email;
//       case 'role':
//         return (
//           <span className="capitalize px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
//             {user.role}
//           </span>
//         );
//       case 'phone':
//         return user.phone;
//       case 'status':
//         return user.isDeleted ? (
//           <span className="text-red-500 font-medium">Deleted</span>
//         ) : (
//           <span className="text-green-500 font-medium">Active</span>
//         );
//       case 'actions':
//         return user.isDeleted ? (
//           <span className="text-gray-400">Deleted</span>
//         ) : (
//           <div className="flex space-x-2">
//             <Button size="sm" color="danger" variant="flat">
//               Delete
//             </Button>
//             <Button size="sm" color="primary" variant="flat">
//               Edit
//             </Button>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

  return (
    // <div className="container mx-auto px-4 py-8">
    //   <div className="flex justify-between items-center mb-8">
    //     <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
    //     <Button color="primary">Add New User</Button>
    //   </div>

    //   <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    //     <Table 
    //       aria-label="User table"
    //       classNames={{
    //         wrapper: "max-h-[600px] overflow-auto",
    //         th: "bg-gray-50 text-gray-600 font-semibold",
    //         td: "py-4",
    //       }}
    //     >
    //       <TableHeader columns={columns}>
    //         {(column) => (
    //           <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
    //             {column.name}
    //           </TableColumn>
    //         )}
    //       </TableHeader>
    //       <TableBody items={users}>
    //         {(user) => (
    //           <TableRow key={user._id}>
    //             {(columnKey) => (
    //               <TableCell>{renderCell(user, columnKey)}</TableCell>
    //             )}
    //           </TableRow>
    //         )}
    //       </TableBody>
    //     </Table>

    //     {pagination.totalPage > 1 && (
    //       <div className="flex justify-between items-center p-4 border-t border-gray-100">
    //         <div className="text-sm text-gray-500">
    //           Showing {users.length} of {pagination.total} users
    //         </div>
    //         <Pagination
    //           total={pagination.totalPage}
    //           initialPage={pagination.page}
    //           onChange={handlePageChange}
    //           showControls
    //           classNames={{
    //             cursor: "bg-blue-500 text-white",
    //           }}
    //         />
    //       </div>
    //     )}
    //   </div>
    // </div>
    <></>
  );
}