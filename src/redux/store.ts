import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import inputSlice from './inputSlice'
import favouriteSlice from './favouriteSlice';

export const store = configureStore({
    reducer: {
        inputSlice,
        favouriteSlice
    },
});


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>