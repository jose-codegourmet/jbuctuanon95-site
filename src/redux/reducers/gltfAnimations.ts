import { createSlice } from '@reduxjs/toolkit';
import type { gltfAnimationState } from 'src/types/project';

const initialState: gltfAnimationState = {
  show: false,
  loaded: false,
  animation: 'hidden',
  animationPage: 'index',
  stopAnimation: false,
};

const gltfAnimationSlice = createSlice({
  name: 'gltf',
  initialState,
  reducers: {
    updateAnimationState: (state, { payload }) => {
      state.prevAnimation = state.animation;
      state.animation = payload;
    },
    stopAnimationState: (state, { payload }) => {
      state.stopAnimation = payload;
    },
    isModelsLoadedState: (state, { payload }) => {
      state.loaded = payload;
    },
  },
});

export const { updateAnimationState, stopAnimationState, isModelsLoadedState } = gltfAnimationSlice.actions;
export const gltfAnimationReducer = gltfAnimationSlice.reducer;
