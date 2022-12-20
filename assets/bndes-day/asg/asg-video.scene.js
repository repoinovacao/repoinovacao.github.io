import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
import { imagesArray, videosArray, textsArray } from "../asg/asg-comum.scene.js";

export default {
    sky: {
        src: '../assets/bndes-day/asg/asg.1920x960.mov',
        rotation: "0 -105 0",
    },
    waypoints: [
        {
            src: '#fechar',
            scene: "#asg",
            position: fromCylindrical(9, -75, 2.9),
            animation: floatAnimationCylindrical(9, -75, 2.9)
        },
    ],

    videos: videosArray,

    images: imagesArray,

    texts: textsArray
}
