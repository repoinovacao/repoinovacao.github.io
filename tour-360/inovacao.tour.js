import {floatAnimation, floatAnimationCylindrical, fromCylindrical} from "./tour-helper.js";

// const urlAtendimento = "https://meet.jit.si/atendimentohumano" + numeroAleatorio;//ideia
const urlAtendimento = "https://www.bndes.gov.br/wps/portal/site/home/quem-somos/canais-atendimento/fale-conosco--formulario-geral/!ut/p/z0/fY5NT8MwEER_C4ccrd3ShoqjVWgDSflUUfCl2iZOaoh3m9hB_HwC4sCJ40gz7w0YKMEwfbiWohOmbsqv5mK_fNysMr2YFZg-rFHP8S672e0QiyXcgpkKxWV-nS3usdg84Qx1mq_1y1U-x2f8JpwP29W2BXOieFSOG4Gyoc6qSlhCJb-MfyQTw731vdFgpk20nxHKA9c27B2H6OJY_bxN8CjeJtiP1qsgXkKCFTG5oGqrKFqunbccJcG_ftXI4MeOBidwejeHtGvPvgAKeXmE/"

export default {
    start: "corner-2005-reunioes",
    "sala-de-reuniao-4-pessoas": {
        sky: {
            src: "../assets/360/sala-de-reuniao-4-pessoas-big.jpg",
        },
        waypoints: [
            {
                scene: "#corner-sala-reuniao",
                position: "3 0 2",
                rotation: "0 45 0",
                animation: floatAnimation("3 0 2"),
            }
        ]
    },
    "corner-sala-reuniao": {
        sky: {
          src: "../assets/360/corner-2010-big.jpg",
          rotation: "0 -45 0",
        },
        waypoints: [
            {
                scene: "#corner-imprensa",
                position: "9 0 0",
                rotation: "0 90 0",
                animation: floatAnimation("9 0 0")
            },
            {
                scene: "#sala-de-reuniao-4-pessoas",
                position: "-4 0 -.7",
                rotation: "0 90 0 ",
                animation: floatAnimation("-4 0 -.7")
            },
            {
                scene: "#corner-2005-reunioes",
                position: "2 0 9",
                rotation: "0 0 0",
                animation: floatAnimation("2 0 9"),
            }
        ]
    },
    "sala-2007-reuniao-4-pessoas": {
        sky: {
            src: "../assets/360/sala-2007-reuniao-4-pessoas-big.jpg",
            rotation: "0 230 0",
        },
        waypoints: [
            {
                scene: "#corner-2005-reunioes",
                position: "-0.5 0.5 2",
                rotation: "0 0 0",
                animation: floatAnimation("-0.5 0.5 2"),
            }
        ],
        videos: [
            {
                src: "../assets/dica_mpme_1.mp4",
                poster: "../assets/dicas_thumb.jpg",
                position: fromCylindrical(2.5, -26.7, .35),
                rotation: "0 -120 0",
                width: 1,
            }
        ]
    },
    "sala-2006": {
        sky: {
            src: "../assets/360/sala-2007-reuniao-4-pessoas-big.jpg",
            rotation: "0 230 0",
        },
        waypoints: [
            {
                scene: "#corner-2005-reunioes",
                position: "-0.5 0.5 2",
                rotation: "0 0 0",
                animation: floatAnimation("-0.5 0.5 2"),
            }
        ],
        videos: [
            {
                src: "../assets/video-giro.mp4",
                poster: "../assets/video-giro.jpg",
                position: fromCylindrical(2.5, -26.7, .35),
                rotation: "0 -120 0",
                width: 1,
            }
        ],
        images: [
            {
                src: "../assets/giro.png",
                href: "https://ws.bndes.gov.br/canal-mpme/#/credito/proposta-dados-basicos",
                position: fromCylindrical(4, -120, 0),
                rotation: "0 50 0",
                animation: floatAnimationCylindrical(4, -120, 0)
            }
        ]
    },
    "sala-2005": {
        sky: {
            src: "../assets/360/sala-2007-reuniao-4-pessoas-big.jpg",
            rotation: "0 230 0",
        },
        waypoints: [
            {
                scene: "#corner-2005-reunioes",
                position: "-0.5 0.5 2",
                rotation: "0 0 0",
                animation: floatAnimation("-0.5 0.5 2"),
            }
        ],
        videos: [
            {
                src: "../assets/video-maquina.mp4",
                poster: "../assets/video-maquina.jpg",
                position: fromCylindrical(2.5, -26.7, .35),
                rotation: "0 -120 0",
                width: 1,
            }
        ],
        images: [
            {
                src: "../assets/caminhao.png",
                href: "https://ws.bndes.gov.br/canal-mpme/#/credito/proposta-dados-basicos",
                position: fromCylindrical(4, -120, 0),
                rotation: "0 50 0",
                animation: floatAnimationCylindrical(4, -120, 0)

            }
        ]
    },
    "sala-2004":{
        sky: {
            src: "../assets/360/sala-2007-reuniao-4-pessoas-big.jpg",
            rotation: "0 230 0",
        },
        waypoints: [
            {
                scene: "#corner-2005-reunioes",
                position: "-0.5 0.5 2",
                rotation: "0 0 0",
                animation: floatAnimation("-0.5 0.5 2"),
            }
        ],
        videos: [
            {
                src: "../assets/video-sustentabilidade.mp4",
                poster: "../assets/video-sustentabilidade.jpg",
                position: fromCylindrical(2.5, -26.7, .35),
                rotation: "0 -120 0",
                width: 1,
            }
        ],
        images: [
            {
                src: "../assets/sustentabilidade.png",
                href: "https://ws.bndes.gov.br/canal-mpme/#/credito/proposta-dados-basicos",
                position: fromCylindrical(4, -120, 0),
                rotation: "0 50 0",
                animation: floatAnimationCylindrical(4, -120, 0)

            }
        ]
    },
    "corner-imprensa": {
        sky: {
            src: "../assets/360/corner-imprensa-big.jpg",
            rotation: "0 -130 0",
        },
        waypoints: [
            {
                scene: "#sala-imprensa",
                position: "3 -1 -5",
                animation: floatAnimation("3 -1 -5")
            },
            {
                scene: "#lounge-imprensa",
                position: "0 0 9",
                animation: floatAnimation("0 0 9")
            },
            {
                scene: "#corner-sala-reuniao",
                position: "-9 0 -1.5",
                rotation: "0 90 0",
                animation: floatAnimation("-9 0 -1.5"),
            },
            ],
        images: [
            {
                src: "../assets/360/avatar.png",
                position: "-4 -0.5 1",
                rotation: "0 90 0",
                href: "https://reunioes.bndes.gov.br/falenometaverso",
                animation: "property: scale; dir: alternate; dur:1000; easing: linear; from: 1.2 2.0 1.1; to: 1.1 2.0 1.1; loop: true; autoplay: true"
            },
            {
                src: "../assets/contato.png",
                position: "-5 -0.5 5",
                rotation: "0 90 0",
                href: urlAtendimento,
                animation: "property: scale; dir: alternate; dur:1000; easing: linear; to: 1.1 1.1 1.1; loop: true; autoplay: true"
            }
        ],
        models: [
            {
                src: "#robot",
                href: "https://chatbot.bndes.gov.br/atendimento",
                scale: "2 2 2",
                position: "-8 -2.5 5",
                rotation: "0 90 0",
                animation: floatAnimation("-0.6 0.2 -5")
            }
        ]
    },
    "hall-elevadores": {
        sky: {
            src: "../assets/360/hall-elevadores-big.jpg",
            rotation: "0 90 0",
        },
        waypoints: [
            {
                scene: "#lounge-imprensa",
                position: "-0.2 -0.5 9",
                animation: floatAnimation("-0.2 -0.5 9")
            }, //entrada sala
            {
                scene: "#corner-2005-reunioes",
                position: fromCylindrical(4, -100, 0),
                rotation: "0 0 0",
                animation: floatAnimationCylindrical(4, -100, 0)
            }
        ],

        images: [
            {
                src: "../assets/360/mapa_andar.jpeg",
                //position: fromCylindrical(1.3, -70, 0),
                position: fromCylindrical(0, -90, -1),
                rotation: "-90 -5 0"
                //animation: floatAnimationCylindrical(1.5, -70, 0)
            },
            {
                src: "../assets/360-verde.png",
                position: fromCylindrical(1.8, -138, 0),

                //animation: floatAnimationCylindrical(1.3, -141, 0)
            },
            {
                src: "../assets/clique-e-arraste-verde.png",
                rotation: "0 -80 0",
                position: fromCylindrical(4.3, -39, 0),

                //animation: floatAnimationCylindrical(1.3, -141, 0)
            },
        ],
    },
    "corner-2005-reunioes" : {
        sky: {
            src: "../assets/360/corner-2005-reunioes-big.jpg",
            rotation: "0 0 0",
        },
        waypoints: [
            {
                scene: "#corner-2001-multiuso",
                // position: "-0.4 -0.4 8",
                position: fromCylindrical(8, 90, 0),
                // animation: floatAnimation("-0.4 -0.4 8")
                animation: floatAnimationCylindrical(8, 90, 0)
            }, //entrada sala
            {
                scene: "#sala-2007-reuniao-4-pessoas",
                src: "../assets/placas/orientacoes-gerais.png",
                position: "0.8 0.2 -5",
                rotation: "0 0 0",
                animation: floatAnimation("0.8 0.2 -5")
            },//outro canto da sala
            {
                scene: "#hall-elevadores",
                position: fromCylindrical(8, -10, 0),
                animation: floatAnimationCylindrical(8, -10, 0)
            },
            {
                scene: "#sala-2006",
                src: "../assets/placas/capital-de-giro.png",
                position: "-2.8 0.2 -0.1",
                rotation: "0 90 0",
                animation: floatAnimation("-2.8 0.2 -0.1")
            },
            {
                scene: "#sala-2005",
                src: "../assets/placas/maquinas-e-equipamentos.png",
                position: "-2.8 0.2 1.5",
                rotation: "0 90 0",
                animation: floatAnimation("-2.8 0.2 1.5")
            },
            {
                scene: "#sala-2004",
                src: "../assets/placas/sustentabilidade.png",
                position: "-2.2 0.2 5",
                rotation: "0 -250 0",
                animation: floatAnimation("-2.2 0.2 5")
            },
            {
                scene: "#video-boas-vindas",
                src: "../assets/placas/seja-bem-vindo.png",
                position: "-0.6 0.2 -5",
                rotation: "0 0 0",
                animation: floatAnimation("-0.6 0.2 -5")
            },
            {
                scene: "#corner-sala-reuniao",
                position: "3.5 -0.2 -3",
                rotation: "0 -90 0",
                animation: floatAnimation("3.5 -0.2 -3")
            }
        ]
        // ,
        // models: [
        //     {
        //         src: "#robot",
        //         href: "https://chatbot.bndes.gov.br/atendimento",
        //         scale: "2.1 2.1 2.1",
        //         position: "5.5 -3.2 -1",
        //         rotation: "0 -90 0",
        //     }
        // ]
    },
    "video-boas-vindas" : {
        sky: {
            // src: ,
            rotation: "0 300 0",
        },
        waypoints: [
            {
                scene: "#corner-2005-reunioes",
                position: fromCylindrical(4, -40, 0),
                animation: floatAnimationCylindrical(4, -40, 0),
                rotation: "0 -45 0",
            }
        ],
    },
    "sala-imprensa": {
        sky: {
            src: "../assets/360/sala-imprensa-big.jpg",
            rotation: "0 192 0",
        },
        waypoints: [
            {
                scene: "#corner-imprensa",
                position: "5.7 -0.5 5",
                animation: floatAnimation("5.7 -0.5 5")
            }, //entrada sala
            ],
        videos: [
            { src: "../assets/dica_mpme_1.mp4", poster: "../assets/dicas_thumb.jpg", position: "-2.6 0.5 7", rotation: "0 193 0" }

            // { thumb: "#dicas_mpme_thumb", src: "dicas_mpme", position: "3.6 -0.2 1.3", rotation: "0 270 -2" },
            // { thumb: "#dicas_mpme_thumb", src: "dicas_mpme", position: "-6 0 5", rotation: "0 180 0" },
            // { thumb: "#dicas_mpme_thumb", src: "dicas_mpme", position: "-8.5 0 3.5", rotation: "0 180 0" },
            // { thumb: "#dicas_mpme_thumb", src: "dicas_mpme", position: "-4.5 -0.6 -7.3", rotation: "9 3 0" },
            // { thumb: "#dicas_mpme_thumb", src: "dicas_mpme", position: "-8.0 -0.6 -4.2", rotation: "6 3 0" }
        ]
    },
    "sala-multiuso-centro" : {
        sky: {
            src: "../assets/360/sala-multiuso-centro-big.jpg",
            rotation: "0 192 0",
        },
        waypoints: [
            {
                scene: "#corner-2001-multiuso",
                position: "5.7 -0.5 5",
                animation: floatAnimation("5.7 -0.5 5")
            }, //entrada sala
        ]
    },
    "lounge-imprensa": {
        sky: {
            src: "../assets/360/lounge-imprensa-big.jpg",
            rotation: "0 180 0",
        },
        waypoints: [
            {
                scene: "#corner-imprensa",
                position: "2.2 0.2 -9",
                animation: floatAnimation("2.2 0.2 -9")
            }, //entrada sala
            {
                scene: "#hall-elevadores",
                position: "-8 0 -0.2",
                rotation: "0 90 0",
                animation: floatAnimation("-8 0 -0.2")
            }, //hall elevadores
            {
                scene: "#corner-2001-multiuso",
                position: "-1.5 -0.9 5",
                rotation: "0 0 0",
                animation: floatAnimation("-1.5 -0.9 5")
            },//outro canto da sala
        ]
        // ,
        // models: [
        //     {
        //         src: "#robot",
        //         href: "https://chatbot.bndes.gov.br/atendimento",
        //         scale: "2.1 2.1 2.1",
        //         position: "-5.5 -3.2 -3",
        //         rotation: "0 90 0",
        //     }
        // ]
    },
    "corner-2001-multiuso": {
        sky: {
            src: "../assets/360/corner-2001-multiuso-big.jpg",
            rotation: "0 -110 0",
        },
        waypoints: [
            {
                scene: "#lounge-imprensa",
                position: "-4.2 -0.5 -1",
                rotation: "0 100 0",
                animation: floatAnimation("-4.2 -0.5 -1")
            }, //entrada sala
            {
                scene: "#corner-2005-reunioes",
                position: "-2.2 -0.5 9",
                animation: floatAnimation("-2.2 -0.5 9")
            }, //corredor
            {
                scene: "#sala-multiuso-centro",
                position: "4.2 -0.5 -3",
                rotation: "0 100 0",
                animation: floatAnimation("4.2 -0.5 -3")
            }, //sala-multiuso-centro

            ],

        images: [
            // {
            //     src: "#contato",
            //     position: "0.4 -1.0 -4",
            //     href: urlAtendimento,
            //     animation: "property: scale; dir: alternate; dur:1000; easing: linear; to: 1.1 1.1 1.1; loop: true; autoplay: true"
            // }
            {
                src: "../assets/canal_mpme2.png",
                position: "-0.2 -0.2 -2.8",
                rotation: "0 -25 0",
                href: "https://ws.bndes.gov.br/canal-mpme/#/home",
                animation: "property: scale; dir: alternate; dur:1000; easing: linear; to: 1.1 1.1 1.1; loop: true; autoplay: true"
            }
        ]
    }
}
