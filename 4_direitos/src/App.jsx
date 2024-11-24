import React from "react";
import "./App.css"; // Importação do arquivo CSS

function App() {
  return (
    <div className="container">
      <img className="documentoimg" src="./images/emprego.png" alt="" />

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

      <img className="fundo1" src="./images/fundo.png" alt="" />

      <div className="tudo">
        <img className="fundo2" src="./images/fundo2.png" alt="" />

        <div className="faq-grid">
          {faqCards.map(({ front, back, img }, index) => (
            <div key={index} className={`pergunta-resposta card-${index + 1}`}>
              <div className="card">
                <div className="card-front">
                  {front}
                  {img && <img className="card-img" src={img} alt="" />}
                </div>
                <div className="card-back">{back}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="espacador"></div>

        <div className="rectangle-div"></div>
        <div className="rectangle-container">
          <span className="rectangle-branco">
            Conheça e providencie de forma correta para que tenha uma
          </span>
          <b className="rectangle-verde"> integração adequada</b>
          <span className="rectangle-branco"> e </span>
          <b className="rectangle-amarelo">tranquila </b>
          <span className="rectangle-branco">no pais!</span>
        </div>

        <div className="faq-grid2">
          {faqCards2.map(({ front, back }, index) => (
            <div
              key={index}
              className={`pergunta-resposta2 card-${index + 10}`}
            >
              <div className="card">
                <div className="card-front">{front}</div>
                <div className="card-back">{back}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Dados dos cartões
const faqCards = [
  {
    front: "Direitos Trabalhistas",
    back: "Todos os imigrantes têm direito a condições de trabalho justas, remuneração adequada e proteção contra demissão arbitrária.",
  },
  {
    front: "Liberdade de Expressão",
    back: "O direito de se expressar livremente e participar da vida política e social.",
  },
  {
    front: "Acesso a Justiça",
    back: "Todos os imigrantes têm o direito de buscar assistência jurídica e acesso ao sistema judiciário.",
  },
  {
    front: "Direito à vida e à integridade Física",
    img: "./images/registro.png",
    back: "Todos têm o direito à proteção contra violência e abuso.",
  },
  {
    front: "Educação",
    img: "./images/crime.png",
    back: "Todos os imigrantes têm direito à educação, incluindo o acesso a escolas públicas para crianças e adolescentes.",
  },
  {
    front: "Saúde",
    img: "./images/casamento.png",
    back: "Todos os Imigrantes têm direito a atendimento médico pelo Sistema Único de Saúde (SUS).",
  },
  {
    front: "Direito à Liberdade de movimento",
    img: "./images/casamento.png",
    back: "Liberdade para se deslocar dentro do território nacional.",
  },
  {
    front: "Direito á Habitação",
    img: "./images/casamento.png",
    back: "Acesso a condições de moradia dignas.",
  },
  {
    front: "Proteção contra Discriminação",
    img: "./images/casamento.png",
    back: "Proibição de discriminação com base na nacionalidade, raça, etnia ou religião.",
  },
];

const faqCards2 = [
  {
    front: "Respeitar as leis e regulamentos do país",
    back: "Os imigrantes devem cumprir as leis do Brasil, assim como qualquer outro cidadão, e respeitar as regras estabelecidas pelas autoridades locais.",
  },
  {
    front: "Respeitar a cultura e tradições locais",
    back: "É importante que os imigrantes respeitem a cultura, os costumes e as tradições do Brasil, integrando-se à sociedade de forma respeitosa e pacífica.",
  },
  {
    front: "Contribuir para o desenvolvimento do país",
    back: "Os imigrantes devem contribuir para o desenvolvimento econômico e social do Brasil, através do trabalho e do respeito às leis.",
  },
  {
    front: "Regularizar sua situação migratória",
    back: "Os imigrantes devem regularizar sua situação migratória no Brasil, obtendo os documentos necessários junto às autoridades responsáveis.",
  },
];

export default App;
