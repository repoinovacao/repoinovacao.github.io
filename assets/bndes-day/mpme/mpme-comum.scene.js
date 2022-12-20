import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
import {WAYPOINT_HEIGHT} from "../../../tour-360/tour-helper.js";
import {Cores} from "../../../tour-360/cores.js";

const AJUSTE_VERTICAL = .75;
const AJUSTE_HORIZONTAL = 2;

const COLUNA_DA_DIREITA = -70 + AJUSTE_HORIZONTAL;
const LINHA_INFERIOR = -1.75 + AJUSTE_VERTICAL;


export const imagesArray = [
    {
        href: "https://ws.bndes.gov.br/canal-mpme/",
        src: "../assets/bndes-day/mpme/texto_canal.png",
        position: fromCylindrical(4, -18, 1.35),
        rotation: "0 -40 0",
        width: 2
    },
];

export const videosArray = [
    {
        src: "../assets/bndes-day/mpme/dicas-finame.mp4",
        poster: "../assets/bndes-day/mpme/texto_dicasfiname.png",
        position: fromCylindrical(4, -137, 1.78),
        rotation: "0 40 0",
        width: 2,
    },
    {
        src: "../assets/bndes-day/mpme/mpme-malharia.mp4",
        poster: "../assets/bndes-day/mpme/texto_desafios.png",
        position: fromCylindrical(4, -56, 1.35),
        rotation: "0 -40 0",
        width: 2,
    },
];

export const textsArray = [
    {
        value: "Bruno Laskowsky\n DIRETOR DE PARTICIPACOES, \n M. CAPITAIS E CREDITO INDIRETO",
        rotation: "0 0 0",
        position: fromCylindrical(6, COLUNA_DA_DIREITA + -5, LINHA_INFERIOR + +0.5),
        color: "whitesmoke",
        bgColor: Cores.BNDES_AZUL,
        bgWidth: "3.7",
        bgHeight: "1",
        align: "center",
    }
];


