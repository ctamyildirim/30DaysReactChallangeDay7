import React from 'react'
import { BlackjackContext } from '../context/context'
import clsx from 'clsx'

function Deck() {


  const[{play_func, user_total, c_total, bet, balance,gameStarted}, dispatch] = BlackjackContext();


  const winner = (winner, u_total , computer_total) => {

    if( winner === 'User'){
      dispatch({
        type : 'SET_WINNER',
        payload : {
          winner : winner,
          balance : balance + (bet*2),
          u_total : u_total,
          c_total : computer_total,
          gameOn : false
        }
      })
    }
    else{
      let gameOver = true
      balance <= 0 ? alert('Game Over') : gameOver = false;
      dispatch({
        type : 'SET_WINNER',
        payload : {
          winner : winner,
          balance : balance,
          u_total : u_total,
          c_total : computer_total,
          gameOn : gameOver
        }
      })
      
      
    }

    
  }

  const getCard = () =>{
    /* User Part */

    let number = play_func();
    let u_total = user_total;
    let computer_total = c_total;

    if(number === 1){
      u_total + number + 9 > 21 ? number = 1 : number = 10;
    }
    u_total += number;
    if(u_total  > 21){
      winner('Computer', u_total ,computer_total)
      return
    }
    else if(u_total === 21 ){
      winner('User', u_total ,computer_total)
      return
    }

        /* Computer Part */
    let luck = Math.round(Math.random())
    if(c_total < 18 && c_total >= 15 && luck === 1 || c_total< 15){
      let number2 = play_func();
   
      if(number2 === 1){
        computer_total += number2 + 9 > 21 ? number2 = 1 : number2 = 10;
      }
      computer_total += number2
      if(computer_total  > 21){
        winner('User', u_total ,computer_total)
        return
      }
      else if(computer_total === 21 ){
        winner('Computer', u_total ,computer_total)
        return
      }
    }  

    dispatch({
      type : 'GET_CARD',
      payload : {
        u_total : u_total,
        c_total : computer_total
      }
    })
  }

  const pass = () =>{
    if(user_total > c_total ){
      winner('User', user_total ,c_total)
    }
    else if(user_total === c_total){
      dispatch({
        type : 'SET_WINNER',
        payload : {
          winner : 'Equal',
          balance : balance + bet,
        }
      })
    }
    else{
      winner('Computer', user_total ,c_total)
    }
  }

  const disabled= clsx({
    ['invisible'] : !gameStarted
  })
  return (
    <div className='w-1/4 flex flex-col items-center justify-around'>
      <div className='w-full bg-black mb-24 relative'>
        <div className='w-2/4 aspect-[3/4.4] rounded overflow-hidden bg-contain bg-no-repeat 
        bg-[url("https://downloadwap.com/thumbs2/wallpapers/p2/2019/patterns/12/b6a2751913231964.jpg")] 
        absolute right-0 border-4'>
        </div>
        <div className='w-2/4 aspect-[3/4.4] rounded overflow-hidden bg-contain bg-no-repeat 
        bg-[url("https://downloadwap.com/thumbs2/wallpapers/p2/2019/patterns/12/b6a2751913231964.jpg")] 
        absolute right-3 border-4'>
        </div>
        <div className='w-2/4 aspect-[3/4.4] rounded overflow-hidden bg-contain bg-no-repeat 
        bg-[url("https://downloadwap.com/thumbs2/wallpapers/p2/2019/patterns/12/b6a2751913231964.jpg")] 
        absolute right-6 border-4'>
        </div>
        <div className='w-2/4 aspect-[3/4.4] rounded overflow-hidden bg-contain bg-no-repeat 
        bg-[url("https://downloadwap.com/thumbs2/wallpapers/p2/2019/patterns/12/b6a2751913231964.jpg")] 
        absolute right-9 border-4'>
        </div>
        <div className='w-2/4 aspect-[3/4.4] rounded overflow-hidden bg-contain bg-no-repeat 
        bg-[url("https://downloadwap.com/thumbs2/wallpapers/p2/2019/patterns/12/b6a2751913231964.jpg")] 
        absolute right-12 border-4'>
        </div>
        <div className='w-2/4 aspect-[3/4.4] rounded overflow-hidden bg-contain bg-no-repeat 
        bg-[url("https://downloadwap.com/thumbs2/wallpapers/p2/2019/patterns/12/b6a2751913231964.jpg")] 
        absolute right-14 border-4'>
        </div>
      </div>
      <div className=''w-full flex justify-end mt-28>
        <div className={disabled}>
            <button onClick={getCard} className='bg-green-700 text-green-200 font-semibold border-2 border-transparent p-4 rounded-xl shadow-lg hover:shadow-green-900 
            hover:bg-slate-800 hover:border-green-700 hover:text-green-700 mr-4 hover:scale-110 transition-all duration-300'>Get Card</button>
            <button onClick={pass} className=' bg-red-700 text-green-200 font-semibold border-2 border-transparent p-4 rounded-xl shadow-lg hover:shadow-red-900 
            hover:bg-slate-800 hover:border-red-700 hover:text-red-700 hover:scale-110 transition-all duration-300'>Pass</button>
        </div>
      </div>
    </div>
  )
}

export default Deck