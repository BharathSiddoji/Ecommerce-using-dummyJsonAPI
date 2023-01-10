import {createStore,combineReducers} from 'redux';
import {cartReducer} from '../reducer/reducer'

const rootReducer=combineReducers({cartReducer})
export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())