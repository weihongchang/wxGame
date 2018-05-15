var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var Formation = (function () {
        function Formation() {
            this.formation = [0, 0, 0, 0, 0, 0];
        }
        return Formation;
    }());
    game.Formation = Formation;
    __reflect(Formation.prototype, "game.Formation");
})(game || (game = {}));
//# sourceMappingURL=Formation.js.map