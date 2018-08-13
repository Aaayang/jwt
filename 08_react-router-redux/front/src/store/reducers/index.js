import { combineReducers } from 'redux';
import user from './user';
import {routerReducer} from 'react-router-redux';
let reducers = combineReducers({
    user,
    router: routerReducer
});
export default reducers;