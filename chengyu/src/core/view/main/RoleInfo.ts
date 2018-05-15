/**
 * 角色信息
 */
module game {

    export class RoleInfo extends eui.Component {

        public constructor() {
            super();
            this.skinName = "resource/eui_skins/RoleInfoSkin.exml";
        }
        public imgHead:eui.Image;
    }
}