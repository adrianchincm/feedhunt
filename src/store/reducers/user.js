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

const addFollowing = (state, action) => {        
    const updatedUser = state.user
    updatedUser.following.push(action.followingUserId)
    
    return updateObject(state, {    
        user: updatedUser,                
    });            
}

const removeFollowing = (state, action) => {   
    console.log("STATE", state)     
    const updatedUser = state.user
    updatedUser.following = updatedUser.following.filter(id => id !== action.followingUserId)
    
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
        case actionTypes.ADD_FOLLOWING: 
            return addFollowing(state, action);                              
        case actionTypes.REMOVE_FOLLOWING: 
            return removeFollowing(state, action);    
        default: 
            return state    
    }
};

export default reducer;