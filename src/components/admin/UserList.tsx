
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Settings, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UserTable from './UserTable';
import UserPagination from './UserPagination';

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Quantidade de usuários por página
  
  const filteredUsers = users
    .filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Calcular número total de páginas
  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / itemsPerPage));
  
  // Garantir que a página atual seja válida
  if (currentPage > totalPages) {
    setCurrentPage(totalPages);
  }
  
  // Obter apenas os usuários da página atual
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar usuários..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Resetar para a primeira página ao buscar
            }}
          />
        </div>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      <UserTable 
        users={paginatedUsers}
        onEditUser={onEditUser}
        onDeleteUser={onDeleteUser}
      />

      <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 py-4">
        <div className="text-sm text-muted-foreground">
          Mostrando <span className="font-medium">{paginatedUsers.length}</span> de{" "}
          <span className="font-medium">{filteredUsers.length}</span> usuários
        </div>
        
        {totalPages > 1 && (
          <UserPagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
};

export default UserList;
