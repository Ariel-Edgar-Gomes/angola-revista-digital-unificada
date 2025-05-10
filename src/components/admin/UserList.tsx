
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Settings, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UserTable from './UserTable';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

interface UserListProps {
  users: User[];
  onEditUser: (user: User) => void;
  onDeleteUser: (userId: number) => void;
}

const UserList: React.FC<UserListProps> = ({ 
  users, 
  onEditUser, 
  onDeleteUser 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredUsers = users
    .filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar usuários..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      <UserTable 
        users={filteredUsers}
        onEditUser={onEditUser}
        onDeleteUser={onDeleteUser}
      />

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-sm text-muted-foreground">
          Mostrando <span className="font-medium">{filteredUsers.length}</span> de{" "}
          <span className="font-medium">{users.length}</span> usuários
        </div>
      </div>
    </>
  );
};

export default UserList;
