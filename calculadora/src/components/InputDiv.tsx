import React from "react";

export default function InputDiv() {
  return (
    <div className="form">
        <input
          type="number"
          placeholder="Dia"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <input
          type="number"
          placeholder="Mês"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <input
          type="number"
          placeholder="Ano"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button onClick={calculateAge}>Calcular</button>
      </div>
  );
}