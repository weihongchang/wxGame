/**
 * 主城
 */
/**
 *
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var game;
(function (game) {
    var HomeCity = (function (_super) {
        __extends(HomeCity, _super);
        function HomeCity() {
            var _this = _super.call(this) || this;
            // this.skinName = "src/core/view/scene/HomeCitySkin.exml";
            _this.skinName = "resource/eui_skins/HomeCitySkin.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        HomeCity.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
            GameLayerManager.gameLayer().sceneLayer.addChild(this);
        };
        //        public closeBtn: eui.Button;
        // public settingButton:egret.gui.Button;
        // public levelButton:IconButton;
        HomeCity.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return HomeCity;
    }(eui.Component));
    game.HomeCity = HomeCity;
    __reflect(HomeCity.prototype, "game.HomeCity");
})(game || (game = {}));
//# sourceMappingURL=HomeCity.js.map