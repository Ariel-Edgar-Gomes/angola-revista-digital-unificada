
import React from 'react';
import { 
  Table, 
  TableBody
} from '@/components/ui/table';
import UserTableHeader from './UserTableHeader';
import UserTableRow from './UserTableRow';
import UserEmptyState from './UserEmptyState';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

interface UserTableProps {
  users: User[];
  onEditUser: (user: User) => void;
  onDeleteUser: (userId: number) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onEditUser, onDeleteUser }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <UserTableHeader />
        <TableBody>
          {users.length === 0 ? (
            <UserEmptyState />
          ) : (
            users.map((user) => (
              <UserTableRow
                key={user.id}
                user={user}
                onEditUser={onEditUser}
                onDeleteUser={onDeleteUser}
              />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
