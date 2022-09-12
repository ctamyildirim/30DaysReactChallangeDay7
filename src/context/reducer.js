export const initialState = {
    balance : 10000,
    bet : 1000,
    user_total : 0,
    c_total : 0,
    winner : null,
    play_func : null,
    gameStarted : false,
    gameOver : false
}

const reducer = (state, action)=>{
    console.log(action.payload)

    switch (action.type){
        case 'SET_GAME':
            return{
                ...state,
                play_func : action.payload
            }
        case 'SET_BET':
            return{
                ...state,
                bet : action.payload
            }
        case 'START_GAME':
            return{
                ...state,
                user_total : action.payload.user_number, 
                c_total :  action.payload.c_number,
                balance : action.payload.balance,
                gameStarted : true
            }
        case 'SET_WINNER':
            alert('winner: '+ action.payload.winner)
            return{
                ...state,
                winner : action.payload.winner,
                balance : action.payload.balance,
                user_total : action.payload.u_total, 
                c_total :  action.payload.c_total,
                gameStarted : false,
                gameOver : action.payload.gameOn
            }
        case 'GET_CARD':
            return{
                ...state,
                user_total : action.payload.u_total, 
                c_total :  action.payload.c_total,
            }
        case 'RESTART_GAME':
            return{
                ...state,
                balance : 10000,
                bet : 1000,
                user_total : 0,
                c_total : 0,
                winner : null,
                gameStarted : false,
                gameOver : false
            }

    }
} 

export default reducer