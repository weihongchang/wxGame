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
 * 战斗场景
 */
var game;
(function (game) {
    var BattleScene = (function (_super) {
        __extends(BattleScene, _super);
        function BattleScene() {
            var _this = _super.call(this) || this;
            _this.aniList = [];
            _this.skinName = "src/core/view/scene/BattleScene.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            return _this;
            //this.createCompleteEvent();
        }
        BattleScene.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            game.BattleManager.getInstance().CreateBattle();
            for (var i = 1; i <= 6; i++) {
                if (game.BattleManager.getInstance().formation1.formation[i - 1] > 0) {
                    this.aniList[i - 1] = new AniMC();
                    var herobg = this.getChildByName("heroBg" + i);
                    this.aniList[i - 1].x = herobg.x - herobg.width / 2;
                    this.aniList[i - 1].y = herobg.y + herobg.height / 2;
                    this.addChild(this.aniList[i - 1]);
                    this.aniList[i - 1].gotoAndPlay("stand", -1);
                }
            }
            for (var i = 1; i <= 6; i++) {
                if (game.BattleManager.getInstance().formation2.formation[i - 1] > 0) {
                    var nIndex = 6 + i - 1;
                    this.aniList[nIndex] = new AniMC();
                    var herobg = this.getChildByName("monsterBg" + i);
                    this.aniList[nIndex].x = herobg.x - herobg.width / 2;
                    this.aniList[nIndex].y = herobg.y + herobg.height / 2;
                    this.addChild(this.aniList[nIndex]);
                    this.aniList[nIndex].gotoAndPlay("stand", -1);
                }
            }
            GameLayerManager.gameLayer().sceneLayer.addChild(this);
            this.PlayBattle();
        };
        BattleScene.prototype.PlayBattle = function () {
            //攻击方，被攻击方，攻击类型，技能id，附带效果，伤害
            // this.batData = "1,6,0,1,0,100;1,6,0,1,0,100;1,6,0,1,0,100;";
            var strList = game.BattleManager.getInstance().batData.split(";");
            for (var i = 0; i < strList.length; i++) {
                if (strList.length > 0) {
                    var atkList = strList[i].split(",");
                    if (atkList.length >= 6) {
                        var atkIndex = Number(atkList[0]);
                        var defIndex = Number(atkList[1]);
                        var atkType = atkList[2];
                        var skillID = atkList[3];
                        var bufferID = atkList[4];
                        var damageValue = atkList[5];
                        console.log(atkIndex + "使用技能" + skillID + "攻击" + defIndex + "收到伤害" + damageValue);
                        var oldX = this.aniList[atkIndex].x;
                        var oldY = this.aniList[atkIndex].y;
                        //移动到目标位置
                        var bs1 = new game.BattleSingle();
                        bs1.battleType = game.BattleSingleType.move;
                        bs1.AtkObj = this.aniList[atkIndex];
                        bs1.xPoint = this.aniList[defIndex].x - this.aniList[defIndex].width;
                        bs1.yPoint = this.aniList[defIndex].y;
                        game.BattleManager.getInstance().battleSingleArray.unshift(bs1);
                        var bsAtk = new game.BattleSingle();
                        bsAtk.battleType = game.BattleSingleType.atk;
                        bsAtk.AtkObj = this.aniList[atkIndex];
                        bsAtk.xPoint = 0;
                        bsAtk.yPoint = 0;
                        bsAtk.defObj = this.aniList[defIndex];
                        game.BattleManager.getInstance().battleSingleArray.unshift(bsAtk);
                        var bs2 = new game.BattleSingle();
                        bs2.battleType = game.BattleSingleType.move;
                        bs2.AtkObj = this.aniList[atkIndex];
                        bs2.xPoint = oldX;
                        bs2.yPoint = oldY;
                        game.BattleManager.getInstance().battleSingleArray.unshift(bs2);
                    }
                }
            }
            game.BattleManager.getInstance().PlayBattle();
        };
        // /**
        //  * 移动到目标
        //  */
        // private async MoveTo(objAni:AniMC,xPoint:number,yPoint:number) {
        // 	try {
        // 		console.log("开始移动到目标"+xPoint+"   "+yPoint);
        // 		egret.Tween.get(objAni).to({ x:xPoint,y: yPoint},300);   
        // 	}
        // 	catch (e) {
        // 		console.error(e);
        // 	}
        // }
        // /**
        //  * 播放攻击动画
        //  */
        // private async PlayAtkAni(objAni:AniMC) {
        // 	try {
        // 		objAni.gotoAndPlay("Atk",1);
        // 	}
        // 	catch (e) {
        // 		console.error(e);
        // 	}
        // }
        // /**
        //  * 移动回来
        //  */
        // private async MoveBack(objAni:AniMC,xPoint:number,yPoint:number) {
        // 	try {
        // 		console.log("开始移动回元目标"+xPoint+"   "+yPoint);
        // 		egret.Tween.get(objAni).to({ x:xPoint,y: yPoint},300);   
        // 	}
        // 	catch (e) {
        // 		console.error(e);
        // 	}
        // }
        BattleScene.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return BattleScene;
    }(eui.Component));
    game.BattleScene = BattleScene;
    __reflect(BattleScene.prototype, "game.BattleScene");
})(game || (game = {}));
//# sourceMappingURL=BattleScene.js.map