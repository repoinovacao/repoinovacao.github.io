import {IdHelper} from "./id-helper.js";
import {AssetHelper} from "./asset-helper.js";
import {DeviceHelper} from "./device-helper.js";
import {removeVideoFrame} from "./video-player.js";
import {SkyHelper} from "./sky-helper.js";

export class SceneHelper {
    static showScene(id, sceneEl, tourData) {
        console.group(`showScene ${id}`)

        SceneHelper.clearElements(sceneEl)
        const sceneData = SceneHelper.getSceneData(id, tourData)

        if (!sceneData) {
            alert(`Scene ${id} not found`)
            console.groupEnd();
            return;
        }

        console.debug(id, sceneData)
        SceneHelper.pauseVideos()
        SkyHelper.pauseSkyVideo()
        SkyHelper.addSky(sceneEl, sceneData.sky?.src);
        window.location.hash = id;

        setTimeout(() => {
            console.group(`showSceneAsync ${id}`)
            AssetHelper.loadSceneAssets(id, sceneData)

            // SkyHelper.setSky(sceneData)
            SkyHelper.setSkyRotation(sceneData);
            setTimeout(SkyHelper.startSkyVideo, 1000);

            SceneHelper.addWaypoints(sceneData, sceneEl, tourData);
            SceneHelper.addVideos(sceneData, sceneEl);
            SceneHelper.addImages(sceneData, sceneEl);
            SceneHelper.addModels(sceneData, sceneEl);
            SceneHelper.addTexts(sceneData, sceneEl);
            console.groupEnd()
        }, 0);

        console.groupEnd()
    }

    static getSceneData(id, tourData) {
        return tourData[IdHelper.removeHashtag(id)];
    }

    static clearElements = (sceneEl) => {
        console.group(`clearElements`)
        const children = document.querySelectorAll(".gui");
        children.forEach(child => {
            console.debug(`removing`, child)
            sceneEl.removeChild(child)
        });
        console.groupEnd()
    }

    static addWaypoints = (sphere, sceneEl, tourData) => {
        const waypoints = sphere.waypoints || [];
        console.group(`adding ${waypoints.length} waypoints`)

        for (const waypoint of waypoints) {
            console.group(`addWaypoint ${waypoint.scene}`)

            if (waypoint.hideIf) {
                console.debug(`hiding ${waypoint.scene}`)
                continue
            }

            const entity = document.createElement('a-image');

            let src = "#pin"
            let opacity = .9
            if (waypoint.src) {
                src = waypoint.src
                opacity = 1
            }
            if (waypoint.opacity) {
                opacity = waypoint.opacity
            }
            const height = waypoint.height || 1
            const width = waypoint.width || 1
            entity.setAttribute("src", src);
            entity.setAttribute("opacity", opacity)
            entity.setAttribute("geometry", {primitive: 'plane', height, width});
            entity.setAttribute("event-set__mouseenter", {scale: "1.2 1.2 1"});
            entity.setAttribute("event-set__mouseleave", {scale: "1 1 1"});
            entity.setAttribute("event-set__click", {_target: "#image-360", _delay: 300, "material.src": waypoint.scene});
            entity.setAttribute("proxy-event", {event: "click", to: "#image-360", as: "fade"});
            entity.setAttribute("position", waypoint.position);

            if (waypoint.rotation) {
                entity.setAttribute("rotation", waypoint.rotation);
            } else {
                entity.setAttribute("look-at", "[camera]");
            }
            if (waypoint.animation) {
                entity.setAttribute("animation", waypoint.animation)
            }

            entity.classList.add('gui');
            entity.classList.add('clickable');
            entity.addEventListener("click", () => {
                if (waypoint.disableIf || waypoint.disableInVr) {
                    console.debug('ignorando click')
                    return
                }
                SceneHelper.showScene(waypoint.scene, sceneEl, tourData)
            });

            sceneEl.appendChild(entity);
            console.groupEnd()
        }
        console.groupEnd()
    }

