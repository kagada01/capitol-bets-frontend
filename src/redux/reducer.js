let initialState = {
    userLoggedIn: false,
    allGames: [],
    selectedGame: [],
    allOdds: [],
    myBets: []
}

const rootReducer = (oldState=initialState, action) => {
    return oldState
}

export default rootReducer