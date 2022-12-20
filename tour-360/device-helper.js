export class DeviceHelper {
    static isMobile = navigator?.userAgentData?.mobile;
    static get usingVrMode() {
        return this.getScene()?.is('vr-mode');
    }

    static getScene() {
        return document.querySelector('a-scene');
        // const scene = TourHelper.getScene()
    }

    static enterVr() {
        this.getScene()?.enterVr()
    }

    static exitVr() {
        this.getScene()?.exitVr()
    }
}
