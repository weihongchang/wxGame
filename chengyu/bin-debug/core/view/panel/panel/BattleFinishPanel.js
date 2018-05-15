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
    var BattleFinishPanel = (function (_super) {
        __extends(BattleFinishPanel, _super);
        function BattleFinishPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/eui_skins/panel/BattleFinishPanel.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        BattleFinishPanel.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        BattleFinishPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        BattleFinishPanel.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        return BattleFinishPanel;
    }(eui.Component));
    game.BattleFinishPanel = BattleFinishPanel;
    __reflect(BattleFinishPanel.prototype, "game.BattleFinishPanel");
})(game || (game = {}));
//# sourceMappingURL=BattleFinishPanel.js.map