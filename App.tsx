
import React, { useState, useEffect, useRef } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight, 
  Clock, 
  Lock, 
  ShieldCheck, 
  Star, 
  Zap,
  Mail,
  Smartphone,
  Check,
  X,
  ChevronsDown,
  ShoppingCart
} from 'lucide-react';

// --- Types ---

interface FAQItemProps {
  question: string;
  answer: string;
}

// --- Components ---

const HeroCarousel: React.FC = () => {
  const images = [
    "https://i.imgur.com/msMb7Cv.jpeg",
    "https://i.imgur.com/55l7Rsp.jpeg",
    "https://i.imgur.com/nLkZPaU.jpeg"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative mx-auto max-w-[260px] rounded-[2rem] overflow-hidden shadow-2xl mb-10 border-4 border-white aspect-[9/16] bg-slate-100">
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={src} className="min-w-full h-full shrink-0">
            <img 
              src={src} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover object-top" 
            />
          </div>
        ))}
      </div>
      {/* Indicadores do Carrossel */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex ? 'bg-red-600 w-8' : 'bg-white/60 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const SalesPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('Larissa');
  
  const names = ['Larissa', 'Ana', 'Marcos', 'Juliana', 'Ricardo', 'Sonia', 'Felipe', 'Bia'];

  useEffect(() => {
    const timer = setInterval(() => {
      setName(names[Math.floor(Math.random() * names.length)]);
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 left-4 z-[60] animate-bounce-in flex items-center gap-3 bg-white border border-green-500 rounded-lg p-2 shadow-2xl max-w-[250px]">
      <div className="bg-green-500 rounded-full p-1 text-white shrink-0">
        <Check className="w-4 h-4" />
      </div>
      <div>
        <p className="text-[11px] font-bold text-slate-800 leading-tight">
          {name} acabou de comprar
        </p>
        <p className="text-[10px] text-green-600 font-semibold">
          Lipo-Verme Combo Completo
        </p>
      </div>
    </div>
  );
};

const HeaderUrgency: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] text-[#facc15] py-2 px-4 text-center text-[10px] md:text-sm font-bold flex items-center justify-center gap-1 sticky top-0 z-50 shadow-md">
      <Zap className="w-3 h-3 fill-current" />
      <span>Desconto só HOJE nessa página 6/1/2026</span>
    </div>
  );
};

const QuizSection: React.FC = () => {
  const [step, setStep] = useState(0);
  const questions = [
    "Sente alguns desses sintomas",
    "Você sente inchaço abdominal frequente?",
    "Tem cansaço excessivo sem motivo aparente?",
    "Sente vontade incontrolável de comer doces?",
    "Tem dificuldade em perder a 'pochete' mesmo com dieta?"
  ];

  const handleNext = () => {
    if (step < questions.length) {
      setStep(step + 1);
    }
  };

  const getButtonTexts = () => {
    if (step === 0) {
      return ["VARIOS DESSES", "PELO MENOS ALGUNS DESSES"];
    }
    return ["SIM", "NÃO"];
  };

  const buttonTexts = getButtonTexts();

  return (
    <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl mx-2 mb-10 border-2 border-slate-800 relative overflow-hidden transition-all duration-500">
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>

      {step < questions.length ? (
        <div className="relative z-10 flex flex-col">
          
          {/* Connection Image - Touching borders on step 0 */}
          {step === 0 && (
            <div className="w-full animate-in fade-in slide-in-from-top duration-700 mb-6">
              <img 
                src="https://i.imgur.com/g3dbAHU.png" 
                alt="Sintomas de Parasitas" 
                className="w-full h-auto block"
              />
              <div className="flex flex-col items-center justify-center py-2 space-y-[-10px]">
                <ChevronsDown className="text-red-600 w-12 h-12 animate-bounce" />
                <ChevronsDown className="text-red-600/60 w-12 h-12 animate-bounce delay-100" />
              </div>
            </div>
          )}

          <div className="px-6 pb-8 space-y-8">
            <div className="text-center">
              <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                Pergunta {step + 1} de {questions.length}
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-black text-white leading-tight">
                {questions[step]}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <button 
                onClick={handleNext}
                className="group flex items-center justify-between py-6 px-8 rounded-2xl bg-green-600 text-white font-black text-lg shadow-[0_6px_0_0_#166534] active:shadow-none active:translate-y-[6px] transition-all"
              >
                <span className="text-left">{buttonTexts[0]}</span>
                <CheckCircle2 className="w-6 h-6 shrink-0 opacity-50 group-hover:opacity-100" />
              </button>
              <button 
                onClick={handleNext}
                className="group flex items-center justify-between py-6 px-8 rounded-2xl bg-slate-800 text-slate-400 font-black text-lg shadow-[0_6px_0_0_#0f172a] active:shadow-none active:translate-y-[6px] transition-all"
              >
                <span className="text-left">{buttonTexts[1]}</span>
                <X className="w-6 h-6 shrink-0 opacity-30 group-hover:opacity-100" />
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Análise de Risco</span>
                <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden border border-slate-700">
                <div 
                  className="bg-red-600 h-full transition-all duration-500 ease-out shadow-[0_0_20px_rgba(220,38,38,0.5)]" 
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 text-center px-6 py-12 space-y-6">
          <div className="flex justify-center">
            <div className="bg-red-600 p-6 rounded-full animate-pulse shadow-[0_0_40px_rgba(220,38,38,0.4)]">
              <AlertTriangle className="w-16 h-16 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-red-500 font-black text-2xl uppercase italic tracking-tighter">
              ALTA PROBABILIDADE DE CONTAMINAÇÃO!
            </p>
            <p className="text-slate-300 text-sm font-medium leading-relaxed max-w-[250px] mx-auto">
              Seus sintomas indicam que parasitas estão drenando sua energia e causando inchaço visceral.
            </p>
          </div>
          <a 
            href="#oferta" 
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-transform"
          >
            Ver Protocolo de Expulsão <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  );
};

const ResultsCarousel: React.FC = () => {
  const images = [
    "https://i.imgur.com/3gAPZPm.jpeg",
    "https://i.imgur.com/i7HjgHh.jpeg",
    "https://i.imgur.com/u42Wc7R.jpeg",
    "https://i.imgur.com/NYLhuxI.jpeg",
    "https://i.imgur.com/63oN3xz.jpeg",
    "https://i.imgur.com/pmizLqJ.jpeg",
    "https://i.imgur.com/o3d4eym.jpeg",
    "https://i.imgur.com/wmM1X2F.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="bg-slate-900 py-12 text-white overflow-hidden">
      <div className="px-6 mb-6">
        <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
          Veja como a diferença após a Desparasitação 🔥
        </h2>
        <p className="text-gray-400 text-center text-sm mt-2 font-medium">Resultados reais após 1 semana de protocolo</p>
      </div>
      
      <div className="relative px-4 max-w-[280px] mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-white border-4 border-slate-800">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, idx) => (
              <div key={idx} className="min-w-full relative group bg-white flex items-center justify-center">
                <img 
                  src={src} 
                  alt={`Resultado ${idx + 1}`} 
                  className="w-full h-auto block object-contain"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg z-10">
                  LIPO-VERME RESULT
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-md transition-all active:scale-90"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-md transition-all active:scale-90"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-red-600 w-8' : 'bg-slate-700 w-2'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <div className="text-[10px] text-slate-500 flex items-center gap-2 uppercase font-black tracking-widest">
           <Smartphone className="w-3 h-3" /> Arraste ou aguarde a transição automática
        </div>
      </div>
    </div>
  );
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-gray-800 font-semibold pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeaderUrgency />
      <SalesPopup />

      {/* Hero Section */}
      <section className="bg-white px-4 pt-8 pb-10 text-center overflow-hidden">
        <div className="flex items-center justify-center gap-1 mb-4">
          <div className="bg-[#c2410c] text-white p-1 rounded-sm">
            <span className="text-[10px] font-black uppercase">SOS</span>
          </div>
          <span className="text-[10px] font-black text-slate-800 tracking-wider uppercase">CENTRO DE SAÚDE INTESTINAL</span>
        </div>
        
        <h1 className="text-[28px] md:text-5xl font-heading font-black text-[#1f2937] leading-tight mb-4 uppercase tracking-tighter">
          ALERTA: Sua "Pochete" pode ser um Ninho de Parasitas
        </h1>

        <p className="text-sm md:text-lg text-gray-600 font-medium mb-6 px-4">
          Descubra se você está contaminado em 60 segundos respondendo o Diagnóstico abaixo.
        </p>

        <HeroCarousel />
        
        {/* QuizSection internally manages the symptom image for connection */}
        <QuizSection />

        <div className="space-y-4 mb-10 px-4">
          <p className="text-sm md:text-xl text-red-600 font-bold leading-relaxed italic">
            "O método de R$ 9,90 que a Indústria não quer que você conheça para expulsar parasitas e murchar a pochete em 1 semana."
          </p>
          <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-200">
            <h2 className="text-lg md:text-2xl font-black text-slate-800 leading-tight">
              Cientistas descobriram que 87% das pessoas com mais de 40 anos sofrem com o <span className="text-red-600 italic">"Hóspede Secreto"</span> que causa inchaço, fadiga e vício em doces.
            </h2>
          </div>
        </div>

        <div className="mb-10 px-4">
          <h2 className="text-2xl font-black text-slate-800 mb-6 uppercase tracking-tighter italic">COMO RESOLVER?</h2>
          
          <div className="max-w-xs mx-auto mb-8 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-slate-100 relative group">
             <div className="bg-[#14532d] text-white py-4 px-4 text-center">
                <p className="text-lg font-black uppercase tracking-tighter italic leading-none mb-1">EXPULSE ELES EM 7 DIAS</p>
                <p className="text-[10px] font-medium opacity-80 leading-tight">O 'LIPO-VERME-PARASITA 7' que limpa o intestino.</p>
             </div>
             <img 
               src="https://i.imgur.com/Pk99awq.jpeg" 
               alt="Intestino Saudável" 
               className="w-full h-auto block"
             />
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#166534] text-white text-[10px] px-4 py-2 rounded-full font-bold flex items-center gap-1 shadow-lg whitespace-nowrap">
                <Check className="w-3 h-3" /> Quero ver meu Diagnóstico e o Protocolo
             </div>
          </div>
        </div>
      </section>

      <ResultsCarousel />

      {/* Seção de Ofertas (Pricing Section) */}
      <section id="oferta" className="bg-slate-50 px-4 py-16 scroll-mt-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-black text-slate-900 uppercase leading-tight tracking-tighter">
              QUERO ZERAR A POCHETE
            </h2>
            <div className="h-1.5 w-20 bg-green-500 mx-auto mt-2 rounded-full"></div>
          </div>

          {/* CARD 1: COMBO COMPLETO (O DESTAQUE) */}
          <div className="relative mb-12 transform hover:-translate-y-2 transition-all duration-300">
            {/* Badge Mais Vendido */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-yellow-400 text-slate-900 font-black text-[10px] px-6 py-2 rounded-full shadow-lg border-2 border-white uppercase tracking-widest whitespace-nowrap animate-pulse">
              🏆 MAIS ESCOLHIDO PELAS ALUNAS
            </div>
            
            <div className="bg-white border-4 border-yellow-400 rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(234,179,8,0.2)] overflow-hidden relative">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"></div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-black text-slate-900 leading-tight mb-2">
                  COMBO COMPLETO: <br/>
                  <span className="text-green-600">PROTOCOLO + MANUTENÇÃO</span>
                </h3>
              </div>

              <div className="relative mb-6 rounded-2xl overflow-hidden shadow-xl">
                 <img 
                    src="https://i.imgur.com/2BN612e.jpeg" 
                    alt="Pacote Completo Lipo-Verme" 
                    className="w-full h-auto"
                 />
                 <div className="absolute bottom-2 right-2 bg-red-600 text-white font-black text-[10px] px-3 py-1 rounded-lg">
                   OFERTA LIMITADA
                 </div>
              </div>

              <div className="text-center mb-8 bg-slate-50 py-4 rounded-3xl border border-slate-100">
                <p className="text-gray-400 text-sm line-through font-bold">De R$ 147,90</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-slate-900 font-bold">Por apenas</span>
                  <span className="text-5xl font-heading font-black text-green-600">R$ 47,90</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "LIPO-VERME PARATISTA 7",
                  "ACESSO IMEDIATO",
                  "PRONTO PARA DESPARASITAR",
                  "Lista de Compras Econômica",
                  "Detox das Celebridades",
                  "Cardápio Manutenção 30 Dias",
                  "Áudios Anti-Ansiedade (MP3)",
                  "Chás Turbo Seca-Barriga",
                  "Acesso ao Grupo VIP de Alunas",
                  "10 Receitas de Sucos Detox",
                  "Guia do Sono Reparador",
                  "Lista de Suplementos Baratos",
                  "Tabela de Medidas para Imprimir",
                  "O Segredo da Água Alcalina",
                  "Bônus: Pele Limpa e Radiante",
                  "Certificado de Conclusão Digital"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-slate-700 text-xs font-bold uppercase tracking-tight leading-none pt-1">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a 
                href="https://pay.lowify.com.br/checkout?product_id=UYa4qH"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white font-black text-lg py-5 rounded-2xl shadow-[0_10px_0_0_#166534] active:shadow-none active:translate-y-[10px] transition-all shimmer flex flex-col items-center justify-center gap-1 uppercase text-center no-underline block"
              >
                <span>QUERO O PACOTE COMPLETO AGORA</span>
                <span className="text-[10px] opacity-80">(Clique para comprar com segurança)</span>
              </a>
            </div>
          </div>

          {/* CARD 2: OFERTA DE ENTRADA (ÂNCORA) */}
          <div className="bg-white/70 border-2 border-slate-200 rounded-[2.5rem] p-8 shadow-sm overflow-hidden relative">
            <div className="text-center mb-6">
              <h3 className="text-xl font-heading font-black text-slate-500 uppercase tracking-tighter">
                APENAS O GUIA BÁSICO
              </h3>
              <div className="text-3xl font-heading font-black text-slate-600 mt-2">
                R$ 9,90
              </div>
            </div>

            {/* Nova Lista de Benefícios para o Plano Básico */}
            <div className="space-y-4 mb-8 bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
                {[
                  "LIPO-VERME PARATISTA 7",
                  "ACESSO IMEDIATO",
                  "PRONTO PARA DESPARASITAR",
                  "Suco Detox"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-slate-600 text-xs font-bold uppercase tracking-tight leading-none pt-1">
                      {item}
                    </span>
                  </div>
                ))}
            </div>

            <div className="mb-8 px-4">
              <p className="text-slate-400 text-[11px] leading-relaxed font-medium italic text-center">
                🛒 Lista de Supermercado Econômica para expulsar parasitas sem gastar fortunas. Pague pouco, limpe o básico.
              </p>
            </div>

            <a 
              href="https://pay.lowify.com.br/checkout?product_id=rnrd9g"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-slate-800 text-white font-black text-sm py-4 rounded-xl shadow-[0_6px_0_0_#1e293b] active:shadow-none active:translate-y-[6px] transition-all uppercase flex items-center justify-center gap-2 text-center no-underline block"
            >
              <ShoppingCart className="w-4 h-4" /> Quero apenas a lista básica
            </a>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 text-slate-400">
              <ShieldCheck className="w-6 h-6" />
              <div className="h-4 w-[1px] bg-slate-300"></div>
              <Lock className="w-5 h-5" />
              <div className="h-4 w-[1px] bg-slate-300"></div>
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Compra 100% Protegida e Criptografada</p>
          </div>

          <div className="mt-8 bg-green-50 rounded-2xl p-6 border border-green-100 text-center flex flex-col items-center gap-3">
             <div className="bg-green-600 text-white p-2 rounded-full">
                <Smartphone className="w-6 h-6" />
             </div>
             <p className="text-green-800 font-bold text-sm leading-tight">
               Após a compra, você recebe acesso ao Material em PDF diretamente no seu WhatsApp
             </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-slate-900 uppercase flex items-center justify-center gap-2">
              Dúvidas Frequentes
            </h2>
            <p className="text-gray-500 text-sm mt-2 font-bold uppercase tracking-widest">Perguntas Frequentes</p>
          </div>

          <div className="space-y-2">
            <FAQItem 
              question="Como vou receber o material?" 
              answer="Imediatamente após a confirmação do pagamento, você receberá um link de acesso diretamente no seu WhatsApp e também no seu e-mail cadastrado. É um material digital em PDF."
            />
            <FAQItem 
              question="Preciso comprar remédios caros ou ingredientes difíceis?" 
              answer="Não! O protocolo utiliza ingredientes 100% naturais que você encontra em qualquer supermercado ou feira, focando em alimentos e chás específicos que combatem os parasitas."
            />
            <FAQItem 
              question="É uma assinatura mensal?" 
              answer="Não. O pagamento é único. Você paga apenas o valor da oferta escolhida uma vez e tem acesso vitalício ao material e suas atualizações."
            />
            <FAQItem 
              question="E se eu não gostar ou não conseguir fazer?" 
              answer="Nós confiamos tanto no nosso método que oferecemos garantia total. Se você sentir que não é para você, devolvemos seu dinheiro sem burocracia."
            />
            <FAQItem 
              question="Quais formas de pagamento são aceitas?" 
              answer="Aceitamos PIX (com liberação imediata), Cartão de Crédito e Boleto Bancário."
            />
            <FAQItem 
              question="Tem garantia?" 
              answer="Sim! Você tem 7 dias de garantia incondicional para testar o protocolo. Risco zero para você."
            />
            <FAQItem 
              question="Tenho diabetes ou pressão alta, posso fazer?" 
              answer="Com certeza! Nosso método é 100% natural e seguro. Ele não afeta negativamente quem tem diabetes ou pressão alta; pelo contrário, ao desintoxicar o organismo e melhorar a saúde intestinal, ele ajuda a equilibrar o corpo e pode até melhorar o quadro. Além disso, você terá acesso direto ao suporte com nosso time de especialistas para te acompanhar!"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12 text-center border-t border-gray-100">
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 max-w-md mx-auto">
          <div className="flex flex-col items-center">
            <Mail className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-black mb-2 uppercase">📩 Precisa de Ajuda?</h3>
            <p className="text-gray-400 text-sm mb-6">
              Envie um e-mail para <span className="text-blue-400 font-bold">lipoverme7@gmail.com</span> e nossa equipe responderá rapidamente para ajudá-lo com qualquer dúvida ou problema.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <Clock className="w-4 h-4" /> Resposta em até 24h úteis
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-100 px-6 py-16 text-center border-t border-slate-200">
        <div className="max-w-md mx-auto">
          <p className="text-gray-600 text-sm leading-relaxed italic mb-8">
            "No Protocolo Lipo-Verme, desenvolvemos métodos de saúde natural que atacam a raiz do inchaço e do sobrepeso: a contaminação parasitária. Nosso compromisso é garantir uma desintoxicação segura e eficaz, ajudando homens e mulheres a retomarem o controle do seu corpo e eliminarem a gordura visceral de maneira definitiva e sem sofrimento."
          </p>
          <div className="space-y-4 pt-8 border-t border-slate-300">
             <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
               © 2026 Protocolo Lipo-Verme | Todos os direitos reservados.
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
