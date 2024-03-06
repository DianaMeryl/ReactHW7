import { configureStore } from '@reduxjs/toolkit'
import  numberReducer  from './reducers'


const store = configureStore({
    reducer: numberReducer,
})

export default store;

