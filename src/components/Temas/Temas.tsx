import temas from '../../temas'
import styles from './Temas.module.css'

const Temas = () => {
  return (
    <div className={styles.temas}>
      {temas.map((tema) => (
        <section key={tema.id} className={styles.secao}>
          <h2>{tema.label}</h2>
        </section>
      ))}
    </div>
  )
}

export default Temas
