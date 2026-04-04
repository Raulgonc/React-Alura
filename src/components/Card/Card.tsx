import { Evento } from '../../types/Evento'
import styles from './Card.module.css'

interface CardProps {
  evento: Evento
}

const Card = ({ evento }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imagem} />

      <div className={styles.conteudo}>
        <span className={styles.tag}>{evento.tema}</span>
        <p className={styles.data}>{evento.data}</p>
        <h3 className={styles.titulo}>{evento.nome}</h3>
        <p className={styles.descricao}>{evento.descricao}</p>
      </div>
    </div>
  )
}

export default Card
