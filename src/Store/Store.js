import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import themeReducer from './Reducers/themeReducer';
import filterReducer from './Reducers/filterReducer';

const rootReducer = combineReducers({
    theme: themeReducer,
    filter: filterReducer,
})


const store = configureStore({                      //this will create the store with a reducer
    reducer: rootReducer
})

export default store;