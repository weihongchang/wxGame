/**
 *
 */
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
    var RolePanel = (function (_super) {
        __extends(RolePanel, _super);
        function RolePanel() {
            var _this = _super.call(this) || this;
            _this.listHero = null;
            _this.listHeroHead = null;
            _this.size = 4;
            _this.isMoving = false;
            _this.currentPage = 0;
            // this.skinName = "src/core/view/panel/ui/RoleSkin.exml";
            _this.skinName = "resource/eui_skins/Panel_RoleSkin.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            _this.scroller.throwSpeed = 0;
            _this.scroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onMoveBegin, _this);
            _this.scroller.addEventListener(eui.UIEvent.CHANGE_END, _this.onMoveEnd, _this);
            return _this;
            // this.scroller.addEventListener(egret.TouchEvent.TOUCH_END,this.onMoveEnd,this);
            // this.scroller.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);
            // this.scroller.addEventListener(egret.TouchEvent.TOUCH_CANCEL,this.onMoveCancel,this);
        }
        RolePanel.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        RolePanel.prototype.createChildren = function () {
            //初始化后改变滚动的位置
            this.scroller.viewport.validateNow();
            this.scroller.viewport.scrollV = 0;
            this.scroller.horizontalScrollBar.visible = false;
            this.scroller.verticalScrollBar.visible = false;
        };
        RolePanel.prototype.initData = function () {
            this.initHeroList();
            this.initHeroHeadList();
        };
        /**
         * 初始话英雄列表
         */
        RolePanel.prototype.initHeroList = function () {
            //创建一个列表
            if (this.listHero == null)
                this.listHero = new eui.List();
            this.listHero.useVirtualLayout = true;
            this.listHero.layout = new eui.HorizontalLayout();
            this.listHero.itemRenderer = game.Item_Hero;
            var sourceArr = [];
            for (var i = 0; i < this.size; i++) {
                sourceArr.push({ name: "item" + i, index: i });
            }
            this.listHero.dataProvider = new eui.ArrayCollection(sourceArr);
            this.scroller.viewport = this.listHero;
        };
        /**
        * 初始话英雄头像列表
        */
        RolePanel.prototype.initHeroHeadList = function () {
            //创建一个列表
            if (this.listHeroHead == null)
                this.listHeroHead = new eui.List();
            this.listHeroHead.useVirtualLayout = true;
            this.listHeroHead.layout = new eui.HorizontalLayout();
            this.listHeroHead.itemRenderer = game.Item_HeroHeadList;
            var sourceArr = [];
            for (var i = 0; i < this.size * 2; i++) {
                sourceArr.push({ name: "item" + i, index: i });
            }
            this.listHeroHead.dataProvider = new eui.ArrayCollection(sourceArr);
            this.scroller_head.viewport = this.listHeroHead;
        };
        RolePanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        RolePanel.prototype.onMoveBegin = function (e) {
            // this.currentPointX = e.$stageX;
            // console.log("begin");
        };
        RolePanel.prototype.onMove = function (e) {
            console.log("move");
        };
        RolePanel.prototype.onMoveCancel = function (e) {
            console.log("onMoveCancel");
        };
        RolePanel.prototype.onMoveEnd = function (e) {
            // this.currentPointX = 0;
            this.getCurrentPage();
            console.log("end");
        };
        RolePanel.prototype.getCurrentPage = function () {
            var moNum = this.scroller.viewport.scrollH % this.stage.stageWidth;
            var pageNum = this.scroller.viewport.scrollH / this.stage.stageWidth;
            pageNum = Math.floor(pageNum);
            // console.log( this.scroller.viewport.scrollH+"     "+ moNum+"   "+chuNum);
            if (moNum > this.stage.stageWidth / 2) {
                pageNum++;
            }
            // if( this.currentPage>0 && pageNum < this.currentPage )
            // {
            //     if(moNum < this.stage.stageWidth/2)
            //     {
            //         pageNum--;
            //     }
            // }
            this.currentPage = pageNum;
            var npoint = pageNum * this.stage.stageWidth;
            this.MovePanel(npoint);
        };
        RolePanel.prototype.MovePanel = function (nPoint) {
            var _this = this;
            // if(this.page<0)
            //     return;
            if (!this.isMoving) {
                this.isMoving = true;
                console.log("move to " + nPoint);
                egret.Tween.get(this.scroller.viewport, { loop: false })
                    .to({ scrollH: nPoint }, 200).call(function () { return _this.MoveStatusChange(); }, this);
            }
        };
        RolePanel.prototype.MoveStatusChange = function () {
            this.isMoving = false;
        };
        return RolePanel;
    }(eui.Component));
    game.RolePanel = RolePanel;
    __reflect(RolePanel.prototype, "game.RolePanel");
})(game || (game = {}));
//# sourceMappingURL=RolePanel.js.map