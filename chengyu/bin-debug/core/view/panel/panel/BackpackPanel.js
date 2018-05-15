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
    var BackpackPanel = (function (_super) {
        __extends(BackpackPanel, _super);
        function BackpackPanel() {
            var _this = _super.call(this) || this;
            _this.list = null;
            //this.skinName = "src/core/view/panel/ui/BackpackSkin.exml";
            _this.skinName = "resource/eui_skins/Panel_BagSkin.exml";
            // //创建一个按钮，点击后改变 Scroller 滚动的位置
            // var btn = new eui.Button();
            // btn.x = 200;
            // this.addChild(btn);
            // btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.moveScroller,this);
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            _this.btnHero.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.OnBtnHeroClick, _this);
            _this.btnItem.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.OnBtnItemClick, _this);
            return _this;
        }
        BackpackPanel.prototype.initListData = function (nType) {
            //创建一个列表
            if (this.list == null)
                this.list = new eui.List();
            this.list.useVirtualLayout = true;
            if (nType == 1) {
                this.list.itemRenderer = game.Item_HeroList;
            }
            else if (nType == 2) {
                this.list.itemRenderer = game.Item_ItemList;
            }
            var sourceArr = [];
            for (var i = 1; i < 10; i++) {
                if (nType == 1) {
                    sourceArr.push({ Item_HeroList: "item" + i });
                }
                else if (nType == 2) {
                    sourceArr.push({ Item_ItemList: "item" + i });
                }
            }
            this.list.dataProvider = new eui.ArrayCollection(sourceArr);
            //  this.list.dataProviderRefreshed();
            this.scroller.viewport = this.list;
        };
        BackpackPanel.prototype.createChildren = function () {
            //初始化后改变滚动的位置
            this.scroller.viewport.validateNow();
            this.scroller.viewport.scrollV = 0;
        };
        BackpackPanel.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        BackpackPanel.prototype.OnBtnHeroClick = function () {
            this.initListData(1);
        };
        BackpackPanel.prototype.OnBtnItemClick = function () {
            this.initListData(2);
        };
        BackpackPanel.prototype.moveScroller = function () {
            //点击按钮后改变滚动的位置
            var sc = this.scroller;
            sc.viewport.scrollV += 10;
            if ((sc.viewport.scrollV + sc.height) >= sc.viewport.contentHeight) {
                console.log("滚动到底部了");
            }
        };
        BackpackPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return BackpackPanel;
    }(eui.Component));
    game.BackpackPanel = BackpackPanel;
    __reflect(BackpackPanel.prototype, "game.BackpackPanel");
})(game || (game = {}));
//# sourceMappingURL=BackpackPanel.js.map