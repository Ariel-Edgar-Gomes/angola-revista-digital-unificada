
import React from 'react';
import { 
  TableHead, 
  TableHeader,
  TableRow 
} from '@/components/ui/table';

const UserTableHeader: React.FC = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Usuário</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Função</TableHead>
        <TableHead>Status</TableHead>
        <TableHead className="text-right">Ações</TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default UserTableHeader;
