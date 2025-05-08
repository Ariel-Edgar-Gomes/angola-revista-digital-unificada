
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
          <div className="mb-8">
            <div className="relative mx-auto w-32 h-32 mb-6">
              <div className="absolute inset-0 bg-metodista-blue/10 rounded-full animate-pulse"></div>
              <h1 className="font-serif text-7xl font-bold text-metodista-blue absolute inset-0 flex items-center justify-center">404</h1>
            </div>
            <h2 className="text-3xl font-serif font-semibold mb-4 text-gray-800">Página não encontrada</h2>
            <p className="text-gray-600 mb-8 text-lg">
              A página que você está procurando não existe ou foi movida para outro endereço.
            </p>
          </div>
          
          <Button asChild size="lg" className="group bg-metodista-blue hover:bg-metodista-blue/90 shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Voltar para a página inicial</span>
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
