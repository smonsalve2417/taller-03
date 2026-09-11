import CourseCard from "./CourseCard"



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

function Mid() {
  return (
    <div className="mid" id="cursos">
      <p className="mid__heading">Nuestros Cursos</p>
      <p className="subheading">Elige el camino que mejor se adapte a ti</p>  
      
      <div className="cursos">
        {cursos.map((curso) =>
          <CourseCard
            key={curso.id}
            emogi={curso.emogi}
            titulo={curso.titulo}
            descripcion={curso.descripcion}
            buttonText={curso.buttonText}
          />
        )}
      </div>
    </div>
  )
}

export default Mid

//hero