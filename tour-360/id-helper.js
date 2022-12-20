export class IdHelper {

    static removeHashtag(id) {
        return id?.replaceAll(/#/g, '');
    }

    static addHashtag(id) {
        if (id?.startsWith('#')) {
            return id
        }
        return '#' + id
    }

    static isId(text) {
        if (!text) {
            return false
        }
        return text.startsWith('#')
    }

    static makeId(text) {
        return '#' + text
            .replaceAll(/[.\/\\]+/gm,'-');
    }
}
