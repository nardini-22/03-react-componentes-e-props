import React, { useState, useEffect } from 'react'

import Button from './components/button'
import Input from './components/input'
import InputAlt from './components/inputAlt'

import './App.css';

function App() {

  const numbers = [
    {
      number: 1,
      estilo: "number one"
    },
    {
      number: 2,
      estilo: "number two"
    },
    {
      number: 3,
      estilo: "number three"
    },
    {
      number: 4,
      estilo: "number four"
    },
    {
      number: 5,
      estilo: "number five"
    },
    {
      number: 6,
      estilo: "number six"
    },
    {
      number: 7,
      estilo: "number seven"
    },
    {
      number: 8,
      estilo: "number eight"
    },
    {
      number: 9,
      estilo: "number nine"
    }
  ]
  const zeroBtn = {
    number: 0,
    estilo: "number zero"
  }
  const operators = [
    {
      number: "/",
      estilo: "op divide"
    },
    {
      number: "*",
      estilo: "op mult"
    },
    {
      number: "-",
      estilo: "op minus"
    },
    {
      number: "+",
      estilo: "op plus"
    },
  ]

  const equal = {
    number: "=",
    estilo: "number equal"
  }
  const clearBtn = {
    number: "C",
    estilo: "op clear"
  }
  const decimalBtn = {
    number: ",",
    estilo: "number comma"
  }

  const [input, setInput] = useState('')
  const [inputAlt, setInputAlt] = useState('')
  const [operator, setOperator] = useState('')
  const [prevNum, setPrevNum] = useState('')
  const [curNum, setCurNum] = useState('')

  useEffect(() => {
    const equation = {
      '+': function (x, y) { return x + y },
      '-': function (x, y) { return x - y },
      '*': function (x, y) { return x * y },
      '/': function (x, y) { return x / y },
    }
    if (curNum !== '') {
      if (operator !== '') {
        let result = equation[operator](parseFloat(prevNum), parseFloat(curNum))
        setInput(result)
        setInputAlt(result)
        setOperator('')
        setCurNum('')
      }
    }
  }, [curNum, operator, prevNum])

  const addNumber = (e) => {
    if (input.length < 14) {
      if (e === "+" || e === "-" || e === "*" || e === "/") {
        setOperator(e)
        setInputAlt(inputAlt + e)
        console.log(e)
      } else {
        setInput(input + e)
        setInputAlt(inputAlt + e)
        console.log(input)
      }
    }
  }
  const addZero = (e) => {
    if (input !== '') {
      setInput(input + e)
      setInputAlt(inputAlt + e)
      console.log(input)
    }
  }

  const addDecimal = (e) => {
    if (input.indexOf(',') < 0) {
      setInput(input + e)
      setInputAlt(inputAlt + e)
      console.log(input)
    }
  }

  const solve = () => {
    setCurNum(input)
  }

  const operation = (e) => {
    if (inputAlt.indexOf('+') < 0 && inputAlt.indexOf('-') < 0 && inputAlt.indexOf('*') < 0 && inputAlt.indexOf('/') < 0 && inputAlt !== '') {
      setPrevNum(input)
      setInput('')
      setInputAlt(inputAlt + e)
      setOperator(e)
    }
  }

  const clear = () => {
    setInput('')
    setInputAlt('')
    setOperator('')
    setCurNum('')
    setPrevNum('')
  }

  return (
    <div className="container">
      <div className="topPart">
        <Input
          className="input"
          value={input}
        />

        <InputAlt
          className="inputAlt"
          value={inputAlt}
        />
      </div>

      <div className="calculatorBtn">
        {numbers.map((element) => {
          return (
            <Button
              style={element.estilo}
              value={element.number}
              action={addNumber}
            />
          )
        })}

        <div className="opContainer">
          <Button
            style={clearBtn.estilo}
            value={clearBtn.number}
            action={clear}
          />

          {operators.map((operators) => {
            return (
              <Button
                style={operators.estilo}
                value={operators.number}
                action={operation}
              />
            )
          })}
        </div>

        <Button
          style={equal.estilo}
          value={equal.number}
          action={solve}
        />

        <Button
          style={zeroBtn.estilo}
          value={zeroBtn.number}
          action={addZero}
        />

        <Button
          style={decimalBtn.estilo}
          value={decimalBtn.number}
          action={addDecimal}
        />
      </div>
    </div>
  );
}

export default App;
