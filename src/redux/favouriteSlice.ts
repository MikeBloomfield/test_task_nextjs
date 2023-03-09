import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard } from '@/types/types';
import { IFavourite } from './types';



const initialState: IFavourite = {
  items: [],
};

const favouriteSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setFavourites(state, action: PayloadAction<ICard>) {
      if (state.items.find(obj => obj.imdbID === action.payload.imdbID)) {
        state.items
      } else {
        state.items.push({
          ...action.payload,
        });
      }
    },
    removeFavourite(state, action: PayloadAction<ICard>) {
      state.items = state.items.filter(obj => obj.imdbID !== action.payload.imdbID)
    },
  },
},
);

export const { setFavourites, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
