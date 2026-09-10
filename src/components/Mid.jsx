function Mid({cursos}) {
  return (
    <div className="mid" id="cursos">
      <p className="mid__heading">Nuestros Cursos</p>
      <p className="subheading">Elige el camino que mejor se adapte a ti</p>  
      
      <div className="cursos">
        {cursos.map((curso) =>
          <div className="caja" key={curso.id}>
            <p className="caja__emogi">{curso.emogi}</p>
            <p className="caja__heading">{curso.titulo}</p>
            <p className="subheading">{curso.descripcion}</p>
            <button className="button button--curso">{curso.buttonText}</button>
          </div>)}
      </div>
    </div>
  )
}

export default Mid

//hero