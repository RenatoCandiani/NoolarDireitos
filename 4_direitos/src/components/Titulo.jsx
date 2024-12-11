import React from "react";

function Titulo() {
  return (
    <div className="titulo-container">
      <b className="titulo">Direitos </b>
      <span className="e-titulo">e</span>
      <b className="titulo"> Deveres</b>
      <span className="e-titulo"> dos Imigrantes</span>

      <p className="subtitulo">
        Você sabia? Todos os <b className="imigrantes">imigrantes </b>têm
        direito a serviços essenciais, como saúde e educação!
      </p>
    </div>
  );
}

export default Titulo;
