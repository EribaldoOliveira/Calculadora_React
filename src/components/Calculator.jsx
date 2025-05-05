import React, { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [pendingOperation, setPendingOperation] = useState(null);
  const [pendingValue, setPendingValue] = useState(null);
  const [completeOperation, setCompleteOperation] = useState("");

  const keypadNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operations = ["+", "-", "*", "/"];

  const handleClick = (val) => {
    setCurrentValue((prevValue) => {
      if (prevValue === "0") {
        return val;
      } else {
        return prevValue + val;
      }
    });

    setCompleteOperation((prevOperation) => prevOperation + val);
  };

  const handleOperation = (operation) => {
    setCompleteOperation(currentValue + " " + operation);
    setPendingOperation(operation);
    setPendingValue(currentValue);
    setCurrentValue("0");
  };

  const handleCalculate = () => {
    if (!pendingOperation || !pendingValue) return;

    const num1 = parseFloat(pendingValue);
    const num2 = parseFloat(currentValue);
    let result;

    switch (pendingOperation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          setCurrentValue("Error");
          setCompleteOperation("Error");
          setPendingOperation(null);
          setPendingValue(null);
          return;
        }
        break;
      default:
        return;
    }

    setCompleteOperation(
      `${pendingValue} ${pendingOperation} ${currentValue} = ${result}`
    );
    setCurrentValue(result.toString());
    setPendingOperation(null);
    setPendingValue(null);
  };

  const handleClear = () => {
    setCurrentValue("0");
    setPendingOperation(null);
    setPendingValue(null);
    setCompleteOperation("");
  };

  const handleBackspace = () => {
    setCurrentValue((prevValue) =>
      prevValue.length === 1 ? "0" : prevValue.slice(0, -1)
    );
    setCompleteOperation((prev) =>
      prev.length === 1 ? "" : prev.slice(0, -1)
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      if (!isNaN(key)) {
        handleClick(key);
      } else if (operations.includes(key)) {
        handleOperation(key);
      } else if (key === "Enter" || key === "=") {
        event.preventDefault();
        handleCalculate();
      } else if (key === "Escape" || key.toLowerCase() === "c") {
        event.preventDefault();
        handleClear();
      } else if (key === "Backspace") {
        event.preventDefault();
        handleBackspace();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentValue, pendingOperation, pendingValue]);

  return (
    <div className="calculator">
  <h2>Calculadora React</h2>
  <h4 className="dev-signature">Dev. React: Eribaldo Oliveira</h4>
  <div className="complete-operation">
    <span>{completeOperation}</span>
   
  </div>

      <div className="display">{currentValue}</div>
      <div className="buttons">
        <button onClick={handleClear}>AC</button>
        {keypadNumbers.map((num) => (
          <button key={num} onClick={() => handleClick(num)}>
            {num}
          </button>
        ))}
        {operations.map((operation) => (
          <button key={operation} onClick={() => handleOperation(operation)}>
            {operation}
          </button>
        ))}
        {/* Botão Backspace (Laranja) */}
        <button onClick={handleBackspace}>⌫</button>

        {/* Botão = (Verde, ocupa a largura inteira) */}
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
    
  );
};

export default Calculator;
