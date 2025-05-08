
import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <AdminSidebar />
        <div className="flex flex-1 flex-col">
          <AdminHeader />
          <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </main>
          <footer className="border-t bg-background p-4 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Universidade Metodista de Angola - Painel Administrativo
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
