/**
 * 活动条
 */
module game {

    export class ActivityBar extends eui.Component {

        public constructor() {
            super();
            this.skinName = "resource/eui_skins/ActivityBarSkin.exml";
        }
        
        public activityBtn: eui.Button;
        public kaiFuBtn: eui.Button;
        public infoBtn: eui.Button;
    }
}