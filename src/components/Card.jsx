import React from "react";

function Card({ title, value, unit }) {
  return (
    <div className="bg-gray-300 shadow-lg rounded-2xl p-8 m-4 w-96 h-60 text-center border border-gray-300 flex flex-col justify-center items-center transition transform hover:scale-105 hover:brightness-110 ">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-4xl font-bold text-blue-600">
        {value} <span className="text-lg text-gray-800">{unit}</span>
      </p>
    </div>
  );
}

export default Card;
