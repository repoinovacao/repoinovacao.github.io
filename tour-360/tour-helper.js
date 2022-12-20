export const WAYPOINT_HEIGHT = 1;
export function getSceneEl() {
    return document.querySelector("a-scene");
}
export function getCameraEl() {
    return document.querySelector("[camera]");
}

export function getSkyEl() {
    return document.querySelector("a-sky");
}

export function appendToScene(element) {
    const scene = getSceneEl();
    scene.appendChild(element);
}

export function getElement(selector) {
    return document.querySelector(selector);
}
