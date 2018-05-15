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
    var QianghuaPanel = (function (_super) {
        __extends(QianghuaPanel, _super);
        function QianghuaPanel() {
            var _this = _super.call(this) || this;
            // this.skinName = "src/core/view/panel/ui/QianghuaSkin.exml";
            _this.skinName = "resource/eui_skins/Panel_QianghuaSkin.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            _this.groupMap.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onMove, _this);
            _this.groupMap.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onMoveBegin, _this);
            _this.groupMap.addEventListener(egret.TouchEvent.TOUCH_END, _this.onMoveEnd, _this);
            return _this;
        }
        QianghuaPanel.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        QianghuaPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        QianghuaPanel.prototype.onMove = function (e) {
            var oldy = this.groupMap.height - this.stage.stageHeight;
            //判断边界
            if (e.stageY - this.currentPointY > 0) {
                if (this.groupMap.y >= 0) {
                    this.groupMap.y = 0;
                    return;
                }
            }
            else {
                if (this.groupMap.y <= -oldy) {
                    this.groupMap.y = -oldy;
                    return;
                }
            }
            this.groupMap.y += e.stageY - this.currentPointY;
            this.currentPointY = e.stageY;
            console.log("move");
        };
        QianghuaPanel.prototype.onMoveBegin = function (e) {
            this.currentPointY = e.$stageY;
            console.log("begin");
        };
        QianghuaPanel.prototype.onMoveEnd = function (e) {
            this.currentPointY = 0;
            console.log("end");
        };
        return QianghuaPanel;
    }(eui.Component));
    game.QianghuaPanel = QianghuaPanel;
    __reflect(QianghuaPanel.prototype, "game.QianghuaPanel");
})(game || (game = {}));
//# sourceMappingURL=QianghuaPanel.js.map