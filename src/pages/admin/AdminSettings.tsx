
import React from 'react';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

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

const AdminSettings = () => {
  // Formulário para configurações gerais
  const generalForm = useForm<z.infer<typeof generalFormSchema>>({
    resolver: zodResolver(generalFormSchema),
    defaultValues: {
      siteName: "Revista Digital UMA",
      siteDescription: "Revista Digital da Universidade Metodista de Angola",
      contactEmail: "revista@uma.ao",
      articlesPerPage: 10,
      enableComments: true,
    },
  });

  const onSubmitGeneral = (data: z.infer<typeof generalFormSchema>) => {
    console.log("Configurações gerais salvas:", data);
    // Aqui seria a lógica para salvar as configurações no backend
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Configurações</h2>
        <p className="text-muted-foreground">
          Gerencie as configurações da Revista Digital UMA
        </p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">Geral</TabsTrigger>
          <TabsTrigger value="appearance">Aparência</TabsTrigger>
          <TabsTrigger value="advanced">Avançado</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4 pt-4">
          <Form {...generalForm}>
            <form onSubmit={generalForm.handleSubmit(onSubmitGeneral)} className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações Gerais</CardTitle>
                  <CardDescription>
                    Configure as opções básicas da sua Revista Digital
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={generalForm.control}
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
                    control={generalForm.control}
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
                    control={generalForm.control}
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
                      control={generalForm.control}
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
                      control={generalForm.control}
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
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Aparência</CardTitle>
              <CardDescription>
                Personalize a aparência da sua Revista Digital
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Logo do Site</label>
                <div className="mt-1 flex items-center">
                  <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <Button variant="outline" size="sm" className="ml-4">
                    Alterar
                  </Button>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tamanho recomendado: 200x200 pixels
                </p>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">Esquema de Cores</label>
                <div className="mt-1 grid grid-cols-3 gap-3">
                  <div className="flex items-center">
                    <input
                      id="color-default"
                      name="color-scheme"
                      type="radio"
                      defaultChecked
                      className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="color-default" className="ml-3 block text-sm font-medium">
                      Padrão
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="color-dark"
                      name="color-scheme"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="color-dark" className="ml-3 block text-sm font-medium">
                      Escuro
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="color-custom"
                      name="color-scheme"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="color-custom" className="ml-3 block text-sm font-medium">
                      Personalizado
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salvar Aparência</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações Avançadas</CardTitle>
              <CardDescription>
                Opções avançadas para administradores
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">Modo de Manutenção</p>
                  <p className="text-sm text-muted-foreground">
                    Coloque o site em modo de manutenção para realizar atualizações
                  </p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">Cache do Site</p>
                  <p className="text-sm text-muted-foreground">
                    Habilitar cache para melhorar o desempenho
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">Backup Automático</p>
                  <p className="text-sm text-muted-foreground">
                    Criar backups automáticos do conteúdo do site
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">Exportar Dados</label>
                <Button variant="outline" className="w-full">Exportar Todos os Dados</Button>
                <p className="text-sm text-muted-foreground">
                  Exporta todos os dados do site em formato JSON
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salvar Configurações Avançadas</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
