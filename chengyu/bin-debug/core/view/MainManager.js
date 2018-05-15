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
/**
  * 主界面管理类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 所有的弹窗都需要在register注册事件
  * 在execute添加消息处理面板打开关闭事件
  */
var game;
(function (game) {
    var MainManager = (function (_super) {
        __extends(MainManager, _super);
        function MainManager() {
            return _super.call(this) || this;
        }
        /**
         * 注册消息
         */
        MainManager.prototype.register = function () {
            this.facade.registerCommand(MainNotify.OPEN_MAIN, MainManager);
            this.facade.registerCommand(MainNotify.CLOSE_MAIN, MainManager);
        };
        MainManager.prototype.execute = function (notification) {
            var data = notification.getBody(); //携带数据
            var panelCon = GameLayerManager.gameLayer().mainLayer;
            switch (notification.getName()) {
                case MainNotify.OPEN_MAIN: {
                    if (GameLayerManager.gameLayer().mainUI == null) {
                        GameLayerManager.gameLayer().mainUI = new game.MainUI();
                        panelCon.addChild(GameLayerManager.gameLayer().mainUI);
                    }
                    break;
                }
                case MainNotify.CLOSE_MAIN: {
                    if (GameLayerManager.gameLayer().mainUI != null) {
                        panelCon.removeChild(GameLayerManager.gameLayer().mainUI);
                        GameLayerManager.gameLayer().mainUI = null;
                    }
                    break;
                }
            }
        };
        MainManager.NAME = "MainManager";
        return MainManager;
    }(puremvc.SimpleCommand));
    game.MainManager = MainManager;
    __reflect(MainManager.prototype, "game.MainManager", ["puremvc.ICommand", "puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=MainManager.js.map