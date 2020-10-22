export default (state = { 
    currentScore: 0,
    ghostNumber: 0,
    totalScore: 0,
    chosenAmount: 0,
    counter: 0,
    previousNum: 0 }, action) => {
        switch(action.type) {
            case CURRENT_SCORE:
                return { ...state, currentScore: action.payload }
            case GHOST_NUMBER:
                return { ...state, ghostNumber: action.payload }
            case TOTAL_SCORE:
                return { ...state, totalScore: action.payload }
            case CHOSEN_AMOUNT:
                return { ...state, chosenAmount: action.payload }
            case COUNTER:
                return { ...state, counter: action.payload }
            case PREVIOUS_NUM:
                return { ...state, previousNum: action.payload }
        }
    }