import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
import {WAYPOINT_HEIGHT} from "../../../tour-360/tour-helper.js";
import {DeviceHelper} from "../../../tour-360/device-helper.js";
import {videosArray, imagesArray, textsArray} from "./infra-comum.scene.js";

export default {
    sky: {
        src: '../assets/bndes-day/infra/infraestrutura.jpg',
        rotation: "0 -90 0",
    },
    waypoints: [
        {
            scene: "#lounge--salas-esquerda",
            position: fromCylindrical(5, 195, WAYPOINT_HEIGHT),
            animation: floatAnimationCylindrical(5, 195, WAYPOINT_HEIGHT),
        },
        // {
        //     src: "#none",
        //     opacity: 0.001,
        //     disableInVr: true,
        //     scene: "#infra-video",
        //     position: fromCylindrical(6, -90, -1.0),
        //     // rotation: "0 45 0",
        //     animation: floatAnimationCylindrical(6, -90, -1.0),
        //     width: 1.5 * 2,
        //     height: 3 * 2,
        // },
        {
            src: '#speech',
            //scene: DeviceHelper.ehCelular ? "#lounge-video-celular" : "#lounge-video",
            scene: "#infra-video",
            position: fromCylindrical(6, -75, 2.4),
            // rotation: "0 115 0",
            animation: floatAnimationCylindrical(6, -75, 2.4),
        },
    ],
    videos: videosArray,
    images: imagesArray,
    texts: textsArray
}
