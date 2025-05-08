
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "../components/layout/Layout";
import { ArrowLeft, BookOpen, Search } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="metodista-container py-16 md:py-24">
        <div className="max-w-lg mx-auto text-center">
          <div className="mb-8 relative animate-fade-in">
            <div className="relative mx-auto w-40 h-40 mb-8">
              <div className="absolute inset-0 bg-[#1b1464]/20 rounded-full animate-[pulse_3s_infinite]"></div>
              <div className="absolute inset-0 bg-[#e53935]/20 rounded-full animate-[pulse_3s_infinite_1s]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="font-serif text-8xl font-bold bg-gradient-to-br from-[#1b1464] via-[#1b1464]/80 to-[#e53935]/90 bg-clip-text text-transparent">
                  404
                </h1>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-16 h-16 border border-[#1b1464]/20 rounded-full animate-float opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-12 h-12 border border-[#e53935]/10 rounded-full animate-float opacity-70" style={{ animationDelay: "1.5s" }}></div>
              <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-2 h-2 bg-[#1b1464]/40 rounded-full"></div>
              <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-2 h-2 bg-[#e53935]/40 rounded-full"></div>
            </div>
            
            <h2 className="text-3xl font-serif font-semibold mb-4 bg-gradient-to-r from-[#1b1464] to-gray-700 bg-clip-text text-transparent">
              Página não encontrada
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg">
              A página que você está procurando não existe ou foi movida para outro endereço.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button 
                asChild 
                size="lg" 
                className="group bg-[#1b1464] hover:bg-[#1b1464]/90 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                  <span>Voltar para a página inicial</span>
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-[#1b1464]/20 hover:border-[#1b1464] hover:bg-[#1b1464]/5 transition-all"
              >
                <Link to="/artigos" className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Explorar artigos</span>
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Visual separator with enhanced design */}
          <div className="mt-20 relative">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1b1464]/50 to-transparent"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1b1464]/10">
                <Search className="w-4 h-4 text-[#1b1464]/60" />
              </div>
            </div>
          </div>
          
          {/* Additional help section */}
          <div className="mt-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-lg font-medium mb-3 text-[#1b1464]">Você também pode tentar:</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Verificar o endereço URL para erros de digitação</li>
              <li>Utilizar a pesquisa para encontrar conteúdo relacionado</li>
              <li>Explorar as categorias de artigos disponíveis</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
