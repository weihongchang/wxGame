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
 * 影片剪辑基类
 * @author chenkai
 * @since 2017/10/16
 */
var BaseMovieClip = (function (_super) {
    __extends(BaseMovieClip, _super);
    function BaseMovieClip() {
        return _super.call(this) || this;
    }
    /**
     * @param dataKey json配置文件
     * @param textureKey png纹理集
     * @param movieClipName 影片剪辑名
     */
    BaseMovieClip.prototype.config = function (dataKey, textureKey, movieClipName) {
        var data = RES.getRes(dataKey);
        var texture = RES.getRes(textureKey);
        this.mcDataFactory = new egret.MovieClipDataFactory(data, texture);
        this.movieClipData = this.mcDataFactory.generateMovieClipData(movieClipName);
    };
    /**隐藏 */
    BaseMovieClip.prototype.hide = function () {
        this.parent && this.parent.removeChild(this);
    };
    /**销毁 */
    BaseMovieClip.prototype.destoryMe = function () {
        this.stop();
        this.hide();
    };
    return BaseMovieClip;
}(egret.MovieClip));
__reflect(BaseMovieClip.prototype, "BaseMovieClip");
//# sourceMappingURL=BaseMovieClip.js.map