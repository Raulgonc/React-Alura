import temas from '../../temas'
import { Evento } from '../../types/Evento'
import Card from '../Card/Card'
import styles from './Temas.module.css'

interface TemasProps {
  eventos: Evento[]
}

const Temas = ({ eventos }: TemasProps) => {
  return (
    <div className={styles.temas}>
      {temas.map((tema) => {
        const eventosTema = eventos.filter((e) => e.tema === tema.id)
        return (
          <section key={tema.id} className={styles.secao}>
            <h2>{tema.label}</h2>
            <div className={styles.cards}>
              {eventosTema.map((evento) => (
                <Card key={evento.id} evento={evento} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default Temas
