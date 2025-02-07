type Modalidade = "Presencial" | "Semipresencial" | "Live" | "EAD";
type TipoCurso = "Bacharelado" | "Tecnólogo";

interface IModalidade {
  descricao: Modalidade,
  preco: number,
}

interface IDisciplina {
  nome: string,
  duracao: number,
}

interface ICurso {
  id: string,
  nome: string,
  tipo: TipoCurso,
  semestres: number,
  cargaHoraria: number,
  modalidades: IModalidade[],
  disciplinas: IDisciplina[]
}

const design: ICurso = {
  id: "1",
  nome: "Design",
  tipo: "Bacharelado",
  semestres: 8,
  cargaHoraria: 2400,
  modalidades: [
    {
      descricao: "Presencial",
      preco: 1087.95,
    },
  ],
  disciplinas: [
    { nome: "Atividades complementares", duracao: 80 },
    { nome: "Imagem e identidade visual", duracao: 160 },
    { nome: "Informação e projeto gráfico", duracao: 160 },
    { nome: "Design de interface", duracao: 160 },
    { nome: "Meios de representação", duracao: 160 },
    { nome: "Técnicas de produção em design", duracao: 160 },
    { nome: "Extensão", duracao: 240 },
    { nome: "Expressão visual", duracao: 160 },
    { nome: "Vida & Carreira", duracao: 60 },
    { nome: "Estudos críticos: história, arte e cultura", duracao: 160 },
    { nome: "Projeto em design de produto", duracao: 160 },
    { nome: "Metodologia de projeto", duracao: 160 },
    { nome: "Projeto de graduação", duracao: 160 },
    { nome: "Estágio", duracao: 100 },
    { nome: "Core curriculum", duracao: 160 },
    { nome: "Criação em audiovisual", duracao: 160 }
  ]
}

const designGraficoBacharelado: ICurso = {
  id: "2",
  nome: "Design Gráfico",
  tipo: "Bacharelado",
  semestres: 8,
  cargaHoraria: 2900,
  modalidades: [
    {
      descricao: "Presencial",
      preco: 1006.90,
    },
  ],
  disciplinas: [
    { nome: "Digital personalizável", duracao: 160 },
    { nome: "Metodologia de projeto", duracao: 160 },
    { nome: "Design para comunicação integrada", duracao: 160 },
    { nome: "Expressão visual", duracao: 160 },
    { nome: "Imagem e identidade visual", duracao: 160 },
    { nome: "Laboratório de experimentos gráficos", duracao: 160 },
    { nome: "Linguagens visuais e tipografia", duracao: 160 },
    { nome: "Informação e projeto gráfico", duracao: 160 },
    { nome: "Estágio curricular", duracao: 100 },
    { nome: "Estudos avançados por meio do Design: gestão, teoria e tendências", duracao: 100 },
    { nome: "Branding", duracao: 160 },
    { nome: "Estudos críticos: história, arte e cultura", duracao: 160 },
    { nome: "Vida & Carreira", duracao: 60 },
    { nome: "Sistemas de Representação e Interfaces", duracao: 160 },
    { nome: "Extensão", duracao: 300 },
    { nome: "Atividades complementares", duracao: 40 },
    { nome: "Core curriculum", duracao: 160 },
    { nome: "Design de informação", duracao: 160 },
  ]
}

const designGraficoTecnologo: ICurso = {
  id: "3",
  nome: "Design Gráfico",
  tipo: "Tecnólogo",
  semestres: 4,
  cargaHoraria: 1670,
  modalidades: [
    {
      descricao: "Presencial",
      preco: 989.88,
    },
    {
      descricao: "Live",
      preco: 273.80,
    },
    {
      descricao: "Semipresencial",
      preco: 711.74,
    },
    {
      descricao: "EAD",
      preco: 269.00,
    },
  ],
  disciplinas: [
    { nome: "Digital personalizável", duracao: 160 },
    { nome: "Imagem e identidade visual", duracao: 160 },
    { nome: "Linguagens visuais e tipografia", duracao: 160 },
    { nome: "Informação e projeto gráfico", duracao: 160 },
    { nome: "Meios de representação", duracao: 160 },
    { nome: "Extensão", duracao: 170 },
    { nome: "Expressão visual", duracao: 160 },
    { nome: "Vida & Carreira", duracao: 60 },
    { nome: "Estudos críticos: história, arte e cultura", duracao: 160 },
    { nome: "Metodologia de projeto", duracao: 160 },
    { nome: "Core curriculum", duracao: 160 },
  ]
}

