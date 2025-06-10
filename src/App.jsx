import React from "react";
import Card from "./components/Card";
import Map from "./components/Map";
import Header from "./components/Header";
import useSensors from "./hooks/useSensors";
import LuminosidadeCard from "./components/LuminosidadeCard";
import DicaCard from "./components/DicaCard";

function App() {
  const { temp, umity, luz } = useSensors();
  console.log("Render do App - temp:", temp, "umity:", umity, "luz:", luz);

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
          <Card
            title="Temperatura"
            value={temp != null ? temp.toFixed(2) : "–"}
            unit="°C"
          />
          <Card
            title="Umidade"
            value={umity != null ? umity.toFixed(2) : "–"}
            unit="%"
          />
        </div>

        {/* Mapa central */}
        <div className="w-[800px] h-[700px]">
          <Map />
        </div>

        {/* Coluna da direita */}
        <div className="flex flex-col gap-4">
          <LuminosidadeCard luz={luz} />
          <DicaCard />
        </div>
      </div>
    </div>
  );
}

export default App;
