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
 *
 */
var AniMC = (function (_super) {
    __extends(AniMC, _super);
    function AniMC() {
        var _this = _super.call(this) || this;
        //龙的mc太大了...
        _this.config("zhangheAtk_mc_json", "zhangheAtk_tex_png", "NewProject");
        return _this;
    }
    return AniMC;
}(BaseMovieClip));
__reflect(AniMC.prototype, "AniMC");
//# sourceMappingURL=AniMC.js.map