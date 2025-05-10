
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface RoleHeaderProps {
  onCreateRole: () => void;
}

const RoleHeader: React.FC<RoleHeaderProps> = ({ onCreateRole }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <h3 className="text-lg font-medium">Funções disponíveis</h3>
        <p className="text-sm text-muted-foreground">
          Gerencie as funções de usuário no sistema
        </p>
      </div>
      <Button onClick={onCreateRole}>
        <Plus className="mr-2 h-4 w-4" />
        Nova Função
      </Button>
    </div>
  );
};

export default RoleHeader;
