
import React from 'react';
import Layout from '../components/layout/Layout';
import { Separator } from '@/components/ui/separator';
import { BookOpen, FileText, Users, Award, BookCheck, MessageSquare } from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout>
      {/* Background decorations */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-[#1b1464]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#e53935]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="metodista-container py-10">
        <h1 className="font-serif text-4xl font-bold mb-2 text-[#1b1464] animate-fade-in relative inline-block">
          Sobre a Revista Digital
          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#e53935]/70"></div>
        </h1>
        <p className="text-gray-600 max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Conheça nossa missão, valores e o processo editorial que fazem da nossa revista
          uma referência na publicação científica em Angola.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10 border border-gray-100 animate-fade-in relative overflow-hidden" style={{ animationDelay: "0.2s" }}>
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1b1464]/3 rounded-bl-[200px] -z-0 opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e53935]/3 rounded-tr-[200px] -z-0 opacity-10"></div>
          
          <section className="mb-10 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#1b1464]/10 p-2 rounded-full">
                <BookOpen className="h-5 w-5 text-[#1b1464]" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-[#1b1464]">Missão</h2>
            </div>
            <p className="text-gray-700 leading-relaxed ml-12">
              A Revista Digital da Universidade Metodista de Angola tem como missão disseminar 
              conhecimento científico de alta qualidade produzido por pesquisadores angolanos e 
              internacionais, promovendo o debate acadêmico e contribuindo para o desenvolvimento 
              científico e tecnológico de Angola.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section className="mb-10 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#1b1464]/10 p-2 rounded-full">
                <FileText className="h-5 w-5 text-[#1b1464]" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-[#1b1464]">Foco e Escopo</h2>
            </div>
            
            <p className="text-gray-700 mb-4 ml-12">
              Nossa revista publica artigos originais nas seguintes áreas de conhecimento:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-12">
              <div className="bg-[#1b1464]/5 p-4 rounded-lg hover:bg-[#1b1464]/10 transition-colors">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Ciências Sociais e Humanas</li>
                  <li>Engenharia e Tecnologia</li>
                  <li>Saúde e Ciências Médicas</li>
                  <li>Educação e Pedagogia</li>
                </ul>
              </div>
              
              <div className="bg-[#1b1464]/5 p-4 rounded-lg hover:bg-[#1b1464]/10 transition-colors">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Economia e Administração</li>
                  <li>Direito e Ciências Jurídicas</li>
                  <li>Ciências Ambientais e Sustentabilidade</li>
                  <li>Teologia e Estudos Religiosos</li>
                </ul>
              </div>
            </div>
          </section>
          
          <Separator className="my-8" />
          
          <section className="mb-10 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#1b1464]/10 p-2 rounded-full">
                <BookCheck className="h-5 w-5 text-[#1b1464]" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-[#1b1464]">Processo Editorial</h2>
            </div>
            
            <p className="text-gray-700 mb-6 ml-12">
              Todos os artigos submetidos passam por um rigoroso processo de revisão por pares, 
              garantindo a qualidade e relevância das publicações. Nosso processo editorial segue as seguintes etapas:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-12">
              <div className="bg-white border border-[#1b1464]/10 p-4 rounded-lg shadow-sm hover:border-[#1b1464]/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#1b1464] text-white flex items-center justify-center mb-3">
                  1
                </div>
                <h3 className="font-medium mb-2 text-[#1b1464]">Submissão do manuscrito</h3>
                <p className="text-sm text-gray-600">O autor submete o artigo através da nossa plataforma online.</p>
              </div>
              
              <div className="bg-white border border-[#1b1464]/10 p-4 rounded-lg shadow-sm hover:border-[#1b1464]/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#1b1464] text-white flex items-center justify-center mb-3">
                  2
                </div>
                <h3 className="font-medium mb-2 text-[#1b1464]">Avaliação inicial</h3>
                <p className="text-sm text-gray-600">O editor avalia se o artigo está dentro do escopo da revista.</p>
              </div>
              
              <div className="bg-white border border-[#1b1464]/10 p-4 rounded-lg shadow-sm hover:border-[#1b1464]/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#1b1464] text-white flex items-center justify-center mb-3">
                  3
                </div>
                <h3 className="font-medium mb-2 text-[#1b1464]">Revisão por pares</h3>
                <p className="text-sm text-gray-600">Especialistas na área avaliam o conteúdo científico do trabalho.</p>
              </div>
              
              <div className="bg-white border border-[#1b1464]/10 p-4 rounded-lg shadow-sm hover:border-[#1b1464]/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#1b1464] text-white flex items-center justify-center mb-3">
                  4
                </div>
                <h3 className="font-medium mb-2 text-[#1b1464]">Decisão editorial</h3>
                <p className="text-sm text-gray-600">Com base nas avaliações, o editor toma a decisão final.</p>
              </div>
              
              <div className="bg-white border border-[#1b1464]/10 p-4 rounded-lg shadow-sm hover:border-[#1b1464]/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#1b1464] text-white flex items-center justify-center mb-3">
                  5
                </div>
                <h3 className="font-medium mb-2 text-[#1b1464]">Revisão e edição</h3>
                <p className="text-sm text-gray-600">O manuscrito aceito passa por revisão e edição final.</p>
              </div>
              
              <div className="bg-white border border-[#1b1464]/10 p-4 rounded-lg shadow-sm hover:border-[#1b1464]/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#1b1464] text-white flex items-center justify-center mb-3">
                  6
                </div>
                <h3 className="font-medium mb-2 text-[#1b1464]">Publicação</h3>
                <p className="text-sm text-gray-600">O artigo é publicado online na nossa revista digital.</p>
              </div>
            </div>
          </section>
          
          <Separator className="my-8" />
          
          <section className="mb-10 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#1b1464]/10 p-2 rounded-full">
                <Users className="h-5 w-5 text-[#1b1464]" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-[#1b1464]">Equipe Editorial</h2>
            </div>
            
            <div className="space-y-6 ml-12">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#1b1464] flex items-center gap-2">
                  <div className="h-4 w-1 bg-[#e53935]"></div>
                  Editor-Chefe
                </h3>
                <div className="bg-[#1b1464]/5 p-4 rounded-lg">
                  <p className="text-gray-700">Prof. Dr. Manuel António Fernandes</p>
                  <p className="text-gray-600 text-sm">Universidade Metodista de Angola</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3 text-[#1b1464] flex items-center gap-2">
                  <div className="h-4 w-1 bg-[#e53935]"></div>
                  Editores Associados
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-lg border border-[#1b1464]/10 hover:border-[#1b1464]/20 transition-colors">
                    <p className="font-medium text-[#1b1464]">Profa. Dra. Luísa Mateus</p>
                    <p className="text-gray-600 text-sm">Ciências Sociais e Humanas</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg border border-[#1b1464]/10 hover:border-[#1b1464]/20 transition-colors">
                    <p className="font-medium text-[#1b1464]">Prof. Dr. João Silva</p>
                    <p className="text-gray-600 text-sm">Engenharia e Tecnologia</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg border border-[#1b1464]/10 hover:border-[#1b1464]/20 transition-colors">
                    <p className="font-medium text-[#1b1464]">Profa. Dra. Teresa Santos</p>
                    <p className="text-gray-600 text-sm">Saúde e Ciências Médicas</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg border border-[#1b1464]/10 hover:border-[#1b1464]/20 transition-colors">
                    <p className="font-medium text-[#1b1464]">Prof. Dr. Carlos Mendes</p>
                    <p className="text-gray-600 text-sm">Educação e Pedagogia</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#1b1464] flex items-center gap-2">
                  <div className="h-4 w-1 bg-[#e53935]"></div>
                  Conselho Editorial
                </h3>
                <div className="bg-[#1b1464]/5 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    A Revista Digital conta com um conselho editorial composto por pesquisadores de 
                    diversas instituições nacionais e internacionais.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <Separator className="my-8" />
          
          <section className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#1b1464]/10 p-2 rounded-full">
                <MessageSquare className="h-5 w-5 text-[#1b1464]" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-[#1b1464]">Contato</h2>
            </div>
            
            <div className="bg-[#1b1464]/5 p-6 rounded-lg ml-12">
              <p className="text-gray-700 mb-4">
                Para mais informações, entre em contato com a equipe editorial:
              </p>
              
              <address className="text-gray-700 not-italic space-y-3">
                <p className="flex items-center gap-2">
                  <span className="font-medium text-[#1b1464]">Instituição:</span> 
                  Universidade Metodista de Angola
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium text-[#1b1464]">Departamento:</span> 
                  Pesquisa e Publicações
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium text-[#1b1464]">Email:</span> 
                  <a href="mailto:revista@uma.co.ao" className="text-[#1b1464] hover:underline">revista@uma.co.ao</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium text-[#1b1464]">Telefone:</span> 
                  +244 999 999 999
                </p>
              </address>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
