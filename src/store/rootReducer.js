import { combineReducers } from 'redux'
import { userSlice, productSlice } from '../slice'

const staticReducers = {
    user: userSlice,
    product: productSlice,
}

const createRootReducer = (asyncReducers = {}) => {
    return combineReducers({
        ...staticReducers,
        ...asyncReducers,
    })
}

const rootReducer = (state, action) => {
    const combinedReducer = createRootReducer()
    return combinedReducer(state, action)
}

export default rootReducer
