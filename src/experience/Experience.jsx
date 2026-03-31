import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';

function Experience() {
   return (
      <>
         <Canvas shadow={true}>
            <color attach="background" args={['#171720']} />
           <PerspectiveCamera
  makeDefault
  position={[4.398168475370966, 2.454488749802843, 3.2999620563677756]}
  rotation={[-0.5289706589036337, 0.8415636501973147, 0.4110495587477473]}
  fov={75}
/>
            <OrbitControls target={[0.27223779963070727, 0.2189944663811708, -0.5474290409918368]} />
            <Scene />
         </Canvas>
      </>
   );
}



export default Experience;
