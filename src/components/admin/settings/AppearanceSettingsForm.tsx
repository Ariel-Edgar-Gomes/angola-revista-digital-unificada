
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const AppearanceSettingsForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Configurações de aparência salvas");
    toast({
      title: "Aparência salva",
      description: "Suas configurações de aparência foram salvas com sucesso."
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Aparência</CardTitle>
          <CardDescription>
            Personalize a aparência da sua Revista Digital
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Logo do Site</label>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <Button variant="outline" size="sm" className="ml-4">
                Alterar
              </Button>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Tamanho recomendado: 200x200 pixels
            </p>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium">Esquema de Cores</label>
            <div className="mt-1 grid grid-cols-3 gap-3">
              <div className="flex items-center">
                <input
                  id="color-default"
                  name="color-scheme"
                  type="radio"
                  defaultChecked
                  className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="color-default" className="ml-3 block text-sm font-medium">
                  Padrão
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="color-dark"
                  name="color-scheme"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="color-dark" className="ml-3 block text-sm font-medium">
                  Escuro
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="color-custom"
                  name="color-scheme"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="color-custom" className="ml-3 block text-sm font-medium">
                  Personalizado
                </label>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Salvar Aparência</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default AppearanceSettingsForm;
