import { useState } from 'react';
import styled from 'styled-components'
const NumberSelector = ({error,setError,SelectedNumber,setSelectedNumber}) => {
  
  const arrNumber=[1,2,3,4,5,6];

  function numberSelectorHandler(value){
    setSelectedNumber(value);
    setError("");
  }
    return(  
    <Container>
    <p className='error'>{error}</p>
      <div className='flex'>
    {
        arrNumber.map((value,i)=>(
            <Box 
             isSelected = {value==SelectedNumber}
             onClick={()=>numberSelectorHandler(value)} key={i}>{value}</Box>
        ))
    }
    </div>
    <p>Select Number</p>
    </Container>
  )
}

export default NumberSelector;

const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex{
    display: flex;
    gap:19px;
  }
  p{
    font-size: 19px;
    font-weight: 500px;
  }
  .error{
    color: red;
  }
`;

const Box=styled.div`
    width: 60px;
    height: 60px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 19px;
    font-weight: 500;
    background-color: ${(props) => props.isSelected ? "black":"white"};
    color: ${(props) => props.isSelected ? "white":"black"};
`;