    static addImages = (sceneData, sceneEl) => {
        const images = sceneData.images || [];
        console.group(`adding ${images.length} images`)

        if (!images) return;

        for (const image of images) {
            console.group(`addImage ${image}`)

            const entity = document.createElement('a-image');
            const height = image.height ? image.height : 1;
            const width = image.width ? image.width : 1;

            AssetHelper.loadImage(image.src, image.src)
            entity.setAttribute("src", image.src);
            entity.setAttribute("geometry", {primitive: 'plane', height, width,});
            entity.setAttribute("material", {shader: "flat"});

            entity.setAttribute("position", image.position);
            if (image.rotation) {
                entity.setAttribute("rotation", image.rotation);
            }
            if (image.href) {
                entity.setAttribute("redirect-to", {url: image.href})
                entity.classList.add('clickable');
            }
            if (image.animation) {
                entity.setAttribute("animation", image.animation)
            }

            entity.classList.add('gui');

            sceneEl.appendChild(entity);

            console.groupEnd()
        }

        console.groupEnd()
    }

    
    static addTexts = (sceneData, sceneEl) => {
        const texts = sceneData.texts || [];
        console.group(`adding ${texts.length} texts`)

        if (!texts) return;

        for (const text of texts) {
            console.group(`addText ${text}`)

            const entity = document.createElement('a-text');

            entity.setAttribute("position", text.position);
            if (text.rotation) {
                entity.setAttribute("rotation", text.rotation);
            } else {
                entity.setAttribute("look-at", "[camera]");
            }
            if (text.href) {
                entity.setAttribute("redirect-to", {url: text.href})
                entity.classList.add('clickable');
            }
            if (text.animation) {
                entity.setAttribute("animation", text.animation)
            }
            if (text.color) {
                entity.setAttribute("color", text.color || 'black')
            }

            entity.setAttribute("material", {color: text.bgColor || 'whitesmoke'})
            entity.setAttribute("geometry", {primitive: "plane", width: text.bgWidth, height: text.bgHeight})

            entity.setAttribute("value", text.value);
            entity.setAttribute("align", text.align || 'center');

            entity.classList.add('gui');

            sceneEl.appendChild(entity);

            console.groupEnd()
        }

        console.groupEnd()
    }

    static addVideos = (sceneData, sceneEl) => {
        const videos = sceneData.videos || [];
        console.group(`adding ${videos.length} videos`)

        for (const video of videos) {
            console.dir(video)

            const poster = video.poster;
            if (poster) {
                AssetHelper.loadImage(poster)
            }
            AssetHelper.loadVideo(video.src, poster)

            const element = document.createElement('a-image');

            element.setAttribute("src", video.poster);
            const width = video.width || 2.1;
            const height = video.height || width / 2.1 * 1.3;
            element.setAttribute("geometry", {primitive: 'plane', height: height, width: width});
            //element.setAttribute("background", "#white");
            element.setAttribute("play-at-video-frame", {src: video.src})
            element.setAttribute("autoplay", "false")

            element.setAttribute("position", video.position);
            if (video.rotation) {
                element.setAttribute("rotation", video.rotation);
            }

            element.classList.add('gui');
            element.classList.add('clickable');

            element.pause();

            // addVideoText(video.text, width, height, video.position, video.rotation, sceneEl);

            sceneEl.appendChild(element);
            console.groupEnd()
        }

        console.groupEnd()
    }

    static addVideoText(text, width, height, position, rotation, sceneEl) {

        console.group(`adding videoText`)

        //<a-entity text="font: mozillavr; value: Via stock font name."></a-entity>
        //<a-entity text="value: Hello World;"></a-entity>
        const element = document.createElement('a-entity');

        element.setAttribute("text", text);
        //element.setAttribute("position", position);
        //element.setAttribute("width", width);
        //element.setAttribute("height", height);
        element.setAttribute("align", "center");
        element.setAttribute("color", "yellow");
        //element.setAttribute("transparent", false);

        // if (rotation) {
        //     element.setAttribute("rotation", rotation);
        // }

        sceneEl.appendChild(element);
        console.groupEnd()
    }

    static addModels = (sceneData, sceneEl) => {
        if (!sceneData?.models) return;

        for (const model of sceneData.models) {
            if (model.hideInVr && DeviceHelper.usingVrMode) {
                console.debug(`hiding ${model.src}`)
                continue
            }

            const entity = document.createElement('a-entity');

            entity.setAttribute("gltf-model", model.src);
            entity.setAttribute("position", model.position);
            entity.setAttribute("scale", model.scale);
            if (model.rotation) {
                entity.setAttribute("rotation", model.rotation);
            }
            if (model.href) {
                entity.setAttribute("redirect-to", {url: model.href})
                entity.classList.add('clickable');
            }

            entity.classList.add('gui');

            sceneEl.appendChild(entity);
        }
    }

    static pauseVideos = () => {
        const videos = document.querySelectorAll("a-video");

        videos.forEach(video => {
            removeVideoFrame(video.parentEl);
        })
    }
}
