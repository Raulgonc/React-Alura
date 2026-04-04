import styles from './Formulario.module.css'

const Formulario = () => {
  return (
    <section className={styles.formulario}>
      <form className={styles.form}>
        <h3 className={styles.titulo}>Preencha para criar um evento</h3>

        <div className={styles.campo}>
          <label htmlFor="nomeEvento">Qual o nome do evento</label>
          <input type="text" id="nomeEvento" placeholder="Summer Eletro Devs" />
        </div>

        <div className={styles.campo}>
          <label htmlFor="dataEvento">Data do evento</label>
          <input type="date" id="dataEvento" />
        </div>

        <div className={styles.campo}>
          <label htmlFor="temaEvento">Tema do evento</label>
          <select id="temaEvento">
            <option value="">Selecione um tema</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="design">Design</option>
            <option value="programacao">Programação</option>
            <option value="ia">Inteligência Artificial</option>
            <option value="seguranca">Segurança Digital</option>
          </select>
        </div>

        <button type="submit">Criar evento</button>
      </form>
    </section>
  )
}

export default Formulario
