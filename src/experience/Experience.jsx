import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Experience() {
   const controlsRef = useRef();
   const navigate = useNavigate();

   return (
      <>
         <Canvas shadow={true} onPointerMissed={() => navigate('/')}>
            <color attach="background" args={['#FFFAF0']} />
            <PerspectiveCamera
               makeDefault
               position={[
                  4.398168475370966, 2.454488749802843, 3.2999620563677756,
               ]}
               rotation={[
                  -0.5289706589036337, 0.8415636501973147, 0.4110495587477473,
               ]}
               fov={75}
            />
            <OrbitControls
               ref={controlsRef}
               target={[0.166, 0.5, 0.259]}
               maxPolarAngle={Math.PI / 2}
               enablePan={true}
               makeDefault
               onChange={(e) => {
                  if (controlsRef.current) {
                     // Clamp target Y to prevent going "under" the model
                     controlsRef.current.target.y = Math.max(
                        0.5,
                        controlsRef.current.target.y,
                     );
                  }
               }}
            />

            <Scene />
         </Canvas>
      </>
   );
}

export default Experience;
