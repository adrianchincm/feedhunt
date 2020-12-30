import { combineReducers } from 'redux'
// import orderReducer from './order'
// import deliveryReducer from './delivery'
import authReducer from './user'

export const rootReducer = combineReducers({
    // order: orderReducer,
    // delivery: deliveryReducer,
    auth: authReducer,
});