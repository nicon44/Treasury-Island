import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/Addons.js";

export const Model = ({ url }) => {
    // Use the useLoader hook to load the FBX model
    const fbx = useLoader(FBXLoader, url);
  
    return <primitive object={fbx} scale={0.1} />; // Adjust scale as necessary
  }