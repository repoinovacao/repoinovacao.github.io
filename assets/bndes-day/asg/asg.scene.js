import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
import {WAYPOINT_HEIGHT} from "../../../tour-360/tour-helper.js";
import { imagesArray, videosArray, textsArray } from "../asg/asg-comum.scene.js";

export default {
    sky: {
        src: '../assets/360/asg/asg.jpg',
        rotation: "0 -95 0",
    },
    waypoints: [          
        {
            scene: "#lounge--salas-esquerda",
            position: fromCylindrical(6, -180, WAYPOINT_HEIGHT),
            rotation: "0 70 0",
            animation: floatAnimationCylindrical(6, -180, WAYPOINT_HEIGHT),
        },
        {
            src: '#speech',
            scene: "#asg-video",
            position: fromCylindrical(5, -70, 2.4),
            // rotation: "0 115 0",
            animation: floatAnimationCylindrical(5, -70, 2.4),
        },    
    ],

    videos: videosArray,

    images: imagesArray,

    texts: textsArray
}              
