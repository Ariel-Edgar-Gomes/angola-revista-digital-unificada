
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllCategories } from '@/data/mockData';

// Esquema de validação para artigos
const articleSchema = z.object({
  title: z.string().min(5, {
    message: "O título deve ter pelo menos 5 caracteres.",
  }),
  abstract: z.string().min(20, {
    message: "O resumo deve ter pelo menos 20 caracteres.",
  }),
  content: z.string().min(100, {
    message: "O conteúdo deve ter pelo menos 100 caracteres.",
  }),
  category: z.string({
    required_error: "Por favor selecione uma categoria.",
  }),
  image: z.string().optional(),
  authors: z.string().min(3, {
    message: "Por favor informe os autores.",
  }),
  tags: z.string().optional(),
});

type ArticleFormValues = z.infer<typeof articleSchema>;

interface ArticleFormProps {
  articleId?: string; // Se fornecido, estamos editando um artigo existente
  defaultValues?: Partial<ArticleFormValues>;
  onSubmit: (data: ArticleFormValues) => void;
  onCancel: () => void;
}

const ArticleForm = ({
  articleId,
  defaultValues,
  onSubmit,
  onCancel
}: ArticleFormProps) => {
  const { toast } = useToast();
  const categories = getAllCategories();
  const isEditing = !!articleId;

  const form = useForm<ArticleFormValues>({
    resolver: zodResolver(articleSchema),
    defaultValues: defaultValues || {
      title: "",
      abstract: "",
      content: "",
      category: "",
      image: "",
      authors: "",
      tags: ""
    }
  });

  const handleSubmit = (data: ArticleFormValues) => {
    try {
      onSubmit(data);
      toast({
        title: isEditing ? "Artigo atualizado" : "Artigo criado",
        description: isEditing 
          ? "O artigo foi atualizado com sucesso." 
          : "O artigo foi criado com sucesso.",
      });
    } catch (error) {
      console.error("Erro ao salvar artigo:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao salvar o artigo.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{isEditing ? "Editar Artigo" : "Novo Artigo"}</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input placeholder="Título do artigo" {...field} />
                  </FormControl>
                  <FormDescription>
                    Um título descritivo para o artigo.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    A categoria principal do artigo.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="authors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Autores</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome dos autores" {...field} />
                  </FormControl>
                  <FormDescription>
                    Nomes dos autores separados por vírgula.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="abstract"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resumo</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Resumo do artigo"
                      className="min-h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Conteúdo</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Conteúdo completo do artigo"
                      className="min-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL da Imagem</FormLabel>
                  <FormControl>
                    <Input placeholder="https://exemplo.com/imagem.jpg" {...field} />
                  </FormControl>
                  <FormDescription>
                    URL da imagem de destaque do artigo.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="educação, pesquisa, metodista" {...field} />
                  </FormControl>
                  <FormDescription>
                    Tags separadas por vírgula.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancelar
            </Button>
            <Button type="submit">
              {isEditing ? "Atualizar Artigo" : "Criar Artigo"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default ArticleForm;
