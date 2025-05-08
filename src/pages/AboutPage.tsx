
import React from 'react';
import Layout from '../components/layout/Layout';
import { Separator } from '@/components/ui/separator';

const AboutPage = () => {
  return (
    <Layout>
      <div className="metodista-container py-8">
        <h1 className="font-serif text-3xl font-bold mb-8 text-metodista-blue">Sobre a Revista Digital</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-semibold mb-4 text-metodista-blue">Missão</h2>
            <p className="text-gray-700">
              A Revista Digital da Universidade Metodista de Angola tem como missão disseminar 
              conhecimento científico de alta qualidade produzido por pesquisadores angolanos e 
              internacionais, promovendo o debate acadêmico e contribuindo para o desenvolvimento 
              científico e tecnológico de Angola.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-semibold mb-4 text-metodista-blue">Foco e Escopo</h2>
            <p className="text-gray-700 mb-4">
              Nossa revista publica artigos originais nas seguintes áreas de conhecimento:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Ciências Sociais e Humanas</li>
              <li>Engenharia e Tecnologia</li>
              <li>Saúde e Ciências Médicas</li>
              <li>Educação e Pedagogia</li>
              <li>Economia e Administração</li>
              <li>Direito e Ciências Jurídicas</li>
              <li>Ciências Ambientais e Sustentabilidade</li>
              <li>Teologia e Estudos Religiosos</li>
            </ul>
          </section>
          
          <Separator className="my-8" />
          
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-semibold mb-4 text-metodista-blue">Processo Editorial</h2>
            <p className="text-gray-700 mb-4">
              Todos os artigos submetidos passam por um rigoroso processo de revisão por pares, 
              garantindo a qualidade e relevância das publicações. Nosso processo editorial segue as seguintes etapas:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Submissão do manuscrito</li>
              <li>Avaliação inicial pela equipe editorial</li>
              <li>Revisão por pares (double-blind)</li>
              <li>Decisão editorial</li>
              <li>Revisão e edição</li>
              <li>Publicação</li>
            </ol>
          </section>
          
          <Separator className="my-8" />
          
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-semibold mb-4 text-metodista-blue">Equipe Editorial</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Editor-Chefe</h3>
                <p className="text-gray-700">Prof. Dr. Manuel António Fernandes</p>
                <p className="text-gray-600 text-sm">Universidade Metodista de Angola</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Editores Associados</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <p>Profa. Dra. Luísa Mateus</p>
                    <p className="text-gray-600 text-sm">Ciências Sociais e Humanas</p>
                  </li>
                  <li>
                    <p>Prof. Dr. João Silva</p>
                    <p className="text-gray-600 text-sm">Engenharia e Tecnologia</p>
                  </li>
                  <li>
                    <p>Profa. Dra. Teresa Santos</p>
                    <p className="text-gray-600 text-sm">Saúde e Ciências Médicas</p>
                  </li>
                  <li>
                    <p>Prof. Dr. Carlos Mendes</p>
                    <p className="text-gray-600 text-sm">Educação e Pedagogia</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Conselho Editorial</h3>
                <p className="text-gray-700 mb-2">
                  A Revista Digital conta com um conselho editorial composto por pesquisadores de 
                  diversas instituições nacionais e internacionais.
                </p>
              </div>
            </div>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4 text-metodista-blue">Contato</h2>
            <p className="text-gray-700 mb-4">
              Para mais informações, entre em contato com a equipe editorial:
            </p>
            <address className="text-gray-700 not-italic">
              <p>Universidade Metodista de Angola</p>
              <p>Departamento de Pesquisa e Publicações</p>
              <p className="mt-2">Email: <a href="mailto:revista@uma.co.ao" className="text-metodista-blue hover:underline">revista@uma.co.ao</a></p>
              <p>Telefone: +244 999 999 999</p>
            </address>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
