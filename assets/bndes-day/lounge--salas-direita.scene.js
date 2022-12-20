import {floatAnimationCylindrical, fromCylindrical} from "../../tour-360/animation-helper.js";
import {WAYPOINT_HEIGHT} from "../../tour-360/tour-helper.js";

export default {
    sky: {
        src: '../assets/bndes-day/lounge--saLas-direita.jpg',
        rotation: "0 -90 0",
    },
    waypoints: [
        {
            scene: "#lounge",
            position: fromCylindrical(7, 180, WAYPOINT_HEIGHT),
            rotation: "0 90 0",
            animation: floatAnimationCylindrical(7, 180, WAYPOINT_HEIGHT),
        },
        {
            scene: "#atendimento",
            src: "../assets/placas/atendimento.png",
            position: fromCylindrical(5,-110, WAYPOINT_HEIGHT),
            rotation: "0 0 0",
            animation: floatAnimationCylindrical(5, -110, WAYPOINT_HEIGHT),
        },
        {
            scene: "#construindo-futuros",
            src: "../assets/placas/construindo-futuros.png",
            position: fromCylindrical(5,-60, WAYPOINT_HEIGHT),
            rotation: "0 0 0",
            animation: floatAnimationCylindrical(5, -60, WAYPOINT_HEIGHT),
        },
    ]
}
