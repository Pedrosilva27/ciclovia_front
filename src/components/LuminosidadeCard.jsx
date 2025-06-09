// src/components/LuminosidadeCard.jsx
import React from "react";
import Card from "./Card";

const interpretarLuminosidade = (valor) => {
  if (valor == null) return "–";
  if (valor > 2000) return "Ambiente Muito Claro";
  if (valor > 500) return "Ambiente Claro";
  if (valor > 100) return "Pouca Luz";
  return "Ambiente Escuro";
};

const LuminosidadeCard = ({ luz }) => {
  return (
    <Card title="Luminosidade" value={interpretarLuminosidade(luz)} unit="" />
  );
};

export default LuminosidadeCard;
