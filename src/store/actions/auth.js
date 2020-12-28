import * as actionTypes from './actionTypes'

export const setUser = (user) => {
    return {
        type: actionTypes.SAVE_USER,
        user
    };
}