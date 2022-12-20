import {floatAnimationCylindrical, fromCylindrical} from "../../../tour-360/animation-helper.js";
import {videosArray,imagesArray, textsArray} from "./diretas-comum.scene.js";

export default {
    sky: {
        src: '../assets/bndes-day/operacoes-diretas/operacoes-diretas.fcp.1920x960.mov',
        rotation: "0 -90 0",
    },
    waypoints: [
        {
            src: '#fechar',
            scene: "#diretas",
            position: fromCylindrical(9, -75, 2),
            animation: floatAnimationCylindrical(9, -75, 2)
        },
    ],
    videos: videosArray,
    images: imagesArray,
    texts: textsArray

}
