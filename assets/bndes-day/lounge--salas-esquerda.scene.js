import {floatAnimationCylindrical, fromCylindrical} from "../../tour-360/animation-helper.js";
import {WAYPOINT_HEIGHT} from "../../tour-360/tour-helper.js";

export default {
    sky: {
        src: '../assets/bndes-day/lounge--saLas-esquerda.jpg',
        rotation: "0 -90 0",
    },
    waypoints: [
        {
            scene: "#lounge",
            position: fromCylindrical(10, -17, WAYPOINT_HEIGHT),
            // rotation: "0 90 0",
            animation: floatAnimationCylindrical(10, -17, WAYPOINT_HEIGHT),
        },
        {
            scene: "#diretas",
            src: "../assets/placas/operacoes-diretas.png",
            position: fromCylindrical(5, -95, WAYPOINT_HEIGHT),
            rotation: "0 15 0",
            animation: floatAnimationCylindrical(5, -95, WAYPOINT_HEIGHT),
        },
        {
            scene: "#asg",
            src: "../assets/placas/asg.png",
            position: fromCylindrical(5, 185, WAYPOINT_HEIGHT),
            rotation: "0 90 0",
            animation: floatAnimationCylindrical(5, 185, WAYPOINT_HEIGHT),
        },        
        {
            scene: "#mpme",
            src: "../assets/placas/mpme.png",
            position: fromCylindrical(5, 165, WAYPOINT_HEIGHT),
            rotation: "0 95 0",
            animation: floatAnimationCylindrical(5, 165, WAYPOINT_HEIGHT),
        },
        {
            scene: "#infraestrutura",
            src: "../assets/placas/infraestrutura.png",
            position: fromCylindrical(5, 115, WAYPOINT_HEIGHT),
            // rotation: "0 100 0",
            animation: floatAnimationCylindrical(5, 115, WAYPOINT_HEIGHT),
        },
    ]
}
