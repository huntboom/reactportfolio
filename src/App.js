import logo from './croppedprofile.png';
import './App.css';
import { Canvas } from '@react-three/fiber';
import React from "react";
import { Suspense } from 'react';
import * as THREE from "three";
export default function App() {
  return (
    <div className="App">
        <img src={logo} alt="null"/>
      <Canvas>
      <Suspense fallback={null}>
        <mesh>
          <boxBufferGeometry />
          <meshPhongMaterial />
        </mesh>
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
      </Suspense>
      </Canvas>
    </div>
  );
}

