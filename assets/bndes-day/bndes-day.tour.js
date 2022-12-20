import infraestrutura from "./infra/infraestrutura.scene.js";
import lounge from "./lounge/lounge.scene.js";
import asg from "./asg/asg.scene.js";
import asgVideo from "./asg/asg-video.scene.js";
import mpme from "./mpme/mpme.scene.js";
import mpmeVideo from "./mpme/mpme-video.scene.js";
import loungeVideo from "./lounge/lounge-video.scene.js";
import infraVideo from "./infra/infra-video.scene.js";
import construindoFuturos from "./futuros/construindo-futuros.scene.js";
import atendimento from "./atendimento/atendimento.scene.js";
import videoGaspar from "./video-gaspar/video-gaspar.scene.js";
import loungeSalasDireitaScene from "./lounge--salas-direita.scene.js";
import loungeSalasEsquerdaScene from "./lounge--salas-esquerda.scene.js";
import elevador from "./elevador/elevador.scene.js";
import hallElevadoresScene from "./hall-elevadores.scene.js";
import futurosVideoScene from "./futuros/futuros-video.scene.js";
import diretas from "./operacoes-diretas/diretas.scene.js";
import diretasVideo from "./operacoes-diretas/diretas-video.scene.js";

export default {
    start: "lounge",
    elevador,
    "hall_elevadores": hallElevadoresScene,
    lounge,
    "lounge-video": loungeVideo,
    "lounge--salas-direita": loungeSalasDireitaScene,
    "lounge--salas-esquerda": loungeSalasEsquerdaScene,
    "construindo-futuros": construindoFuturos,
    "futuros-video": futurosVideoScene,
    asg,
    "asg-video": asgVideo,
    atendimento,
    mpme,
    "mpme-video": mpmeVideo,
    infraestrutura,
    "infra-video": infraVideo,
    "video-gaspar": videoGaspar,
    diretas,
    "diretas-video" : diretasVideo,

}
