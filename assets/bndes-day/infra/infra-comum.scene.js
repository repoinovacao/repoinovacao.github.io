import {WAYPOINT_HEIGHT} from "../../../tour-360/tour-helper.js";
import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
import {DeviceHelper} from "../../../tour-360/device-helper.js";
import {Cores} from "../../../tour-360/cores.js";

const AJUSTE_VERTICAL = .75;
const AJUSTE_HORIZONTAL = 2;

const COLUNA_DA_DIREITA = -70 + AJUSTE_HORIZONTAL;
const LINHA_INFERIOR = -1.75 + AJUSTE_VERTICAL;

export const videosArray = [
    {
        src: "../assets/bndes-day/infra/samba.mp4",
        poster: "../assets/bndes-day/infra/texto_saneamentorj.png",
        position: fromCylindrical(3.0, 235.3, 1.7),
        rotation: "0 40 0",
        text: "BNDES Saneamento no RJ",
        width: 2.0,
        height: 1.0,
    },
    {
        src: "../assets/bndes-day/infra/bndes-saneamento.mp4",
        poster: "../assets/bndes-day/infra/texto_saneamento.png",
        position: fromCylindrical(3.0, 150, 1.7),
        rotation: "0 125 0",
        text: "BNDES Saneamento",
        width: 1.6,
        height: 0.8,
    },
    {
        src: "../assets/bndes-day/infra/infra-ultima-milha.mp4",
        poster: "../assets/bndes-day/infra/texto_ultima_milha.png",
        position: fromCylindrical(5.8, 323, 1.6),
        text: "Ultima Milha",
        rotation: "0 -50 0",
        width: 3.6,
        height: 1.8,
    }
];

export const imagesArray = [
    {
        href: DeviceHelper.usingVrMode? null : "https://hubdeprojetos.bndes.gov.br/pt/",
        src: "../assets/bndes-day/infra/poster-hub.png",
        position: fromCylindrical(5.8, 355, 1.6),
        width: 3,
        height: 1.5,
        rotation: "0 -50 0",
    }
];

export const textsArray = [
    {
        value: "Fabio Abrahao\n DIRETOR DE CONCESSOES \n E PRIVATIZACOES",
        rotation: "0 0 0",
        position: fromCylindrical(6, COLUNA_DA_DIREITA + 9, LINHA_INFERIOR + +0.5),
        color: "whitesmoke",
        bgColor: Cores.BNDES_AZUL,
        bgWidth: "2.9",
        bgHeight: "1",
        align: "center",
    }
];