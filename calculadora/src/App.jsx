import { useState } from "react";
import "./index.css";

export default function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");

  const calculateAge = () => {
    setError("");
    const birthDate = new Date(`${year}-${month}-${day}`);

    // Verifica se a data é inválida ou está no futuro
    if (isNaN(birthDate.getTime()) || birthDate > new Date()) {
      setError("Data inválida. Insira uma data válida no passado.");
      return;
    }
    //calcula a diferença entre a data de hj e a data de nascimento
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    //se o dia de hj for menor que o dia de nascimento
    //subtrai 1 mês e soma a quantidade de dias do mês anterior
    
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
    //se o mês de hj for menor que o mês de nascimento subtrai 1 ano e soma 12 meses
    if (months < 0) {
      years--;
      months += 12;
    }
    // guarda o valor final
    setAge({ years, months, days });
  };

  return (
    <div className="app">
      <h2>Calculadora de Idade</h2>
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
      {age && (
        <div className="result">
          <p>
            <strong>{age.years}</strong> anos
          </p>
          <p>
            <strong>{age.months}</strong> meses
          </p>
          <p>
            <strong>{age.days}</strong> dias
          </p>
        </div>
      )}
    </div>
  );
}
