import {combineReducers} from 'redux'
import loginReducer from './Login/Reducer'
import categoryReducer from './Category/Reducer';
import adminReducer from './Admin/Login/Reducer';
import vendorReducer from './Vendor/Reducer';
import featuredProductReducer from './FeturedProduct/Reducer';
import singleProduct from './SingleProduct/Reducer';

const rootReducer = combineReducers({
    user:loginReducer,
    category:categoryReducer,
    admin:adminReducer,
    vendor:vendorReducer,
    featureproduct:featuredProductReducer,
    singleProduct:singleProduct,
})

export default rootReducer;