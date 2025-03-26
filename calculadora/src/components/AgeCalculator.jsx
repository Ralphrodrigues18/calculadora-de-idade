import { useState } from "react";
import "../styles.css"; // Importa o CSS externo

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) return;
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    setAge(age);
  };

  return (
    <div className="age-calculator">
      <h2>Calculadora de Idade</h2>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge}>Calcular Idade</button>
      {age !== null && <p className="age-result">Sua idade é: <strong>{age}</strong> anos</p>}
    </div>
  );
}
