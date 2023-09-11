import styled from 'styled-components'
import { Button } from '../../styled/Button';
const StartGame = ({toggle}) => {
  return(
    <Container>
    <div className='image'>
    <img src='./images/dices.png' />
    </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
    max-width:703px;
    display: flex;
    margin:0 auto;
    height:100vh;
    align-items: center;

    .image img{
      width: 100%;
    }

    .content h1{
      font-size: 60px;
      white-space: nowrap;
    }
`;
