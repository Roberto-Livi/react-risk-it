import users from '../api/users'

import {
    LOG_IN,
    LOGGED_IN
} from '../actions/types'

export const addUsername = (username) => dispatch => {
    dispatch({ type: LOG_IN, payload: username })
}

export const logIn = (status) => dispatch => {
    dispatch({ type: LOGGED_IN, payload: status })
}

// export const createUser = (name, num) => {
//     const newUser = {
//         username: name,
//         score: num
//     }
//     users.post('/users', newUser)
// }