import {floatAnimationCylindrical, fromCylindrical} from "../../tour-360/animation-helper.js";
import {WAYPOINT_HEIGHT} from "../../tour-360/tour-helper.js";

export default {
    sky: {
        src: '../assets/bndes-day/elevadores.jpg',
        rotation: "0 -90 0",
    },
    waypoints: [
        {
            scene: "#elevador",
            position: fromCylindrical(5, 90, WAYPOINT_HEIGHT),
            rotation: "0 0 0",
            animation: floatAnimationCylindrical(5, 90, WAYPOINT_HEIGHT),
        },
        {
            scene: "#lounge",
            position: fromCylindrical(5, -90, WAYPOINT_HEIGHT),
            rotation: "0 0 0",
            animation: floatAnimationCylindrical(5, -90, WAYPOINT_HEIGHT),
        }
    ]
}
