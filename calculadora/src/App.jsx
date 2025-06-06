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
    
    //valida se todos os campos foram preenchidos
    if (!day || !month || !year) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    //valida se a data de nascimento é válida ou no futuro
    if (birthDate > today || isNaN(birthDate.getTime())) {
      setError("Data inválida. Insira uma data válida no passado.");
      return;
    }

    //faz a diferença da data de nascimento com a data de hoje
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    //corrige a idade se o dia de nascimento for maior que o dia de hoje
    if (days < 0) {
      months--;
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += previousMonth.getDate();
    }
    //corrige a idade se o mês de nascimento for maior que o mês de hoje
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="age-calculator">
      <h2>Calculadora de Idade</h2>
      <h3>Descubra sua idade exata em anos, meses e dias</h3>
      
      <div className="form">
        <div className="input-container">
          <input
            type="number"
            placeholder="Dia"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            min="1"
            max="31"
          />
          <input
            type="number"
            placeholder="Mês"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            min="1"
            max="12"
          />
          <input
            type="number"
            placeholder="Ano"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <button className="calculate-button" onClick={calculateAge}>
          Calcular Idade
        </button>
      </div>
      
      {age && (
        <div className="result">
          <p><strong>{age.years}</strong> anos</p>
          <p><strong>{age.months}</strong> meses</p>
          <p><strong>{age.days}</strong> dias</p>
        </div>
      )}
    </div>
  );
}