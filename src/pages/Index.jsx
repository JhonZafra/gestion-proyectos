import React, { useState, useEffect } from "react";

const Index = () => {
  const [variable1, setVariable1] = useState("hola mundo, soy un estado");
  const [valorInput, setValorinput] = useState();

useEffect(() => {
 console.log('cambio la variable 1')
}, [variable1])

  return (
    <div className="fondo-azul">
      <div className="fondo-verde">
        <span>El valor de la variable es: </span>
        {variable1}
      </div>
      <input
        valor={valorInput}
        onChange={(e) => {
          setValorinput(e.target.value);
        }}
        type="text"
        placeholder="Ingrese el nuevo valor de la variable"
      />
      <button
        onClick={() => {
          setVariable1(valorInput);
        }}
      >
        Haz click acá
      </button>
    </div>
  );
};

export default Index;
