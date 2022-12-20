import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
import {WAYPOINT_HEIGHT} from "../../../tour-360/tour-helper.js"
import {videosArray, imagesArray, textArray} from "./futuros-comum.scene.js";

const wayPointsArray = [
    {
        scene: "#lounge--salas-direita",
        position: fromCylindrical(4, 150, WAYPOINT_HEIGHT),
        animation: floatAnimationCylindrical(4, 150, WAYPOINT_HEIGHT),
    },
    {
        src: '#speech',
        scene: "#futuros-video",
        position: fromCylindrical(6, -75, 1.6),
        animation: floatAnimationCylindrical(6, -75, 1.6),
    },
];

export default {

    sky: {
        src: '../assets/bndes-day/futuros/construindo-futuros.jpg',
        rotation: "0 -90 0",
    },

    waypoints: wayPointsArray,

    videos: videosArray,

    images: imagesArray,

    texts: textArray,
        
}
