import { useState, useEffect } from "react";
import axios from "axios";

const useSensors = () => {
  const [temp, setTemp] = useState(null);
  const [umity, setUmity] = useState(null);
  const [luz, setLuz] = useState(null);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await axios.get(
          "https://ciclovia-bkend.onrender.com/sensors/api/summary"
        );
        const data = response.data;
        console.log("Dados recebidos:", data);
        setTemp(data.averageTemperature);
        setUmity(data.averageHumidity);
        setLuz(data.currentLight);
      } catch (error) {
        console.error("Erro ao buscar dados do backend:", error);
      }
    };

    fetchSensorData(); // Chama na montagem

    const interval = setInterval(fetchSensorData, 60000); // Atualiza a cada 1 min

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  return { temp, umity, luz };
};

export default useSensors;
