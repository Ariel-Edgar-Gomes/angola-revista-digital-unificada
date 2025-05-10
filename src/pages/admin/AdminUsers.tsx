
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PenLine, Search, Settings, Trash2, UserPlus, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import UserForm, { UserFormValues } from '@/components/admin/UserForm';
import { useToast } from '@/hooks/use-toast';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [users, setUsers] = useState(mockUsers);
  const { toast } = useToast();
  
  const filteredUsers = users
    .filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleCreateUser = () => {
    setEditingUser(null);
    setIsFormOpen(true);
  };

  const handleEditUser = (user: any) => {
    setEditingUser(user);
    setIsFormOpen(true);
  };

  const handleDeleteUser = (userId: number) => {
    // Em uma aplicação real, isso enviaria uma requisição para excluir o usuário
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
        ...data,
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

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Usuários</h2>
          <p className="text-muted-foreground">
            Gerencie os usuários da Revista Digital UMA
          </p>
        </div>
        <Button onClick={handleCreateUser}>
          <UserPlus className="mr-2 h-4 w-4" />
          Novo Usuário
        </Button>
      </div>

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

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Usuário</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Função</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
                      Nenhum usuário encontrado
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} alt={user.name} />
                            <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div className="font-medium">{user.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        {user.status === 'active' ? (
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            Ativo
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-red-50 text-red-700">
                            Inativo
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Settings className="h-4 w-4" />
                              <span className="sr-only">Abrir menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Ações</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleEditUser(user)}>
                              <PenLine className="mr-2 h-4 w-4" />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              className="text-red-600"
                              onClick={() => handleDeleteUser(user.id)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Excluir
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="text-sm text-muted-foreground">
              Mostrando <span className="font-medium">{filteredUsers.length}</span> de{" "}
              <span className="font-medium">{users.length}</span> usuários
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminUsers;
