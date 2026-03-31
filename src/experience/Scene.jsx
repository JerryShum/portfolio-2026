import { Suspense, useRef, useEffect } from 'react';
import Model from './models/Real_portfolio';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Scene() {
   return (
      <>
         <Suspense>
            <fog attach="fog" args={['#FFFAF0', 8, 25]} />
            <ambientLight intensity={2} />
            <directionalLight
               position={[10, 10, 10]}
               intensity={1}
               color="#ffffff"
               castShadow
            />
            <Model />
         </Suspense>
      </>
   );
}

export default Scene;
