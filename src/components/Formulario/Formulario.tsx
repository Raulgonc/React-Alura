import styles from './Formulario.module.css'

const Formulario = () => {
  return (
    <section className={styles.formulario}>
      <form className={styles.form}>
        <h3 className={styles.titulo}>Preencha para criar um evento</h3>

        <div className={styles.campo}>
          <label htmlFor="nomeEvento">Qual o nome do evento</label>
          <input type="text" id="nomeEvento" placeholder="Digite o nome do evento" />
        </div>

        <div className={styles.campo}>
          <label htmlFor="dataEvento">Data do evento</label>
          <input type="date" id="dataEvento" />
        </div>

        <div className={styles.campo}>
          <label htmlFor="temaEvento">Tema do evento</label>
          <input type="text" id="temaEvento" placeholder="Digite o tema do evento" />
        </div>

        <button type="submit">Criar evento</button>
      </form>
    </section>
  )
}

export default Formulario
