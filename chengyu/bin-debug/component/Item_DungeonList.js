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
    var Item_DungeonList = (function (_super) {
        __extends(Item_DungeonList, _super);
        function Item_DungeonList() {
            var _this = _super.call(this) || this;
            _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onImgClick, _this);
            return _this;
        }
        Item_DungeonList.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        Item_DungeonList.prototype.onImgClick = function () {
            console.log("img click!!" + this.data.name);
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_QIANGHUA);
        };
        Item_DungeonList.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        Item_DungeonList.prototype.dataChanged = function () {
            // console.trace(this.data, ">>>>>>>>>>>>>>>>>>>>>>>>>>")
            console.log(this.data, ">>>>>>>>>>>>>>>>>>>>>>>>>>");
            // this.imgHead.source = "dungeon"+this.data.index+"_jpg";
            var dungeon = game.DataManager.getInstance().getDungeonForID(this.data.index);
            if (dungeon != null) {
                this.imgHead.source = dungeon.dungeonImg;
            }
        };
        return Item_DungeonList;
    }(eui.ItemRenderer));
    game.Item_DungeonList = Item_DungeonList;
    __reflect(Item_DungeonList.prototype, "game.Item_DungeonList");
})(game || (game = {}));
//# sourceMappingURL=Item_DungeonList.js.map