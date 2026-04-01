import React, {
   forwardRef,
   useState,
   useEffect,
   useCallback,
   useRef,
} from 'react';
import { useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';

function HoverableText({
   route,
   onClickAction,
   geometry,
   material,
   position,
   rotation,
   keepColor,
   onGlobalPointerOver,
   onGlobalPointerOut,
}) {
   const navigate = useNavigate();
   const meshRef = useRef();
   const [localHovered, setLocalHovered] = useState(false);

   // Center the geometry's pivot and capture bounding box size for the hitbox
   const { centeredGeo, offset, size } = React.useMemo(() => {
      const geo = geometry.clone();
      geo.computeBoundingBox();
      const center = new THREE.Vector3();
      geo.boundingBox.getCenter(center);
      geo.translate(-center.x, -center.y, -center.z);
      const size = new THREE.Vector3();
      geo.boundingBox.getSize(size);
      return { centeredGeo: geo, offset: center, size };
   }, [geometry]);

   useFrame(() => {
      if (!meshRef.current) return;
      const targetScale = localHovered ? 1.15 : 1.0;
      meshRef.current.scale.lerp(
         new THREE.Vector3(targetScale, targetScale, targetScale),
         0.1,
      );

      if (meshRef.current.material) {
         const targetEmissive = localHovered ? 1.0 : 0.0;
         meshRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(
            meshRef.current.material.emissiveIntensity ?? 0,
            targetEmissive,
            0.12,
         );
      }
   });

   const [mat] = useState(() => {
      const m = material.clone();
      if (!keepColor) {
         m.color = new THREE.Color(0xffffff);
      }
      m.emissive = new THREE.Color(0xd4831a);
      m.emissiveIntensity = 0;
      return m;
   });

   // Padding added to each side of the hitbox (in local units)
   const pad = 0.08;

   return (
      <group position={position} rotation={rotation}>
         {/* Visual text — no pointer events */}
         <mesh
            ref={meshRef}
            geometry={centeredGeo}
            material={mat}
            position={[offset.x, offset.y, offset.z]}
         />

         {/* Invisible padded hitbox — handles all interaction */}
         <mesh
            position={[offset.x, offset.y, offset.z]}
            onClick={(e) => {
               e.stopPropagation();
               if (onClickAction) onClickAction(e);
               else if (route) navigate(route);
            }}
            onPointerOver={(e) => {
               e.stopPropagation();
               setLocalHovered(true);
               if (onGlobalPointerOver) onGlobalPointerOver(e);
            }}
            onPointerOut={(e) => {
               e.stopPropagation();
               setLocalHovered(false);
               if (onGlobalPointerOut) onGlobalPointerOut(e);
            }}
         >
            <boxGeometry
               args={[
                  size.x + pad * 2,
                  size.y + pad * 2,
                  Math.max(size.z, 0.02) + pad,
               ]}
            />
            <meshBasicMaterial transparent opacity={0} depthWrite={false} />
         </mesh>
      </group>
   );
}

const Model = forwardRef((props, ref) => {
   const { nodes, materials } = useGLTF('/models/Untitled.glb');
   const navigate = useNavigate();
   const { camera, controls } = useThree();

   const [hovered, setHovered] = useState(false);

   const handleMenuClick = useCallback(() => {
      const newCamPos = new THREE.Vector3(-0.507, 2.497, 0.192);
      const newTarget = new THREE.Vector3(-1.149, 2.497, 0.185);

      // Animate camera position
      gsap.to(camera.position, {
         x: newCamPos.x,
         y: newCamPos.y,
         z: newCamPos.z,
         duration: 1.5,
         ease: 'power3.inOut',
      });

      // Animate orbit controls target
      if (controls) {
         gsap.to(controls.target, {
            x: newTarget.x,
            y: newTarget.y,
            z: newTarget.z,
            duration: 1.5,
            ease: 'power3.inOut',
            onUpdate: () => controls.update(), // ensure constraints or rerenders fire
         });
      }
   }, [camera, controls]);

   useEffect(() => {
      document.body.style.cursor = hovered ? 'pointer' : 'auto';
      return () => (document.body.style.cursor = 'auto');
   }, [hovered]);

   const handlePointerOver = useCallback((e) => {
      e.stopPropagation();
      setHovered(true);
   }, []);

   const handlePointerOut = useCallback((e) => {
      e.stopPropagation();
      setHovered(false);
   }, []);

   return (
      <group {...props} ref={ref} dispose={null}>
         <mesh
            geometry={nodes.Sign001_Baked.geometry}
            material={materials['Bake_Signs_Baked.003']}
            position={[1.933, 2.606, -1.238]}
         />
         <mesh
            geometry={nodes['Cup_-_Round008_Baked'].geometry}
            material={materials['Bake_Dining_Items_Baked.003']}
            position={[1.099, 1.146, -0.648]}
            rotation={[Math.PI / 2, 0, -0.934]}
         />
         <mesh
            geometry={nodes.Table_Baked.geometry}
            material={materials['Bake_Dining_Baked.002']}
            position={[1.064, 0.505, -0.448]}
         />
         <mesh
            geometry={nodes.Shelf_Baked.geometry}
            material={materials['Bake_Wall_Items_Baked.002']}
            position={[-1.129, 1.77, 0.136]}
         />
         <mesh
            geometry={nodes['Room_-_Walls_Baked'].geometry}
            material={materials['Bake_Walls_Baked.002']}
            position={[0.166, 1.332, 0.259]}
         />
         <mesh
            geometry={nodes['Hidden_table_-_1_Baked'].geometry}
            material={materials['Bake_Counter_Baked.003']}
            position={[0.638, 0.96, 1.32]}
         />
         <mesh
            geometry={nodes.croissant.geometry}
            material={materials['croissant.002']}
            position={[0.13, 1.316, 1.065]}
            rotation={[-2.742, 0.562, 2.92]}
         />
         <group position={[0.083, 1.17, 1.092]}>
            <mesh
               geometry={nodes.Torus004.geometry}
               material={materials['Donut - Base.002']}
            />
            <mesh
               geometry={nodes.Torus004_1.geometry}
               material={materials['Donut - Glaze.002']}
            />
            <mesh
               geometry={nodes.Torus004_2.geometry}
               material={materials['PaletteMaterial001.002']}
            />
         </group>
         <mesh
            geometry={nodes.Display_Base.geometry}
            material={materials['PaletteMaterial002.001']}
            position={[0.231, 1.129, 1.32]}
         />
         <mesh
            geometry={nodes.Plane.geometry}
            material={materials['PaletteMaterial003.001']}
            position={[0.219, 2.72, -1.165]}
            scale={[0.876, 0.474, 0.474]}
         />
         <mesh
            geometry={nodes.Menu_Images001.geometry}
            material={materials['Menu - Projects.002']}
            position={[-1.16, 2.392, 0.7]}
            rotation={[Math.PI / 2, -0.13, -Math.PI / 2]}
         />
         <mesh
            geometry={nodes.Menu_Images002.geometry}
            material={materials['Menu - Main.002']}
            position={[-1.16, 2.392, 0.7]}
            rotation={[Math.PI / 2, -0.13, -Math.PI / 2]}
         />
         <mesh
            geometry={nodes.Menu_Images003.geometry}
            material={materials['Menu - Contacts.002']}
            position={[-1.16, 2.392, 0.7]}
            rotation={[Math.PI / 2, -0.13, -Math.PI / 2]}
         />
         <mesh
            geometry={nodes.World.geometry}
            position={[0.166, 0.304, 0.59]}
            // position OG =[0.166, 0.304, 0.259]
            scale={11.002}
            receiveShadow
         >
            <meshStandardMaterial color="#725b4d" roughness={0.5} />
         </mesh>

         <HoverableText
            onClickAction={() =>
               window.open('https://www.linkedin.com/in/jerry-shum/', '_blank')
            }
            geometry={nodes.Linkedin.geometry}
            material={materials['Linkedin - Blue']}
            position={[-1.108, 1.536, -0.357]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            keepColor={true}
            onGlobalPointerOver={handlePointerOver}
            onGlobalPointerOut={handlePointerOut}
         />
         <HoverableText
            onClickAction={() =>
               window.open('https://github.com/JerryShum', '_blank')
            }
            geometry={nodes.Github.geometry}
            material={materials.Github}
            position={[-1.108, 1.546, -0.079]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            keepColor={true}
            onGlobalPointerOver={handlePointerOver}
            onGlobalPointerOut={handlePointerOut}
         />

         <HoverableText
            route="/"
            geometry={nodes['Text_-_Jerry'].geometry}
            material={nodes['Text_-_Jerry'].material}
            position={[2.088, 1.877, -1.217]}
            rotation={[Math.PI / 2, 0, 0]}
            onGlobalPointerOver={handlePointerOver}
            onGlobalPointerOut={handlePointerOut}
         />
         <HoverableText
            route="/about"
            geometry={nodes['Text_-_About'].geometry}
            material={nodes['Text_-_About'].material}
            position={[2.088, 1.877, -1.217]}
            rotation={[Math.PI / 2, 0, 0]}
            onGlobalPointerOver={handlePointerOver}
            onGlobalPointerOut={handlePointerOut}
         />
         <HoverableText
            route="/projects"
            geometry={nodes['Text_-_Projects'].geometry}
            material={nodes['Text_-_Projects'].material}
            position={[2.088, 1.877, -1.217]}
            rotation={[Math.PI / 2, 0, 0]}
            onGlobalPointerOver={handlePointerOver}
            onGlobalPointerOut={handlePointerOut}
         />
         <HoverableText
            route="/experience"
            geometry={nodes['Text_-_Experience'].geometry}
            material={nodes['Text_-_Experience'].material}
            position={[2.088, 1.877, -1.217]}
            rotation={[Math.PI / 2, 0, 0]}
            onGlobalPointerOver={handlePointerOver}
            onGlobalPointerOut={handlePointerOut}
         />
         <HoverableText
            route="/blog"
            geometry={nodes['Text_-_Blog'].geometry}
            material={nodes['Text_-_Blog'].material}
            position={[2.088, 1.877, -1.217]}
            rotation={[Math.PI / 2, 0, 0]}
            onGlobalPointerOver={handlePointerOver}
            onGlobalPointerOut={handlePointerOut}
         />
         <HoverableText
            onClickAction={handleMenuClick}
            geometry={nodes['Text_-_Menu'].geometry}
            material={nodes['Text_-_Menu'].material}
            position={[2.088, 1.877, -1.217]}
            rotation={[Math.PI / 2, 0, 0]}
            onGlobalPointerOver={handlePointerOver}
            onGlobalPointerOut={handlePointerOut}
         />
      </group>
   );
});

export default Model;

useGLTF.preload('/models/Untitled.glb');
