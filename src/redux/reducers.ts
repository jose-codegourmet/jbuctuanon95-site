import { gltfAnimationReducer } from './reducers/gltfAnimations';
import { projectReducer } from './reducers/project';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  project: projectReducer,
  gltf: gltfAnimationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
