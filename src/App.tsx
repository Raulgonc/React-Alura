import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Formulario from './components/Formulario/Formulario'
import Temas from './components/Temas/Temas'
import { Evento } from './types/Evento'

function App() {
  const [eventos, setEventos] = useState<Evento[]>([])

  const adicionarEvento = (evento: Evento) => {
    setEventos([...eventos, evento])
  }

  return (
    <>
      <Header />
      <Hero />
      <Formulario onAdicionarEvento={adicionarEvento} />
      <Temas eventos={eventos} />
    </>
  )
}

export default App
