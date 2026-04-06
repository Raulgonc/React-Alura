import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Formulario from './components/Formulario/Formulario'
import Temas from './components/Temas/Temas'
import Modal from './components/Modal/Modal'
import { Evento } from './types/Evento'

// Importação das imagens de exemplo para popular os cards durante o desenvolvimento
import img1 from './assets/Imagem_post_1 (1).png'
import img2 from './assets/Imagem_post_2.png'
import img3 from './assets/Imagem_post_3.png'
import img4 from './assets/Imagem_post_4.png'
import img5 from './assets/Imagem_post_5.png'
import img6 from './assets/Imagem_post_6.png'
import img7 from './assets/Imagem_post_7.png'

// Dados fictícios para visualização dos cards durante o desenvolvimento.
// Cada objeto segue a interface Evento e está associado a um tema pelo campo "tema".
const eventosMock: Evento[] = [
  { id: 1, nome: 'Future Tech Summit',  data: '2025-05-10', tema: 'tecnologia', descricao: 'O maior evento de tecnologia do ano com palestrantes internacionais.', imagem: img1 },
  { id: 2, nome: 'Dev Connect 2025',    data: '2025-06-20', tema: 'tecnologia', descricao: 'Conecte-se com desenvolvedores de todo o Brasil.', imagem: img2 },
  { id: 3, nome: 'Design Week',         data: '2025-07-15', tema: 'design',     descricao: 'Uma semana dedicada à criatividade e inovação em design.', imagem: img3 },
  { id: 4, nome: 'UX Brasil',           data: '2025-08-05', tema: 'design',     descricao: 'Tendências e melhores práticas em experiência do usuário.', imagem: img4 },
  { id: 5, nome: 'Code Marathon',       data: '2025-09-12', tema: 'programacao',descricao: 'Maratona de programação com desafios e prêmios incríveis.', imagem: img5 },
  { id: 6, nome: 'AI World Forum',      data: '2025-10-08', tema: 'ia',         descricao: 'O futuro da inteligência artificial e suas aplicações no mundo real.', imagem: img6 },
  { id: 7, nome: 'CyberSec Conference', data: '2025-11-20', tema: 'seguranca',  descricao: 'Estratégias avançadas de segurança digital para empresas.', imagem: img7 },
]

function App() {
  // Estado central que armazena todos os eventos da aplicação.
  // Inicializado com os eventos mock para visualização em desenvolvimento.
  const [eventos, setEventos] = useState<Evento[]>(eventosMock)

  // Armazena o evento cujo modal está aberto.
  // null = nenhum modal aberto | Evento = modal visível com os detalhes desse evento.
  const [eventoSelecionado, setEventoSelecionado] = useState<Evento | null>(null)

  // Função passada ao Formulário via prop.
  // Adiciona o novo evento ao final da lista usando spread para não mutar o estado anterior.
  const adicionarEvento = (evento: Evento) => {
    setEventos([...eventos, evento])
  }

  return (
    <>
      {/* Barra de navegação superior com a logo */}
      <Header />

      {/* Seção principal de destaque com imagem e degradê */}
      <Hero />

      {/* Formulário que coleta dados e dispara adicionarEvento ao submeter */}
      <Formulario onAdicionarEvento={adicionarEvento} />

      {/* Renderiza as seções por tema, filtrando e exibindo os eventos correspondentes.
          onCardClick recebe o evento clicado e o define como eventoSelecionado, abrindo o modal. */}
      <Temas eventos={eventos} onCardClick={setEventoSelecionado} />

      {/* Modal renderizado apenas quando há um evento selecionado.
          onFechar reseta eventoSelecionado para null, fechando o modal. */}
      {eventoSelecionado && (
        <Modal
          evento={eventoSelecionado}
          onFechar={() => setEventoSelecionado(null)}
        />
      )}
    </>
  )
}

export default App
