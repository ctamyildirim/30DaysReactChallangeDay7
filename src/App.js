import { useReducer, useEffect } from 'react';
import './App.css';
import Board from './components/Board';
import { MainContext } from './context/context';
import reducer, { initialState } from './context/reducer';

function App() {


  const data= useReducer(reducer, initialState)

  //kart çek // çekme // Total Balance olsun ve oradan düşsün veya eklesin

  return (
    <MainContext.Provider value={data}>
      <div className='App'>
        <Board></Board>
      </div>
    </MainContext.Provider>
  );
}

export default App;
