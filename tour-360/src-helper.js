export class SrcHelper {

    static isVideo(src) {
        if (!src) {
            return false
        }
        return src.endsWith('.mp4')
            || src.endsWith('.mov')
    }

    static isImage(src) {
        if (!src) {
            return false
        }
        return src.endsWith('.jpg')
            || src.endsWith('.jpeg')
            || src.endsWith('.png')
    }

    static isModel(src) {
        if (!src) {
            return false
        }
        return src.endsWith('.gltf')
            || src.endsWith('.obj')
            || src.endsWith('.mtl')
    }

    static isAudio(src) {
        if (!src) {
            return false
        }
        return src.endsWith('.mp3')
    }
}
