
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, Layers, TrendingUp } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, description, trend, className }: any) => (
  <Card className={className}>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
      {trend && (
        <div className="mt-2 flex items-center text-xs">
          <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
          <span className="text-green-500">{trend}</span>
        </div>
      )}
    </CardContent>
  </Card>
);

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Visão geral da Revista Digital UMA
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          icon={FileText} 
          title="Total de Artigos" 
          value="124" 
          description="Artigos publicados" 
          trend="+8% este mês" 
        />
        <StatCard 
          icon={Users} 
          title="Usuários" 
          value="2,450" 
          description="Usuários registrados"
          trend="+12% este mês"
        />
        <StatCard 
          icon={Layers} 
          title="Categorias" 
          value="15" 
          description="Categorias ativas"
        />
        <StatCard 
          icon={TrendingUp} 
          title="Visualizações" 
          value="45.2k" 
          description="Últimos 30 dias"
          trend="+18% este mês"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Visitas ao Site</CardTitle>
            <CardDescription>
              Visualizações diárias nos últimos 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-muted/20">
              {/* Gráfico seria integrado aqui com biblioteca como recharts */}
              <p className="text-sm text-muted-foreground">Gráfico de Visualizações</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Artigos Populares</CardTitle>
            <CardDescription>
              Os artigos mais lidos este mês
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="mr-4 font-bold text-muted-foreground">{i}</div>
                  <div>
                    <div className="font-medium">Inovação na Educação Superior</div>
                    <div className="text-sm text-muted-foreground">
                      4.{9 - i}k visualizações
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
