import { combineReducers } from 'redux'
// import orderReducer from './order'
// import deliveryReducer from './delivery'
import userReducer from './user'

export const rootReducer = combineReducers({
    // order: orderReducer,
    // delivery: deliveryReducer,
    user: userReducer,
});