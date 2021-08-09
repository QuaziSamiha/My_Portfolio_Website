import React from 'react'
import Particles from 'react-particles-js';
import ParticleConfig from './ParticleConfig';

export default function ParticleStyle() {
    return (
        < Particles params={ParticleConfig} 
        style={{
            // height: '400px'
        }}
        />
    )
}
