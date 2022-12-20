import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
import {WAYPOINT_HEIGHT} from "../../../tour-360/tour-helper.js";

export default {
    sky: {
        // src: '../assets/bndes-day/lounge.jpg',
        src: '#src-video-gaspar',
        rotation: "0 -90 0",
    },
    waypoints: [
        {
            scene: "#lounge",
            position: fromCylindrical(5, 0, WAYPOINT_HEIGHT),
            rotation: "0 105 0",
            animation: floatAnimationCylindrical(5, 0, WAYPOINT_HEIGHT),
        }
    ]
}
