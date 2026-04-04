import { useState } from 'react'
import { Evento } from '../../types/Evento'
import styles from './Formulario.module.css'

interface FormularioProps {
  onAdicionarEvento: (evento: Evento) => void
}

const Formulario = ({ onAdicionarEvento }: FormularioProps) => {
  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [tema, setTema] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!nome || !data || !tema) return
    onAdicionarEvento({ id: Date.now(), nome, data, tema, descricao: '' })
    setNome('')
    setData('')
    setTema('')
  }

  return (
    <section className={styles.formulario}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.titulo}>Preencha para criar um evento</h3>

        <div className={styles.campo}>
          <label htmlFor="nomeEvento">Qual o nome do evento</label>
          <input
            type="text"
            id="nomeEvento"
            placeholder="Summer Eletro Devs"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="dataEvento">Data do evento</label>
          <input
            type="date"
            id="dataEvento"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="temaEvento">Tema do evento</label>
          <select
            id="temaEvento"
            value={tema}
            onChange={(e) => setTema(e.target.value)}
          >
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
