import React from "react";
import Card from "./components/Card";
import Map from "./components/Map";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Nome */}
      <div className="mt-1 ml-8">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-lg transition hover:brightness-200">
          Ciclovia Inteligente
        </h1>
      </div>

      {/* Cards - Mapa - Cards */}
      <div className="flex justify-center items-center flex-wrap gap-4 p-4">
        {/* Coluna da esquerda */}
        <div className="flex flex-col gap-4">
          <Card title="Temperatura" value="26" unit="°C" />
          <Card title="Umidade" value="70" unit="%" />
        </div>

        {/* Mapa central */}
        <div className="w-[800px] h-[700px]">
          <Map />
        </div>

        {/* Coluna da direita */}
        <div className="flex flex-col gap-4">
          <Card title="Luminosidade" value="850" unit="lux" />
          <Card title="Previsão" value="Chuva" unit="" />
        </div>
      </div>
    </div>
  );
}

export default App;
