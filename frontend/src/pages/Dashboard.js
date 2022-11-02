import NavBar from "../components/NavBar";
import EventList from "../components/EventList";
import MyGamesList from "../components/MyGamesList"
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import { TextureLoader } from "three/src/loaders/TextureLoader";


import AOS from "aos";

AOS.init();

function Aura(props) {
  const colorMap = useLoader(
    TextureLoader,
    require("../assets/images/trippy.jpeg")
  );
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={2.7}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}


const Dashboard = (props) => {




  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#edf5f5",
        overFlow: "hidden",
      }}
    >
      <NavBar username={props.user.name} />

     

      <div
        style={{
          color: "white",
          marginTop: "2rem",
          backgroundColor: "gold",
          width: "6rem",
          height: "2rem",
          borderRadius: ".3rem",
          top: 10,
          display:"flex", flexDirection:"row", justifyContent:"start", alignItems:"center",
        }}
       
      >
         <img style={{ height:"2rem", marginRight:".5rem"}} src={require("../assets/images/coins.png")}/>
        <p style={{color:"black", fontWeight:"bold" }}>{props.user.tokens}</p>
      </div>
      <div style={{display:"flex", alignItems:"center",}}>
      <EventList />
      <MyGamesList/>
        
</div>
      
      
      <div style={{ height: "30vh", display: "flex", position:"absolute", top:"5rem", right:"2rem" }}>
        <Canvas>
          <ambientLight />

          <pointLight position={[10, 10, 10]} />
          <Aura position={[0, 0, 0]}></Aura>
        </Canvas>
      </div>
    </div>
  );
};

export default Dashboard;
