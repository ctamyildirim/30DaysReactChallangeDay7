import React from 'react'
import Computercard from './Computercard'
import StartButton from './StartButton'
import Usercard from './Usercard'


function Gamearea() {
  return (
    <div className='w-1/2 flex flex-col justify-between items-center relative p-10'>
        <Computercard></Computercard>
        <StartButton></StartButton>
        <Usercard></Usercard>
        
    </div>
  )
}

export default Gamearea