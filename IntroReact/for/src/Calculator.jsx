import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false);

  const handleNumber = (number) => {
    if (waitingForSecondNumber) {
      setDisplay(number);
      setWaitingForSecondNumber(false);
    } else {
      setDisplay(display === "0" ? number : display + number);
    }
  };

  const handleOperator = (op) => {
    const number = parseFloat(display);

    if (firstNumber === null) {
      setFirstNumber(number);
    } else if (operator) {
      const result = calculate(firstNumber, number, operator);

      setDisplay(String(result));
      setFirstNumber(result);
    }

    setOperator(op);
    setWaitingForSecondNumber(true);
  };

  const calculate = (num1, num2, op) => {
    switch (op) {
      case "+":
        return num1 + num2;

      case "-":
        return num1 - num2;

      case "*":
        return num1 * num2;

      case "/":
        return num2 === 0 ? "Error" : num1 / num2;

      default:
        return num2;
    }
  };

  const handleEquals = () => {
    if (firstNumber === null || operator === null) {
      return;
    }

    const secondNumber = parseFloat(display);

    const result = calculate(
      firstNumber,
      secondNumber,
      operator
    );

    setDisplay(String(result));
    setFirstNumber(null);
    setOperator(null);
    setWaitingForSecondNumber(true);
  };

  const clearCalculator = () => {
    setDisplay("0");
    setFirstNumber(null);
    setOperator(null);
    setWaitingForSecondNumber(false);
  };

  const handleDecimal = () => {
    if (waitingForSecondNumber) {
      setDisplay("0.");
      setWaitingForSecondNumber(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleBackspace = () => {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  return (
    <div className="calculator">

      <div className="display">
        {display}
      </div>

      <div className="buttons">

        <button
          className="clear"
          onClick={clearCalculator}
        >
          C
        </button>

        <button onClick={handleBackspace}>
          ⌫
        </button>

        <button onClick={() => handleOperator("/")}>
          ÷
        </button>

        <button onClick={() => handleOperator("*")}>
          ×
        </button>

        <button onClick={() => handleNumber("7")}>
          7
        </button>

        <button onClick={() => handleNumber("8")}>
          8
        </button>

        <button onClick={() => handleNumber("9")}>
          9
        </button>

        <button onClick={() => handleOperator("-")}>
          -
        </button>

        <button onClick={() => handleNumber("4")}>
          4
        </button>

        <button onClick={() => handleNumber("5")}>
          5
        </button>

        <button onClick={() => handleNumber("6")}>
          6
        </button>

        <button onClick={() => handleOperator("+")}>
          +
        </button>

        <button onClick={() => handleNumber("1")}>
          1
        </button>

        <button onClick={() => handleNumber("2")}>
          2
        </button>

        <button onClick={() => handleNumber("3")}>
          3
        </button>

        <button
          className="equals"
          onClick={handleEquals}
        >
          =
        </button>

        <button
          className="zero"
          onClick={() => handleNumber("0")}
        >
          0
        </button>

        <button onClick={handleDecimal}>
          .
        </button>

      </div>
    </div>
  );
}

export default Calculator;