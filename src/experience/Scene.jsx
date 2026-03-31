import { Suspense, useEffect } from 'react';
import Model from './models/Real_portfolio';
import { useThree } from '@react-three/fiber';

function Scene() {
   const { camera, controls } = useThree();

   // useEffect(() => {
   //    const handleKeyPress = (e) => {
   //       if (e.key === 'c' || e.key === 'C') {
   //          const position = camera.position.toArray();
   //          const rotation = camera.rotation.toArray().slice(0, 3);
   //          const fov = camera.fov;
   //          const target = controls?.target.toArray() || [0, 0, 0];

   //          console.log('--- CAMERA VIEW CONFIG ---');
   //          console.log(
   //             `<PerspectiveCamera\n  makeDefault\n  position={[${position.join(
   //                ', '
   //             )}]}\n  rotation={[${rotation.join(', ')}]}\n  fov={${fov}}\n/>`
   //          );
   //          console.log(`<OrbitControls target={[${target.join(', ')}]} />`);

   //          console.log('---------------------------');
   //       }
   //    };

   //    window.addEventListener('keydown', handleKeyPress);
   //    return () => window.removeEventListener('keydown', handleKeyPress);
   // }, [camera, controls]);

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
