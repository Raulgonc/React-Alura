import { useState } from 'react'
import { Evento } from '../../types/Evento'
import styles from './Formulario.module.css'

interface FormularioProps {
  onAdicionarEvento: (evento: Evento) => void // Callback recebido do App para adicionar o evento ao estado global
}

// Formulário de criação de eventos.
// Gerencia seus próprios estados locais e os envia ao App via prop ao submeter.
const Formulario = ({ onAdicionarEvento }: FormularioProps) => {
  // Estados locais para cada campo do formulário
  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [tema, setTema] = useState('')
  const [descricao, setDescricao] = useState('')
  const [imagem, setImagem] = useState('')

  // Converte o arquivo selecionado em uma URL temporária do navegador (blob:).
  // Essa URL pode ser usada diretamente como src de uma <img> sem precisar de upload.
  const handleImagem = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setImagem(URL.createObjectURL(file))
  }

  // Chamado ao submeter o formulário.
  // Monta o objeto Evento e o envia ao App via prop, depois limpa todos os campos.
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    // Validação mínima: nome, data e tema são obrigatórios
    if (!nome || !data || !tema) return

    // Date.now() gera um id único baseado no timestamp atual em milissegundos
    onAdicionarEvento({ id: Date.now(), nome, data, tema, descricao, imagem })

    // Reseta os campos após o envio
    setNome('')
    setData('')
    setTema('')
    setDescricao('')
    setImagem('')
  }

  return (
    <section className={styles.formulario}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.titulo}>Preencha para criar um evento</h3>

        {/* Campo: Nome do evento */}
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

        {/* Campo: Data — input nativo tipo date, retorna string no formato YYYY-MM-DD */}
        <div className={styles.campo}>
          <label htmlFor="dataEvento">Data do evento</label>
          <input
            type="date"
            id="dataEvento"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>

        {/* Campo: Tema — select ligado ao array de temas via values correspondentes aos ids */}
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

        {/* Campo: Descrição — textarea com limite de 500 caracteres e contador visível */}
        <div className={styles.campo}>
          <label htmlFor="descricaoEvento">Descrição do evento</label>
          <textarea
            id="descricaoEvento"
            placeholder="Descreva o evento..."
            value={descricao}
            maxLength={500}
            onChange={(e) => setDescricao(e.target.value)}
          />
          {/* Contador dinâmico que mostra quantos caracteres foram usados */}
          <span className={styles.contador}>{descricao.length}/500</span>
        </div>

        {/* Campo: Imagem — input file oculto controlado por um label estilizado.
            O label aciona o input ao ser clicado (via htmlFor), permitindo estilização livre. */}
        <div className={styles.campo}>
          <label htmlFor="imagemEvento">Imagem do evento</label>
          <label htmlFor="imagemEvento" className={styles.inputFile}>
            {imagem ? 'Imagem selecionada' : 'Escolher imagem'}
          </label>
          <input
            type="file"
            id="imagemEvento"
            accept="image/*"
            onChange={handleImagem}
            className={styles.inputFileEscondido}
          />
        </div>

        <button type="submit">Criar evento</button>
      </form>
    </section>
  )
}

export default Formulario
