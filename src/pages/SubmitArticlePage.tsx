
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
import { Checkbox } from '@/components/ui/checkbox';
import { CalendarIcon, FileText, Upload, Check, ArrowRight, User } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const SubmitArticlePage = () => {
  const categories = getAllCategories();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showGuidelines, setShowGuidelines] = useState(false);
  
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
      setCurrentStep(1);
    }, 1500);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <div className="metodista-container py-10 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-metodista-blue">Submeta seu Artigo Científico</h1>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Complete o formulário abaixo para submeter o seu artigo científico para avaliação. 
              Nossa equipe editorial analisará a sua submissão e entrará em contato.
            </p>
            
            {/* Progress Steps */}
            <div className="flex justify-between items-center max-w-md mx-auto mb-8">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 ${currentStep >= 1 ? 'bg-metodista-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
                  1
                </div>
                <span className="text-sm">Autor</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${currentStep >= 2 ? 'bg-metodista-blue' : 'bg-gray-200'}`}></div>
              
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 ${currentStep >= 2 ? 'bg-metodista-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
                  2
                </div>
                <span className="text-sm">Artigo</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${currentStep >= 3 ? 'bg-metodista-blue' : 'bg-gray-200'}`}></div>
              
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 ${currentStep >= 3 ? 'bg-metodista-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
                  3
                </div>
                <span className="text-sm">Revisão</span>
              </div>
            </div>
            
            {/* Guidelines toggle */}
            <Collapsible
              open={showGuidelines}
              onOpenChange={setShowGuidelines}
              className="bg-metodista-light rounded-lg p-4 mb-6 mx-auto max-w-2xl transition-all duration-300"
            >
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-between">
                  <span className="flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    Diretrizes para Publicação
                  </span>
                  <span className="text-xs underline">
                    {showGuidelines ? 'Esconder' : 'Mostrar'}
                  </span>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 text-left text-sm">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>O artigo deve ser original e não publicado anteriormente.</li>
                  <li>O texto deve seguir as normas APA para citações e referências.</li>
                  <li>Artigos devem ter entre 3.000 e 8.000 palavras, incluindo resumo e referências.</li>
                  <li>Inclua um resumo de até 250 palavras em português e inglês.</li>
                  <li>Forneça entre 3 e 6 palavras-chave que identifiquem o conteúdo do artigo.</li>
                  <li>Use fonte Times New Roman, tamanho 12, espaçamento duplo.</li>
                  <li>Imagens e tabelas devem ser enviadas em arquivos separados com alta resolução.</li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Autor Information */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-2 pb-2 border-b border-gray-200 mb-4">
                    <div className="bg-metodista-blue text-white h-8 w-8 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4" />
                    </div>
                    <h2 className="font-serif text-xl font-semibold text-metodista-blue">Informações do Autor</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="authorName">Nome Completo *</Label>
                      <Input id="authorName" required className="border-gray-300 focus:border-metodista-blue" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="authorEmail">Email *</Label>
                      <Input id="authorEmail" type="email" required className="border-gray-300 focus:border-metodista-blue" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="authorInstitution">Instituição *</Label>
                      <Input id="authorInstitution" required className="border-gray-300 focus:border-metodista-blue" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="authorPosition">Cargo/Posição *</Label>
                      <Input id="authorPosition" required className="border-gray-300 focus:border-metodista-blue" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="authorBio">Biografia Resumida (max. 200 palavras) *</Label>
                    <Textarea 
                      id="authorBio" 
                      rows={3} 
                      required 
                      placeholder="Breve descrição da sua formação acadêmica e experiência profissional"
                      className="border-gray-300 focus:border-metodista-blue"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="academicId">ID Acadêmico (ORCID ou outro, se disponível)</Label>
                    <Input id="academicId" className="border-gray-300 focus:border-metodista-blue" />
                    <p className="text-xs text-gray-500">Exemplo: https://orcid.org/0000-0002-1825-0097</p>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-metodista-blue hover:bg-metodista-blue/90 group"
                    >
                      Próximo Passo 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Article Details */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-2 pb-2 border-b border-gray-200 mb-4">
                    <div className="bg-metodista-blue text-white h-8 w-8 rounded-full flex items-center justify-center">
                      <FileText className="h-4 w-4" />
                    </div>
                    <h2 className="font-serif text-xl font-semibold text-metodista-blue">Detalhes do Artigo</h2>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="articleTitle">Título do Artigo *</Label>
                    <Input id="articleTitle" required className="border-gray-300 focus:border-metodista-blue" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="articleAbstract">Resumo (max. 500 palavras) *</Label>
                    <Textarea
                      id="articleAbstract"
                      rows={5}
                      required
                      className="border-gray-300 focus:border-metodista-blue"
                      placeholder="O resumo deve apresentar de forma concisa os objetivos, metodologia, resultados e conclusões do artigo"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="articleCategory">Categoria *</Label>
                      <Select required>
                        <SelectTrigger className="border-gray-300 focus:border-metodista-blue">
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
                      <Input
                        id="articleKeywords"
                        required
                        className="border-gray-300 focus:border-metodista-blue"
                        placeholder="Ex: metodologia, pesquisa, análise"
                      />
                      <p className="text-xs text-gray-500">3-6 palavras-chave</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="articleFile" className="block mb-2">Arquivo do Artigo (PDF, DOC ou DOCX) *</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-metodista-blue transition-colors">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="mb-2 text-sm text-gray-600">
                        Arraste e solte seu arquivo aqui, ou
                      </p>
                      <Button type="button" variant="outline" size="sm" className="mx-auto">
                        Escolher arquivo
                      </Button>
                      <Input id="articleFile" type="file" accept=".pdf,.doc,.docx" required className="hidden" />
                      <p className="text-xs text-gray-500 mt-2">Tamanho máximo: 10MB</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="articleComments">Comentários para os Editores (opcional)</Label>
                    <Textarea
                      id="articleComments"
                      rows={3}
                      className="border-gray-300 focus:border-metodista-blue"
                      placeholder="Informações adicionais que gostaria de compartilhar com os editores"
                    />
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="w-24"
                    >
                      Voltar
                    </Button>
                    <Button 
                      type="button"
                      onClick={nextStep}
                      className="bg-metodista-blue hover:bg-metodista-blue/90 group"
                    >
                      Revisar Submissão
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Review and Submit */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center gap-2 pb-2 border-b border-gray-200 mb-4">
                    <div className="bg-metodista-blue text-white h-8 w-8 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4" />
                    </div>
                    <h2 className="font-serif text-xl font-semibold text-metodista-blue">Revisar e Submeter</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-metodista-light p-4 rounded-lg">
                      <h3 className="font-medium mb-2 text-gray-700">Confirmação de Autoria</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Ao submeter este artigo, você confirma que:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Checkbox id="confirm1" className="mt-1" />
                          <Label htmlFor="confirm1" className="ml-2 text-sm">
                            Este artigo é original e não foi publicado anteriormente em nenhum outro periódico.
                          </Label>
                        </li>
                        <li className="flex items-start">
                          <Checkbox id="confirm2" className="mt-1" />
                          <Label htmlFor="confirm2" className="ml-2 text-sm">
                            Você possui os direitos necessários sobre o conteúdo submetido e está autorizado a publicá-lo.
                          </Label>
                        </li>
                        <li className="flex items-start">
                          <Checkbox id="confirm3" className="mt-1" />
                          <Label htmlFor="confirm3" className="ml-2 text-sm">
                            O artigo segue as normas éticas de pesquisa e publicação acadêmica.
                          </Label>
                        </li>
                        <li className="flex items-start">
                          <Checkbox id="confirm4" className="mt-1" />
                          <Label htmlFor="confirm4" className="ml-2 text-sm">
                            Você concorda com os termos e condições da Revista Digital da Universidade Metodista de Angola.
                          </Label>
                        </li>
                      </ul>
                    </div>
                    
                    <p className="text-sm text-gray-600 italic bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                      Após a submissão, seu artigo será avaliado pela equipe editorial. O processo de avaliação pode levar até 4 semanas.
                      Você receberá atualizações sobre o status da sua submissão via e-mail.
                    </p>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="w-24"
                    >
                      Voltar
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-metodista-gold hover:bg-metodista-gold/90 text-metodista-blue font-medium px-8"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-pulse">Submetendo...</span>
                        </>
                      ) : (
                        <>Submeter Artigo</>
                      )}
                    </Button>
                  </div>
                </div>
              )}
              
            </form>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <p>
              Precisa de ajuda? Entre em contato com a equipe editorial em{' '}
              <a href="mailto:revista@uma.co.ao" className="text-metodista-blue hover:underline">
                revista@uma.co.ao
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SubmitArticlePage;
