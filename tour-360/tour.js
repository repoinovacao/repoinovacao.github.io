import tourDataBndesDay from "../assets/bndes-day/bndes-day.tour.js";
import {AssetHelper} from "./asset-helper.js";
import {SceneHelper} from "./scene-helper.js";

const tourData = tourDataBndesDay;
console.debug('tourData', tourData)

AFRAME.registerComponent('tour', {
    init: function () {
        AssetHelper.loadTourAssets(tourData)
        const start = window.location.hash || tourData.start;
        SceneHelper.showScene(start, this.el, tourData)
    }
});
