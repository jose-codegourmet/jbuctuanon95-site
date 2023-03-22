import { degToRad } from 'three/src/math/MathUtils';

export type transitionType = {
  type?: string;
  duration?: number;
  ease?: string;
  delay?: number;
};

export type defaultTransitionType = transitionType | undefined;

const DEFAULT_TRANSITION = {
  type: 'spring',
  duration: 2,
  ease: 'easeOut',
};

export const defaultTransition = (props: defaultTransitionType) => {
  return {
    ...DEFAULT_TRANSITION,
    ...(props && { ...props }),
  };
};

export const rotateTo = (
  direction: string,
  iteration: number,
  intialPosition: number,
  transitionProps: defaultTransitionType,
) => {
  const rotation = intialPosition ? intialPosition + degToRad(360 * iteration) : degToRad(360 * iteration);

  return {
    rotateY: direction === 'right' ? 1 * rotation : -1 * rotation,
    transition: defaultTransition(transitionProps && { ...transitionProps }),
  };
};
