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
    var Item_Hero = (function (_super) {
        __extends(Item_Hero, _super);
        function Item_Hero() {
            var _this = _super.call(this) || this;
            // this.imgbg = new eui.Image();
            // this.imgbg.width = 720;
            // this.imgbg.height = 500;
            // this.addChild(this.imgbg);
            _this.imgHero = new eui.Image();
            _this.imgHero.horizontalCenter = 0;
            _this.addChild(_this.imgHero);
            return _this;
        }
        Item_Hero.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        Item_Hero.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        Item_Hero.prototype.dataChanged = function () {
            // console.trace(this.data, ">>>>>>>>>>>>>>>>>>>>>>>>>>")
            // console.log(this.data, ">>>>>>>>>>>>>>>>>>>>>>>>>>");
            if (this.data.index == 1 || this.data.index == 3) {
                // this.imgbg.source = "follower_normal_1_png";
                this.imgHero.source = "quan_jiang_nvzhu_png";
            }
            else {
                // this.imgbg.source = "follower_normal_2_png";
                this.imgHero.source = "quan_jiang_zhanghe_png";
            }
        };
        return Item_Hero;
    }(eui.ItemRenderer));
    game.Item_Hero = Item_Hero;
    __reflect(Item_Hero.prototype, "game.Item_Hero");
})(game || (game = {}));
//# sourceMappingURL=Item_Hero.js.map