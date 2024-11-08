import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Result from './components/Result.jsx';
import { useState } from 'react';
import { calculateInvestmentResults } from './util/investment.js'
import { formatter } from './util/investment.js';

const initialResult = [];


function App() {
  const [userInput , setUserInput] = useState({ initialInvestment: 10000,
    annualInvestment : 12000,
    expectedReturn : 500,
    duration: 5
  })

  function handleChange (inputIdentifier , newValue){
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      }
    })
  }
  
  const currTable = calculateInvestmentResults(userInput);
  
  
  return (
    <>
    <Header/>
    <UserInput onChangeInput={handleChange} userInput={userInput} />
    <Result input={userInput}/>

    </>
  )
}

export default App
