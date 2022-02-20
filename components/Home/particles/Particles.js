import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './particlesConfig';

export default function ParticlesBackground(props) {
  return (
    <>
    <Particles id='tsparticles' width="100%" height='100px' options={particlesConfig} >
        {props.children}
    </Particles>
    </>
  )
}
