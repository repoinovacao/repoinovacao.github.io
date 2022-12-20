import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
import { imagesArray, videosArray, textsArray } from "../mpme/mpme-comum.scene.js";

export default {
    sky: {
        src: '../assets/bndes-day/mpme/mpme.1920x960.mov',
        rotation: "0 -90 0",
    },
    waypoints: [
        {
            src: '#fechar',
            scene: "#mpme",
            position: fromCylindrical(9, -75, 2),
            animation: floatAnimationCylindrical(9, -75, 2)
        },
    ],
    videos: videosArray,
    images: imagesArray,
    texts: textsArray
}
