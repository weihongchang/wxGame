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
var AniManager = (function (_super) {
    __extends(AniManager, _super);
    // public armatureDisplay:dragonBones.EgretArmatureDisplay;
    function AniManager() {
        var _this = _super.call(this) || this;
        dragonBones.addMovieGroup(RES.getRes("NewProject_ske_dbmv"), RES.getRes("NewProject_tex_png")); // 添加动画数据和贴图
        _this.movie = dragonBones.buildMovie("stand"); // 创建 白鹭极速格式 的动画
        return _this;
        //this.movie.scaleX = 0.2;
        //this.movie.scaleY = 0.2;
        // this.movie.play("stand");
        // this.addChild(this.movie);
        // let factory = dragonBones.EgretFactory.factory;
        // let dragonbonesData = RES.getRes("NewProject_ske_json");
        // let textureData = RES.getRes("NewProject_tex_json");
        // let texture = RES.getRes("NewProject_tex_png");
        // factory.parseDragonBonesData(dragonbonesData);
        // factory.parseTextureAtlasData(textureData, texture);
        // this.armatureDisplay = factory.buildArmatureDisplay("NewProject");
        //this.armatureDisplay.animation.play("stand", 0);
        //this.addChild(this.armatureDisplay);
    }
    AniManager.prototype.destoryMe = function () {
        this.movie.stop();
        this.movie.dispose();
        this.movie.parent && this.movie.parent.removeChild(this.movie);
        // this.armatureDisplay.animation.stop();
        // this.armatureDisplay.animation.reset();
        // this.armatureDisplay.dispose();
        // this.armatureDisplay = null;
        // this.parent && this.parent.removeChild(this);
    };
    return AniManager;
}(egret.DisplayObjectContainer));
__reflect(AniManager.prototype, "AniManager");
//# sourceMappingURL=AniManager.js.map