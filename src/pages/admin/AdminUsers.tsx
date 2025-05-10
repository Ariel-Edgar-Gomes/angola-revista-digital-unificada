
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import UserHeader from '@/components/admin/UserHeader';
import UserList from '@/components/admin/UserList';
import UserForm, { UserFormValues } from '@/components/admin/UserForm';
import RoleManagement from '@/components/admin/RoleManagement';

// Dados fictícios de usuários
const mockUsers = [
  { id: 1, name: 'Ana Silva', email: 'ana.silva@uma.ao', role: 'Admin', status: 'active' },
  { id: 2, name: 'João Pereira', email: 'joao.pereira@uma.ao', role: 'Editor', status: 'active' },
  { id: 3, name: 'Maria Santos', email: 'maria.santos@uma.ao', role: 'Escritor', status: 'active' },
  { id: 4, name: 'Pedro Costa', email: 'pedro.costa@uma.ao', role: 'Editor', status: 'inactive' },
  { id: 5, name: 'Carla Mendes', email: 'carla.mendes@uma.ao', role: 'Escritor', status: 'active' },
  { id: 6, name: 'António Neves', email: 'antonio.neves@uma.ao', role: 'Editor', status: 'active' },
  { id: 7, name: 'Sofia Lopes', email: 'sofia.lopes@uma.ao', role: 'Escritor', status: 'inactive' },
  { id: 8, name: 'Miguel Castro', email: 'miguel.castro@uma.ao', role: 'Escritor', status: 'active' },
];

const AdminUsers = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [users, setUsers] = useState(mockUsers);
  const [isRoleManagementOpen, setIsRoleManagementOpen] = useState(false);
  const { toast } = useToast();
  
  const handleCreateUser = () => {
    setEditingUser(null);
    setIsFormOpen(true);
  };

  const handleEditUser = (user: any) => {
    setEditingUser(user);
    setIsFormOpen(true);
  };

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
    
    toast({
      title: "Usuário excluído",
      description: `O usuário foi removido com sucesso.`,
    });
  };

  const handleFormSubmit = (data: UserFormValues) => {
    if (editingUser) {
      // Atualizar usuário existente
      const updatedUsers = users.map(user => 
        user.id === editingUser.id ? { ...user, ...data } : user
      );
      setUsers(updatedUsers);
      
      toast({
        title: "Usuário atualizado",
        description: `O usuário ${data.name} foi atualizado com sucesso.`,
      });
    } else {
      // Criar novo usuário
      const newUser = {
        id: users.length + 1,
        name: data.name,
        email: data.email,
        role: data.role,
        status: data.status,
      };
      setUsers([...users, newUser]);
      
      toast({
        title: "Usuário criado",
        description: `O usuário ${data.name} foi criado com sucesso.`,
      });
    }
    
    setIsFormOpen(false);
    setEditingUser(null);
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setEditingUser(null);
  };

  const handleOpenRoleManagement = () => {
    setIsRoleManagementOpen(true);
  };

  return (
    <div className="space-y-6">
      <UserHeader 
        onCreateUser={handleCreateUser}
        onOpenRoleManagement={handleOpenRoleManagement}
      />

      {isFormOpen ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">
              {editingUser ? 'Editar Usuário' : 'Novo Usuário'}
            </h3>
            <Button variant="ghost" size="sm" onClick={handleFormCancel}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <UserForm
            userId={editingUser?.id}
            defaultValues={editingUser}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        </div>
      ) : (
        <UserList 
          users={users}
          onEditUser={handleEditUser}
          onDeleteUser={handleDeleteUser}
        />
      )}

      <RoleManagement 
        isOpen={isRoleManagementOpen} 
        onClose={() => setIsRoleManagementOpen(false)} 
      />
    </div>
  );
};

export default AdminUsers;
