import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
// import {DeviceHelper} from "../../../tour-360/device-helper.js";
import {WAYPOINT_HEIGHT} from "../../../tour-360/tour-helper.js";
import {Cores} from "../../../tour-360/cores.js";

const AJUSTE_VERTICAL = .75;
const AJUSTE_HORIZONTAL = 2;

const COLUNA_DA_DIREITA = -70 + AJUSTE_HORIZONTAL;
const LINHA_INFERIOR = -1.75 + AJUSTE_VERTICAL;


export default {
    sky: {
        src: '../assets/bndes-day/lounge/bem-vindos-ao-metaverso.1920x960.mov',
        // src: DeviceHelper.ehCelular ? "#lounge-video-celular" : "#lounge-video-desktop",
        rotation: "0 -90 0",
    },
    waypoints: [
        {
            src: '#fechar',
            scene: "#lounge",
            position: fromCylindrical(7, -60, 3),
            animation: floatAnimationCylindrical(7, -60, 3),
            width: .5,
            height: .5,
        },
        {
            scene: "#lounge--salas-direita",
            position: fromCylindrical(10, 0, WAYPOINT_HEIGHT),
            rotation: "0 90 0",
            animation: floatAnimationCylindrical(10, 0, WAYPOINT_HEIGHT),
        },
        {
            scene: "#lounge--salas-esquerda",
            position: fromCylindrical(10, 180, WAYPOINT_HEIGHT),
            rotation: "0 90 0",
            animation: floatAnimationCylindrical(10, 180, WAYPOINT_HEIGHT),
        },
        // lado esquerdo
        {
            scene: "#asg",
            src: "../assets/placas/asg--esquerda.png",
            rotation: "0 0 0",
            position: fromCylindrical(6, -110 + AJUSTE_HORIZONTAL, -1.75 + AJUSTE_VERTICAL),
        },
        {
            scene: "#infraestrutura",
            src: "../assets/placas/infraestrutura--esquerda.png",
            rotation: "0 0 0",
            position: fromCylindrical(6, -110 + AJUSTE_HORIZONTAL, -.5 + AJUSTE_VERTICAL),
        },
        {
            scene: "#mpme",
            src: "../assets/placas/mpme--esquerda.png",
            rotation: "0 0 0",
            position: fromCylindrical(6, -110 + AJUSTE_HORIZONTAL, .75 + AJUSTE_VERTICAL),
        },    
        // lado direito
        {
            scene: "#atendimento",
            src: "../assets/placas/atendimento--direita.png",
            rotation: "0 0 0",
            position: fromCylindrical(6, -70 + AJUSTE_HORIZONTAL, .25/2 + AJUSTE_VERTICAL),
        },
        {
            scene: "#construindo-futuros",
            src: "../assets/placas/construindo-futuros--direita.png",
            rotation: "0 0 0",
            position: fromCylindrical(6, -70 + AJUSTE_HORIZONTAL, -.25/2-1 + AJUSTE_VERTICAL),
        },            
    ],
    texts: [
        {
            value: "Gustavo Montezano\n PRESIDENTE DO BNDES",
            rotation: "0 0 0",
            position: fromCylindrical(6, COLUNA_DA_DIREITA + 9.25, LINHA_INFERIOR + -0.5),
            color: "whitesmoke",
            bgColor: Cores.BNDES_AZUL,
            bgWidth: "3",
            bgHeight: "1",
            align: "center",
        }
    ],
}
