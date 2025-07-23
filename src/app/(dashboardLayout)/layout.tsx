// app/(dashboard)/layout.tsx

import Sidebar from "@/src/components/UI/SideBar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row h-screen ">
      <Sidebar />
      <main className=" flex-1 overflow-auto md:ml-64 ml-10">
        {children}
      </main>
    </div>
  );
}