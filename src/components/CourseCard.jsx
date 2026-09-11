function CourseCard({ emogi, titulo, descripcion, buttonText }) { 
    return (
        <div className="cursos">
          <div className="caja">
            <p className="caja__emogi">{emogi}</p>
            <p className="caja__heading">{titulo}</p>
            <p className="subheading">{descripcion}</p>
            <button className="button button--curso">{buttonText}</button>
          </div>
      </div>
    )
}

export default CourseCard