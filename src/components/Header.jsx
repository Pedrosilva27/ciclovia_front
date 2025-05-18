import React, { useState } from "react";

const Header = ({ onLocationSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lista manual de localizações e imagens
  const locations = [
    {
      label: "Bragança Paulista",
      value: "Lago do Taboão",
      image: "/images/Lago_Taboão_Bragança_Paulista.png",
    },
    {
      label: "Ibirapuera",
      value: "Parque Ibirapuera",
      image: "/images/Parque_Ibirapuera.jpg",
    },
    { label: "Belo Horizonte", value: "bh", image: "/images/bh.png" },
  ];

  const handleSelect = (location) => {
    onLocationSelect(location);
    setIsModalOpen(false);
  };

  return (
    <div className="relative flex justify-end p-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Selecionar Localização
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Escolha uma Localização
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-red-500"
                aria-label="Fechar modal"
              >
                ✖
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {locations.map((loc) => (
                <div
                  key={loc.value}
                  onClick={() => handleSelect(loc.value)}
                  className="cursor-pointer hover:scale-105 hover:shadow-lg transition transform rounded-lg overflow-hidden border border-gray-300"
                >
                  <img
                    src={loc.image}
                    alt={loc.label}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-2 text-center text-gray-700 font-medium bg-gray-100">
                    {loc.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
