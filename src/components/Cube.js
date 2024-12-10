import React from 'react'
import { RenderTexture,Text, PerspectiveCamera } from "@react-three/drei";


const Cube = () => {
  return (
    <mesh>
    <boxGeometry args={[1, 1, 1]} /> {/* Adding geometry 3 values for x,y,z axis */}
    <meshStandardMaterial color="pink" > {/* Adding material */}

      {/* Making Prespective Because without it our text shows wiered */}
      <PerspectiveCamera makeDefault position={[0, 0, 5]}/>

{/*NOTE: For making text Abhi hello bhot ajeeb a raha hay Q kay ham nay camara set nahi kia hay */}

      <RenderTexture attach='map'>
        <color attach="background" args={["pink"]} />
        <Text fontSize={3} color="Black">
          Hello 
        </Text>
      </RenderTexture>
    </meshStandardMaterial>
  </mesh>
  )
}

export default Cube
