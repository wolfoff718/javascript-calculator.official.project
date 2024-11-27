import React from "react";

function Button(props) {
  return (
    <button
      className="button"
      id={props.id}
      onClick={() => props.handleClick(props.value)} 
    >
      
      {props.value}
    </button>
  );
}

function Calculator() {
  const [input, setInput] = React.useState("0");

  const handleClick = (value) => {
    console.log(value);  
    setInput((prevInput) => {
      if (value === "C") {
        return "0";
      }
      if (value === "=") {
        try {
          let sanitizedInput = prevInput.replace(/[\+\-\*\/]{2,}/g, (match) => match[match.length - 1]);

          let result = eval(sanitizedInput);

          result = parseFloat(result.toFixed(4));

          return result.toString();
        } catch {
          return "Error";
        }
      }
      if (value === ".") {
        
        const lastNum = prevInput.split(/[\+\-\*\/]/).pop(); 
        if (lastNum.includes(".")) {
          return prevInput;  
        }
        return prevInput + value; 
      }

      const operators = ["+", "-", "*", "/"];
      const lastChar = prevInput.slice(-1);
      
      if (operators.includes(lastChar) && operators.includes(value)) {
        return prevInput;  
      }

      if (prevInput === "0" && value !== ".") {
        return value;
      }

      return prevInput + value;
    });
  };

  return (
    <div className="calculator">
      <div className="display" id="display">
        {input}
      </div>
      <div className="buttons">
        {/* Fila 1: C, /, * */}
        <Button id="clear" value="C" handleClick={handleClick} />
        <Button id="divide" value="/" handleClick={handleClick} />
        <Button id="multiply" value="*" handleClick={handleClick} />

        {/* Fila 2: 7, 8, 9, - */}
        <Button id="add" value="+" handleClick={handleClick} />
        <Button id="nine" value="9" handleClick={handleClick} />
        <Button id="eight" value="8" handleClick={handleClick} />
        <Button id="seven" value="7" handleClick={handleClick} />

        {/* Fila 3: 4, 5, 6, % */}
        <Button id="subtract" value="-" handleClick={handleClick} />
        <Button id="six" value="6" handleClick={handleClick} />
        <Button id="five" value="5" handleClick={handleClick} />
        <Button id="four" value="4" handleClick={handleClick} />

        {/* Fila 4: 1, 2,3, .  */}
        <Button id="decimal" value="." handleClick={handleClick} />
        <Button id="three" value="3" handleClick={handleClick} />
        <Button id="two" value="2" handleClick={handleClick} />
        <Button id="one" value="1" handleClick={handleClick} />

        {/* Fila 5: = */}
        <Button id="equals" value="=" handleClick={handleClick} />

        {/* Fila 6: 0 */}
        <Button id="zero" value="0" handleClick={handleClick} className="zero" />
      </div>
    </div>
  );
}

export default Calculator;