var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var FormationData = (function () {
        function FormationData() {
        }
        return FormationData;
    }());
    game.FormationData = FormationData;
    __reflect(FormationData.prototype, "game.FormationData");
})(game || (game = {}));
//# sourceMappingURL=FormationData.js.map