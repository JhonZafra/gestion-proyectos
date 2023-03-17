import { useEffect, useState } from "react";
import React from "react";

const Contacto = () => {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [suma, setSuma] = useState(0);


  useEffect(() => {
    console.log("Cambio alguno de los valores y son", valor1, valor2);
    setSuma(valor1+valor2);
  }, [valor1, valor2]);


  return (
    <div>
      <input
        value={valor1}
        onChange={(e) => {
          setValor1(e.target.value);
        }}
        type="number"
        placeholder="Valor1"
      />
      <input
        value={valor2}
        onChange={(e) => {
          setValor2(e.target.value);
        }}
        type="number"
        placeholder="Valor2"
      />
      <span>La suma de los valores 1 y es:{suma}</span>
    </div>
  );
};

export default Contacto;
