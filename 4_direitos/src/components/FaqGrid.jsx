import React from "react";

function FaqGrid({ faqCards }) {
  return (
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
  );
}

export default FaqGrid;
