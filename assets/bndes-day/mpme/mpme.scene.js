import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
import {WAYPOINT_HEIGHT} from "../../../tour-360/tour-helper.js";
import { imagesArray, videosArray, textsArray } from "../mpme/mpme-comum.scene.js";

export default {
    sky: {
        src: '../assets/bndes-day/mpme/mpme.jpg',
        rotation: "0 -90 0",
    },
    waypoints: [
        {
            scene: "#lounge--salas-esquerda",
            position: fromCylindrical(6, -172, WAYPOINT_HEIGHT),
            // rotation: "0 20 0",
            animation: floatAnimationCylindrical(6, -172, WAYPOINT_HEIGHT),
        },
        {
            src: '#speech',
            scene: "#mpme-video",
            position: fromCylindrical(6, -90, 2.4),
            animation: floatAnimationCylindrical(6, -90, 2.4),
        },
    ],
    videos: videosArray,
    images: imagesArray,
    texts: textsArray
}
