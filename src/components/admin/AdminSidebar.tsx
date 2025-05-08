
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Database, Users, Settings } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from '@/components/ui/sidebar';

const AdminSidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: FileText, label: 'Artigos', path: '/admin/artigos' },
    { icon: Database, label: 'Categorias', path: '/admin/categorias' },
    { icon: Users, label: 'Usuários', path: '/admin/usuarios' },
    { icon: Settings, label: 'Configurações', path: '/admin/configuracoes' },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-xl font-bold text-primary">Admin UMA</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="py-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild tooltip={item.label}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => 
                    isActive ? "data-[active=true]" : ""
                  }
                >
                  <item.icon className="mr-2" size={20} />
                  <span>{item.label}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="text-xs text-muted-foreground">
          Versão 1.0.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
