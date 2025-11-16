"use client"; // This component must be a Client Component

import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

function ParticleBackground() {

    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const particlesOptions = {
        background: {
            color: {
                value: 'transparent', // The layout will provide the 'brand-deep-space' color
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
                onClick: {
                    enable: true,
                    mode: 'push',
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
                push: {
                    quantity: 4,
                },
            },
        },
        particles: {
            color: {
                value: '#4B5563', // Dark gray for visibility on white background
            },
            links: {
                color: '#4B5563', // Dark gray links
                distance: 150,
                enable: true,
                opacity: 0.15, // Subtle link opacity
                width: 1,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: 'out',
                random: false,
                speed: 0.5,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800, 
                },
                value: 150, 
            },
            opacity: {
                value: 0.3, // Increased opacity for visibility
            },
            shape: {
                type: 'triangle',
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
            // This is crucial:
            // 'absolute' and 'inset-0' make it fill the screen
            // 'z-0' places it at the very back
            className="absolute inset-0 z-0"
        />
    );
}

export default ParticleBackground;