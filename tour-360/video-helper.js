import {IdHelper} from "./id-helper.js";

export function playFromStart(src) {
    const videoEl = getVideoEl(src);
    videoEl.currentTime = 0;
    videoEl.play();
}

export function pauseByElement(videoEl) {
    const src = videoEl.getAttribute('src')
    return pauseBySrc(src)
}

export function pauseBySrc(src) {
    const srcId = IdHelper.removeHashtag(IdHelper.makeId(src))
    const videoAsset = document.getElementById(srcId);
    videoAsset.querySelectorAll("a-video").forEach(video => pauseAVideo(video));
}

export function pauseAVideo(aVideo) {
    aVideo.components.material.data.src.pause();
}

function getVideoEl(src) {
    return document.getElementById(src);
}

export function pauseElement(videoEl) {
    if (videoEl?.pause) {
        videoEl.pause();
    } else {
        console.log(videoEl, 'is not pausable')
    }
}
