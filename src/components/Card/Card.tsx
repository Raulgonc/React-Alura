import { Evento } from '../../types/Evento'
import temas from '../../temas'
import styles from './Card.module.css'

interface CardProps {
  evento: Evento                // Objeto com todos os dados do evento a ser exibido
  onClick: (evento: Evento) => void // Callback disparado ao clicar no card — abre o modal
}

// Componente visual que representa um evento publicado.
// Recebe um Evento, aplica formatações e abre o modal ao ser clicado.
const Card = ({ evento, onClick }: CardProps) => {
  // Busca o tema correspondente no array de temas para obter o texto da tag formatado.
  // Ex: id 'ia' → tag 'I.A.' em vez de exibir o id bruto.
  const tema = temas.find((t) => t.id === evento.tema)

  // Converte a data do formato ISO (YYYY-MM-DD) para o padrão brasileiro (DD/MM/AA).
  // Ex: '2025-05-10' → '10/05/25'
  const [ano, mes, dia] = evento.data.split('-')
  const dataFormatada = `${dia}/${mes}/${ano.slice(2)}`

  return (
    // Ao clicar no card, dispara onClick passando o evento completo para o App abrir o modal
    <div className={styles.card} onClick={() => onClick(evento)}>

      {/* Imagem do evento — ocupa toda a largura do card (282x237) */}
      <img src={evento.imagem} alt={evento.nome} className={styles.imagem} />

      {/* Área de texto com padding lateral e vertical */}
      <div className={styles.conteudo}>

        {/* Badge do tema — usa tag formatada ou fallback para o id do tema */}
        <span className={styles.tag}>{tema?.tag ?? evento.tema}</span>

        {/* Data formatada no padrão brasileiro */}
        <p className={styles.data}>{dataFormatada}</p>

        {/* Título do evento em Orbitron 25px */}
        <h3 className={styles.titulo}>{evento.nome}</h3>

        {/* Descrição truncada a 3 linhas via CSS line-clamp.
            O texto completo é exibido no modal ao clicar no card. */}
        <p className={styles.descricao}>{evento.descricao}</p>
      </div>
    </div>
  )
}

export default Card
