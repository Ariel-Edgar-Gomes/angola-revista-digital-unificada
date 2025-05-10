
import React from 'react';
import { TableCell, TableRow } from '@/components/ui/table';

const UserEmptyState: React.FC = () => {
  return (
    <TableRow>
      <TableCell colSpan={5} className="text-center">
        Nenhum usuário encontrado
      </TableCell>
    </TableRow>
  );
};

export default UserEmptyState;
