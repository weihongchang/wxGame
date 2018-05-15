var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 战斗单步类型
     */
    var BattleSingleType;
    (function (BattleSingleType) {
        BattleSingleType[BattleSingleType["move"] = 0] = "move";
        BattleSingleType[BattleSingleType["atk"] = 1] = "atk";
    })(BattleSingleType = game.BattleSingleType || (game.BattleSingleType = {}));
    var BattleSingle = (function () {
        function BattleSingle() {
        }
        return BattleSingle;
    }());
    game.BattleSingle = BattleSingle;
    __reflect(BattleSingle.prototype, "game.BattleSingle");
    var BattleManager = (function () {
        function BattleManager() {
            this.battleSingleArray = [];
        }
        BattleManager.getInstance = function () {
            if (this.instance == null) {
                this.instance = new BattleManager();
            }
            return this.instance;
        };
        //创建一场战斗
        BattleManager.prototype.CreateBattle = function () {
            //展示开场动画
            //双方阵型
            this.formation1 = new game.Formation();
            this.formation2 = new game.Formation();
            this.formation1.PlayerID = 1;
            this.formation2.PlayerID = 2;
            this.formation1.formation = [0, 1, 1, 1, 1, 1];
            this.formation2.formation = [0, 0, 1, 1, 1, 0];
            //攻击方，被攻击方，攻击类型，技能id，附带效果，伤害
            //加载战斗数据
            this.batData = "1,8,0,1,0,100;9,1,0,1,0,100;2,8,0,1,0,100;8,1,0,1,0,100;";
            // this.batData = "1,8,0,1,0,100;";
            //加载战斗资源
            //播放战斗
            //BattleManager.getInstance().PlayBattle(batData);
        };
        //播放战斗动画
        BattleManager.prototype.PlayBattle = function () {
            var _this = this;
            // console.log("playbattle  执行");
            if (this.battleSingleArray.length > 0) {
                // console.log("playbattle "+this.battleSingleArray.length);
                var bs = this.battleSingleArray.pop();
                if (bs != null) {
                    switch (bs.battleType) {
                        case BattleSingleType.move: {
                            egret.Tween.get(bs.AtkObj).to({ x: bs.xPoint, y: bs.yPoint }, 300).call(this.PlayBattle, this);
                            break;
                        }
                        case BattleSingleType.atk: {
                            // bs.AtkObj.addEventListener(egret.MovieClipEvent.FRAME_LABEL,(e:egret.MovieClipEvent)=>{
                            // 	console.log(e.type,e.frameLabel, bs.AtkObj.currentFrame);},this);
                            bs.AtkObj.addEventListener(egret.MovieClipEvent.COMPLETE, function (e) {
                                //播放待机动画
                                bs.AtkObj.gotoAndPlay("stand", -1);
                                //受击动画
                                // bs.defObj.gotoAndPlay();
                                //受击飘血
                                var hitx = bs.defObj.x + bs.defObj.width / 2;
                                var hity = bs.defObj.y - bs.defObj.height;
                                EffectUtils.showTips("1000", 4, 30, false, hitx, hity);
                                //调用下一帧
                                _this.PlayBattle();
                            }, this);
                            bs.AtkObj.gotoAndPlay("Atk", 1);
                            break;
                        }
                    }
                }
            }
            else {
                //战斗播放完成
                EffectUtils.showTips("战斗结束", 4, 50, false, GameConfig.curWidth() / 2, GameConfig.curHeight() / 2, this.BattleFinishCallBack);
                //game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_BattleFinish);
            }
        };
        BattleManager.prototype.BattleFinishCallBack = function () {
            game.AppFacade.getInstance().sendNotification(MainNotify.OPEN_MAIN);
            game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_HOME);
            game.AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_BATTLE);
        };
        return BattleManager;
    }());
    game.BattleManager = BattleManager;
    __reflect(BattleManager.prototype, "game.BattleManager");
})(game || (game = {}));
//# sourceMappingURL=BattleManager.js.map