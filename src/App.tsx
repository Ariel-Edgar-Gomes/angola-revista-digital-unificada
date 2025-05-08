
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ArticleDetail from "./pages/ArticleDetail";
import ArticlesPage from "./pages/ArticlesPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import SearchResults from "./pages/SearchResults";
import AboutPage from "./pages/AboutPage";
import SubmitArticlePage from "./pages/SubmitArticlePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/artigos" element={<ArticlesPage />} />
          <Route path="/artigos/:id" element={<ArticleDetail />} />
          <Route path="/categorias" element={<CategoriesPage />} />
          <Route path="/categorias/:id" element={<CategoryPage />} />
          <Route path="/pesquisa" element={<SearchResults />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/submeter" element={<SubmitArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
