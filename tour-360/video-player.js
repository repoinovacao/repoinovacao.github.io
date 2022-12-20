import {IdHelper} from "./id-helper.js";
import * as VideoHelper from "./video-helper.js";
import {DeviceHelper} from "./device-helper.js";

export function removeOtherPlayers(id) {
    console.group('VideoPlayer.closeAll', id)
    document.querySelectorAll('a-video').forEach( videoEl => {
        if (videoEl.getAttribute('id') === id) {
            console.log(`Skipping ${id}`)
            console.groupEnd()
            return
        }
        removeVideoFrame(videoEl.parentEl);
    })
}

export function removeVideoFrame(groupEl) {
    console.group("removeVideoFrame", groupEl)

    const videoEl = groupEl.querySelector("a-video")
    console.dir(videoEl)
    VideoHelper.pauseByElement(videoEl)
    videoEl.remove()

    const videoBackgroundEl = groupEl.querySelector('#video-background')
    videoBackgroundEl.remove()

    const closeEl = groupEl.querySelector('#close')
    closeEl.remove()

    groupEl.remove()

    console.groupEnd()
}

export const buildVideoPlayer = (id, src, position, width = 4) => {
    const groupEl = document.createElement("a-entity");
    if (!id) {
        id = IdHelper.makeId(src)
    }
    groupEl.setAttribute("id", IdHelper.removeHashtag(id))

    if (position) {
        groupEl.setAttribute("position", position.toString());
    }

    const height = width / 2
    const border = width * .5

    const videoFrame = buildVideoEl(src, width)
    groupEl.appendChild(videoFrame);

    const videoBackgroundEl = buildVideoBackgroundEl(width + border, height + border)
    groupEl.appendChild(videoBackgroundEl);
    // const videoBackgroundEl = buildVideoBackgroundSphereEl(2)
    // const camera = getCameraEl();
    // camera.appendChild(videoBackgroundEl);

    const closeEl = buildCloseEl()
    const closeX = width / 2 + CLOSE_ELEMENT_SIZE
    const closeY = height / 2 + CLOSE_ELEMENT_SIZE
    closeEl.setAttribute("position", `${closeX} ${closeY} 0`)
    groupEl.appendChild(closeEl)

    videoBackgroundEl.addEventListener("click", (event) => {
        removeVideoFrame(groupEl);
        event.stopPropagation();
    })
    closeEl.addEventListener("click", (event) => {
        removeVideoFrame(groupEl);
        event.stopPropagation();
    })

    return groupEl
}

function buildVideoEl(src, width = 4) {
    const videoFrame = document.createElement("a-video");
    videoFrame.setAttribute("width", width);
    videoFrame.setAttribute("height", width / 2);
    // videoFrame.setAttribute("play-pause-video", "");
    videoFrame.setAttribute("look-at", "[camera]");
    // videoFrame.setAttribute("material", {depthTest: false});
    videoFrame.setAttribute("src", `#${src}`);
    // videoFrame.classList.add("clickable");
    return videoFrame;
}

function buildVideoBackgroundEl(width, height) {
    // const height = width / 2
    const background = document.createElement("a-entity");
    background.setAttribute("id", "video-background");
    background.setAttribute("geometry", {primitive: "plane", width, height});
    background.setAttribute("material", {shader: "flat", color: "black", opacity: 0.7});
    background.setAttribute("position", "0 0 -.2");
    background.setAttribute("look-at", "[camera]");
    if (!DeviceHelper.usingVrMode) {
        background.setAttribute("close-video-frame", "");
        background.classList.add("clickable");
    }
    return background;
}

function buildVideoBackgroundSphereEl(radius = 2) {
    const background = document.createElement("a-entity");
    background.setAttribute("id", "video-background");
    background.setAttribute("geometry", {primitive: "sphere", radius});
    background.setAttribute("material", {shader: "flat", color: "black", opacity: 0.7});
    background.setAttribute("position", "0 0 0");
    background.setAttribute("close-video-frame", "");
    background.classList.add("clickable");
    return background;
}

const CLOSE_ELEMENT_SIZE = .3;

function buildCloseEl() {
    const size = CLOSE_ELEMENT_SIZE
    const closeEl = document.createElement("a-image");
    closeEl.setAttribute('id', 'close')
    closeEl.setAttribute('src', '../assets/fechar.png')
    closeEl.setAttribute("geometry", {primitive: "plane", width: size, height: size});
    closeEl.setAttribute("material", {shader: "flat", color: "white", opacity: 0.7});
    // closeEl.setAttribute("look-at", "[camera]");
    closeEl.setAttribute("close-video-frame", "");

    closeEl.classList.add("clickable");

    return closeEl;
}
