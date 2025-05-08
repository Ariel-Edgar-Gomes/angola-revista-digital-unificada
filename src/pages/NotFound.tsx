
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "../components/layout/Layout";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="metodista-container py-16 md:py-24">
        <div className="max-w-lg mx-auto text-center">
          <div className="mb-8 relative">
            <div className="relative mx-auto w-40 h-40 mb-8">
              <div className="absolute inset-0 bg-metodista-blue/10 rounded-full animate-[pulse_3s_infinite]"></div>
              <div className="absolute inset-0 bg-metodista-gold/10 rounded-full animate-[pulse_3s_infinite_1s]"></div>
              <h1 className="font-serif text-8xl font-bold bg-gradient-to-br from-metodista-blue via-metodista-blue/80 to-metodista-gold/90 bg-clip-text text-transparent absolute inset-0 flex items-center justify-center">
                404
              </h1>
            </div>
            <h2 className="text-3xl font-serif font-semibold mb-4 bg-gradient-to-r from-metodista-blue to-gray-700 bg-clip-text text-transparent">
              Página não encontrada
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              A página que você está procurando não existe ou foi movida para outro endereço.
            </p>
          </div>
          
          <Button asChild size="lg" className="group relative bg-metodista-blue hover:bg-metodista-blue shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
            <Link to="/" className="flex items-center gap-2 z-10 relative">
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Voltar para a página inicial</span>
            </Link>
          </Button>
          <div className="mt-20 opacity-10">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-metodista-blue/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
