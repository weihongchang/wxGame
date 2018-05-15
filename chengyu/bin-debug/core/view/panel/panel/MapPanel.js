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
    var MapPanel = (function (_super) {
        __extends(MapPanel, _super);
        function MapPanel() {
            var _this = _super.call(this) || this;
            _this.list = null;
            // this.skinName = "src/core/view/panel/ui/MapSkin.exml";
            _this.skinName = "resource/eui_skins/Panel_MapSkin.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            _this.btnHero.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.OnBtnHeroClick, _this);
            _this.btnItem.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.OnBtnItemClick, _this);
            _this.btn_Active.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.OnBtnActiveClick, _this);
            return _this;
        }
        MapPanel.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        MapPanel.prototype.createChildren = function () {
            //初始化后改变滚动的位置
            this.scroller.viewport.validateNow();
            this.scroller.viewport.scrollV = 0;
        };
        MapPanel.prototype.initListData = function (nType) {
            this.updateBtnStatus(nType);
            //创建一个列表
            if (this.list == null)
                this.list = new eui.List();
            this.list.useVirtualLayout = true;
            if (nType == 1) {
                this.list.itemRenderer = game.Item_DungeonList;
            }
            else if (nType == 2) {
                this.list.itemRenderer = game.Item_ItemList;
            }
            var sourceArr = [];
            for (var i = 1; i < 10; i++) {
                sourceArr.push({ name: "item" + i, index: i });
            }
            this.list.dataProvider = new eui.ArrayCollection(sourceArr);
            // this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onImgClick,this);
            //  this.list.dataProviderRefreshed();
            this.scroller.viewport = this.list;
        };
        MapPanel.prototype.OnBtnHeroClick = function () {
            this.initListData(1);
        };
        MapPanel.prototype.OnBtnItemClick = function () {
            this.initListData(2);
        };
        MapPanel.prototype.OnBtnActiveClick = function () {
            this.initListData(1);
        };
        MapPanel.prototype.updateBtnStatus = function (selected) {
            if (selected == 1) {
                this.btnHero.enabled = false;
                this.btnItem.enabled = true;
                this.btn_Active.enabled = true;
            }
            else if (selected == 2) {
                this.btnHero.enabled = true;
                this.btnItem.enabled = false;
                this.btn_Active.enabled = true;
            }
            else if (selected == 3) {
                this.btnHero.enabled = true;
                this.btnItem.enabled = true;
                this.btn_Active.enabled = false;
            }
        };
        MapPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return MapPanel;
    }(eui.Component));
    game.MapPanel = MapPanel;
    __reflect(MapPanel.prototype, "game.MapPanel");
})(game || (game = {}));
//# sourceMappingURL=MapPanel.js.map