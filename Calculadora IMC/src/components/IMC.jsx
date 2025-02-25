import React from "react";

function IMC() {
  return (
    <>
      <h1>Calculadora IMC</h1>
      <form onSubmit>
        <label htmlFor="altura">Altura (m)</label>
        <input
          type="number"
          name="altura"
          id="altura"
          placeholder="Digite sua Altura"
          step={0.01}
          required
        />
        <label htmlFor="peso">Peso (kg)</label>
        <input
          type="number"
          name="peso"
          id="peso"
          placeholder="Digite seu peso"
          step={0.1}
          required
        />
        <button type="submit">Calcular</button>
      </form>
    </>
  );
}

export default IMC;
