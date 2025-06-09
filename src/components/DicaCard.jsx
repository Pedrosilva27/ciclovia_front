// src/components/DicaCard.jsx
import React from "react";
import Card from "./Card";

const DicaCard = () => {
  const dicas = [
    "Use sempre o capacete!",
    "Verifique os freios da bicicleta antes de sair.",
    "Sinalize suas mudanças de direção.",
    "Mantenha-se visível à noite com luzes e refletores.",
    "Evite fones de ouvido ao pedalar.",
    "Hidrate-se bem antes e depois do percurso.",
    "Pedale com atenção redobrada em dias chuvosos.",
    "Respeite os pedestres e os semáforos.",
    "Revise sua bicicleta periodicamente.",
    "Evite andar muito próximo ao meio-fio.",
  ];
  const dica = dicas[Math.floor(Math.random() * dicas.length)];

  return <Card title="Dica do Dia" value={dica} unit="" />;
};

export default DicaCard;
