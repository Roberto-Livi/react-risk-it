import {
    LOG_IN,
    LOGGED_IN,
    GHOST_NUMBER,
    PREVIOUS_NUM,
    CURRENT_SCORE,
    TOTAL_SCORE
} from '../actions/types'


export const addUsername = (username) => dispatch => {
    dispatch({ type: LOG_IN, payload: username })
}

export const logIn = (status) => dispatch => {
    dispatch({ type: LOGGED_IN, payload: status })
}

export const renderGhostNumber = (number) => dispatch => {
    dispatch({ type: GHOST_NUMBER, payload: number })
}

export const renderPreviousNumber = (number) => dispatch => {
    dispatch({ type: PREVIOUS_NUM, payload: number })
}

export const updateCurrentScore = (number) => dispatch => {
    dispatch({ type: CURRENT_SCORE, payload: number })
}

export const renderTotalScore = (number) => dispatch => {
    dispatch({ type: TOTAL_SCORE, payload: number })
}
