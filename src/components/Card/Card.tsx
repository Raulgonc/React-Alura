import { Evento } from '../../types/Evento'
import temas from '../../temas'
import styles from './Card.module.css'

interface CardProps {
  evento: Evento
}

const Card = ({ evento }: CardProps) => {
  const tema = temas.find((t) => t.id === evento.tema)
  const [ano, mes, dia] = evento.data.split('-')
  const dataFormatada = `${dia}/${mes}/${ano.slice(2)}`

  return (
    <div className={styles.card}>
      <img src={evento.imagem} alt={evento.nome} className={styles.imagem} />

      <div className={styles.conteudo}>
        <span className={styles.tag}>{tema?.tag ?? evento.tema}</span>
        <p className={styles.data}>{dataFormatada}</p>
        <h3 className={styles.titulo}>{evento.nome}</h3>
        <p className={styles.descricao}>{evento.descricao}</p>
      </div>
    </div>
  )
}

export default Card
