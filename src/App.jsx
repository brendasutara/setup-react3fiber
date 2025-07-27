import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import * as THREE from "three";

function App() {
  return (
    <Canvas
      camera={{
        position: [3, 3, 3],
      }}
    >
      <OrbitControls />
      <group position={[-2, -2, 0]} scale={[2, 2, 2]} rotation-y={Math.PI / 4}>
        <mesh position-x={-1}>
          <boxGeometry />
          <meshStandardMaterial color="hotpink" side={THREE.FrontSide} />
        </mesh>
        <mesh position-x={1}>
          <boxGeometry />
          <meshStandardMaterial color="pink" />
        </mesh>
      </group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 3]} intensity={1} />
      <directionalLight position={[0, 3, 3]} intensity={0.5} />
    </Canvas>
  );
}

export default App;
