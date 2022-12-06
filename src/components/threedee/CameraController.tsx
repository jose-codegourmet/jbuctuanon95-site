// @ts-nocheck
import { useThree } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 20;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.rotateSpeed = 0.1;
    console.log('contolrs === ', controls);
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

export default CameraController;
