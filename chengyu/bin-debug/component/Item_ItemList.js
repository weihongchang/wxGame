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
    var Item_ItemList = (function (_super) {
        __extends(Item_ItemList, _super);
        function Item_ItemList() {
            return _super.call(this) || this;
        }
        Item_ItemList.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        Item_ItemList.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        return Item_ItemList;
    }(eui.ItemRenderer));
    game.Item_ItemList = Item_ItemList;
    __reflect(Item_ItemList.prototype, "game.Item_ItemList");
})(game || (game = {}));
//# sourceMappingURL=Item_ItemList.js.map