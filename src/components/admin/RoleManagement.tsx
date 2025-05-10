
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import RoleForm from './role/RoleForm';
import RoleList from './role/RoleList';
import RoleHeader from './role/RoleHeader';

// Dados fictícios de funções
const mockRoles = [
  { id: 1, name: 'Admin', description: 'Acesso total ao sistema', permissions: ['read', 'write', 'delete', 'manage'] },
  { id: 2, name: 'Editor', description: 'Pode editar conteúdo', permissions: ['read', 'write'] },
  { id: 3, name: 'Escritor', description: 'Pode criar conteúdo', permissions: ['read', 'write'] },
  { id: 4, name: 'Revisor', description: 'Pode revisar conteúdo', permissions: ['read'] },
];

interface RoleManagementProps {
  isOpen: boolean;
  onClose: () => void;
}

const RoleManagement: React.FC<RoleManagementProps> = ({ isOpen, onClose }) => {
  const [roles, setRoles] = useState(mockRoles);
  const [isRoleFormOpen, setIsRoleFormOpen] = useState(false);
  const [editingRole, setEditingRole] = useState<any>(null);
  const { toast } = useToast();

  const handleCreateRole = () => {
    setEditingRole(null);
    setIsRoleFormOpen(true);
  };

  const handleEditRole = (role: any) => {
    setEditingRole(role);
    setIsRoleFormOpen(true);
  };

  const handleDeleteRole = (roleId: number) => {
    setRoles(roles.filter(role => role.id !== roleId));
    
    toast({
      title: "Função excluída",
      description: "A função foi removida com sucesso.",
    });
  };

  const handleFormSubmit = (data: { name: string; description: string }) => {
    if (editingRole) {
      // Atualizar função existente
      const updatedRoles = roles.map(role => 
        role.id === editingRole.id ? { ...role, ...data } : role
      );
      setRoles(updatedRoles);
      
      toast({
        title: "Função atualizada",
        description: `A função ${data.name} foi atualizada com sucesso.`,
      });
    } else {
      // Criar nova função
      const newRole = {
        id: roles.length + 1,
        name: data.name,
        description: data.description,
        permissions: ['read'],
      };
      setRoles([...roles, newRole]);
      
      toast({
        title: "Função criada",
        description: `A função ${data.name} foi criada com sucesso.`,
      });
    }
    
    setIsRoleFormOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Gerenciamento de Funções</DialogTitle>
          <DialogDescription>
            Configure as funções e permissões dos usuários do sistema.
          </DialogDescription>
        </DialogHeader>

        {isRoleFormOpen ? (
          <RoleForm 
            editingRole={editingRole}
            onSubmit={handleFormSubmit}
            onCancel={() => setIsRoleFormOpen(false)}
          />
        ) : (
          <>
            <RoleHeader onCreateRole={handleCreateRole} />
            <RoleList 
              roles={roles}
              onEditRole={handleEditRole}
              onDeleteRole={handleDeleteRole}
            />
          </>
        )}

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RoleManagement;
