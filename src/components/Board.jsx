import React, {useEffect} from 'react'
import { BlackjackContext } from '../context/context'
import Balance from './Balance'
import Deck from './Deck'
import Gamearea from './Gamearea'

function Board() {

  const [{}, dispatch] = BlackjackContext();
  const random_n = () => Math.ceil(Math.random() * 10)

  const getting_number = () =>{

    let number = random_n();
    let possibility =  true
    number < 4 ? possibility = true : possibility = false;
    possibility === true ? number = 10 : number = random_n();
    return number
  }

  useEffect(() => {
    dispatch({
      type : 'SET_GAME',
      payload : getting_number
    })
  },[])


  return (
    <div  className='board flex'>
      <Balance></Balance>
      <Gamearea></Gamearea>
      <Deck></Deck>
    </div>
  )
}

export default Board