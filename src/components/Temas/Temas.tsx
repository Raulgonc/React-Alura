import temas from '../../temas'
import { Evento } from '../../types/Evento'
import Card from '../Card/Card'
import styles from './Temas.module.css'

interface TemasProps {
  eventos: Evento[] // Lista completa de eventos vinda do App
}

// Renderiza uma seção para cada tema cadastrado em temas.ts.
// Para cada tema, filtra os eventos correspondentes e exibe seus Cards.
const Temas = ({ eventos }: TemasProps) => {
  return (
    <div className={styles.temas}>
      {temas.map((tema) => {
        // Filtra apenas os eventos cujo campo "tema" bate com o id do tema atual
        const eventosTema = eventos.filter((e) => e.tema === tema.id)

        return (
          <section key={tema.id} className={styles.secao}>
            {/* Título da seção usando o nome completo do tema */}
            <h2>{tema.label}</h2>

            {/* Grade de cards — só renderiza se houver eventos no tema */}
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
