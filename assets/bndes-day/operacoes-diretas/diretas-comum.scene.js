import {WAYPOINT_HEIGHT} from "../../../tour-360/tour-helper.js";
import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
import {DeviceHelper} from "../../../tour-360/device-helper.js";
import {Cores} from "../../../tour-360/cores.js";

const AJUSTE_VERTICAL = .75;
const AJUSTE_HORIZONTAL = 2;

const COLUNA_DA_DIREITA = -70 + AJUSTE_HORIZONTAL;
const LINHA_INFERIOR = -1.75 + AJUSTE_VERTICAL;

export const videosArray = [
    // {
    //     src: "../assets/bndes-day/infra/samba.mp4",
    //     poster: "../assets/bndes-day/infra/texto_saneamentorj.png",
    //     position: fromCylindrical(3.0, 235.3, 1.7),
    //     rotation: "0 40 0",
    //     text: "BNDES Saneamento no RJ",
    //     width: 2.0,
    //     height: 1.0,
    // },
    // {
    //     src: "../assets/bndes-day/infra/bndes-saneamento.mp4",
    //     poster: "../assets/bndes-day/infra/texto_saneamento.png",
    //     position: fromCylindrical(3.0, 150, 1.7),
    //     rotation: "0 125 0",
    //     text: "BNDES Saneamento",
    //     width: 1.6,
    //     height: 0.8,
    // },
    {
        src: "../assets/bndes-day/operacoes-diretas/portal-do-cliente.mp4",
        poster: "../assets/bndes-day/operacoes-diretas/texto-site-prc.png",
        position: fromCylindrical(7, 308, 0.38),
        text: "Ultima Milha",
        rotation: "0 -73 0",
        width: 2.45,
        height: 1.9,
    }
];

export const imagesArray = [
    {
        href: DeviceHelper.usingVrMode? null : "https://portal.bndes.gov.br/",
        src: "../assets/bndes-day/operacoes-diretas/texto_portalcliente.png",
        position: fromCylindrical(2.40, -65, 0),
        rotation: "-90 290 78"
    }
];

export const textsArray = [
    {
        value: "Roy Frankel\n Gerente de Solucoes Digitais e Clientes Diretos",
        rotation: "0 10 0",
        position: fromCylindrical(7, COLUNA_DA_DIREITA - 50, LINHA_INFERIOR -0.25),
        color: "whitesmoke",
        bgColor: Cores.BNDES_AZUL,
        bgWidth: "4.6",
        bgHeight: "1",
        align: "center",
    }
];