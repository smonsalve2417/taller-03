import { useState } from 'react'
import TopBar from './components/Header'
import Hero from './components/Hero'
import './App.css'
import Mid from './components/Mid'
import Bottom from './components/Bottom'
import Footer from './components/Footer'


const cursos = [
  {
    id: 1,
    emogi: "⚛️",
    titulo: "React basico",
    descripcion: "Componentes, props, estado y eventos. Todo lo que necesitas para empezar.",
    buttonText: "Principiante"
  },
  {
    id: 2,
    emogi: "🔁",
    titulo: "React Hooks",
    descripcion: "Profundiza en useState, useEffect y crea tus propios custom hooks.",
    buttonText: "Intermedio"
  },
  {
    id: 3,
    emogi: "📂",
    titulo: "Estado Global",
    descripcion: "Gestiona el estado con Context API y aprende cuando usarlo.",
    buttonText: "Intermedio"
  },
  {
    id: 4,
    emogi: "🚀",
    titulo: "React Avanzando",
    descripcion: "Rendimiento, patrones avanzados y arquitectura para proyectos grandes.",
    buttonText: "Avanzado"
  }
]

function App() {

  return (
    <>
      <TopBar />
      <Hero />
      <Mid cursos={cursos} />
      <Bottom />
      <Footer />
    </>
  )
}

export default App
