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
    var BattleFinishMediator = (function (_super) {
        __extends(BattleFinishMediator, _super);
        function BattleFinishMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, BattleFinishMediator.NAME, viewComponent) || this;
            _this.backpackPanel = new game.BattleFinishPanel();
            return _this;
        }
        BattleFinishMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_BattleFinish,
                PanelNotify.CLOSE_BattleFinish
            ];
        };
        BattleFinishMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_BattleFinish: {
                    //显示角色面板
                    this.showUI(this.backpackPanel, false, 0, 0, 1);
                    break;
                }
                case PanelNotify.CLOSE_BattleFinish: {
                    this.closePanel(1);
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        BattleFinishMediator.prototype.initUI = function () {
            this.backpackPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
        };
        /**
         * 初始化面板数据
         */
        BattleFinishMediator.prototype.initData = function () {
        };
        BattleFinishMediator.prototype.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        BattleFinishMediator.NAME = "BattleFinishMediator";
        return BattleFinishMediator;
    }(BaseMediator));
    game.BattleFinishMediator = BattleFinishMediator;
    __reflect(BattleFinishMediator.prototype, "game.BattleFinishMediator");
})(game || (game = {}));
//# sourceMappingURL=BattleFinishMediator.js.map