import * as actionTypes from './actionTypes'

export const setUser = (user) => {
    return {
        type: actionTypes.SAVE_USER,
        user
    };
}

export const clearUser = () => {
    return {
        type: actionTypes.CLEAR_USER,
    };
}

export const updateFollowing = (followingUserId) => {
    console.log("UPDATE FOLLOWING ACTION", followingUserId)    
    return {
        type: actionTypes.UPDATE_FOLLOWING,
        followingUserId
    };
}

