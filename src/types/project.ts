export interface ProjectStateTypes {
  isDarkMode?: boolean;
  isLoading?: boolean;
  isTransitioning?: boolean;
  isShowDDMenu?: boolean;
  gltfAnimationState: gltfAnimationState;
}

export interface ProjectLink {
  id: string;
  label: string;
  link: string;
  external?: boolean;
}

export interface gltfAnimationState {
  show: boolean;
  loaded: boolean;
  animation: string;
  animationPage: string;
  prevAnimation?: string;
  stopAnimation?: boolean;
}
