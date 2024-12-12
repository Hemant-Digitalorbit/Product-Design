import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import state from "../store"


function CameraRig({children}) {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {

    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    let tergetPosition = [-0.4, 0, 2]
    if(snap.intro) {
      if(isBreakpoint) tergetPosition = [0,0,2];
      if(isMobile) tergetPosition = [0, 0.2, 2.5];
    } else {
      if(isMobile) tergetPosition = [0,0,2.5];
      else tergetPosition = [0, 0 , 2]
    }

    easing.damp3(state.camera.position, tergetPosition, 0.25, delta)
    
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
    )
  })

  return (
    <group ref={group}>
      {children}
    </group>
  )
}

export default CameraRig