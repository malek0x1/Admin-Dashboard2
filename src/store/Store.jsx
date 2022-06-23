import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from './LoginSlice';

export const store = configureStore({
    reducer: {
        Login: LoginSlice
    },
})
