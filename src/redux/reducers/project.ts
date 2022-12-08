import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: true,
  gltfAnimationState: 'visible',
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
    updateAnimationState: (state, action) => {
      state.gltfAnimationState = action.payload;
    },
  },
});

export const { toggleDarkMode, updateAnimationState } = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
