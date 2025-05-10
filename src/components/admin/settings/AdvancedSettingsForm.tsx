
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const AdvancedSettingsForm = () => {
  const { toast } = useToast();
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [enableCache, setEnableCache] = useState(true);
  const [enableBackup, setEnableBackup] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const settings = {
      maintenanceMode,
      enableCache,
      enableBackup
    };
    
    console.log("Configurações avançadas salvas:", settings);
    toast({
      title: "Configurações avançadas salvas",
      description: "Suas configurações avançadas foram salvas com sucesso."
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Configurações Avançadas</CardTitle>
          <CardDescription>
            Opções avançadas para administradores
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Modo de Manutenção</p>
              <p className="text-sm text-muted-foreground">
                Coloque o site em modo de manutenção para realizar atualizações
              </p>
            </div>
            <Switch 
              checked={maintenanceMode}
              onCheckedChange={setMaintenanceMode}
            />
          </div>
          
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Cache do Site</p>
              <p className="text-sm text-muted-foreground">
                Habilitar cache para melhorar o desempenho
              </p>
            </div>
            <Switch 
              checked={enableCache}
              onCheckedChange={setEnableCache}
            />
          </div>
          
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Backup Automático</p>
              <p className="text-sm text-muted-foreground">
                Criar backups automáticos do conteúdo do site
              </p>
            </div>
            <Switch 
              checked={enableBackup}
              onCheckedChange={setEnableBackup}
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium">Exportar Dados</label>
            <Button variant="outline" className="w-full">Exportar Todos os Dados</Button>
            <p className="text-sm text-muted-foreground">
              Exporta todos os dados do site em formato JSON
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Salvar Configurações Avançadas</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default AdvancedSettingsForm;
