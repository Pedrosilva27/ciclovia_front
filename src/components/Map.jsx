import React from "react";
import Header from "./Header";

function Map() {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 border border-gray-200 w-full h-full flex items-center justify-center">
      <img
        src="/images/Lago_Taboão_Bragança_Paulista.png"
        alt="Mapa da Ciclovia"
        className="object-contain max-w-full max-h-full rounded-xl"
      />
    </div>
  );
}

export default Map;
