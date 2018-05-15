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
    var Item_HeroHeadList = (function (_super) {
        __extends(Item_HeroHeadList, _super);
        function Item_HeroHeadList() {
            return _super.call(this) || this;
        }
        Item_HeroHeadList.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        Item_HeroHeadList.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        return Item_HeroHeadList;
    }(eui.ItemRenderer));
    game.Item_HeroHeadList = Item_HeroHeadList;
    __reflect(Item_HeroHeadList.prototype, "game.Item_HeroHeadList");
})(game || (game = {}));
//# sourceMappingURL=Item_HeroHeadList.js.map