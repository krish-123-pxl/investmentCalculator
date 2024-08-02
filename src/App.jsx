import Header from "./Components/Header"
import Results from "./Components/Results";
import UserInput from "./Components/UserInput"
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const isInputValid = userInput.duration >=1;
  function handleChange(identifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [identifier]: +newValue
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!isInputValid && <p className="center">Please Enter duration greater than 0.</p>}
      { isInputValid && <Results input={userInput}/>}
    </>
  )
}

export default App
