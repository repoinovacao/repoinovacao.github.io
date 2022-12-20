import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
import {videosArray, imagesArray, textArray} from "./futuros-comum.scene.js";

export default {
    sky: {
        src: '../assets/bndes-day/futuros/construindo-futuros.1920x960.mov',
        rotation: "0 -90 0",
    },
    waypoints: [
        {
            src: '#fechar',
            scene: "#construindo-futuros",
            position: fromCylindrical(9, -75, 2),
            animation: floatAnimationCylindrical(9, -75, 2)
        },
    ],

    videos: videosArray,

    images: imagesArray,

    texts: textArray,

}
