
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "../components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="metodista-container py-12">
        <div className="max-w-md mx-auto text-center">
          <h1 className="font-serif text-6xl font-bold text-metodista-blue mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi movida para outro endereço.
          </p>
          <Button asChild>
            <Link to="/">Voltar para a página inicial</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
