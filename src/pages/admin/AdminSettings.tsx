
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GeneralSettingsForm from '@/components/admin/settings/GeneralSettingsForm';
import AppearanceSettingsForm from '@/components/admin/settings/AppearanceSettingsForm';
import AdvancedSettingsForm from '@/components/admin/settings/AdvancedSettingsForm';

const AdminSettings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Configurações</h2>
        <p className="text-muted-foreground">
          Gerencie as configurações da Revista Digital UMA
        </p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">Geral</TabsTrigger>
          <TabsTrigger value="appearance">Aparência</TabsTrigger>
          <TabsTrigger value="advanced">Avançado</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4 pt-4">
          <GeneralSettingsForm />
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-4 pt-4">
          <AppearanceSettingsForm />
        </TabsContent>
        
        <TabsContent value="advanced" className="space-y-4 pt-4">
          <AdvancedSettingsForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
