
export interface Article {
  id: string;
  title: string;
  abstract: string;
  content: string;
  author: string;
  authorInstitution: string;
  category: string;
  categoryId: string;
  date: string;
  image?: string;
  tags: string[];
  references: string[];
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

export const featuredArticles: Article[] = [
  {
    id: "1",
    title: "Efeitos das Alterações Climáticas na Agricultura Angolana: Um Estudo Multidisciplinar",
    abstract: "Este estudo analisa os impactos das alterações climáticas na produção agrícola em Angola, com foco nas regiões do Huambo, Huíla e Bié. Através de dados meteorológicos e agrícolas de 2010 a 2023, documenta-se uma redução na precipitação e aumento de temperaturas médias, afetando negativamente a produção de milho e mandioca.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.\n\nSed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.\n\nSed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.",
    author: "Dra. Isabel Santos",
    authorInstitution: "Faculdade de Agronomia, UMA",
    category: "Ciências Ambientais",
    categoryId: "ciencias-ambientais",
    date: "23 Mar 2023",
    image: "/placeholder.svg",
    tags: ["Alterações Climáticas", "Agricultura", "Angola"],
    references: [
      "IPCC. (2022). Climate Change 2022: Impacts, Adaptation and Vulnerability",
      "Ministério da Agricultura de Angola. (2021). Relatório Anual de Produção Agrícola"
    ]
  },
  {
    id: "2", 
    title: "Desenvolvimento de Políticas Educacionais para Formação de Professores em Angola",
    abstract: "Esta pesquisa avalia as políticas de formação de professores implementadas em Angola entre 2015 e 2023, com análise comparativa de programas de formação inicial e continuada, e seus impactos no desempenho escolar.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.\n\nSed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.\n\nSed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.",
    author: "Prof. Dr. António Domingos",
    authorInstitution: "Faculdade de Educação, UMA",
    category: "Educação",
    categoryId: "educacao",
    date: "15 Fev 2023",
    image: "/placeholder.svg",
    tags: ["Formação de Professores", "Políticas Educacionais", "Angola"],
    references: [
      "Ministério da Educação de Angola. (2020). Plano Nacional de Formação de Professores",
      "UNESCO. (2021). Global Education Monitoring Report"
    ]
  },
  {
    id: "3",
    title: "Inovações Tecnológicas para o Desenvolvimento Sustentável em Angola",
    abstract: "O artigo examina a integração de tecnologias sustentáveis no desenvolvimento urbano em Luanda, focando em energia solar, gestão de resíduos e construção eco-eficiente, com análise de viabilidade econômica e impacto ambiental.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.\n\nSed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.\n\nSed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.",
    author: "Dr. Jorge Mendes",
    authorInstitution: "Faculdade de Engenharia, UMA",
    category: "Engenharia",
    categoryId: "engenharia",
    date: "10 Jan 2023",
    image: "/placeholder.svg",
    tags: ["Tecnologia Sustentável", "Desenvolvimento Urbano", "Angola"],
    references: [
      "Ministério do Ambiente de Angola. (2021). Estratégia Nacional para Energias Renováveis",
      "World Bank. (2022). Sustainable Urban Development in Sub-Saharan Africa"
    ]
  },
  {
    id: "4",
    title: "Prevalência de Doenças Cardiovasculares em Angola: Estudo Epidemiológico",
    abstract: "Investigação epidemiológica sobre a prevalência de doenças cardiovasculares em quatro províncias angolanas, associando fatores de risco como hipertensão, diabetes e obesidade com aspectos socioeconômicos.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.\n\nSed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.\n\nSed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.",
    author: "Dra. Maria Luísa Costa",
    authorInstitution: "Faculdade de Medicina, UMA",
    category: "Saúde",
    categoryId: "saude",
    date: "05 Dez 2022",
    image: "/placeholder.svg",
    tags: ["Doenças Cardiovasculares", "Epidemiologia", "Angola"],
    references: [
      "Ministério da Saúde de Angola. (2022). Relatório de Doenças Não Transmissíveis",
      "WHO. (2021). Cardiovascular Diseases Risk Factors in Sub-Saharan Africa"
    ]
  },
  {
    id: "5",
    title: "Identidade Cultural e Descolonização do Pensamento em Angola",
    abstract: "Análise crítica do processo de descolonização epistemológica em Angola, investigando as influências culturais coloniais, movimentos de independência e construção da identidade nacional pós-independência.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.\n\nSed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.\n\nSed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.",
    author: "Prof. Dr. Paulo Manuel",
    authorInstitution: "Faculdade de Ciências Sociais, UMA",
    category: "Ciências Sociais",
    categoryId: "ciencias-sociais",
    date: "20 Nov 2022",
    image: "/placeholder.svg",
    tags: ["Descolonização", "Identidade Cultural", "Angola"],
    references: [
      "Fanon, F. (1968). Os Condenados da Terra",
      "Santos, B. S. (2018). O Fim do Império Cognitivo"
    ]
  },
  {
    id: "6",
    title: "Impactos Econômicos da Diversificação da Economia Angolana",
    abstract: "Estudo sobre estratégias de diversificação econômica em Angola para reduzir dependência do petróleo, analisando setores promissores como agricultura, turismo e manufatura leve.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.\n\nSed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.\n\nSed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl.",
    author: "Dr. Fernando Silva",
    authorInstitution: "Faculdade de Economia, UMA",
    category: "Economia",
    categoryId: "economia",
    date: "15 Out 2022",
    image: "/placeholder.svg",
    tags: ["Economia", "Diversificação Econômica", "Angola"],
    references: [
      "Ministério da Economia de Angola. (2021). Plano de Desenvolvimento Nacional 2021-2025",
      "FMI. (2022). Angola Economic Outlook"
    ]
  }
];

export const categories: Category[] = [
  { id: "ciencias-sociais", name: "Ciências Sociais", count: 12 },
  { id: "engenharia", name: "Engenharia", count: 8 },
  { id: "educacao", name: "Educação", count: 15 },
  { id: "saude", name: "Saúde", count: 10 },
  { id: "economia", name: "Economia", count: 7 },
  { id: "ciencias-ambientais", name: "Ciências Ambientais", count: 9 },
  { id: "direito", name: "Direito", count: 6 },
  { id: "tecnologia", name: "Tecnologia da Informação", count: 5 }
];

export const getAllArticles = (): Article[] => {
  return featuredArticles;
};

export const getArticleById = (id: string): Article | undefined => {
  return featuredArticles.find(article => article.id === id);
};

export const getArticlesByCategory = (categoryId: string): Article[] => {
  return featuredArticles.filter(article => article.categoryId === categoryId);
};

export const getAllCategories = (): Category[] => {
  return categories;
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const searchArticles = (query: string): Article[] => {
  const lowerQuery = query.toLowerCase();
  return featuredArticles.filter(article => 
    article.title.toLowerCase().includes(lowerQuery) || 
    article.abstract.toLowerCase().includes(lowerQuery) ||
    article.content.toLowerCase().includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};
