import {AssetHelper} from "./asset-helper.js";
import * as TourHelper from "./tour-helper.js";
import * as VideoHelper from "./video-helper.js";

export class SkyHelper {
    static addSky = (sceneEl, src) => {
        const currentSky = this.getSkyEl();
        if (currentSky) {
            this.pauseSkyVideo();
            currentSky.setAttribute("src", src);
            return;
        }

        console.log("Criando sky")
        const skyEl = document.createElement('a-sky');
        skyEl.setAttribute("id", "image-360");
        skyEl.setAttribute("radius", 1000);
        skyEl.setAttribute("visible", true);
        skyEl.setAttribute("animation__fade", "property: components.material.material.color; type: color; from: #FFF; to: #000; dur: 300; startEvents: fade");
        skyEl.setAttribute("animation__fadeback", "property: components.material.material.color; type: color; from: #000; to: #FFF; dur: 300; startEvents: animationcomplete__fade")

        if (src) {
            AssetHelper.loadAsset(src);
            skyEl.setAttribute("src", src);
        }

        sceneEl.appendChild(skyEl);
    }

    static getSkyEl() {
        return document.querySelector('a-sky');
    }

    static setSky(sceneData) {
        const src = sceneData?.sky?.src

        console.group(`setSky ${src}`)
        const skyAsset = AssetHelper.loadAsset(src);
        this.setSkySrc(skyAsset);
        console.groupEnd()
    }

    static setSkyRotation = (sceneData) => {
        const rotation = sceneData?.sky?.rotation || sceneData.rotation || "0 0 0";
        console.group(`setSkyRotation ${rotation}`)
        const sky = TourHelper.getSkyEl();
        sky.setAttribute("rotation", rotation);
        console.groupEnd()
    }

    static startSkyVideo = () => {
        console.group("startSkyVideo")
        const videoEl = this.getSkySrc();
        if (videoEl?.play) {
            console.log('starting', videoEl)
            videoEl.currentTime = 0;
            videoEl.play();
        } else {
            console.log('sky is not playable')
        }
        console.groupEnd()
    }

    static pauseSkyVideo() {
        console.group("pauseSkyVideo")
        const skyMaterial = this.getSkyMaterial()
        VideoHelper.pauseElement(skyMaterial?.src);
        VideoHelper.pauseElement(skyMaterial?.data?.src);
        console.groupEnd()
    }

    static getSkySrc(skyEl = TourHelper.getSkyEl()) {
        console.debug('material', this.getSkyMaterial(skyEl))
        // return skyEl?.components?.material?.src;
        return skyEl?.components?.material?.data?.src;
        // return skyEl.getAttribute("src")
    }

    static getSkyMaterial(skyEl) {
        return skyEl?.components?.material;
    }

    static setSkySrc(src, skyEl = TourHelper.getSkyEl()) {
        skyEl.setAttribute("src", src);
        // skyEl.components.material.data.src = src;
        // skyEl.components.material.src = src;
    }

}
