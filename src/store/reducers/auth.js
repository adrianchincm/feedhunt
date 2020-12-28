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

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.SAVE_USER: 
            return saveUser(state, action);                                 
        default: 
            return state    
    }
};

export default reducer;