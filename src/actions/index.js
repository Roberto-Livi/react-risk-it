// import users from '../api/users'

import {
    LOG_IN,
    LOGGED_IN,
    GHOST_NUMBER,
    PREVIOUS_NUM
} from '../actions/types'

// CURRENT_SCORE
// TOTAL_SCORE
// CHOSEN_AMOUNT
// COUNTER

export const addUsername = (username) => dispatch => {
    dispatch({ type: LOG_IN, payload: username })
}

export const logIn = (status) => dispatch => {
    dispatch({ type: LOGGED_IN, payload: status })
}

export const renderGhostNumber = (number) => dispatch => {
    dispatch({ type: GHOST_NUMBER, payload: number })
}


// export const createUser = (name, num) => {
//     const newUser = {
//         username: name,
//         score: num
//     }
//     users.post('/users', newUser)
// }