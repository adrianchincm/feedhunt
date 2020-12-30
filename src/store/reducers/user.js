import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility'

const initialState = {
   user: null,   
}

const saveUser = (state, action) => {    
    return updateObject(state, {    
        user: action.user,                
    });            
}

const clearUser = (state, action) => {    
    return updateObject(state, {    
        user: null,                
    });            
}

const updateFollowing = (state, action) => {    
    console.log("state", state.user)
    console.log("FOLLOWING USER", action.followingUserId)
    const updatedUser = state.user
    updatedUser.following.push(action.followingUserId)
    
    return updateObject(state, {    
        user: updatedUser,                
    });            
}

const reducer = (state = initialState, action) => {    
    switch (action.type) {
        case actionTypes.SAVE_USER: 
            return saveUser(state, action);
        case actionTypes.CLEAR_USER: 
            return clearUser(state, action);     
        case actionTypes.UPDATE_FOLLOWING: 
            return updateFollowing(state, action);                              
        default: 
            return state    
    }
};

export default reducer;