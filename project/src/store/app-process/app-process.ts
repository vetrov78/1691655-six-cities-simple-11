import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { AppProcess } from '../../types/state';

const initialState: AppProcess = {
  city: 'Paris',
  sortType: 'Popular',
};

export const appProcess = createSlice({
  name: NameSpace.Process,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{city: string}>) => {
      state.city = action.payload.city;
      state.sortType = 'Popular';
    },
  }
});
