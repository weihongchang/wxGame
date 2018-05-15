var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var DataManager = (function () {
        function DataManager() {
            this.dungeonList = [];
            this.dungeonLevelList = [];
        }
        DataManager.getInstance = function () {
            if (this.instance == null) {
                this.instance = new DataManager();
            }
            return this.instance;
        };
        DataManager.prototype.InitTestData = function () {
            for (var i = 1; i < 10; i++) {
                var dungeon = new game.DungeonData();
                dungeon.dungeonID = i;
                dungeon.dungeonName = "test" + i;
                dungeon.dungeonType = 1;
                dungeon.dungeonImg = "dungeon" + i + "_jpg";
                this.dungeonList.push(dungeon);
            }
        };
        /**
         * 根据id获取副本
         */
        DataManager.prototype.getDungeonForID = function (index) {
            for (var _i = 0, _a = this.dungeonList; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry.dungeonID == index) {
                    return entry;
                }
            }
            return null;
        };
        return DataManager;
    }());
    game.DataManager = DataManager;
    __reflect(DataManager.prototype, "game.DataManager");
})(game || (game = {}));
//# sourceMappingURL=DataManager.js.map