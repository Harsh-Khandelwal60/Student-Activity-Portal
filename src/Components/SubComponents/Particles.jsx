import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const ParticlesBG = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            "fullScreen": {
                "zIndex": 0
            },
            "interactivity": {
                "events": {
                    "onClick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "onDiv": {
                        "elementId": "repulse-div",
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onHover": {
                        "enable": true,
                        "mode": "repulse",
                        "parallax": {
                            "enable": false,
                            "force": 60,
                            "smooth": 10
                        }
                    },
                    "resize": true
                },
                "modes": {
                    "bubble": {
                        "distance": 400,
                        "duration": 2,
                        "opacity": 0.8,
                        "size": 40
                    },
                    "connect": {
                        "distance": 80,
                        "lineLinked": {
                            "opacity": 0.5
                        },
                        "radius": 60
                    },
                    "grab": {
                        "distance": 400,
                        "lineLinked": {
                            "opacity": 1
                        }
                    },
                    "push": {
                        "quantity": 5
                    },
                    "remove": {
                        "quantity": 2
                    },
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "slow": {
                        "active": false,
                        "factor": 1,
                        "radius": 0
                    }
                }
            },
            "particles": {
                "color": {
                    "value": "#00293A"
                },
                "lineLinked": {
                    "blink": false,
                    "color": "#028D93",
                    "consent": false,
                    "distance": 150,
                    "enable": true,
                    "opacity": 0.4,
                    "shadow": {
                        "blur": 5,
                        "color": "lime",
                        "enable": false
                    },
                    "width": 1
                },
                "move": {
                    "attract": {
                        "enable": false,
                        "rotate": {
                            "x": 600,
                            "y": 1200
                        }
                    },
                    "collisions": false,
                    "direction": "none",
                    "enable": true,
                    "outMode": "out",
                    "random": false,
                    "speed": 2,
                    "straight": false,
                    "trail": {
                        "enable": false,
                        "length": 10,
                        "fillColor": "#00293A"
                    }
                },
                "number": {
                    "density": {
                        "enable": true
                    },
                    "limit": 0,
                    "value": 330
                },
                "opacity": {
                    "animation": {
                        "enable": true,
                        "minimumValue": 0.1,
                        "speed": 1,
                        "sync": false
                    },
                    "random": false,
                    "value": 0.5
                },
                "rotate": {
                    "animation": {
                        "enable": false,
                        "speed": 0,
                        "sync": false
                    },
                    "direction": "clockwise",
                    "random": false,
                    "value": 0
                },
                "shape": {
                    "character": ["."],
                    "image": {
                        "height": 100,
                        "replaceColor": true,
                        "src": "https://particles.js.org/images/github.svg",
                        "width": 100
                    },
                    "polygon": {
                        "sides": 5
                    },
                    "stroke": {
                        "color": "#00293A",
                        "width": 1
                    },
                    "type": "char"
                },
                "size": {
                    "animation": {
                        "enable": false,
                        "minimumValue": 10,
                        "speed": 10,
                        "sync": false
                    },
                    "random": false,
                    "value": 16
                }
            },
            "polygon": {
                "draw": {
                    "enable": false,
                    "stroke": {
                        "color": "#00293A",
                        "width": 0.5
                    }
                },
                "enable": false,
                "inline": {
                    "arrangement": "one-per-point"
                },
                "move": {
                    "radius": 10,
                    "type": "path"
                },
                "scale": 1,
                "type": "none",
                "url": ""
            },
            "backgroundMask": {
                "enable": false
            },
            "pauseOnBlur": true,
            "background": {
                "color": "#ffffff",
                "image": "",
                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "cover"
            }
        }}
    />
  )
}

export default ParticlesBG