import React from "react";
import { useSnapshot } from "valtio";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import state from "../store";

function Tea() {
  const snap = useSnapshot(state);

  const texture = useLoader(TextureLoader, "./tea.jpg");

  return (
    <mesh scale={0.7} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 0]} /> 
      <meshStandardMaterial
        map={texture} 
        color={snap.color}
      />
    </mesh>
  );
}

export default Tea;
