
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PenLine, Plus, Settings, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Dados fictícios de funções
const mockRoles = [
  { id: 1, name: 'Admin', description: 'Acesso total ao sistema', permissions: ['read', 'write', 'delete', 'manage'] },
  { id: 2, name: 'Editor', description: 'Pode editar conteúdo', permissions: ['read', 'write'] },
  { id: 3, name: 'Escritor', description: 'Pode criar conteúdo', permissions: ['read', 'write'] },
  { id: 4, name: 'Revisor', description: 'Pode revisar conteúdo', permissions: ['read'] },
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'O nome deve ter pelo menos 2 caracteres.',
  }),
  description: z.string().min(5, {
    message: 'A descrição deve ter pelo menos 5 caracteres.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface RoleManagementProps {
  isOpen: boolean;
  onClose: () => void;
}

const RoleManagement: React.FC<RoleManagementProps> = ({ isOpen, onClose }) => {
  const [roles, setRoles] = useState(mockRoles);
  const [isRoleFormOpen, setIsRoleFormOpen] = useState(false);
  const [editingRole, setEditingRole] = useState<any>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const handleCreateRole = () => {
    setEditingRole(null);
    form.reset({
      name: '',
      description: '',
    });
    setIsRoleFormOpen(true);
  };

  const handleEditRole = (role: any) => {
    setEditingRole(role);
    form.reset({
      name: role.name,
      description: role.description,
    });
    setIsRoleFormOpen(true);
  };

  const handleDeleteRole = (roleId: number) => {
    setRoles(roles.filter(role => role.id !== roleId));
    
    toast({
      title: "Função excluída",
      description: "A função foi removida com sucesso.",
    });
  };

  const onSubmit = (data: FormValues) => {
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
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">
              {editingRole ? 'Editar Função' : 'Nova Função'}
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome da Função</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Editor" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição</FormLabel>
                      <FormControl>
                        <Input placeholder="Descreva a função" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end space-x-2">
                  <Button 
                    variant="outline" 
                    type="button" 
                    onClick={() => setIsRoleFormOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit">
                    {editingRole ? 'Atualizar' : 'Criar'}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-medium">Funções disponíveis</h3>
                <p className="text-sm text-muted-foreground">
                  Gerencie as funções de usuário no sistema
                </p>
              </div>
              <Button onClick={handleCreateRole}>
                <Plus className="mr-2 h-4 w-4" />
                Nova Função
              </Button>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Permissões</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roles.map((role) => (
                    <TableRow key={role.id}>
                      <TableCell className="font-medium">{role.name}</TableCell>
                      <TableCell>{role.description}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {role.permissions.map((permission, i) => (
                            <Badge 
                              key={i} 
                              variant="outline" 
                              className="bg-blue-50 text-blue-700"
                            >
                              {permission}
                            </Badge>
                          ))}
                        </div>
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
                            <DropdownMenuItem onClick={() => handleEditRole(role)}>
                              <PenLine className="mr-2 h-4 w-4" />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              className="text-red-600"
                              onClick={() => handleDeleteRole(role.id)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Excluir
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
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
