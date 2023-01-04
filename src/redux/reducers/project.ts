import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: true,
  gltfAnimationState: 'visible',
  showDDMenu: false,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
    toggleDropDownMenu: (state, action) => {
      state.showDDMenu = action.payload;
    },
    updateAnimationState: (state, action) => {
      state.gltfAnimationState = action.payload;
    },
  },
});

export const { toggleDarkMode, updateAnimationState, toggleDropDownMenu } = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
