import React, { useState, useEffect } from "react";

const Index = () => {
  const [variable1, setVariable1] = useState("hola mundo, soy un estado");
  // cost [Leerlavariable, asignarle otro valor a la variable] = useState(valor inicial de la variable)
  // Todos los hook empiezan con el nombre use
  const [valorInput, setValorinput] = useState();

  // Efectos: ejecutar una función cada que una variable cambia
  // useEffect (()=>{Esta función se ejecuta cada vez que la variable a monitorear cambie}, [Variables que quiero monitorear])
  useEffect(() => {
    console.log("cambio la variable 1 y el valor es", variable1);
  }, [variable1]);

  return (
    <div className="fondo-beige">
      <div className="fondo-verde">
        <span>El valor de la variable es: </span>
        {variable1}
      </div>
      <div className="fondo-beige">
        <span>
          Valor del input es:
          {valorInput}
        </span>
      </div>
      <input
        value={valorInput}
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
