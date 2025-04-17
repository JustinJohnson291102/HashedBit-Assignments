import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [history, setHistory] = useState('');
  const [clearNext, setClearNext] = useState(false);

  const handleNumber = (num) => {
    if (display === '0' || clearNext) {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
    setClearNext(false);
  };

  const handleOperator = (op) => {
    let updatedHistory = history;

    if (clearNext) {
      // Replace last operator if already entered
      const parts = history.trim().split(' ');
      if (parts.length > 1) {
        parts[parts.length - 1] = op;
        updatedHistory = parts.join(' ');
      }
    } else {
      updatedHistory = history + (history ? ' ' : '') + display + ' ' + op;
    }

    setHistory(updatedHistory.trim());
    setClearNext(true);
    setDisplay(''); // ✅ Fix to avoid repeating number after operator
  };

  const calculateResult = () => {
    const expression = history + ' ' + display;
    try {
      const result = eval(expression);
      setDisplay(result.toString());
      setHistory('');
      setClearNext(true);
    } catch {
      setDisplay('Error');
      setHistory('');
    }
  };

  const clearAll = () => {
    setDisplay('0');
    setHistory('');
    setClearNext(false);
  };

  const clearEntry = () => {
    setDisplay('0');
    setClearNext(false);
  };

  const backspace = () => {
    if (clearNext) {
      setDisplay('0');
      setClearNext(false);
    } else if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const toggleSign = () => {
    if (display !== '0') {
      setDisplay((parseFloat(display) * -1).toString());
    }
  };

  const inverse = () => {
    const num = parseFloat(display);
    if (num !== 0) {
      setDisplay((1 / num).toString());
    } else {
      setDisplay('Error');
    }
  };

  const percent = () => {
    setDisplay((parseFloat(display) / 100).toString());
  };

  const square = () => {
    setDisplay((Math.pow(parseFloat(display), 2)).toString());
  };

  const squareRoot = () => {
    setDisplay((Math.sqrt(parseFloat(display))).toString());
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="history">{history}</div>
        <div className="current">{display || '0'}</div>
      </div>
      <div className="buttons">
        <button onClick={percent}>%</button>
        <button onClick={clearEntry}>CE</button>
        <button onClick={clearAll}>C</button>
        <button onClick={backspace}>⌫</button>

        <button onClick={inverse}>1/x</button>
        <button onClick={square}>x²</button>
        <button onClick={squareRoot}>√x</button>
        <button className="operator" onClick={() => handleOperator('/')}>/</button>

        <button onClick={() => handleNumber('7')}>7</button>
        <button onClick={() => handleNumber('8')}>8</button>
        <button onClick={() => handleNumber('9')}>9</button>
        <button className="operator" onClick={() => handleOperator('*')}>*</button>

        <button onClick={() => handleNumber('4')}>4</button>
        <button onClick={() => handleNumber('5')}>5</button>
        <button onClick={() => handleNumber('6')}>6</button>
        <button className="operator" onClick={() => handleOperator('-')}>-</button>

        <button onClick={() => handleNumber('1')}>1</button>
        <button onClick={() => handleNumber('2')}>2</button>
        <button onClick={() => handleNumber('3')}>3</button>
        <button className="operator" onClick={() => handleOperator('+')}>+</button>

        <button onClick={toggleSign}>+/-</button>
        <button onClick={() => handleNumber('0')}>0</button>
        <button onClick={() => handleNumber('.')}>.</button>
        <button className="operator" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
