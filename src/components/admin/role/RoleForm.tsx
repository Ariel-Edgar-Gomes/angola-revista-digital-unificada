
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'O nome deve ter pelo menos 2 caracteres.',
  }),
  description: z.string().min(5, {
    message: 'A descrição deve ter pelo menos 5 caracteres.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface RoleFormProps {
  editingRole: any | null;
  onSubmit: (data: FormValues) => void;
  onCancel: () => void;
}

const RoleForm: React.FC<RoleFormProps> = ({ editingRole, onSubmit, onCancel }) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: editingRole?.name || '',
      description: editingRole?.description || '',
    },
  });

  return (
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
              onClick={onCancel}
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
  );
};

export default RoleForm;
