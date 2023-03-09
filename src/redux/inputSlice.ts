import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { InputSlice } from './types';



export const fetchMovies = createAsyncThunk(
    'fetchMovies', async (inputValue: string) => {
        const { data } = await axios.get(`http://www.omdbapi.com/?&apikey=c83e38af&s=${inputValue}`)
        return data.Search
    }
);



const initialState: InputSlice = {
    value: '',
    fetchValue: '',
    title: 'Go and search for some good movie! ;)',
    items: [],
};


const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setValue(state, action) {
            state.value = action.payload;
        },
        setFetchValue(state, action) {
            state.fetchValue = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.items = action.payload;
            state.title = `We Didn't Find Nothing :(`
            if (state.items?.length) {
                state.title = 'Look What We Got!'
            }
            if (!state.value.length) {
                state.title = 'Go And Search For Some Good Movies! ;)'
            }
        });
        builder.addCase(fetchMovies.pending, (state) => {
            state.items = []
            state.title = 'We Are Searching...'
        });
        builder.addCase(fetchMovies.rejected, (state) => {
            state.items = []
            state.title = `We didn't find nothing :(`
        });
    },
});

export const { setValue, setFetchValue } = inputSlice.actions;

export default inputSlice.reducer;
