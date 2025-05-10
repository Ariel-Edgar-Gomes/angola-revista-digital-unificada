
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// Esquema de validação para as configurações gerais
const generalFormSchema = z.object({
  siteName: z.string().min(2, {
    message: "O nome do site deve ter pelo menos 2 caracteres.",
  }),
  siteDescription: z.string().min(10, {
    message: "A descrição do site deve ter pelo menos 10 caracteres.",
  }),
  contactEmail: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  articlesPerPage: z.number().int().positive().min(1).max(50),
  enableComments: z.boolean().default(true),
});

export type GeneralFormValues = z.infer<typeof generalFormSchema>;

const GeneralSettingsForm = () => {
  const { toast } = useToast();

  // Formulário para configurações gerais
  const form = useForm<GeneralFormValues>({
    resolver: zodResolver(generalFormSchema),
    defaultValues: {
      siteName: "Revista Digital UMA",
      siteDescription: "Revista Digital da Universidade Metodista de Angola",
      contactEmail: "revista@uma.ao",
      articlesPerPage: 10,
      enableComments: true,
    },
  });

  const onSubmit = (data: GeneralFormValues) => {
    console.log("Configurações gerais salvas:", data);
    // Aqui seria a lógica para salvar as configurações no backend
    toast({
      title: "Configurações salvas",
      description: "Suas alterações foram salvas com sucesso."
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Configurações Gerais</CardTitle>
            <CardDescription>
              Configure as opções básicas da sua Revista Digital
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="siteName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do Site</FormLabel>
                  <FormControl>
                    <Input placeholder="Revista Digital UMA" {...field} />
                  </FormControl>
                  <FormDescription>
                    Este é o nome que será exibido no site.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="siteDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição do Site</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Uma breve descrição da revista digital..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Essa descrição aparecerá em mecanismos de busca e metadados.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email de Contato</FormLabel>
                  <FormControl>
                    <Input placeholder="contato@uma.ao" {...field} />
                  </FormControl>
                  <FormDescription>
                    Email para receber mensagens de contato.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Separator />
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="articlesPerPage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Artigos por Página</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1"
                        max="50"
                        placeholder="10"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormDescription>
                      Número de artigos exibidos por página.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="enableComments"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between space-x-2 rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Habilitar Comentários</FormLabel>
                      <FormDescription>
                        Permitir que os leitores comentem nos artigos.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Salvar Alterações</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default GeneralSettingsForm;
