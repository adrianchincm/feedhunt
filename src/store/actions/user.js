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

export const addFollowing = (followingUserId) => {    
    return {
        type: actionTypes.ADD_FOLLOWING,
        followingUserId
    };
}

export const removeFollowing = (followingUserId) => {    
    console.log("REMOVE FOLLOWING ACTIOn", followingUserId)
    return {
        type: actionTypes.REMOVE_FOLLOWING,
        followingUserId
    };
}

