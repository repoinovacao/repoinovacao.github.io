import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
import {WAYPOINT_HEIGHT} from "../../../tour-360/tour-helper.js";
import {Cores} from "../../../tour-360/cores.js";

const AJUSTE_VERTICAL = .75;
const AJUSTE_HORIZONTAL = 2;

const COLUNA_DA_DIREITA = -70 + AJUSTE_HORIZONTAL;
const LINHA_INFERIOR = -1.75 + AJUSTE_VERTICAL;

export const imagesArray = [
    {
        href: "https://www.bndes.gov.br/wps/portal/site/home/desenvolvimento-sustentavel/!ut/p/z1/04_iUlDg4tKPAFJABpSA0fpReYllmemJJZn5eYk5-hH6kVFm8eaB7s4ejiaGPhYWvmYGgUFmhgamRuYGFs5m-l76UfgVFGQHKgIAThtC-g!!/",
        src: "../assets/bndes-day/asg/texto-site-ambiental.png",
        position: fromCylindrical(6.0, -130, 1.9),
        rotation: "-2 38 0",
        width: 6.4,
        height: 3.0
    },
];

export const videosArray = [
    {
        src: "../assets/bndes-day/asg/amazonia-comunidades-tem-apoio.mp4",
        poster: "../assets/bndes-day/asg/texto_amazonia.png",
        position: fromCylindrical(4.5, -52, 1.6),
        rotation: "0 -50 -0.2",
        width: 1.3,
    },
    {
        src: "../assets/bndes-day/asg/sustentabilidade-clima.mp4",
        poster: "../assets/bndes-day/asg/texto_clima.png",
        // position: fromCylindrical(4.0, -115, 1.8),
        position: fromCylindrical(4.5, -33, 1.6),
        rotation: "0 -50 -0.2",
        width: 1.3,
    }
];

export const textsArray = [
    {
        value: "Bruno Aranha\n DIRETOR DE CREDITO PRODUTIVO E SOCIOAMBIENTAL",
        rotation: "0 0 0",
        position: fromCylindrical(6, COLUNA_DA_DIREITA + 12, LINHA_INFERIOR + +0.5),
        color: "whitesmoke",
        bgColor: Cores.BNDES_AZUL,
        bgWidth: "3.7",
        bgHeight: "1",
        align: "center",
    }
];