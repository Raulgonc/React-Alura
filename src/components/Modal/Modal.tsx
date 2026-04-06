import { Evento } from '../../types/Evento'
import temas from '../../temas'
import styles from './Modal.module.css'

interface ModalProps {
  evento: Evento                // Evento cujos detalhes completos serão exibidos
  onFechar: () => void          // Callback para fechar o modal (seta eventoSelecionado para null)
}

// Modal de detalhes do evento.
// Renderizado sobre a página quando o usuário clica em um card.
// Exibe todas as informações do evento, incluindo a descrição completa.
const Modal = ({ evento, onFechar }: ModalProps) => {
  // Busca o tema para exibir a tag formatada (ex: 'I.A.' em vez de 'ia')
  const tema = temas.find((t) => t.id === evento.tema)

  // Converte a data de YYYY-MM-DD para DD/MM/AA
  const [ano, mes, dia] = evento.data.split('-')
  const dataFormatada = `${dia}/${mes}/${ano.slice(2)}`

  return (
    // Overlay escuro que cobre toda a tela — clicar fora do modal o fecha
    <div className={styles.overlay} onClick={onFechar}>

      {/* Caixa do modal — stopPropagation evita que o clique dentro feche o modal */}
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* Botão de fechar no canto superior direito */}
        <button className={styles.fechar} onClick={onFechar}>✕</button>

        {/* Imagem do evento em largura total */}
        <img src={evento.imagem} alt={evento.nome} className={styles.imagem} />

        <div className={styles.conteudo}>
          {/* Badge do tema */}
          <span className={styles.tag}>{tema?.tag ?? evento.tema}</span>

          {/* Data formatada no padrão brasileiro */}
          <p className={styles.data}>{dataFormatada}</p>

          {/* Título completo do evento */}
          <h2 className={styles.titulo}>{evento.nome}</h2>

          {/* Descrição completa — sem truncamento, ao contrário do card */}
          <p className={styles.descricao}>{evento.descricao}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
