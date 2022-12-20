import Vec3 from "../libs/vec3.js";

export const floatAnimation = (position) => {
    const coordinates = position.split(" ");
    coordinates[1] = (Number(coordinates[1]) + 0.1).toFixed(2);
    return `property: position; dir: alternate; dur: 1000; easing: easeInOutQuad; to: ${coordinates.join(" ")}; loop: true; autoplay: true`
}

export function slightRotation() {
    return `property: rotation; dir: alternate; dur: 2000; easing: easeInOutQuad; from: 0 -15 0; to: 0 15 0; loop: true; autoplay: true`
}

export const fromCylindrical = (distance, degrees, height) => {
    const radians = toRadians(degrees);
    const vec = Vec3.fromCylindricalCoords(distance, radians, height);
    return `${vec.x.toFixed(2)} ${vec.z.toFixed(2)} ${vec.y.toFixed(2)}`;
}

export const floatAnimationCylindrical = (distance, degrees, height) => {
    return floatAnimation(fromCylindrical(distance, degrees, height))
}

export const toRadians = (degrees) => {
    return degrees * Math.PI /180;
}
