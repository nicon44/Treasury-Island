import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";

const TOP_LIMIT = 100;
const BOTTOM_LIMIT = 50;
const ZOOM_SPEED = 0.5;
const CAMERA_MOVE_SPEED = 0.25;

export function CameraControls() {
  const { camera } = useThree();
  const [keysPressed, setKeysPressed] = useState({
    w: false,
    a: false,
    s: false,
    d: false,
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeysPressed((prevKeys) => ({
        ...prevKeys,
        [event.key.toLowerCase()]: true,
      }));
    };

    const handleKeyUp = (event) => {
      setKeysPressed((prevKeys) => ({
        ...prevKeys,
        [event.key.toLowerCase()]: false,
      }));
    };

    const handleWheel = (event) => {
      if (
        (camera.position.y > BOTTOM_LIMIT && event.deltaY < 0) ||
        (camera.position.y < TOP_LIMIT && event.deltaY > 0)
      ) {
        camera.position.y += event.deltaY * 0.01 * ZOOM_SPEED;
        camera.position.z += event.deltaY * 0.02 * ZOOM_SPEED;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.addEventListener("wheel", handleWheel);
    };
  }, []);

  useFrame(() => {
    if (keysPressed.w) camera.position.z -= CAMERA_MOVE_SPEED;
    if (keysPressed.s) camera.position.z += CAMERA_MOVE_SPEED;
    if (keysPressed.a) camera.position.x -= CAMERA_MOVE_SPEED;
    if (keysPressed.d) camera.position.x += CAMERA_MOVE_SPEED;
  });

  return null;
}
