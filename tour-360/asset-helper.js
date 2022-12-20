import {IdHelper} from "./id-helper.js";
import {SrcHelper} from "./src-helper.js";

export class AssetHelper {

    static loadTourAssets(tourData) {
        console.groupCollapsed(`loadTour ${tourData}`)

        for (const [name, sceneData] of Object.entries(tourData)) {
            if (sceneData !== 'start')
                this.loadSceneAssets(name, sceneData)
        }

        console.groupEnd()
    }

    static loadSceneAssets(name, sceneData) {
        console.groupCollapsed(`loadScene ${name}`)
        console.debug(sceneData)

        AssetHelper.loadSkyAsset(name, sceneData)
        AssetHelper.loadWaypointAssets(sceneData)
        AssetHelper.loadVideoAssets(sceneData)
        AssetHelper.loadImageAssets(sceneData)
        AssetHelper.loadModelAssets(sceneData)

        console.groupEnd()
    }

    static loadSkyAsset(id, sceneData) {
        const sky = sceneData.sky;
        console.group(`loadSky ${sky}`)

        const src = sky?.src

        if (!src) {
            console.debug(`skipping undefined sky`)
            console.groupEnd()
            return
        }

        if (IdHelper.isId(src)) {
            console.debug(`skipping #id`)
            console.groupEnd()
            return
        }

        if (SrcHelper.isVideo(src)) {
            AssetHelper.loadVideo(src)
        } else {
            AssetHelper.loadImage(id, src)
        }

        console.groupEnd()
    }

    static loadWaypointAssets(sceneData) {
        const waypoints = sceneData.waypoints || [];
        console.group(`loadWaypoints ${waypoints}`)

        for (const waypoint of waypoints) {
            const src = waypoint.src
            AssetHelper.loadImage(src, src)
        }

        console.groupEnd()
    }

    static loadVideoAssets(sceneData) {
        const videos = sceneData.videos || [];
        console.group(`loadVideos ${videos}`)

        for (const video of videos) {
            const src = video.src
            const poster = video.poster
            AssetHelper.loadVideo(src, poster)
        }

        console.groupEnd()
    }

    static loadImageAssets(sceneData) {
        const images = sceneData.images || [];

        console.group(`loadImages ${images}`)

        for (const image of images) {
            const src = image.src
            AssetHelper.loadImage(src, src)
        }

        console.groupEnd()
    }

    static loadModelAssets(sceneData) {
        const models = sceneData.models || [];

        console.group(`loadModels ${models}`)

        for (const model of models) {
            const src = model.src
            AssetHelper.loadModel(src, src)
        }

        console.groupEnd()
    }

    static getAssetsElement() {
        return document.getElementsByTagName('a-assets')[0];
    }

    static loadAsset(src) {
        if (!src || IdHelper.isId(src)) {
            return
        }
        if (SrcHelper.isVideo(src)) {
            return AssetHelper.loadVideo(src)
        }
        if (SrcHelper.isImage(src)) {
            return AssetHelper.loadImage(src, src)
        }
        if (SrcHelper.isModel(src)) {
            return AssetHelper.loadModel(src, src)
        }
        if (SrcHelper.isAudio(src)) {
            return AssetHelper.loadAudio(src, src)
        }
        console.error(`Não sei carregar o asset ${src}`)
    }

    static loadImage(id, src) {
        console.group(`loadImage [${id}] [${src}]`)

        if (!id && !src) {
            console.debug(`skipping undefined image`)
            console.groupEnd()
            return
        }

        id = IdHelper.removeHashtag(id) || IdHelper.removeHashtag(src)
        const assetFound = AssetHelper.findAsset(id);
        if (assetFound) {
            console.debug(`preloaded asset ${id}`)
            console.groupEnd()
            return assetFound;
        }

        console.debug(`carregando asset ${id}`)
        const newAssetEl = document.createElement('img')
        newAssetEl.setAttribute("id", id)
        newAssetEl.setAttribute("src", src)
        const assetsEl = AssetHelper.getAssetsElement()
        assetsEl.appendChild(newAssetEl)

        console.groupEnd()
        return newAssetEl
    }

    static loadVideo(src, poster) {
        console.group(`loadVideo ${src}, ${poster}`)

        if (!src) {
            console.debug(`skipping undefined video`)
            console.groupEnd()
            return
        }

        const preloadedAsset = AssetHelper.findAsset(src);
        if (preloadedAsset) {
            console.debug(`preloaded asset ${src}`)
            console.groupEnd()
            return preloadedAsset
        }

        console.debug(`loadVideoAsset ${src}`)

        const newAssetEl = document.createElement('video')
        newAssetEl.setAttribute("id", src)
        newAssetEl.setAttribute("src", src)
        newAssetEl.setAttribute("poster", poster)
        newAssetEl.setAttribute("preload", "metadata")
        newAssetEl.setAttribute("loop", "false")
        //newAssetEl.setAttribute("autoplay", "false") //Trecho comentado: mesmo com "false"/false, o vídeo faz autoplay.
        const assetsEl = AssetHelper.getAssetsElement()
        assetsEl.appendChild(newAssetEl)

        console.groupEnd()
        return newAssetEl
    }

    static loadAudio(src) {
        console.group(`loadAudio ${src}`)

        if (!src) {
            console.debug(`skipping undefined audio`)
            console.groupEnd()
            return
        }

        if (AssetHelper.findAsset(src)) {
            console.debug(`preloaded asset ${src}`)
            console.groupEnd()
            return
        }

        console.debug(`loadAudioAsset ${src}`)

        const newAssetEl = document.createElement('video')
        newAssetEl.setAttribute("src", src)
        newAssetEl.setAttribute("id", src)
        newAssetEl.setAttribute("preload", "metadata")
        newAssetEl.setAttribute("loop", "false")
        newAssetEl.setAttribute("autoplay", "false")
        const assetsEl = AssetHelper.getAssetsElement()
        assetsEl.appendChild(newAssetEl)

        console.groupEnd()
        return newAssetEl
    }

    static loadModel(id, src) {
        console.group(`loadModel [${id}] [${src}]`)

        if (!id && !src) {
            console.debug(`skipping undefined model`)
            console.groupEnd()
            return
        }

        id = IdHelper.removeHashtag(id) || IdHelper.removeHashtag(src)
        if (AssetHelper.findAsset(id)) {
            console.debug(`preloaded asset ${id}`)
            console.groupEnd()
            return
        }

        console.debug(`carregando asset ${id}`)
        const newAssetEl = document.createElement('a-asset-item')
        newAssetEl.setAttribute("id", id)
        newAssetEl.setAttribute("src", src)
        newAssetEl.setAttribute("response-type", "arraybuffer")
        newAssetEl.setAttribute("crossorigin", "anonymous")
        const assetsEl = AssetHelper.getAssetsElement()
        assetsEl.appendChild(newAssetEl)

        console.groupEnd()
        return newAssetEl
    }

    static findAsset(id) {
        const assetsEl = AssetHelper.getAssetsElement()
        // console.dir(assetsEl)
        const children = assetsEl.children;
        for (let index = 0; index < children.length; index++) {
            let child = children[index];
            if (child.id === id) {
                return child;
            }
        }
        return undefined
    }

}
