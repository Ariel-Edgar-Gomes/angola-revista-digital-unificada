
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
import { FileText, PenLine, Search, Settings, Trash2, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getAllArticles } from '@/data/mockData';
import ArticleForm from '@/components/admin/ArticleForm';
import { useToast } from '@/hooks/use-toast';

const AdminArticles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<any>(null);
  const { toast } = useToast();
  
  const articles = getAllArticles();
  
  const filteredArticles = articles
    .filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.abstract.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleCreateArticle = () => {
    setEditingArticle(null);
    setIsFormOpen(true);
  };

  const handleEditArticle = (article: any) => {
    setEditingArticle({
      ...article,
      category: article.categoryId || '',
    });
    setIsFormOpen(true);
  };

  const handleDeleteArticle = (articleId: string) => {
    // Aqui seria implementada a lógica para excluir o artigo
    toast({
      title: "Artigo excluído",
      description: `O artigo foi excluído com sucesso.`,
    });
  };

  const handleFormSubmit = (data: any) => {
    console.log("Dados do formulário:", data);
    // Aqui seria implementada a lógica para salvar o artigo no backend
    setIsFormOpen(false);
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setEditingArticle(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Artigos</h2>
          <p className="text-muted-foreground">
            Gerencie todos os artigos da Revista Digital UMA
          </p>
        </div>
        <Button onClick={handleCreateArticle}>
          <FileText className="mr-2 h-4 w-4" />
          Novo Artigo
        </Button>
      </div>

      {isFormOpen ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">
              {editingArticle ? 'Editar Artigo' : 'Novo Artigo'}
            </h3>
            <Button variant="ghost" size="sm" onClick={handleFormCancel}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <ArticleForm
            articleId={editingArticle?.id}
            defaultValues={editingArticle}
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
                placeholder="Buscar artigos..."
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
                  <TableHead>Título</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredArticles.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
                      Nenhum artigo encontrado
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredArticles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell className="font-medium">{article.title}</TableCell>
                      <TableCell>{article.category}</TableCell>
                      <TableCell>
                        {new Date(article.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          Publicado
                        </Badge>
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
                            <DropdownMenuItem onClick={() => handleEditArticle(article)}>
                              <PenLine className="mr-2 h-4 w-4" />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              className="text-red-600"
                              onClick={() => handleDeleteArticle(article.id)}
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
              Mostrando <span className="font-medium">{filteredArticles.length}</span> de{" "}
              <span className="font-medium">{articles.length}</span> artigos
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminArticles;
