import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import type { FC } from 'react';
import { useDispatch } from 'react-redux';
import { updateAnimationState } from 'src/redux/reducers/project';

export interface AnimationStateTriggerProps {
  animation: string;
}

const WorkAround = ({ passedRef, animation }: { passedRef: React.RefObject<HTMLDivElement>; animation: string }) => {
  const dispatch = useDispatch();
  const inView = useInView(passedRef);

  useEffect(() => {
    if (inView) {
      dispatch(updateAnimationState(animation));
    }
  }, [inView, animation, dispatch]);

  return <div>test Inner</div>;
};

const AnimationStateTrigger: FC<AnimationStateTriggerProps> = ({ animation }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div className="block w-full opacity-0" ref={ref}>
      <WorkAround passedRef={ref} animation={animation} />
    </div>
  );
};

export default AnimationStateTrigger;
