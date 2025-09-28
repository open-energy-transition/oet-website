tsParticles.load("tsparticles", {
    detectRetina: false,
    interactivity: {
        detectsOn: "canvas",
        events: {
            onClick: {
                enable: false,
                mode: "bubble"
            },
            onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10
                }
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 200,
                duration: 2,
                opacity: 8,
                size: 10,
                speed: 3
            },
            connect: {
                distance: 40,
                lineLinked: {
                    opacity: 0.5
                },
                radius: 250
            },
            grab: {
                distance: 300,
                lineLinked: {
                    opacity: 1
                }
            },
            push: {
                quantity: 4
            },
            remove: {
                quantity: 2
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            slow: {
                active: false,
                radius: 0,
                factor: 1
            }
        }
    },
    particles: {
        color: {
            value: ["#ffffff"]
        },
        lineLinked: {
            blink: false,
            color: "random",
            consent: false,
            distance: 60,
            enable: true,
            opacity: 0.8,
            width: 1
        },
        move: {
            attract: {
                enable: false,
                rotate: {
                    x: 600,
                    y: 1200
                }
            },
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.5,
            straight: false
        },
        number: {
            density: {
                enable: false,
                area: 2000
            },
            limit: 0,
            value: 150
        },
        opacity: {
            animation: {
                enable: true,
                minimumValue: 0.3,
                speed: 2,
                sync: false
            },
            random: false,
            value: 0.8
        },
        shape: {
            character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400"
            },
            polygon: {
                sides: 5
            },
            stroke: {
                color: "#000000",
                width: 0
            },
            type: "circle"
        },
        size: {
            animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 20,
                sync: false
            },
            random: true,
            value: 6
        }
    },
});