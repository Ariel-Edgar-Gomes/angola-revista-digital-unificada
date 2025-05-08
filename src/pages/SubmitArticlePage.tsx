
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getAllCategories } from '../data/mockData';
import { toast } from '@/components/ui/use-toast';

const SubmitArticlePage = () => {
  const categories = getAllCategories();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Artigo submetido com sucesso",
        description: "Seu artigo foi submetido e será avaliado pela equipe editorial.",
      });
      // Reset form
      e.currentTarget.reset();
    }, 1500);
  };

  return (
    <Layout>
      <div className="metodista-container py-8">
        <h1 className="font-serif text-3xl font-bold mb-3 text-metodista-blue">Submeter Artigo</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Complete o formulário abaixo para submeter o seu artigo científico para avaliação. 
          Nossa equipe editorial analisará a sua submissão e entrará em contato.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-semibold text-metodista-blue">Informações do Autor</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="authorName">Nome Completo *</Label>
                  <Input id="authorName" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="authorEmail">Email *</Label>
                  <Input id="authorEmail" type="email" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="authorInstitution">Instituição *</Label>
                  <Input id="authorInstitution" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="authorPosition">Cargo/Posição *</Label>
                  <Input id="authorPosition" required />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-semibold text-metodista-blue">Detalhes do Artigo</h2>
              
              <div className="space-y-2">
                <Label htmlFor="articleTitle">Título do Artigo *</Label>
                <Input id="articleTitle" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="articleAbstract">Resumo (max. 500 palavras) *</Label>
                <Textarea id="articleAbstract" rows={5} required />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="articleCategory">Categoria *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="articleKeywords">Palavras-chave (separadas por vírgula) *</Label>
                  <Input id="articleKeywords" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="articleFile">Arquivo do Artigo (PDF, DOC ou DOCX) *</Label>
                <Input id="articleFile" type="file" accept=".pdf,.doc,.docx" required />
                <p className="text-sm text-gray-500">Tamanho máximo: 10MB</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="articleComments">Comentários para os Editores (opcional)</Label>
                <Textarea id="articleComments" rows={3} />
              </div>
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full bg-metodista-blue hover:bg-metodista-blue/90" disabled={isSubmitting}>
                {isSubmitting ? "Submetendo..." : "Submeter Artigo"}
              </Button>
              <p className="text-sm text-gray-500 text-center mt-4">
                Ao submeter este artigo, você concorda com as normas e políticas da revista.
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SubmitArticlePage;
