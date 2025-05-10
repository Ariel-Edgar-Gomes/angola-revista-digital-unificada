
import React from 'react';
import { Button } from '@/components/ui/button';
import { UserPlus, Users } from 'lucide-react';

interface UserHeaderProps {
  onCreateUser: () => void;
  onOpenRoleManagement: () => void;
}

const UserHeader: React.FC<UserHeaderProps> = ({ 
  onCreateUser, 
  onOpenRoleManagement 
}) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Usuários</h2>
        <p className="text-muted-foreground">
          Gerencie os usuários da Revista Digital UMA
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button onClick={onCreateUser}>
          <UserPlus className="mr-2 h-4 w-4" />
          Novo Usuário
        </Button>
        <Button variant="outline" onClick={onOpenRoleManagement}>
          <Users className="mr-2 h-4 w-4" />
          Gerenciar Funções
        </Button>
      </div>
    </div>
  );
};

export default UserHeader;
