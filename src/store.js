import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import { createSlice } from '@reduxjs/toolkit';

 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
