import {combineReducers} from 'redux'
import loginReducer from './Login/Reducer'
import categoryReducer from './Category/Reducer';

const rootReducer = combineReducers({
    user:loginReducer,
    category:categoryReducer,
})

export default rootReducer;