import {floatAnimationCylindrical, fromCylindrical, slightRotation} from "../../../tour-360/animation-helper.js";

export default {
    sky: {
        // src: `../assets/bndes-day/elevador/elevador-${Math.floor(Math.random() * 3) + 1}.mp4`,
        src: `../assets/bndes-day/elevador/elevador.mp4`,
        rotation: "0 -90 0",
    },
    images: [
        {
            src: "../assets/360-sem-fundo-branco.png",
            position: fromCylindrical(1.8, -90, 1.6),
            rotation: "0 0 0",
            animation: slightRotation()
        },
    ],
    videos: [],
    waypoints: [
        {
            scene: "#lounge",
            position: fromCylindrical(4, -90, -.5),
            rotation: "0 0 0",
            animation: floatAnimationCylindrical(4, -90, -.5),
        }
    ],
}
