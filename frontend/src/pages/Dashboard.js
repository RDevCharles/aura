import NavBar from "../components/NavBar";

import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'

import { TextureLoader } from 'three/src/loaders/TextureLoader'



function Aura(props) {
    const colorMap = useLoader(TextureLoader, require('../assets/images/trippy.jpeg'))
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.y += 0.01))
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={colorMap} />

      </mesh>
    )
  }

const Dashboard = (props) => {
    console.log(props.user)
    return (
        <div style={{height:"100vh",backgroundColor:"Black"}}>
            <NavBar/>
            <div>
                <h1 style={{ color: "white", marginTop: "2rem"}}>Welcome back ${ props.user.name}</h1>
            </div>
            <div style={{ color: "white", marginTop: "2rem", backgroundColor:"gold", width:"4rem", height:"4rem", borderRadius:".5rem", position: "absolute", right:10, top:10}}><p>{props.user.tokens}</p></div>

            <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
   
    <Aura position={[0, 0, 0]} />
  </Canvas>

  
        </div>
    )
}

export default Dashboard;