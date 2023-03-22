// @ts-nocheck
import { CameraShake } from '@react-three/drei';
import React from 'react';

const CameraFloat = () => {
  return (
    <CameraShake
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.1}
      pitchFrequency={0.5}
      rollFrequency={0.4}
    />
  );
};

export default CameraFloat;
