import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
import {WAYPOINT_HEIGHT} from "../../../tour-360/tour-helper.js";
import {Cores} from "../../../tour-360/cores.js";

const AJUSTE_VERTICAL = .75;
const AJUSTE_HORIZONTAL = 2;

const COLUNA_DA_ESQUERDA          = -110 + AJUSTE_HORIZONTAL;
const COLUNA_DA_DIREITA           =  -70 + AJUSTE_HORIZONTAL;

const LINHA_SUPERIOR              =  0.75 + AJUSTE_VERTICAL;
const LINHA_CENTRO_SUPERIOR       = -0.50 + AJUSTE_VERTICAL;
const LINHA_CENTRAL               = -0.50 + AJUSTE_VERTICAL;
const LINHA_CENTRO_INFERIOR       = -1.75 + AJUSTE_VERTICAL;
const LINHA_INFERIOR              = -3.00 + AJUSTE_VERTICAL;

export default {
    sky: {
        // src: '../assets/bndes-day/lounge.jpg',
        src: '#lounge',
        rotation: "0 -90 0",
    },
    waypoints: [
        // {
        //     scene: "#hall_elevadores",
        //     position: fromCylindrical(5, 90, 0),
        //     rotation: "0 0 0",
        //     animation: floatAnimationCylindrical(5, 90, 0),
        // },
        // {
        //     src: "#none",
        //     opacity: 0.001,
        //     scene: "#lounge-video",
        //     position: fromCylindrical(6, -90, -0.1),
        //     rotation: "0 0 0",
        //     animation: floatAnimationCylindrical(6, -90, -0.1),
        //     width: 1.2 * 2,
        //     height: 3 * 2,
        // },
        {
            src: '#speech',
            scene: "#lounge-video",
            position: fromCylindrical(6, -80, 2.9),
            rotation: "0 0 0",
            animation: floatAnimationCylindrical(6, -80, 2.9),
        },
        {
            scene: "#lounge--salas-direita",
            position: fromCylindrical(10, 0, WAYPOINT_HEIGHT),
            // rotation: "0 90 0",
            animation: floatAnimationCylindrical(10, 0, WAYPOINT_HEIGHT),
        },
        {
            scene: "#lounge--salas-esquerda",
            position: fromCylindrical(10, 180, WAYPOINT_HEIGHT),
            // rotation: "0 90 0",
            animation: floatAnimationCylindrical(10, 180, WAYPOINT_HEIGHT),
        },
        // lado esquerdo
        {
            scene: "#diretas",
            src: "../assets/placas/operacoes-diretas--esquerda.png",
            rotation: "0 0 0",
            position: fromCylindrical(6, COLUNA_DA_ESQUERDA, LINHA_INFERIOR),
        },
        {
            scene: "#asg",
            src: "../assets/placas/asg--esquerda.png",
            rotation: "0 0 0",
            position: fromCylindrical(6, COLUNA_DA_ESQUERDA, LINHA_CENTRO_INFERIOR),
        },
        {
            scene: "#infraestrutura",
            src: "../assets/placas/infraestrutura--esquerda.png",
            rotation: "0 0 0",
            position: fromCylindrical(6, COLUNA_DA_ESQUERDA, LINHA_CENTRO_SUPERIOR),
        },
        {
            scene: "#mpme",
            src: "../assets/placas/mpme--esquerda.png",
            rotation: "0 0 0",
            position: fromCylindrical(6, COLUNA_DA_ESQUERDA, LINHA_SUPERIOR),
        },    
        // lado direito
        {
            scene: "#atendimento",
            src: "../assets/placas/atendimento--direita.png",
            rotation: "0 0 0",
            position: fromCylindrical(6, COLUNA_DA_DIREITA, LINHA_SUPERIOR),
        },
        {
            scene: "#construindo-futuros",
            src: "../assets/placas/construindo-futuros--direita.png",
            rotation: "0 0 0",
            position: fromCylindrical(6, COLUNA_DA_DIREITA, LINHA_CENTRAL),
        },            
    ],
    // texts: [
    //     {
    //         value: "Gustavo Montezano\n PRESIDENTE DO BNDES",
    //         rotation: "0 0 0",
    //         position: fromCylindrical(6, COLUNA_DA_DIREITA + 9.25, LINHA_CENTRO_INFERIOR + .2),
    //         color: "whitesmoke",
    //         bgColor: Cores.BNDES_AZUL,
    //         bgWidth: "3",
    //         bgHeight: "1",
    //         align: "center",
    //     }
    // ],
    images: [
        //  {
        //      // src: "../assets/bndes-day/mapa.jpg",
        //      src: "#mapa",
        //      position: fromCylindrical(8.0, -60, 0.2),
        //     //  position: fromCylindrical(3.0, -135, 0.2),
        //      rotation: "0 0 0.5",
        //      width: 4.104,
        //      height: 1.854
        //     // width: 6.840 * .35,
        //     // height: 3.090 *.35,
        // },
     ],
    // videos: [
    //     {
    //         src: "../assets/dica_mpme_1.mp4",
    //         poster: "../assets/dicas_thumb.jpg",
    //         position: fromCylindrical(2.5, -26.7, .35),
    //         rotation: "0 -120 0",
    //         width: 1,
    //     }
    // ],
    models: [
        // {
        //     // src: "#robot",
        //     src: "../assets/robot.gltf",
        //     href: "https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_MmE0NTZjYWItYjc2NS00OWM4LWFiMjYtYzkxYjRkMzllMTU5%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%25227e2324c6-6925-427e-b56d-4e6eda16752a%2522%252c%2522Oid%2522%253a%2522e1573abf-a8c0-4b96-91d5-346a95008d9a%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=9a82c16a-b7a5-467d-9f0b-43756abe0d2e&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true",
        //     scale: "3 3 3",
        //     position: fromCylindrical(13, -120, -2.2),
        //     rotation: "0 30 0",
        // },
        // {
        //     // src: "#mapa3d",
        //     src: "../assets/bndes-day/mapa3d.gltf",
        //     href: "https://chatbot.bndes.gov.br/atendimento",
        //     scale: "1.5 1.5 1.5",
        //     position: fromCylindrical(9, -110, -2.2),
        //     rotation: "0 10 0",
        // }
    ]

}
