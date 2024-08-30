// // treasury-island-client/src/components/Island.tsx

// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// const Island: React.FC = () => {
//     const { scene } = useGLTF('/island.glb');

//     return (
//         <Canvas>
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[10, 10, 5]} />
//             <primitive object={scene} position={[0, -1, 0]} />
//             <OrbitControls />
//         </Canvas>
//     );
// };

// export default Island;

// treasury-island-client/src/components/Island.tsx

import React from 'react';
import { useGLTF } from '@react-three/drei';

export const Island: React.FC = () => {
    const { scene } = useGLTF('/island.glb'); // Adjust path if necessary

    return (
        <primitive
            object={scene}
            scale={[3, 3, 3]} // Adjust the scale as needed
            position={[80, -1, 80]} // Position in the middle of the grid
        />
    );
};

export default Island;
