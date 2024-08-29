import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3, Quaternion, Euler } from "three";
import { useGameContext } from "../providers/GameProvider";

const CameraTransition = () => {
  const { camera } = useThree();
  const { phase } = useGameContext();
  
  // Target positions and rotations
  const targetPosition = useRef(new Vector3(40, 90, 130));
  const targetQuaternion = useRef(new Quaternion().setFromEuler(new Euler(-Math.PI / 3, 0, 0)));

  useEffect(() => {
    switch (phase) {
      case "Hide":
        targetPosition.current.set(40, 90, 130);
        targetQuaternion.current.setFromEuler(new Euler(-Math.PI / 3, 0, 0));
        break;
      case "Seek":
        targetPosition.current.set(40, 90, 20);
        targetQuaternion.current.setFromEuler(new Euler(-Math.PI / 3, 0, 0));
        break;
      default:
        targetPosition.current.set(5, 30, 80);
        targetQuaternion.current.setFromEuler(new Euler(-Math.PI / 10, 0, 0));
        break;
    }
  }, [phase]);

  useFrame(() => {
    // Smoothly interpolate position
    camera.position.lerp(targetPosition.current, 0.05);
    
    // Smoothly interpolate rotation using slerp on quaternions
    camera.quaternion.slerp(targetQuaternion.current, 0.05);
  });

  return null;
};

export default CameraTransition;
