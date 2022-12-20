import {DeviceHelper} from "./device-helper.js";
import * as TourHelper from "./tour-helper.js";
import * as VideoHelper from "./video-helper.js";
import {IdHelper} from "./id-helper.js";
import * as VideoPlayer from "./video-player.js";

AFRAME.registerComponent('play-at-video-frame', {
    schema: {
        src: { default: '' }
    },
    init: function () {
        this.el.addEventListener("click", (event) => {
            const src = this.data.src || this.src
            const id = IdHelper.makeId(src)
            if (TourHelper.getElement(id)) {
                console.debug(`VideoPlayer ${id} já existe`)
                return
            }

            console.debug(`Criando VideoPlayer ${id}`)
            VideoPlayer.removeOtherPlayers(id)
            if (DeviceHelper.usingVrMode) {
                addVideoPlayer(id, src, event)
            } else {
                addDesktopVideo(id, src)
            }
            VideoHelper.playFromStart(src)
        })
    }
})

function addVideoPlayer(id, src, event) {
    console.group('addVideoPlayer', src, event)
    const target = event.target;
    const videoEl = VideoPlayer.buildVideoPlayer(id, src, "0 0 .5", 2);
    target.appendChild(videoEl)
    console.groupEnd()
}

function addDesktopVideo(id, src) {
    const videoEl = VideoPlayer.buildVideoPlayer(id, src, "0 0 -2");
    const camera = TourHelper.getCameraEl()
    camera.appendChild(videoEl);
}
