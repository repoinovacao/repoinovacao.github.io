import {fromCylindrical} from "../../../tour-360/animation-helper.js";
import {DeviceHelper} from "../../../tour-360/device-helper.js";
import {Cores} from "../../../tour-360/cores.js";

export const imagesArray = DeviceHelper.isMobile ?
    [
        {
            href: "https://bndes.gov.br/wps/portal/site/home/quem-somos/planejamento-estrategico/construindo-futuros",
            src: "../assets/bndes-day/futuros/texto-site-futuros.png",
            position: fromCylindrical(2.40, -90, 0),
            rotation: "-90 270 78"
        },
        {
            href: "https://wa.me/?text=Visite o Andar do Cliente do BNDES em https://www.bndes.gov.br/tour-virtual",
            src: "../assets/bndes-day/futuros/texto_h2.png",
            position: fromCylindrical(4.0, -110, 1.1),
            rotation: "0 70 0"
        },
        {
            href: "https://wa.me/?text=Assista Construindo Futuros Sustentáveis: https://www.youtube.com/watch?v=h4t3OkUN8og",
            src: "../assets/bndes-day/futuros/texto_eolico.png",
            position: fromCylindrical(4.0, -55, 1.1),
            rotation: "0 -90 0"
        },
        {
            href: "https://wa.me/?text=Visite o Andar do Cliente do BNDES em https://www.bndes.gov.br/tour-virtual",
            src: "../assets/bndes-day/futuros/texto_saneamento.png",
            position: fromCylindrical(3.0, -20, 1.1),
            rotation: "0 -90 0"
        },
        {
            href: "https://wa.me/?text=Visite o Andar do Cliente do BNDES em https://www.bndes.gov.br/tour-virtual",
            src: "../assets/bndes-day/futuros/texto_floresta.png",
            position: fromCylindrical(3.0, 30, 1.1),
            rotation: "0 -90 0"
        },

    ]
    :
    [
        {
            href: "https://bndes.gov.br/wps/portal/site/home/quem-somos/planejamento-estrategico/construindo-futuros",
            src: "../assets/bndes-day/futuros/texto-site-futuros.png",
            position: fromCylindrical(2.40, -90, 0),
            rotation: "-90 270 78"
        }

    ];

export const videosArray = [
    {
        src: "../assets/bndes-day/futuros/construindo-futuros.mp4",
        poster: "../assets/bndes-day/futuros/texto_sustentaveis.png",
        position: fromCylindrical(7.5, 224, 0.50),
        rotation: "0 79 0",
        width: 4.30,
    },
];

export const textArray = [
    {
        value: "Alice Lopes\n CHEFE DO GABINETE DA PRESIDENCIA",
        rotation: "0 0 0",
        // position: fromCylindrical(7, -70 + AJUSTE_HORIZONTAL, 1.7),
        position: fromCylindrical(7, -55, -.7),
        color: "whitesmoke",
        bgColor: Cores.BNDES_AZUL,
        bgWidth: "4.5",
        bgHeight: "1",
        align: "center",
    }
]
