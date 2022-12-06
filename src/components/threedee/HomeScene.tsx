// @ts-nocheck
import ApolloGLTF from './ApolloGLTF';
import PeppeGLTF from './PeppeGLTF';
import StarsMesh from './StarsMesh';
import { CameraShake, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import type { RootState } from 'src/redux/reducers';
import * as THREE from 'three';

const Rig = () => {
  // const [vec] = useState(() => new THREE.Vector3());
  // const { camera, mouse } = useThree();
  // useFrame(() => camera.position.lerp(vec.set(mouse.x * 5, 0, 5), 0.05));
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

const HomeScene = (props) => {
  const { isDarkMode, currPage } = props;
  const isLandingPage = currPage !== '/';
  const gltfAnimationState = useSelector((state: RootState) => state.project.gltfAnimationState);

  const { ref, inView } = useInView();

  return (
    <div className="apollo-model w-full h-full" ref={ref}>
      <Canvas performance={{ min: 0.2 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} color={isDarkMode ? 'blue' : 'pink'} />
          {inView && <ApolloGLTF animationState={gltfAnimationState} />}
          {inView && <PeppeGLTF animationState={gltfAnimationState} />}
          <spotLight position={[50, 50, -30]} castShadow />

          <pointLight position={[-10, -10, -10]} color={isDarkMode ? 'yellow' : 'white'} intensity={3} />
          <pointLight position={[0, -5, 5]} color={isDarkMode ? 'orange' : 'white'} intensity={0.5} />
          <directionalLight position={[0, -5, 0]} color={isDarkMode ? 'red' : 'white'} intensity={2} />

          <StarsMesh isDarkMode={isDarkMode} />
          <rectAreaLight
            width={15}
            height={100}
            position={[30, 30, -10]}
            intensity={10}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
          <Environment preset="warehouse" />
          <Rig />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HomeScene;
