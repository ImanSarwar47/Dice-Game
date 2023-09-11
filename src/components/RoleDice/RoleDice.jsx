import { useState } from "react";
import styled from "styled-components"
const RoleDice = ({currentNumber,rollDice}) => {


  return (
    <DiceContainer>
      <div className="dices" onClick={rollDice}>
        <img src={`/images/dice_${currentNumber}.png`} alt="dice_1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;
const DiceContainer=styled.div`
      display: flex;
      margin-top:37px ;
      flex-direction: column;
      align-items:center;
      .dices img{
        width: 75%;
        cursor: pointer;
      }

      p{
        font-size: 19px;
        margin-right: 65px;
      }
`;