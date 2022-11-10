// @ts-nocheck
import { PeppeBareModel } from './PeppeModel';
import {
  CameraShake,
  Environment,
  OrthographicCamera,
  PointMaterial,
  Points,
  ScrollControls,
  Sphere,
  useGLTF,
  useScroll,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { random } from 'maath';
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';

const Stars = (props) => {
  const { isDarkMode } = props;
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
  useFrame((state, delta) => {
    ref.current.rotation.y -= delta / 10;
  });
  return (
    <group rotation={[0, 0, 0]} scale={4}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={isDarkMode ? 'pink' : '#a9abf3'}
          size={isDarkMode ? 0.01 : 0.03}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

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

const Models = ({ currPage }) => {
  const apolloMesh: any = useRef();
  const peppeMesh: any = useRef();
  const { scene: ApolloScene } = useGLTF('./3d/apollohead/scene.gltf');
  const { scene: PeppeScene } = useGLTF('./3d/pepe/scene.gltf');
  const { width, height } = useThree((state) => state.viewport);

  const isDesktop = width >= 6;
  const apolloPosX = isDesktop ? 1.8 : 0.8;
  const apolloPosZ = isDesktop ? 3.2 : 2.5;
  const apolloPosY = isDesktop ? -0.5 : 0;
  const peppePosX = isDesktop ? -4.5 : -1.5;
  const peppePosY = isDesktop ? -7 : -3;
  const peppePosZ = isDesktop ? 1 : -1;

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();

    const handleAnimation = () => {
      if (window && apolloMesh.current && peppeMesh.current) {
        const position = window.pageYOffset / 100;
        apolloMesh.current.position.y = position + apolloPosY;
        peppeMesh.current.position.y = position + peppePosY;
      }
    };

    if (window && a && apolloMesh?.current && peppeMesh?.current) {
      apolloMesh.current.rotation.y = a / 5;
      apolloMesh.current.rotation.z = 0.15;
      peppeMesh.current.rotation.y = -a / 2;
      peppeMesh.current.rotation.x = -0.5;
      peppeMesh.current.rotation.z = -0.3;
      window.addEventListener('scroll', handleAnimation, { passive: true });
    } else {
      window.removeEventListener('scroll', handleAnimation);
    }
  });

  const variants = {
    hidden: { x: 3 },
    visible: {
      scale: 1,
      x: apolloPosX,
      transition: {
        duration: 2,
      },
    },
    out: {
      x: 4,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <group>
        <motion.primitive
          ref={apolloMesh}
          object={ApolloScene}
          scale={[1, 1, 1]}
          position={[apolloPosX, apolloPosY, apolloPosZ]}
          initial="hidden"
          animate="visible"
          exit="out"
          variants={variants}
        />
        <primitive ref={peppeMesh} object={PeppeScene} scale={[1, 1, 1]} position={[peppePosX, peppePosY, peppePosZ]} />
      </group>
    </AnimatePresence>
  );
};

const ApolloModel = (props) => {
  const { isDarkMode, currPage } = props;
  const isLandingPage = currPage !== '/';

  const { ref, inView } = useInView();
  return (
    <div className="apollo-model w-full h-full" ref={ref}>
      <Canvas performance={{ min: 0.2 }}>
        <Suspense fallback={null}>
          {/* <OrthographicCamera /> */}
          {/* <Sphere>
            <meshBasicMaterial color="hotpink" />
          </Sphere> */}
          {/* <ambientLight intensity={2} />
          <pointLight position={[5, 10, 5]} intensity={1} />
          <pointLight position={[-5, -2, 5]} intensity={1} /> */}

          <ambientLight intensity={0.5} color={isDarkMode ? 'blue' : 'pink'} />
          {inView && !isLandingPage && <Models isLandingPage={isLandingPage} currPage={currPage} />}
          <spotLight position={[50, 50, -30]} castShadow />

          <pointLight position={[-10, -10, -10]} color={isDarkMode ? 'yellow' : 'white'} intensity={3} />
          <pointLight position={[0, -5, 5]} color={isDarkMode ? 'orange' : 'white'} intensity={0.5} />
          <directionalLight position={[0, -5, 0]} color={isDarkMode ? 'red' : 'white'} intensity={2} />

          <Stars isDarkMode={isDarkMode} />

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

export default ApolloModel;
