import { Suspense } from 'react';
import Model from './models/Real_portfolio';
import { ContactShadows } from '@react-three/drei';

function Scene() {
   return (
      <>
         <Suspense>
            <fog attach="fog" args={['#261A10', 8, 25]} />
            <ambientLight intensity={1.5} />
            <directionalLight
               position={[10, 10, 10]}
               intensity={1}
               color="#ffffff"
               castShadow
            />
            <Model />
            <ContactShadows
               position={[0.166, 0.26, 0.259]}
               opacity={0.8}
               scale={15}
               blur={2}
               far={4}
               color="#1a0d05" 
            />
         </Suspense>
      </>
   );
}

export default Scene;
