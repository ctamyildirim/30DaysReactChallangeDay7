import React from 'react'
import { BlackjackContext } from '../context/context';
import clsx from 'clsx'

function StartButton() {

  const [{play_func,balance,bet ,gameStarted, gameOver},dispatch] = BlackjackContext();

  const startGame = () =>{
    if (balance - bet >= 0){
      let arr = [play_func(), play_func(), play_func(), play_func()]
      arr.map((value, index) => {
        if(value === 1){
          if(index === 0 || index === 1){
            let total = arr[0] + arr[1] + 9;
            total > 21 ? arr[index] = 1 : arr[index] = 10;
          }
          else{
            let total = arr[2] + arr[3] + 9;
            total > 21 ? arr[index] = 1 : arr[index] = 10;
          }

        }
      })
      dispatch({
        type: 'START_GAME',
        payload : {
          user_number : arr[0] + arr[1],
          c_number : arr[2] + arr[3],
          balance :balance -bet
        }
      })
    }
    else{
      alert("You don't have enough balance")
    }
  }

  const restart = () =>{
    dispatch({
      type : 'RESTART_GAME',
      payload : {
      }
    })
  }

  const completeStyle= clsx({
    ['hidden'] : gameStarted,
  })
  const restartStyle = clsx({
    ['hidden'] : !gameOver,
  })

  return (
    <div className={completeStyle}>
        <div>
          <button onClick={startGame} className='p-4 px-8 mb-16 text-xl font-bold rounded-xl 
          bg-transparent border-red-800 text-red-800 cursor-pointer shadow-xl shadow-red-800 
          hover:bg-red-800 border-2 hover:border-transparent  hover:text-slate-300 hover:shadow-red-200 
          hover:scale-110 transition-all duration-300'>
              Start
          </button >
        </div>
        <div className={restartStyle}>
          <button onClick={restart} className='p-4 px-8 mb-16 text-xl font-bold rounded-xl 
          bg-transparent border-red-800 text-red-800 cursor-pointer shadow-xl shadow-red-800 
          hover:bg-red-800 border-2 hover:border-transparent  hover:text-slate-300 hover:shadow-red-200 
          hover:scale-110 transition-all duration-300'>
            Restart
          </button>
        </div>
    </div>
  )
}

export default StartButton