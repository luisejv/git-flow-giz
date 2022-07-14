import React, { useEffect, useState } from "react";

const Lista = ({ datos }: { datos: () => number[] }) => {
  const [numeros, setNumeros] = useState<number[]>([]);

  useEffect(() => {
    setNumeros(datos());
    console.log("Actualizando datos");
  }, [datos]);

  return (
    <div>
      {numeros.map((numero) => (
        <div key={numero}>{numero}</div>
      ))}
    </div>
  );
};

export default Lista;
