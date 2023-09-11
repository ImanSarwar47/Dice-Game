import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from '../RoleDice/RoleDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../../styled/Button'
import Rules from '../Rules/Rules'
const GamePlay = () => {
  const[score,setScore] = useState(0);
  const [SelectedNumber,setSelectedNumber] = useState();
  const[currentNumber,setCurrentNumber] = useState(1);
  const [error,setError] = useState();
  const[showRules,setShowRules] = useState(false);


  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const rollDice=()=>{
    if(!SelectedNumber){
      setError("You have not selected any number")
      return
    }
  const randomNumber = getRandomArbitrary(1,7);
  setCurrentNumber((prev)=> randomNumber);

  if(SelectedNumber == randomNumber){
    setScore((prev)=>prev + randomNumber);
  }else{
    setScore((prev)=>prev - 2);
  }
  setSelectedNumber(undefined);
  };
  
  const resetScore = ()=>{
    setScore(0);
  }
  
  return (
    <MainContainer>
    <div className='top_section'>
    <TotalScore score={score} />
    <NumberSelector error={error} setError={setError} SelectedNumber={SelectedNumber}
     setSelectedNumber={setSelectedNumber} />
    </div>
    <RoleDice currentNumber={currentNumber}
     rollDice={rollDice}/>
    <div className='btns'>
    <OutlineButton onClick={resetScore}>Reset</OutlineButton>
    <Button onClick={()=>setShowRules(prev=>!prev)}>{showRules ? "Hide ":"Show "}Rules</Button>
    </div>

    {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
padding-top: 50px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:10px;
    margin-top:29px;
    margin-right: 65px;;
  }
`;