const designDeGames: ICurso = {
  id: "4",
  nome: "Design de Games",
  tipo: "Bacharelado",
  semestres: 8,
  cargaHoraria: 3070,
  modalidades: [
    {
      descricao: "Presencial",
      preco: 996.87,
    },
    {
      descricao: "EAD",
      preco: 269.02,
    },
  ],    
  disciplinas: [
    { nome: "Extensão", duracao: 310 },
    { nome: "Projeto e desenvolvimento de jogos", duracao: 160 },
    { nome: "Programação de soluções computacionais", duracao: 160 },
    { nome: "Expressão visual", duracao: 160 },
    { nome: "Criação em audiovisual", duracao: 160 },
    { nome: "Mercado Audiovisual", duracao: 160 },
    { nome: "Programação para jogos multiplataforma e engines", duracao: 160 },
    { nome: "Metodologia de projeto", duracao: 160 },
    { nome: "Estudos críticos: história, arte e cultura", duracao: 160 },
    { nome: "Sistemas de representação e interfaces", duracao: 160 },
    { nome: "Vida & Carreira", duracao: 60 },
    { nome: "Modelagem 3D, texturização e arte técnica", duracao: 160 },
    { nome: "Game e level design", duracao: 160 },
    { nome: "Animação", duracao: 160 },
    { nome: "Usabilidade, desenvolvimento web, mobile e jogos", duracao: 160 },
    { nome: "Core curriculum", duracao: 160 },
    { nome: "Atividades complementares", duracao: 40 },
    { nome: "Game studies", duracao: 160 },
    { nome: "Projeto de graduação", duracao: 160 },
    { nome: "Estágio curricular", duracao: 100 }
  ]
}

const designDeAnimacao: ICurso = {
  id: "5",
  nome: "Design de Animação",
  tipo: "Bacharelado",
  semestres: 8,
  cargaHoraria: 2900,
  modalidades: [
    {
      descricao: "Presencial",
      preco: 983.71,
    },
    {
      descricao: "EAD",
      preco: 279.00,
    },
  ],    
  disciplinas: [
    { nome: "Narrativas ficcionais", duracao: 160 },
    { nome: "Expressão visual", duracao: 160 },
    { nome: "Modelagem 3D, texturização e arte técnica", duracao: 160 },
    { nome: "Direção de arte para universos ficcionais", duracao: 160 },
    { nome: "Animação", duracao: 160 },
    { nome: "Pós-produção audiovisual", duracao: 160 },
    { nome: "Extensão", duracao: 300 },
    { nome: "Sistemas de representação e interfaces", duracao: 160 },
    { nome: "Estágio curricular", duracao: 100 },
    { nome: "Atividades complementares", duracao: 40 },
    { nome: "Projeto de graduação", duracao: 160 },
    { nome: "Core curriculum", duracao: 160 },
    { nome: "Criação em audiovisual", duracao: 160 },
    { nome: "Mercado Audiovisual", duracao: 160 },
    { nome: "Digital personalizável", duracao: 160 },
    { nome: "Metodologia de projeto", duracao: 160 },
    { nome: "Processos de produção audiovisual", duracao: 160 },
    { nome: "Estudos críticos: história, arte e cultura", duracao: 160 },
    { nome: "Vida & Carreira", duracao: 60 }
  ]
}

const cursos:Array<ICurso> = [
  design,
  designDeGames,
  designDeAnimacao,
  designGraficoBacharelado,
  designGraficoTecnologo,
]

export default cursos;
export type { ICurso, IDisciplina, IModalidade, Modalidade, TipoCurso };

