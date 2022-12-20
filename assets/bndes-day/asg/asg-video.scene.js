import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
import { imagesArray, videosArray, textsArray } from "../asg/asg-comum.scene.js";

export default {
    sky: {
        src: '../assets/360/asg/asg.1920x960.mp4',
        rotation: "0 -95 0",
    },
    waypoints: [
        {
            src: '#fechar',
            scene: "#asg",
            position: fromCylindrical(9, -70, 2.4),
            animation: floatAnimationCylindrical(9, -70, 2.4)
        },
    ],

    videos: videosArray,

    images: imagesArray,

    texts: textsArray
}
