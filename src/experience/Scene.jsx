import { Suspense, useRef, useEffect } from 'react';
import Model from './models/Real_portfolio';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Scene() {
   return (
      <>
         <Suspense>
            <fog attach="fog" args={['#171720', 5, 15]} />
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
            <Model />
         </Suspense>
      </>
   );
}



export default Scene;
