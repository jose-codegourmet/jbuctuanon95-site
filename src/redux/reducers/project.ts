import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleDarkMode } = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
