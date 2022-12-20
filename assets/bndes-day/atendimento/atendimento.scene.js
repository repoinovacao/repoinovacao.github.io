import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
import {WAYPOINT_HEIGHT} from "../../../tour-360/tour-helper.js";
import {Cores} from "../../../tour-360/cores.js";

export const videosArray = [
    {
        src: "../assets/bndes-day/atendimento/recado-masculino.mp4",
        poster: "../assets/bndes-day/atendimento/texto-masculino.png",
        position: fromCylindrical(4, -62, 0.95),
        rotation: "0 -60 -0.2",
        width: 1.5,
    },
    {
        src: "../assets/bndes-day/atendimento/recado-feminino.mp4",
        poster: "../assets/bndes-day/atendimento/texto-feminino.png",
        position: fromCylindrical(4, 215, 0.9),
        rotation: "0 280 -0.2",
        width: 1.5,
    }
];

export const textsArray = [
    {
        value: "Telefone: 0800 702 6337\n Segunda-sexta das 08:00 as 20:00",
        rotation: "0 9 0",
        position: fromCylindrical(5.6, -77 , -1),
        color: "whitesmoke",
        bgColor: Cores.BNDES_AZUL,
        bgWidth: "3.7",
        bgHeight: "1",
        align: "center",
    }
];

export default {
    sky: {
        src: '../assets/bndes-day/atendimento/atendimento.jpg',
        rotation: "0 -90 0",
    },
    waypoints: [
        {
            scene: "#lounge--salas-direita",
            position: fromCylindrical(3, 20, WAYPOINT_HEIGHT),
            // rotation: "0 20 0",
            animation: floatAnimationCylindrical(3, 20, WAYPOINT_HEIGHT),
        },
        // {
        //     src: '#speech',
        //     //scene: DeviceHelper.ehCelular ? "#lounge-video-celular" : "#lounge-video",
        //     scene: "#infra-video",
        //     position: fromCylindrical(6, -75, 2.4),
        //     // rotation: "0 115 0",
        //     animation: floatAnimationCylindrical(6, -75, 2.4),
        // },
    ],
     images: [
        {
            href: "https://www.bndes.gov.br/wps/portal/site/home/quem-somos/canais-atendimento/fale-conosco--formulario-geral/",
            src: "../assets/bndes-day/futuros/texto-site-futuros.png",
            position: fromCylindrical(2.3, -70, 0),
            rotation: "-90 270 98" 
        },                    
    //     {
    //         href: "https://meet.jit.si/bndesday01",
    //         src: "#call",
    //         position: fromCylindrical(4, -115, 2.10),
    //         rotation: "0 15 0",
    //         width: 0.5,
    //         height: 0.5            
    //     },                
    //     {
    //         href: "https://meet.jit.si/bndesday02",
    //         src: "#call",
    //         position: fromCylindrical(4, -100, 2.15),
    //         rotation: "0 15 0",
    //         width: 0.5,
    //         height: 0.5           
    //     },        
    ],
    // models: [
    //     {
    //         //"Man In Black With Phone" (https://skfb.ly/ou9xo) by suasanakreasi is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
    //         src: "#atendente-1",
    //         scale: "9500 9500 9500",
    //         position: "-60 -150 -239",
    //         rotation: "0 -53.19 0",
    //     },
    //     {
    //         //"Mei Posed 001 - Female Walking Business Model" (https://skfb.ly/6SIIn) by Renderpeople is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
    //         src: "#atendente-2",
    //         scale: "1 1 1",
    //         position: "-129.33 -156.07 -238.49",
    //         rotation: "0 -52.15 0",
    //     }        
    // ],
    videos: videosArray,
    texts : textsArray
}
