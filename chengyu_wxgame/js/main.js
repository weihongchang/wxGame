var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
/**
  * 数据读取基类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var ResourceProxyBase = (function (_super) {
    __extends(ResourceProxyBase, _super);
    function ResourceProxyBase(proxyName) {
        if (proxyName === void 0) { proxyName = ""; }
        var _this = _super.call(this, proxyName) || this;
        _this._dataMap = new Array(); //存储excel数据
        _this._proxyName = ""; //excel名称
        _this._proxyName = proxyName;
        return _this;
    }
    /**
     * 开发状态：json可读
     * TODO
     * 上线状态：加载bin文件，在这里解密【文件小，加密】
     * 是预加载json文件还是到时候使用到再加载
     */
    ResourceProxyBase.prototype.getData = function () {
        var jsonData = RES.getRes(this._proxyName);
        return jsonData;
    };
    return ResourceProxyBase;
}(puremvc.Proxy));
__reflect(ResourceProxyBase.prototype, "ResourceProxyBase", ["puremvc.IProxy", "puremvc.INotifier"]);
/**
  * 面板mediator基类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * todo:面板特效，全屏+非全屏蒙层
  */
var BaseMediator = (function (_super) {
    __extends(BaseMediator, _super);
    function BaseMediator(mediatorName, viewComponent) {
        if (mediatorName === void 0) { mediatorName = ""; }
        if (viewComponent === void 0) { viewComponent = null; }
        var _this = _super.call(this, mediatorName, viewComponent) || this;
        _this.isInitialized = false; //是否初始化
        _this.isPopUp = false; //是否已经显示
        _this.ui = null; //UI容器
        _this.w = 0;
        _this.h = 0;
        _this.w = GameConfig.curWidth();
        _this.h = GameConfig.curHeight();
        return _this;
    }
    /**
    * 添加面板方法
    * panel       		面板
    * dark        		背景是否变黑
    * popUpWidth      	指定弹窗宽度，定位使用
    * popUpHeight      	指定弹窗高度，定位使用
    * effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    BaseMediator.prototype.showUI = function (ui, dark, popUpWidth, popUpHeight, effectType, isAlert) {
        if (dark === void 0) { dark = false; }
        if (popUpWidth === void 0) { popUpWidth = 0; }
        if (popUpHeight === void 0) { popUpHeight = 0; }
        if (effectType === void 0) { effectType = 0; }
        if (isAlert === void 0) { isAlert = false; }
        this.ui = ui;
        this.beforShow();
        this.initUI();
        this.initData();
        PopUpManager.addPopUp(ui, dark, popUpWidth, popUpHeight, effectType, isAlert);
    };
    /**
     * 面板弹出之前处理
     */
    BaseMediator.prototype.beforShow = function () {
    };
    /**
     * 初始化面板ui
     */
    BaseMediator.prototype.initUI = function () {
    };
    /**
     * 初始化面板数据
     */
    BaseMediator.prototype.initData = function () {
    };
    /**
    * 移除面板方法
    * panel       		面板
    * effectType        0：没有动画 1:从中间缩小消失 2：  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    BaseMediator.prototype.closePanel = function (effectType) {
        if (effectType === void 0) { effectType = 0; }
        PopUpManager.removePopUp(this.ui, effectType);
        this.destroy();
    };
    /**
     * 面板关闭后需要销毁的对象
     */
    BaseMediator.prototype.destroy = function () {
    };
    /**
     * 面板是否弹出状态
     */
    BaseMediator.prototype.getIsPopUp = function () {
        return this.isPopUp;
    };
    /**
     * 面板是否初始化完毕
     */
    BaseMediator.prototype.getIsInit = function () {
        return this.isInitialized;
    };
    // 获取面板宽度
    BaseMediator.prototype.getWidth = function () {
        return this.ui.width;
    };
    // 获取面板高度
    BaseMediator.prototype.getHeight = function () {
        return this.ui.height;
    };
    return BaseMediator;
}(puremvc.Mediator));
__reflect(BaseMediator.prototype, "BaseMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
/**
  * 数据读取模板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var TemplateProxy = (function (_super) {
    __extends(TemplateProxy, _super);
    function TemplateProxy() {
        return _super.call(this, TemplateProxy.NAME) || this;
    }
    /**
     * 获取excel数据
     */
    TemplateProxy.prototype.getGameData = function () {
        return this.getData();
    };
    TemplateProxy.NAME = "template"; //必须和excel导出文件一致
    return TemplateProxy;
}(ResourceProxyBase));
__reflect(TemplateProxy.prototype, "TemplateProxy");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
/**
  * 通讯等待类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 和服务端通讯时的显示效果
  */
var WaitPanel = (function (_super) {
    __extends(WaitPanel, _super);
    function WaitPanel(type) {
        if (type === void 0) { type = 1; }
        var _this = _super.call(this) || this;
        _this.bg = new egret.Sprite();
        _this.w = 0;
        _this.h = 0;
        _this.createView();
        return _this;
    }
    WaitPanel.prototype.createView = function () {
        this.w = egret.MainContext.instance.stage.stageWidth;
        this.h = egret.MainContext.instance.stage.stageHeight;
        this.bg.graphics.beginFill(0x000000, 0.2);
        this.bg.graphics.drawRect(0, 0, this.w, this.h);
        this.bg.graphics.endFill();
        this.bg.width = this.w;
        this.bg.height = this.h;
        this.addChild(this.bg);
        this.touchEnabled = true;
        this.waitImg = new egret.Bitmap;
        this.waitImg.texture = RES.getRes("loadingCircle_png");
        this.addChild(this.waitImg);
        this.waitImg.x = this.w / 2;
        this.waitImg.y = this.h / 2;
        this.waitImg.anchorOffsetX = this.waitImg.width / 2;
        this.waitImg.anchorOffsetY = this.waitImg.height / 2;
        EffectUtils.rotationEffect(this.waitImg, 1000);
    };
    return WaitPanel;
}(egret.Sprite));
__reflect(WaitPanel.prototype, "WaitPanel");
/**
  * 图片button类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 可以有图片，文字，动画
  * todo:九宫格、多动画、图字等
  */
var EButton = (function (_super) {
    __extends(EButton, _super);
    /**
    * imgName       图片
    * backFun       点击方法 如果需要在backFun中使用this的，小心使用这个
    * descStr       按钮描述
    * fontSize      字体大小
    * cartoonType   动画类型 1:【可爱】按下变小，放开弹大 2:按下变小，放开轻微弹大 3：按下变小，放开变大
    * 注意：如果有动画的话，只有动画结束才会触发click事件
    */
    function EButton(context, imgName, backFun, descStr, fontSize, cartoonType, assetsName) {
        if (backFun === void 0) { backFun = null; }
        if (descStr === void 0) { descStr = ""; }
        if (fontSize === void 0) { fontSize = 30; }
        if (cartoonType === void 0) { cartoonType = 1; }
        if (assetsName === void 0) { assetsName = "assets"; }
        var _this = _super.call(this) || this;
        _this.assets = RES.getRes("assets"); //名称不一样的话需要修改
        _this.isPlayCartoon = false;
        _this.cartoonType = 1;
        _this.param = { context: null, data: null }; //回调参数
        _this.param.context = context;
        _this.init(imgName, backFun, descStr, fontSize, cartoonType, assetsName);
        return _this;
    }
    EButton.prototype.init = function (imgName, backFun, descStr, fontSize, cartoonType, assetsName) {
        if (backFun === void 0) { backFun = null; }
        if (descStr === void 0) { descStr = ""; }
        if (fontSize === void 0) { fontSize = 30; }
        if (cartoonType === void 0) { cartoonType = 1; }
        if (assetsName === void 0) { assetsName = "assets"; }
        this.cartoonType = cartoonType;
        this.backFun = backFun;
        this.btnImg = new egret.Bitmap();
        if (assetsName == null) {
            this.btnImg.texture = RES.getRes(imgName);
        }
        else {
            if (assetsName != "assets") {
                this.assets = RES.getRes(assetsName);
            }
            this.btnImg.texture = this.assets.getTexture(imgName);
        }
        this.addChild(this.btnImg);
        if (descStr != "") {
            this.textField = new egret.TextField();
            this.addChild(this.textField);
            this.textField.size = fontSize;
            this.textField.textAlign = "center";
            this.textField.stroke = 1;
            this.textField.strokeColor = 0x000000;
            this.textField.text = descStr;
            this.textField.width = this.btnImg.width;
            this.textField.x = this.btnImg.width / 2 - this.textField.width / 2;
            this.textField.y = this.btnImg.height / 2 - this.textField.height / 2;
        }
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbuttonTouchTap, this);
    };
    EButton.prototype.onbuttonTouchTap = function (e) {
        if (this.isPlayCartoon) {
            return;
        }
        this.isPlayCartoon = true;
        var onComplete2 = function () {
            this.isPlayCartoon = false;
        };
        var onComplete1 = function () {
            if (this.cartoonType == 1) {
                egret.Tween.get(this).to({ scaleX: 1, scaleY: 1, x: this.x - this.btnImg.width / 4, y: this.y - this.btnImg.height / 4 }, 500, egret.Ease.elasticOut).call(onComplete2, this);
            }
            else if (this.cartoonType == 2) {
                egret.Tween.get(this).to({ scaleX: 1, scaleY: 1, x: this.x - this.btnImg.width / 4, y: this.y - this.btnImg.height / 4 }, 500, egret.Ease.backOut).call(onComplete2, this);
            }
            else if (this.cartoonType == 3) {
                egret.Tween.get(this).to({ scaleX: 1, scaleY: 1, x: this.x - this.btnImg.width / 4, y: this.y - this.btnImg.height / 4 }, 100).call(onComplete2, this);
            }
        };
        egret.Tween.get(this).to({ scaleX: 0.5, scaleY: 0.5, x: this.x + this.btnImg.width / 4, y: this.y + this.btnImg.height / 4 }, 100, egret.Ease.sineIn).call(onComplete1, this);
        egret.setTimeout(function () {
            if (this.backFun != null) {
                this.backFun.apply(this.param.context, [this.param.data]);
            }
        }, this, 300);
    };
    //设置绑定数据
    EButton.prototype.setBindData = function (data) {
        this.param.data = data;
    };
    //获取绑定数据
    EButton.prototype.getBindData = function () {
        return this.param.data;
    };
    EButton.prototype.getBitmap = function () {
        return this.btnImg;
    };
    return EButton;
}(egret.DisplayObjectContainer));
__reflect(EButton.prototype, "EButton");
/**
  * 多颜色文本类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 使用方法：this.textTF.setText("haa<font size='60' color='0x2bff00' i='true' b='false'>aaaa</font>aaaaaa<i>aaaa</i>aaaaaaaa");
  */
var ETextField = (function (_super) {
    __extends(ETextField, _super);
    function ETextField() {
        return _super.call(this) || this;
    }
    //demo
    //"haa<font size='60' color='0x2bff00' i='true' b='false'>aaaa</font>aaaaaa<i>aaaa</i>aaaaaaaa"
    ETextField.prototype.setText = function (str) {
        if (str === void 0) { str = ""; }
        var styleParser = new egret.HtmlTextParser();
        this.textFlow = styleParser.parser(str);
    };
    return ETextField;
}(egret.TextField));
__reflect(ETextField.prototype, "ETextField");
var game;
(function (game) {
    var Item_DungeonList = (function (_super) {
        __extends(Item_DungeonList, _super);
        function Item_DungeonList() {
            var _this = _super.call(this) || this;
            _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onImgClick, _this);
            return _this;
        }
        Item_DungeonList.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        Item_DungeonList.prototype.onImgClick = function () {
            console.log("img click!!" + this.data.name);
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_QIANGHUA);
        };
        Item_DungeonList.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        Item_DungeonList.prototype.dataChanged = function () {
            // console.trace(this.data, ">>>>>>>>>>>>>>>>>>>>>>>>>>")
            console.log(this.data, ">>>>>>>>>>>>>>>>>>>>>>>>>>");
            // this.imgHead.source = "dungeon"+this.data.index+"_jpg";
            var dungeon = game.DataManager.getInstance().getDungeonForID(this.data.index);
            if (dungeon != null) {
                this.imgHead.source = dungeon.dungeonImg;
            }
        };
        return Item_DungeonList;
    }(eui.ItemRenderer));
    game.Item_DungeonList = Item_DungeonList;
    __reflect(Item_DungeonList.prototype, "game.Item_DungeonList");
})(game || (game = {}));
var game;
(function (game) {
    var Item_Hero = (function (_super) {
        __extends(Item_Hero, _super);
        function Item_Hero() {
            var _this = _super.call(this) || this;
            // this.imgbg = new eui.Image();
            // this.imgbg.width = 720;
            // this.imgbg.height = 500;
            // this.addChild(this.imgbg);
            _this.imgHero = new eui.Image();
            _this.imgHero.horizontalCenter = 0;
            _this.addChild(_this.imgHero);
            return _this;
        }
        Item_Hero.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        Item_Hero.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        Item_Hero.prototype.dataChanged = function () {
            // console.trace(this.data, ">>>>>>>>>>>>>>>>>>>>>>>>>>")
            // console.log(this.data, ">>>>>>>>>>>>>>>>>>>>>>>>>>");
            if (this.data.index == 1 || this.data.index == 3) {
                // this.imgbg.source = "follower_normal_1_png";
                this.imgHero.source = "quan_jiang_nvzhu_png";
            }
            else {
                // this.imgbg.source = "follower_normal_2_png";
                this.imgHero.source = "quan_jiang_zhanghe_png";
            }
        };
        return Item_Hero;
    }(eui.ItemRenderer));
    game.Item_Hero = Item_Hero;
    __reflect(Item_Hero.prototype, "game.Item_Hero");
})(game || (game = {}));
var game;
(function (game) {
    var Item_HeroHeadList = (function (_super) {
        __extends(Item_HeroHeadList, _super);
        function Item_HeroHeadList() {
            return _super.call(this) || this;
        }
        Item_HeroHeadList.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        Item_HeroHeadList.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        return Item_HeroHeadList;
    }(eui.ItemRenderer));
    game.Item_HeroHeadList = Item_HeroHeadList;
    __reflect(Item_HeroHeadList.prototype, "game.Item_HeroHeadList");
})(game || (game = {}));
var game;
(function (game) {
    var Item_HeroList = (function (_super) {
        __extends(Item_HeroList, _super);
        function Item_HeroList() {
            var _this = _super.call(this) || this;
            _this.imgHero = new eui.Image();
            return _this;
        }
        Item_HeroList.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        Item_HeroList.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        return Item_HeroList;
    }(eui.ItemRenderer));
    game.Item_HeroList = Item_HeroList;
    __reflect(Item_HeroList.prototype, "game.Item_HeroList");
})(game || (game = {}));
var game;
(function (game) {
    var Item_ItemList = (function (_super) {
        __extends(Item_ItemList, _super);
        function Item_ItemList() {
            return _super.call(this) || this;
        }
        Item_ItemList.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        Item_ItemList.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        return Item_ItemList;
    }(eui.ItemRenderer));
    game.Item_ItemList = Item_ItemList;
    __reflect(Item_ItemList.prototype, "game.Item_ItemList");
})(game || (game = {}));
/**
  * 游戏配置文件
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 存放游戏的配置数据
  * 比如：游戏界面尺寸、分享随机百分比、获取系统数据
  */
var GameConfig;
(function (GameConfig) {
    //是否在线
    GameConfig.isOnLine = navigator.onLine;
    //全局字体颜色表--可以扩展
    GameConfig.TextColors = {
        white: 0xFFFFFF,
        milkWhite: 0xfbf1af,
        grayWhite: 0xceb6a2,
        yellow: 0xffff00,
        lightYellow: 0xffd375,
        orangeYellow: 0xff9900,
        red: 0xf11300,
        green: 0x00e500,
        blue: 0x1a94d7,
        grayBlue: 0x2f5177,
        purple: 0xe938f2,
        pink: 0xFF3030,
        black: 0x2e2d2d,
        golden: 0xFFD700 //金色
    };
    //全局字体大小表--可以扩展
    GameConfig.LabelFontSize = {
        littleSize: 12,
        middleSize: 18,
        normalSize: 24,
        bigSize: 36 //大型字体大小
    };
    //是不是微信浏览
    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        var microStr = "" + ua.match(/MicroMessenger/i);
        if (microStr == "null") {
            return false;
        }
        else if (microStr == "micromessenger") {
            return true;
        }
    }
    GameConfig.isWeiXin = isWeiXin;
    //是不是大屏
    function isBigScreen() {
        return (document.body.clientHeight / document.body.clientWidth > 1.32);
    }
    GameConfig.isBigScreen = isBigScreen;
    //获得浏览器类型 pc android ios -- 可扩展为其他 如 微信、qqzone、qq、微博、校内、facebook
    function systemType() {
        var ua = window.navigator.userAgent.toLowerCase();
        var microStr = "" + ua.match(/MicroMessenger/i);
        if (("" + ua.match(/windows nt/i)) == "windows nt") {
            return "windows";
        }
        else if (("" + ua.match(/iphone/i)) == "iphone") {
            return "ios";
        }
        else if (("" + ua.match(/android/i)) == "android") {
            return "android";
        }
        else if (("" + ua.match(/ipad/i)) == "ipad") {
            return "ipad";
        }
        else if (("" + ua.match(/linux/i)) == "linux") {
            return "linux";
        }
        else if (("" + ua.match(/mac/i)) == "mac") {
            return "mac";
        }
        else if (("" + ua.match(/ucbrower/i)) == "ucbrower") {
            return "ucbrower";
        }
        else {
            console.log("未知系统类型");
        }
    }
    GameConfig.systemType = systemType;
    //获得平台类型 如 微信、qqzone、qq、微博、校内、facebook
    function platformType() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (("" + ua.match(/micromessenger/i)) == "micromessenger") {
            return "micromessenger";
        }
        else if (("" + ua.match(/qzone/i)) == "qzone") {
            return "qzone";
        }
        else if (("" + ua.match(/weibo/i)) == "weibo") {
            return "weibo";
        }
        else if (("" + ua.match(/qq/i)) == "qq") {
            return "qq";
        }
        else if (("" + ua.match(/renren/i)) == "renren") {
            return "renren";
        }
        else if (("" + ua.match(/txmicroblog/i)) == "txmicroblog") {
            return "txmicroblog";
        }
        else if (("" + ua.match(/douban/i)) == "douban") {
            return "douban";
        }
        else {
            return "other";
        }
    }
    GameConfig.platformType = platformType;
    //当前舞台
    function curStage() {
        return egret.MainContext.instance.stage;
    }
    GameConfig.curStage = curStage;
    //当前游戏宽度
    function curWidth() {
        return egret.MainContext.instance.stage.stageWidth;
    }
    GameConfig.curWidth = curWidth;
    //当前游戏宽度
    function curHeight() {
        return egret.MainContext.instance.stage.stageHeight;
    }
    GameConfig.curHeight = curHeight;
})(GameConfig || (GameConfig = {}));
/**
  * 全局数据存储
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var GlobalData;
(function (GlobalData) {
    //我的名字
    GlobalData.myName = "dily";
})(GlobalData || (GlobalData = {}));
/**
  * 主界面消息
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 包括 角色UI、主功能、活动等等
  */
var MainNotify = (function () {
    function MainNotify() {
    }
    //打开主界面UI
    MainNotify.OPEN_MAIN = "MainNotify_OPEN_MAIN";
    //关闭主界面UI
    MainNotify.CLOSE_MAIN = "MainNotify_CLOSE_MAIN";
    //打开角色UI
    MainNotify.OPEN_ROLE = "MainNotify_OPEN_ROLE";
    //关闭角色UI
    MainNotify.CLOSE_ROLE = "MainNotify_CLOSE_ROLE";
    //打开功能UI
    MainNotify.OPEN_FUNCTION = "MainNotify_OPEN_FUNCTION";
    //关闭功能UI
    MainNotify.CLOSE_FUNCTION = "MainNotify_CLOSE_FUNCTION";
    //打开活动UI
    MainNotify.OPEN_ACTIVITY = "MainNotify_OPEN_ACTIVITY";
    //关闭活动UI
    MainNotify.CLOSE_ACTIVITY = "MainNotify_CLOSE_ACTIVITY";
    return MainNotify;
}());
__reflect(MainNotify.prototype, "MainNotify");
/**
* 弹窗消息
* by dily
* (c) copyright 2014 - 2035
* All Rights Reserved.
*/
var PanelNotify = (function () {
    function PanelNotify() {
    }
    //打开角色
    PanelNotify.OPEN_ROLE = "PANELNOTIFY_OPEN_ROLE";
    //关闭角色
    PanelNotify.CLOSE_ROLE = "PANELNOTIFY_CLOSE_ROLE";
    //打开背包
    PanelNotify.OPEN_BACKPACK = "PANELNOTIFY_OPEN_BACKPACK";
    //关闭背包
    PanelNotify.CLOSE_BACKPACK = "PANELNOTIFY_CLOSE_BACKPACK";
    //打开强化
    PanelNotify.OPEN_QIANGHUA = "PANELNOTIFY_OPEN_QIANGHUA";
    //关闭强化
    PanelNotify.CLOSE_QIANGHUA = "PANELNOTIFY_QIANGHUA";
    //打开招贤
    PanelNotify.OPEN_ZHAOXIAN = "PANELNOTIFY_OPEN_ZHAOXIAN";
    //关闭招贤
    PanelNotify.CLOSE_ZHAOXIAN = "PPANELNOTIFY_ZHAOXIAN";
    //打开装备
    PanelNotify.OPEN_EQUIPMENT = "PANELNOTIFY_OPEN_EQUIPMENT";
    //关闭装备
    PanelNotify.CLOSE_EQUIPMENT = "PANELNOTIFY_CLOSE_EQUIPMENT";
    //打开闯荡
    PanelNotify.OPEN_CHUANGDANG = "PANELNOTIFY_OPEN_CHUANGDANG";
    //关闭闯荡
    PanelNotify.CLOSE_CHUANGDANG = "PANELNOTIFY_CHUANGDANG";
    //打开商店
    PanelNotify.OPEN_SHOP = "PANELNOTIFY_OPEN_SHOP";
    //关闭商店
    PanelNotify.CLOSE_SHOP = "PANELNOTIFY_CLOSE_SHOP";
    //打开地图
    PanelNotify.OPEN_MAP = "PANELNOTIFY_OPEN_MAP";
    //关闭地图
    PanelNotify.CLOSE_MAP = "PANELNOTIFY_CLOSE_MAP";
    //打开战斗胜利
    PanelNotify.OPEN_BattleFinish = "PANELNOTIFY_OPEN_BATTLEFINISH";
    //关闭战斗胜利
    PanelNotify.CLOSE_BattleFinish = "PANELNOTIFY_CLOSE_BATTLEFINISH";
    return PanelNotify;
}());
__reflect(PanelNotify.prototype, "PanelNotify");
/**
  * 场景消息
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var SceneNotify = (function () {
    function SceneNotify() {
    }
    //打开主城场景
    SceneNotify.OPEN_HOME = "SceneNotify_OPEN_HOME";
    //关闭主城场景
    SceneNotify.CLOSE_HOME = "SceneNotify_CLOSE_HOME";
    //进入战斗场景
    SceneNotify.OPEN_BATTLE = "SceneNotify_OPEN_BATTLE";
    //关闭战斗场景
    SceneNotify.CLOSE_BATTLE = "SceneNotify_CLOSE_BATTLE";
    return SceneNotify;
}());
__reflect(SceneNotify.prototype, "SceneNotify");
/**
  * 系统消息
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var SysNotify = (function () {
    function SysNotify() {
    }
    //服务器连接成功
    SysNotify.CONNECT_SERVER_SUCCESS = "CONNECT_SERVER_SUCCESS";
    //服务器返回数据
    SysNotify.SERVER_BACK_DATA = "SERVER_BACK_DATA";
    return SysNotify;
}());
__reflect(SysNotify.prototype, "SysNotify");
/**
* 用户信息
* by dily
* (c) copyright 2014 - 2035
* All Rights Reserved.
*/
var UserInfoNotify = (function () {
    function UserInfoNotify() {
    }
    //打开角色
    UserInfoNotify.UPDATE_DATA = "UPDATE_DATA";
    return UserInfoNotify;
}());
__reflect(UserInfoNotify.prototype, "UserInfoNotify");
var game;
(function (game) {
    var AppFacade = (function (_super) {
        __extends(AppFacade, _super);
        function AppFacade() {
            return _super.call(this) || this;
        }
        AppFacade.getInstance = function () {
            if (this.instance == null)
                this.instance = new AppFacade();
            return (this.instance);
        };
        AppFacade.prototype.initializeController = function () {
            _super.prototype.initializeController.call(this);
            this.registerCommand(AppFacade.STARTUP, game.StartupCommand);
        };
        /**
         * 启动PureMVC，在应用程序中调用此方法，并传递应用程序本身的引用
         * @param	rootView	-	PureMVC应用程序的根视图root，包含其它所有的View Componet
         */
        AppFacade.prototype.startUp = function (rootView) {
            this.sendNotification(AppFacade.STARTUP, rootView);
            this.removeCommand(AppFacade.STARTUP); //PureMVC初始化完成，注销STARUP命令
        };
        AppFacade.STARTUP = "startup";
        return AppFacade;
    }(puremvc.Facade));
    game.AppFacade = AppFacade;
    __reflect(AppFacade.prototype, "game.AppFacade", ["puremvc.IFacade", "puremvc.INotifier"]);
})(game || (game = {}));
var AniManager = (function (_super) {
    __extends(AniManager, _super);
    // public armatureDisplay:dragonBones.EgretArmatureDisplay;
    function AniManager() {
        var _this = _super.call(this) || this;
        dragonBones.addMovieGroup(RES.getRes("NewProject_ske_dbmv"), RES.getRes("NewProject_tex_png")); // 添加动画数据和贴图
        _this.movie = dragonBones.buildMovie("stand"); // 创建 白鹭极速格式 的动画
        return _this;
        //this.movie.scaleX = 0.2;
        //this.movie.scaleY = 0.2;
        // this.movie.play("stand");
        // this.addChild(this.movie);
        // let factory = dragonBones.EgretFactory.factory;
        // let dragonbonesData = RES.getRes("NewProject_ske_json");
        // let textureData = RES.getRes("NewProject_tex_json");
        // let texture = RES.getRes("NewProject_tex_png");
        // factory.parseDragonBonesData(dragonbonesData);
        // factory.parseTextureAtlasData(textureData, texture);
        // this.armatureDisplay = factory.buildArmatureDisplay("NewProject");
        //this.armatureDisplay.animation.play("stand", 0);
        //this.addChild(this.armatureDisplay);
    }
    AniManager.prototype.destoryMe = function () {
        this.movie.stop();
        this.movie.dispose();
        this.movie.parent && this.movie.parent.removeChild(this.movie);
        // this.armatureDisplay.animation.stop();
        // this.armatureDisplay.animation.reset();
        // this.armatureDisplay.dispose();
        // this.armatureDisplay = null;
        // this.parent && this.parent.removeChild(this);
    };
    return AniManager;
}(egret.DisplayObjectContainer));
__reflect(AniManager.prototype, "AniManager");
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
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
/**
  * 注册controller
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var ControllerPrepCommand = (function (_super) {
        __extends(ControllerPrepCommand, _super);
        function ControllerPrepCommand() {
            return _super.call(this) || this;
        }
        ControllerPrepCommand.prototype.execute = function (notification) {
            (new game.SceneManager()).register();
            (new game.MainManager()).register();
            //服务器返回command
            (new game.Processor_100()).register();
        };
        return ControllerPrepCommand;
    }(puremvc.SimpleCommand));
    game.ControllerPrepCommand = ControllerPrepCommand;
    __reflect(ControllerPrepCommand.prototype, "game.ControllerPrepCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
})(game || (game = {}));
/**
  * 注册注册proxy
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var ModelPrepCommand = (function (_super) {
        __extends(ModelPrepCommand, _super);
        function ModelPrepCommand() {
            return _super.call(this) || this;
        }
        ModelPrepCommand.prototype.execute = function (notification) {
            //excel数据
            this.facade.registerProxy(new TemplateProxy());
            //游戏其他需要存储数据
            this.facade.registerProxy(new GameProxy());
        };
        return ModelPrepCommand;
    }(puremvc.SimpleCommand));
    game.ModelPrepCommand = ModelPrepCommand;
    __reflect(ModelPrepCommand.prototype, "game.ModelPrepCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
})(game || (game = {}));
/**
  * 初始化mvc controller
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var StartupCommand = (function (_super) {
        __extends(StartupCommand, _super);
        function StartupCommand() {
            return _super.call(this) || this;
        }
        StartupCommand.prototype.initializeMacroCommand = function () {
            this.addSubCommand(game.ControllerPrepCommand);
            this.addSubCommand(game.ModelPrepCommand);
            this.addSubCommand(game.ViewPrepCommand);
        };
        return StartupCommand;
    }(puremvc.MacroCommand));
    game.StartupCommand = StartupCommand;
    __reflect(StartupCommand.prototype, "game.StartupCommand");
})(game || (game = {}));
/**
  * 注册mediator
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var ViewPrepCommand = (function (_super) {
        __extends(ViewPrepCommand, _super);
        function ViewPrepCommand() {
            return _super.call(this) || this;
        }
        ViewPrepCommand.prototype.execute = function (notification) {
            var main = GameLayerManager.gameLayer().panelLayer;
            // this.facade.registerMediator( new RoleMediator() );
            //       this.facade.registerMediator(new BackpackMediator());
            //       this.facade.registerMediator(new QianghuaMediator());
            //       this.facade.registerMediator(new ZhaoXianMediator());
            //       this.facade.registerMediator(new ChuangDangMediator());
            //       this.facade.registerMediator(new ShopMediator());
            //       this.facade.registerMediator(new MapMediator());
        };
        return ViewPrepCommand;
    }(puremvc.SimpleCommand));
    game.ViewPrepCommand = ViewPrepCommand;
    __reflect(ViewPrepCommand.prototype, "game.ViewPrepCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
})(game || (game = {}));
/**
  * 服务器命令返回
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var Processor_100 = (function (_super) {
        __extends(Processor_100, _super);
        function Processor_100() {
            return _super.call(this) || this;
        }
        /**
         * 注册消息
         */
        Processor_100.prototype.register = function () {
            this.facade.registerCommand("Processor_100", Processor_100);
        };
        Processor_100.prototype.executeData = function (data) {
            //创建user_login_class
            var user_login_class = Global.getMessage("LoginResp");
            //反序列化
            var new_user_login = user_login_class.decode(data.buffer);
            console.log("反序列化数据：", new_user_login);
            this.sendNotification(UserInfoNotify.UPDATE_DATA, new_user_login);
        };
        Processor_100.prototype.execute = function (notification) {
            var data = notification.getBody(); //携带数据
            //创建user_login_class
            var user_login_class = Global.getMessage("LoginResp");
            //反序列化
            var new_user_login = user_login_class.decode(data.buffer);
            console.log("反序列化数据：", new_user_login);
            this.sendNotification(UserInfoNotify.UPDATE_DATA, new_user_login);
        };
        Processor_100.NAME = "Processor_100";
        return Processor_100;
    }(puremvc.SimpleCommand));
    game.Processor_100 = Processor_100;
    __reflect(Processor_100.prototype, "game.Processor_100", ["puremvc.ICommand", "puremvc.INotifier"]);
})(game || (game = {}));
/**
  * 请求用户信息例子
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var UserInfoRequest;
(function (UserInfoRequest) {
    function sendUserInfo(userId, userName) {
        //创建user_login_class
        var user_login_class = Global.getMessage("user_login");
        //创建一条消息
        var user_login = new user_login_class({
            "email": userName,
            "password": userName,
            "sessionKey": userName
        });
        //序列化
        var bytes = user_login.toArrayBuffer();
        SocketManager.sendMessage(101, 1, bytes);
    }
    UserInfoRequest.sendUserInfo = sendUserInfo;
})(UserInfoRequest || (UserInfoRequest = {}));
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
var game;
(function (game) {
    var DungeonData = (function () {
        function DungeonData() {
        }
        return DungeonData;
    }());
    game.DungeonData = DungeonData;
    __reflect(DungeonData.prototype, "game.DungeonData");
})(game || (game = {}));
var game;
(function (game) {
    var DungeonLevelData = (function () {
        function DungeonLevelData() {
        }
        return DungeonLevelData;
    }());
    game.DungeonLevelData = DungeonLevelData;
    __reflect(DungeonLevelData.prototype, "game.DungeonLevelData");
})(game || (game = {}));
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
/**
  * 通过excel名称获得excel数据proxy
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var P;
(function (P) {
    //=========================excel数据=============================
    /**
     * 这个是一个读取excel数据的例子
     */
    function getTemplateDataProxy() {
        return game.AppFacade.getInstance().retrieveProxy(TemplateProxy.NAME);
    }
    P.getTemplateDataProxy = getTemplateDataProxy;
    //=========================游戏其他数据数据=============================
    /**
     * 这个是一个读取游戏数据的例子
     */
    function getGameDataProxy() {
        return game.AppFacade.getInstance().retrieveProxy(GameProxy.NAME);
    }
    P.getGameDataProxy = getGameDataProxy;
})(P || (P = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isSound = true;
        _this.isdisplay = false;
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //游戏自定义容器添加到舞台上
        this.addChild(GameLayerManager.gameLayer());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        loadingView = new LoadingUI();
                        GameLayerManager.gameLayer().addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        //await RES.loadConfig("resource/resource.json", "resource/");
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        //await RES.loadConfig("resource/resource.json", "resource/");
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("loading", 1)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 4:
                        _a.sent();
                        GameLayerManager.gameLayer().removeChild(loadingView);
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        this.imgBG = new egret.Sprite;
        var sky = this.createBitmapByName("main1_png");
        // let sky = this.createBitmapByName("main1_webp");
        // let bg2 = this.createBitmapByName("bg2_png");
        this.imgBG.addChild(sky);
        // this.imgBG.addChild(bg2);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        // let topMask = new egret.Shape();
        // topMask.graphics.beginFill(0x000000, 0.5);
        // topMask.graphics.drawRect(0, 0, stageW, 172);
        // topMask.graphics.endFill();
        // topMask.y = 33;
        // this.imgBG.addChild(topMask);
        var icon_name = this.createBitmapByName("youximingzi_png");
        this.imgBG.addChild(icon_name);
        icon_name.width = icon_name.width * 2;
        icon_name.x = stageW / 2 - icon_name.width / 2;
        icon_name.y = icon_name.height * 2;
        var icon = new eui.Image();
        icon.source = "xgw20_png";
        icon.width = 170;
        icon.height = 136;
        // let icon: egret.Bitmap = this.createBitmapByName("xgw20_png");
        this.imgBG.addChild(icon);
        icon.x = stageW / 2 - icon.width / 2;
        icon.y = stageH / 2;
        var icon_t = this.createBitmapByName("main8_png");
        this.imgBG.addChild(icon_t);
        icon_t.x = icon.x - icon_t.width;
        icon_t.y = icon.y - icon_t.height / 3;
        //声音按钮
        this.iconshengyin = new eui.Image();
        this.iconshengyin.source = "shengyin1_png";
        this.iconshengyin.width = 110;
        this.iconshengyin.height = 110;
        this.imgBG.addChild(this.iconshengyin);
        this.iconshengyin.x = this.iconshengyin.width * 1;
        this.iconshengyin.y = stageH - this.iconshengyin.height * 2;
        //设置按钮
        this.iconSet = new eui.Image();
        this.iconSet.source = "weixin_png";
        this.iconSet.width = 110;
        this.iconSet.height = 110;
        this.imgBG.addChild(this.iconSet);
        this.iconSet.x = stageW - this.iconSet.width * 2;
        this.iconSet.y = stageH - this.iconSet.height * 2;
        // let sharedBtn = new eui.Button();
        // sharedBtn.y = 35;
        // sharedBtn.label = 'btnShared';
        // this.imgBG.addChild(sharedBtn);
        this.iconSet.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            window.platform.shareAppMessage().then(function (res) {
                console.log('分享成功回调', res);
            }, function (err) {
                console.log('分享失败回调', err);
            });
        }, this);
        this.btnClose = new eui.Button();
        this.btnClose.label = "btnClose!";
        this.btnClose.y = 35;
        this.btnClose.horizontalCenter = 0;
        this.imgBG.addChild(this.btnClose);
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClickRank, this);
        this.iconshengyin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundClick, this);
        // this.iconSet.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSoundClick,this);
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        GameLayerManager.gameLayer().addChild(this.imgBG);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        var parser = new egret.HtmlTextParser();
        // let textflowArr = result.map(text => parser.parse(text));
        // let textfield = this.textfield;
        // let count = -1;
        // let change = () => {
        //     count++;
        //     if (count >= textflowArr.length) {
        //         count = 0;
        //     }
        //     let textFlow = textflowArr[count];
        //     // 切换描述内容
        //     // Switch to described content
        //     textfield.textFlow = textFlow;
        //     let tw = egret.Tween.get(textfield);
        //     tw.to({ "alpha": 1 }, 200);
        //     tw.wait(2000);
        //     tw.to({ "alpha": 0 }, 200);
        //     tw.call(change, this);
        // };
        // change();
    };
    /**
     * 点击按钮
     * Click the button
     */
    Main.prototype.onButtonClick = function (e) {
        game.AppFacade.getInstance().startUp(GameLayerManager.gameLayer());
        game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_HOME);
        game.AppFacade.getInstance().sendNotification(MainNotify.OPEN_MAIN);
        GameLayerManager.gameLayer().removeChild(this.imgBG);
    };
    Main.prototype.onSoundClick = function (e) {
        if (this.isSound) {
            this.isSound = false;
            this.iconshengyin.source = "shengyin2_png";
            // window.platform.setUserCloudData().then(
            //     (res) => {
            //     console.log('上传积分成功', res);
            // }, (err) => {
            //     console.log('上传积分失败', err);
            // });
        }
        else {
            this.isSound = true;
            this.iconshengyin.source = "shengyin1_png";
            //var kvlist = 
            window.platform.getUserCloudStorage();
            //console.log(kvlist);
        }
    };
    /**
     * 点击按钮
     * Click the button
     */
    Main.prototype.onButtonClickRank = function (e) {
        var openDataContext = wx.getOpenDataContext();
        if (this.isdisplay) {
            this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
            this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
            this.isdisplay = false;
        }
        else {
            //处理遮罩，避免开放数据域事件影响主域。
            this.rankingListMask = new egret.Shape();
            this.rankingListMask.graphics.beginFill(0x000000, 1);
            this.rankingListMask.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
            this.rankingListMask.graphics.endFill();
            this.rankingListMask.alpha = 0.5;
            this.rankingListMask.touchEnabled = true;
            this.addChild(this.rankingListMask);
            //简单实现，打开这关闭使用一个按钮。
            this.addChild(this.btnClose);
            //主要示例代码开始
            var bitmapdata_1 = new egret.BitmapData(window["sharedCanvas"]);
            bitmapdata_1.$deleteSource = false;
            var texture = new egret.Texture();
            texture._setBitmapData(bitmapdata_1);
            this.bitmap = new egret.Bitmap(texture);
            this.bitmap.width = this.stage.stageWidth;
            this.bitmap.height = this.stage.stageHeight;
            this.addChild(this.bitmap);
            egret.startTick(function (timeStarmp) {
                egret.WebGLUtils.deleteWebGLTexture(bitmapdata_1.webGLTexture);
                bitmapdata_1.webGLTexture = null;
                return false;
            }, this);
            //主要示例代码结束            
            this.isdisplay = true;
        }
        //发送消息
        openDataContext.postMessage({
            isDisplay: this.isdisplay,
            text: 'hello',
            year: (new Date()).getFullYear()
        });
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
/**
  * 游戏数据读取模板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 注意：
  * 不能直接操作vo数据，只能通过gameProxy操作
  */
var GameProxy = (function (_super) {
    __extends(GameProxy, _super);
    function GameProxy() {
        var _this = _super.call(this, GameProxy.NAME) || this;
        _this.vo = new GameVO();
        return _this;
    }
    /**
     * 获取游戏名称
     */
    GameProxy.prototype.getGameName = function () {
        if (!this.vo) {
            this.vo = new GameVO();
        }
        return this.vo.gameName;
    };
    /**
     * 设置游戏名称
     */
    GameProxy.prototype.setGameName = function (name) {
        if (!this.vo) {
            this.vo = new GameVO();
        }
        this.vo.gameName = name;
    };
    GameProxy.NAME = "GameProxy"; //必须和excel导出文件一致
    return GameProxy;
}(ResourceProxyBase));
__reflect(GameProxy.prototype, "GameProxy");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        // // let sky = ("main1_png");
        // var loadingImg:egret.Bitmap = new egret.Bitmap();
        // RES.getResAsync("resource/images/loading/main1.png", function (texture:egret.Texture) {
        //     loadingImg.texture = texture;
        // }, this);
        // this.addChild(loadingImg);
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
/**
  * 游戏数据存储vo
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var GameVO = (function () {
    function GameVO() {
        /**
         * 框架名称
        */
        this.gameName = "Eger pro";
    }
    return GameVO;
}());
__reflect(GameVO.prototype, "GameVO");
/**
  * 游戏容器类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * EgerPro显示对象层级
  * Main-GameScene（sceneLayer、mainLayer、popLayer、effectLayer、maskLayer、loadLayer）
  *
  */
var GameLayerManager = (function (_super) {
    __extends(GameLayerManager, _super);
    //构造方法
    function GameLayerManager() {
        var _this = _super.call(this) || this;
        // 场景层 如 战场、主城、副本战场之类的
        _this.sceneLayer = new eui.UILayer();
        // 主UI层 如 底部功能栏
        _this.mainLayer = new eui.UILayer();
        // 弹窗层 如 设置、背包、装备之类的
        _this.panelLayer = new eui.UILayer();
        // 特效层 如 闪烁、飘字之类的
        _this.effectLayer = new eui.UILayer();
        // 通讯遮罩层 和服务器通讯UI
        _this.maskLayer = new eui.UILayer();
        // 加载遮罩层 场景切换的时候加载资源UI
        _this.loadLayer = new eui.UILayer();
        _this.init();
        return _this;
    }
    //游戏容器管理器单例
    GameLayerManager.gameLayer = function () {
        if (!this._instance)
            this._instance = new GameLayerManager();
        return this._instance;
    };
    //初始化场景类
    GameLayerManager.prototype.init = function () {
        this.touchThrough = true;
        this.sceneLayer.touchThrough = true;
        this.mainLayer.touchThrough = true;
        this.panelLayer.touchThrough = true;
        this.effectLayer.touchThrough = true;
        this.maskLayer.touchThrough = true;
        this.loadLayer.touchThrough = true;
        this.addChild(this.sceneLayer);
        this.addChild(this.mainLayer);
        this.addChild(this.panelLayer);
        this.addChild(this.effectLayer);
        this.addChild(this.maskLayer);
        this.addChild(this.loadLayer);
    };
    return GameLayerManager;
}(eui.UILayer));
__reflect(GameLayerManager.prototype, "GameLayerManager");
/**
  * 主界面管理类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 所有的弹窗都需要在register注册事件
  * 在execute添加消息处理面板打开关闭事件
  */
var game;
(function (game) {
    var MainManager = (function (_super) {
        __extends(MainManager, _super);
        function MainManager() {
            return _super.call(this) || this;
        }
        /**
         * 注册消息
         */
        MainManager.prototype.register = function () {
            this.facade.registerCommand(MainNotify.OPEN_MAIN, MainManager);
            this.facade.registerCommand(MainNotify.CLOSE_MAIN, MainManager);
        };
        MainManager.prototype.execute = function (notification) {
            var data = notification.getBody(); //携带数据
            var panelCon = GameLayerManager.gameLayer().mainLayer;
            switch (notification.getName()) {
                case MainNotify.OPEN_MAIN: {
                    if (GameLayerManager.gameLayer().mainUI == null) {
                        GameLayerManager.gameLayer().mainUI = new game.MainUI();
                        panelCon.addChild(GameLayerManager.gameLayer().mainUI);
                    }
                    break;
                }
                case MainNotify.CLOSE_MAIN: {
                    if (GameLayerManager.gameLayer().mainUI != null) {
                        panelCon.removeChild(GameLayerManager.gameLayer().mainUI);
                        GameLayerManager.gameLayer().mainUI = null;
                    }
                    break;
                }
            }
        };
        MainManager.NAME = "MainManager";
        return MainManager;
    }(puremvc.SimpleCommand));
    game.MainManager = MainManager;
    __reflect(MainManager.prototype, "game.MainManager", ["puremvc.ICommand", "puremvc.INotifier"]);
})(game || (game = {}));
/**
  * 场景管理类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 所有的弹窗都需要在register注册事件
  * 在execute添加消息处理面板打开关闭事件
  */
var game;
(function (game) {
    var SceneManager = (function (_super) {
        __extends(SceneManager, _super);
        function SceneManager() {
            return _super.call(this) || this;
        }
        /**
         * 注册消息
         */
        SceneManager.prototype.register = function () {
            this.facade.registerCommand(SceneNotify.OPEN_HOME, SceneManager); //打开主城
            this.facade.registerCommand(SceneNotify.CLOSE_HOME, SceneManager); //关闭主城
            this.facade.registerCommand(SceneNotify.OPEN_BATTLE, SceneManager); //打开战斗
            this.facade.registerCommand(SceneNotify.CLOSE_BATTLE, SceneManager); //关闭战斗
        };
        SceneManager.prototype.execute = function (notification) {
            var data = notification.getBody(); //携带数据
            var panelCon = GameLayerManager.gameLayer().sceneLayer;
            switch (notification.getName()) {
                case SceneNotify.OPEN_HOME: {
                    if (GameLayerManager.gameLayer().homeCity == null) {
                        GameLayerManager.gameLayer().homeCity = new game.HomeCity();
                        panelCon.addChild(GameLayerManager.gameLayer().homeCity);
                    }
                    break;
                }
                case SceneNotify.CLOSE_HOME: {
                    if (GameLayerManager.gameLayer().homeCity != null) {
                        panelCon.removeChild(GameLayerManager.gameLayer().homeCity);
                        GameLayerManager.gameLayer().homeCity = null;
                    }
                    break;
                }
                case SceneNotify.OPEN_BATTLE: {
                    if (GameLayerManager.gameLayer().battleScene == null) {
                        GameLayerManager.gameLayer().battleScene = new game.BattleScene();
                        panelCon.addChild(GameLayerManager.gameLayer().battleScene);
                    }
                    break;
                }
                case SceneNotify.CLOSE_BATTLE: {
                    if (GameLayerManager.gameLayer().battleScene != null) {
                        panelCon.removeChild(GameLayerManager.gameLayer().battleScene);
                        GameLayerManager.gameLayer().battleScene = null;
                    }
                    break;
                }
            }
        };
        SceneManager.NAME = "SceneManager";
        return SceneManager;
    }(puremvc.SimpleCommand));
    game.SceneManager = SceneManager;
    __reflect(SceneManager.prototype, "game.SceneManager", ["puremvc.ICommand", "puremvc.INotifier"]);
})(game || (game = {}));
/**
 * 活动条
 */
var game;
(function (game) {
    var ActivityBar = (function (_super) {
        __extends(ActivityBar, _super);
        function ActivityBar() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/eui_skins/ActivityBarSkin.exml";
            return _this;
        }
        return ActivityBar;
    }(eui.Component));
    game.ActivityBar = ActivityBar;
    __reflect(ActivityBar.prototype, "game.ActivityBar");
})(game || (game = {}));
/**
 * 功能条
 */
var game;
(function (game) {
    var FunctionBar = (function (_super) {
        __extends(FunctionBar, _super);
        function FunctionBar() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/eui_skins/FunctionBarSkin.exml";
            return _this;
        }
        return FunctionBar;
    }(eui.Component));
    game.FunctionBar = FunctionBar;
    __reflect(FunctionBar.prototype, "game.FunctionBar");
})(game || (game = {}));
/**
 * 主界面
 */
var game;
(function (game) {
    var MainUI = (function (_super) {
        __extends(MainUI, _super);
        function MainUI() {
            var _this = _super.call(this) || this;
            _this.isUp = false;
            _this.speed = 0.7;
            _this.enemySpeed = 0.6;
            _this.enemy = new Array(5);
            _this.enemyType = [0, 0, 0, 0, 0];
            _this.enemyIconType = [0, 0, 0, 0, 0];
            _this.enemyIndex = 0;
            _this.hNum = 600 - 200;
            _this.maxStarNum = 0;
            _this.starNum = 0;
            _this.isdisplay = false;
            _this.skinName = "resource/eui_skins/MainUISkin.exml";
            _this.mainBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onButtonClickRank, _this);
            _this.group_game.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onMainBtnClick, _this);
            _this.btn_new.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onNewClick, _this);
            _this.btn_home.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onButtonClickRank, _this);
            _this.dateTimer = new DateTimer(1);
            _this.dateTimer.addEventListener(egret.TimerEvent.TIMER, _this.onTimerHandler, _this);
            _this.dateTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, _this.onTimerComplete, _this);
            wx.getUserCloudStorage({
                keyList: ["num"],
                success: function (res) {
                    console.log('获取积分成功', res.KVDataList);
                },
                fail: function (err) {
                    console.log('获取积分失败', err);
                },
                complete: function () {
                }
            });
            _this.gameInit();
            return _this;
        }
        MainUI.prototype.gameInit = function () {
            this.starNum = 0;
            this.lable_starNum.text = this.starNum + "";
            this.starInit(this.isUp);
            this.cube.visible = true;
            this.cube.y = this.height / 2;
            this.group_game.visible = true;
            this.group_over.visible = false;
            this.enemy = new Array(5);
            this.dateTimer.reset();
            this.dateTimer.start();
        };
        MainUI.prototype.starInit = function (status) {
            //显示上边的星星
            if (status) {
                this.starTop.visible = true;
                this.starBottom.visible = false;
            }
            else {
                this.starTop.visible = false;
                this.starBottom.visible = true;
            }
        };
        MainUI.prototype.onTimerHandler = function () {
            this.cubeStageUpdate();
            if (this.dateTimer.currentCount % 1000 == 0) {
                this.createOtherCube();
            }
            if (this.isUp) {
                this.cube.y -= this.speed;
            }
            else {
                this.cube.y += this.speed;
            }
            this.starStatus();
            //enemy移动
            for (var i = 0; i < this.enemy.length; i++) {
                if (this.enemy[i] != null) {
                    //电锯旋转
                    if (this.enemyIconType[i] == 1) {
                        this.enemy[i].rotation += 10;
                    }
                    //判断是否有碰撞
                    if (this.isOverlap(this.enemy[i], this.cube)) {
                        this.GameOver();
                    }
                    if (this.enemyType[i] == 0) {
                        this.enemy[i].x += this.enemySpeed;
                    }
                    else {
                        this.enemy[i].x -= this.enemySpeed;
                    }
                }
            }
        };
        MainUI.prototype.onTimerComplete = function () {
        };
        //判断是否得分
        MainUI.prototype.starStatus = function () {
            //判断是否有碰撞
            if (this.starTop.visible) {
                if (this.isOverlap(this.starTop, this.cube)) {
                    this.starInit(false);
                    this.starNum++;
                    this.lable_starNum.text = this.starNum + "";
                    console.log("分数：" + this.starNum);
                }
            }
            if (this.starBottom.visible) {
                if (this.isOverlap(this.starBottom, this.cube)) {
                    this.starInit(true);
                    this.starNum++;
                    this.lable_starNum.text = this.starNum + "";
                    console.log("分数：" + this.starNum);
                }
            }
        };
        //判断是否到弹簧
        MainUI.prototype.cubeStageUpdate = function () {
            if (this.isUp) {
                if (this.cube.y <= this.boxTop.y + this.boxTop.height / 2)
                    this.isUp = !this.isUp;
            }
            else {
                if (this.cube.y >= this.boxBottom.y)
                    this.isUp = !this.isUp;
            }
        };
        /**
         * @brief 判断两个轴对齐的矩形是否重叠
         * @param rc1 第一个矩阵的位置
         * @param rc2 第二个矩阵的位置
         * @return 两个矩阵是否重叠（边沿重叠，也认为是重叠）
         */
        MainUI.prototype.isOverlap = function (rc1, rc2) {
            if (rc1.x + rc1.width - 20 > rc2.x &&
                rc2.x + rc2.width - 20 > rc1.x &&
                rc1.y + rc1.height - 20 > rc2.y &&
                rc2.y + rc2.height - 20 > rc1.y)
                return true;
            else
                return false;
        };
        MainUI.prototype.onMainBtnClick = function (e) {
            if (this.isUp) {
                this.isUp = !this.isUp;
            }
            else {
                this.isUp = !this.isUp;
            }
        };
        MainUI.prototype.onGameOver = function (e) {
            this.GameOver();
        };
        MainUI.prototype.onNewClick = function (e) {
            this.gameInit();
        };
        MainUI.prototype.GameOver = function () {
            wx.setUserCloudStorage({
                KVDataList: [{ key: "num", value: this.starNum + "" }],
                success: function (res) {
                    console.log('上传积分成功', res);
                },
                fail: function (err) {
                    console.log('上传积分失败', err);
                },
                complete: function () {
                }
            });
            this.dateTimer.stop();
            this.cube.visible = false;
            this.group_game.visible = false;
            this.group_over.visible = true;
            for (var i = 0; i < this.enemy.length; i++) {
                if (this.enemy[i] != null && this.enemy[i].parent != null) {
                    this.removeChild(this.enemy[i]);
                }
            }
        };
        //创建动态障碍
        MainUI.prototype.createOtherCube = function () {
            if (this.enemyIndex >= 5)
                this.enemyIndex = 0;
            var rand = Math.random() * 10;
            this.enemy[this.enemyIndex] = new eui.Image();
            if (rand >= 5) {
                //创建大障碍物
                this.enemy[this.enemyIndex].source = "dianju1_png";
                this.enemy[this.enemyIndex].width = 80;
                this.enemy[this.enemyIndex].height = 80;
                this.enemyIconType[this.enemyIndex] = 1;
            }
            else {
                //创建小障碍物
                this.enemy[this.enemyIndex].source = "zhangai1_1_png";
                this.enemy[this.enemyIndex].width = 46;
                this.enemy[this.enemyIndex].height = 46;
                this.enemyIconType[this.enemyIndex] = 0;
            }
            //随机方向
            var randX = Math.random() * 10;
            if (randX >= 5) {
                //左向右
                this.enemyType[this.enemyIndex] = 0;
                this.enemy[this.enemyIndex].x = -this.enemy[this.enemyIndex].width;
            }
            else {
                //右向左
                this.enemyType[this.enemyIndex] = 1;
                this.enemy[this.enemyIndex].x = this.width + this.enemy[this.enemyIndex].width;
            }
            //随机位置
            var randY = Math.random() * 1000;
            if (randY > 400)
                randY -= 400;
            this.enemy[this.enemyIndex].y = this.boxTop.y + 100 + randY;
            this.enemy[this.enemyIndex].anchorOffsetX = this.enemy[this.enemyIndex].width / 2;
            this.enemy[this.enemyIndex].anchorOffsetY = this.enemy[this.enemyIndex].height / 2;
            this.addChild(this.enemy[this.enemyIndex]);
            this.enemyIndex++;
        };
        MainUI.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        /**
         * 点击按钮
         * Click the button
         */
        MainUI.prototype.onButtonClickRank = function (e) {
            var openDataContext = wx.getOpenDataContext();
            if (this.isdisplay) {
                this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
                this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
                this.isdisplay = false;
                this.mainBtn.visible = false;
            }
            else {
                //处理遮罩，避免开放数据域事件影响主域。
                this.rankingListMask = new egret.Shape();
                this.rankingListMask.graphics.beginFill(0x000000, 1);
                this.rankingListMask.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
                this.rankingListMask.graphics.endFill();
                this.rankingListMask.alpha = 0.5;
                this.rankingListMask.touchEnabled = true;
                this.addChild(this.rankingListMask);
                this.mainBtn.visible = true;
                //简单实现，打开这关闭使用一个按钮
                this.addChild(this.mainBtn);
                //主要示例代码开始
                var bitmapdata_2 = new egret.BitmapData(window["sharedCanvas"]);
                bitmapdata_2.$deleteSource = false;
                var texture = new egret.Texture();
                texture._setBitmapData(bitmapdata_2);
                this.bitmap = new egret.Bitmap(texture);
                this.bitmap.width = this.stage.stageWidth;
                this.bitmap.height = this.stage.stageHeight;
                this.addChild(this.bitmap);
                egret.startTick(function (timeStarmp) {
                    egret.WebGLUtils.deleteWebGLTexture(bitmapdata_2.webGLTexture);
                    bitmapdata_2.webGLTexture = null;
                    return false;
                }, this);
                //主要示例代码结束            
                this.isdisplay = true;
            }
            //发送消息
            openDataContext.postMessage({
                isDisplay: this.isdisplay,
                text: 'hello',
                year: (new Date()).getFullYear()
            });
        };
        return MainUI;
    }(eui.Component));
    game.MainUI = MainUI;
    __reflect(MainUI.prototype, "game.MainUI");
})(game || (game = {}));
/**
 * 角色信息
 */
var game;
(function (game) {
    var RoleInfo = (function (_super) {
        __extends(RoleInfo, _super);
        function RoleInfo() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/eui_skins/RoleInfoSkin.exml";
            return _this;
        }
        return RoleInfo;
    }(eui.Component));
    game.RoleInfo = RoleInfo;
    __reflect(RoleInfo.prototype, "game.RoleInfo");
})(game || (game = {}));
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.shareAppMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.getUserCloudStorage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.setUserCloudData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
/**
  * 面板弹出管理类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 面板弹出的管理类
  */
var PopUpManager;
(function (PopUpManager) {
    /**
    * 添加面板方法
    * panel       		面板
    * dark        		背景是否变黑
    * popUpWidth      	指定弹窗宽度，定位使用
    * popUpHeight      	指定弹窗高度，定位使用
    * effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    function addPopUp(panel, dark, popUpWidth, popUpHeight, effectType, isAlert) {
        if (dark === void 0) { dark = false; }
        if (popUpWidth === void 0) { popUpWidth = 0; }
        if (popUpHeight === void 0) { popUpHeight = 0; }
        if (effectType === void 0) { effectType = 0; }
        if (isAlert === void 0) { isAlert = false; }
        if (GameLayerManager.gameLayer().panelLayer.contains(panel)) {
            return;
        }
        panel.scaleX = 1;
        panel.scaleY = 1;
        panel.x = 0;
        panel.y = 0;
        panel.alpha = 1;
        if (dark) {
            this.darkSprite = new egret.Sprite();
            this.darkSprite.graphics.clear();
            this.darkSprite.graphics.beginFill(0x000000, 0.3);
            this.darkSprite.graphics.drawRect(0, 0, GameConfig.curWidth(), GameConfig.curHeight());
            this.darkSprite.graphics.endFill();
            this.darkSprite.width = GameConfig.curWidth();
            this.darkSprite.height = GameConfig.curHeight();
            if (!GameLayerManager.gameLayer().panelLayer.contains(this.darkSprite)) {
                GameLayerManager.gameLayer().panelLayer.addChild(this.darkSprite);
            }
            this.darkSprite.touchEnabled = true;
            egret.Tween.get(this.darkSprite).to({ alpha: 1 }, 150);
            this.darkSprite.visible = true;
        }
        GameLayerManager.gameLayer().panelLayer.addChild(panel);
        GameConfig.curPanel = panel;
        if (popUpWidth != 0) {
            panel.x = GameConfig.curWidth() / 2 - popUpWidth / 2;
            panel.y = GameConfig.curHeight() / 2 - popUpHeight / 2;
        }
        else {
            popUpWidth = panel.width;
            popUpHeight = panel.height;
        }
        //以下是弹窗动画
        var leftX = GameConfig.curWidth() / 2 - popUpWidth / 2;
        var upY = GameConfig.curHeight() / 2 - popUpHeight / 2;
        switch (effectType) {
            case 0:
                break;
            case 1:
                panel.alpha = 0;
                panel.scaleX = 0.5;
                panel.scaleY = 0.5;
                panel.x = panel.x + popUpWidth / 4;
                panel.y = panel.y + popUpHeight / 4;
                egret.Tween.get(panel).to({ alpha: 1, scaleX: 1, scaleY: 1, x: panel.x - popUpWidth / 4, y: panel.y - popUpHeight / 4 }, 300, egret.Ease.backOut);
                break;
            case 2:
                panel.alpha = 0;
                panel.scaleX = 0.5;
                panel.scaleY = 0.5;
                panel.x = panel.x + popUpWidth / 4;
                panel.y = panel.y + popUpHeight / 4;
                egret.Tween.get(panel).to({ alpha: 1, scaleX: 1, scaleY: 1, x: panel.x - popUpWidth / 4, y: panel.y - popUpHeight / 4 }, 600, egret.Ease.elasticOut);
                break;
            case 3:
                if (isAlert) {
                    panel.x = -popUpWidth;
                    egret.Tween.get(panel).to({ x: leftX }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.x = -popUpWidth;
                    egret.Tween.get(panel).to({ x: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            case 4:
                if (isAlert) {
                    panel.x = popUpWidth;
                    egret.Tween.get(panel).to({ x: leftX }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.x = popUpWidth;
                    egret.Tween.get(panel).to({ x: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            case 5:
                if (isAlert) {
                    panel.y = -popUpHeight;
                    egret.Tween.get(panel).to({ y: upY }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.y = -popUpHeight;
                    egret.Tween.get(panel).to({ y: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            case 6:
                if (isAlert) {
                    panel.y = GameConfig.curHeight();
                    egret.Tween.get(panel).to({ y: upY }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.y = popUpHeight;
                    egret.Tween.get(panel).to({ y: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            default:
                break;
        }
    }
    PopUpManager.addPopUp = addPopUp;
    /**
    * 移除面板方法
    * panel       		面板
    * effectType        0：没有动画 1:从中间缩小消失 2：  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    function removePopUp(panel, effectType) {
        if (effectType === void 0) { effectType = 0; }
        var onComplete = function () {
            if (GameLayerManager.gameLayer().panelLayer.contains(this.darkSprite)) {
                GameLayerManager.gameLayer().panelLayer.removeChild(this.darkSprite);
            }
        };
        if (this.darkSprite) {
            egret.Tween.get(this.darkSprite).to({ alpha: 0 }, 100).call(onComplete, this);
        }
        //以下是弹窗动画
        switch (effectType) {
            case 0:
                break;
            case 1:
                egret.Tween.get(panel).to({ alpha: 0, scaleX: 0, scaleY: 0, x: panel.x + panel.width / 2, y: panel.y + panel.height / 2 }, 300);
                break;
            case 2:
                break;
            case 3:
                egret.Tween.get(panel).to({ x: panel.width }, 500, egret.Ease.cubicOut);
                break;
            case 4:
                egret.Tween.get(panel).to({ x: -panel.width }, 500, egret.Ease.cubicOut);
                break;
            case 5:
                egret.Tween.get(panel).to({ y: panel.height }, 500, egret.Ease.cubicOut);
                break;
            case 6:
                egret.Tween.get(panel).to({ y: -panel.height }, 500, egret.Ease.cubicOut);
                break;
            default:
                break;
        }
        var waitTime = 500;
        if (effectType == 0) {
            waitTime = 0;
        }
        egret.setTimeout(function () {
            if (GameLayerManager.gameLayer().panelLayer.contains(panel)) {
                GameLayerManager.gameLayer().panelLayer.removeChild(panel);
            }
        }, this, waitTime);
    }
    PopUpManager.removePopUp = removePopUp;
})(PopUpManager || (PopUpManager = {}));
/**
  * 背包面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var BackpackMediator = (function (_super) {
        __extends(BackpackMediator, _super);
        function BackpackMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, BackpackMediator.NAME, viewComponent) || this;
            _this.backpackPanel = new game.BackpackPanel();
            return _this;
        }
        BackpackMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_BACKPACK,
                PanelNotify.CLOSE_BACKPACK
            ];
        };
        BackpackMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_BACKPACK: {
                    //显示角色面板
                    this.showUI(this.backpackPanel, false, 0, 0, 1);
                    break;
                }
                case PanelNotify.CLOSE_BACKPACK: {
                    this.closePanel(1);
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        BackpackMediator.prototype.initUI = function () {
            this.backpackPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            // this.backpackPanel.readProxy.addEventListener(egret.TouchEvent.TOUCH_TAP,this.readProxyButtonClick,this);
            // this.backpackPanel.saveProxy.addEventListener(egret.TouchEvent.TOUCH_TAP,this.saveProxyButtonClick,this);
        };
        /**
         * 初始化面板数据
         */
        BackpackMediator.prototype.initData = function () {
            this.backpackPanel.initListData(1);
        };
        BackpackMediator.prototype.saveProxyButtonClick = function (event) {
            // P.getGameDataProxy().setGameName(this.backpackPanel.input1.text);
            // this.backpackPanel.showText.text += "保存成功...\n" + P.getGameDataProxy().getGameName() + "\n";
        };
        BackpackMediator.prototype.readProxyButtonClick = function (event) {
            // this.backpackPanel.showText.text += P.getGameDataProxy().getGameName() + "\n";
        };
        BackpackMediator.prototype.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        BackpackMediator.NAME = "BackpackMediator";
        return BackpackMediator;
    }(BaseMediator));
    game.BackpackMediator = BackpackMediator;
    __reflect(BackpackMediator.prototype, "game.BackpackMediator");
})(game || (game = {}));
var game;
(function (game) {
    var BattleFinishMediator = (function (_super) {
        __extends(BattleFinishMediator, _super);
        function BattleFinishMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, BattleFinishMediator.NAME, viewComponent) || this;
            _this.backpackPanel = new game.BattleFinishPanel();
            return _this;
        }
        BattleFinishMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_BattleFinish,
                PanelNotify.CLOSE_BattleFinish
            ];
        };
        BattleFinishMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_BattleFinish: {
                    //显示角色面板
                    this.showUI(this.backpackPanel, false, 0, 0, 1);
                    break;
                }
                case PanelNotify.CLOSE_BattleFinish: {
                    this.closePanel(1);
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        BattleFinishMediator.prototype.initUI = function () {
            this.backpackPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
        };
        /**
         * 初始化面板数据
         */
        BattleFinishMediator.prototype.initData = function () {
        };
        BattleFinishMediator.prototype.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        BattleFinishMediator.NAME = "BattleFinishMediator";
        return BattleFinishMediator;
    }(BaseMediator));
    game.BattleFinishMediator = BattleFinishMediator;
    __reflect(BattleFinishMediator.prototype, "game.BattleFinishMediator");
})(game || (game = {}));
/**
  * 背包面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var ChuangDangMediator = (function (_super) {
        __extends(ChuangDangMediator, _super);
        function ChuangDangMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, ChuangDangMediator.NAME, viewComponent) || this;
            _this.chuangDangPanel = new game.ChuangDangPanel();
            return _this;
        }
        ChuangDangMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_CHUANGDANG,
                PanelNotify.CLOSE_CHUANGDANG
            ];
        };
        ChuangDangMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_CHUANGDANG: {
                    //显示角色面板
                    this.showUI(this.chuangDangPanel, false, 0, 0, Number(this.chuangDangPanel.input1.text));
                    break;
                }
                case PanelNotify.CLOSE_CHUANGDANG: {
                    this.closePanel(1);
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        ChuangDangMediator.prototype.initUI = function () {
            this.chuangDangPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            this.chuangDangPanel.readExcel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.readExcelButtonClick, this);
        };
        /**
         * 初始化面板数据
         */
        ChuangDangMediator.prototype.initData = function () {
        };
        ChuangDangMediator.prototype.readExcelButtonClick = function (event) {
            egret.setTimeout(function () {
                this.sendNotification(PanelNotify.OPEN_CHUANGDANG);
            }, this, 100);
            this.closePanel(0);
        };
        ChuangDangMediator.prototype.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        ChuangDangMediator.NAME = "ChuangDangMediator";
        return ChuangDangMediator;
    }(BaseMediator));
    game.ChuangDangMediator = ChuangDangMediator;
    __reflect(ChuangDangMediator.prototype, "game.ChuangDangMediator");
})(game || (game = {}));
/**
  * 背包面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var MapMediator = (function (_super) {
        __extends(MapMediator, _super);
        function MapMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, MapMediator.NAME, viewComponent) || this;
            _this.mapPanel = new game.MapPanel();
            return _this;
        }
        MapMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_MAP,
                PanelNotify.CLOSE_MAP
            ];
        };
        MapMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_MAP: {
                    //显示角色面板
                    this.showUI(this.mapPanel, false, 0, 0, 5);
                    break;
                }
                case PanelNotify.CLOSE_MAP: {
                    this.closePanel(1);
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        MapMediator.prototype.initUI = function () {
            this.mapPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            this.mapPanel.initListData(1);
            //            this.mapPanel.readExcel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.readExcelButtonClick,this);
            // this.mapPanel.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn1Click,this);
            // this.mapPanel.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn2Click,this);
            // this.mapPanel.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn3Click,this);
            // this.mapPanel.btn4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn4Click,this);
            // this.mapPanel.btn5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn5Click,this);
            // this.mapPanel.btn6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn6Click,this);
            // TipsManager.addTips(this.mapPanel.img1,"没有动画tips！",0);
            // TipsManager.addTips(this.mapPanel.img2,"从下到上渐现",1);
            // TipsManager.addTips(this.mapPanel.img3,"从左向右",2);
            // TipsManager.addTips(this.mapPanel.img4,"从右向左",3);  
        };
        MapMediator.prototype.btn1Click = function (event) {
            EffectUtils.showTips("从下到上弹出", 1);
        };
        MapMediator.prototype.btn2Click = function (event) {
            EffectUtils.showTips("从左至右弹出", 2);
        };
        MapMediator.prototype.btn3Click = function (event) {
            EffectUtils.showTips("从右至左弹出", 3);
        };
        MapMediator.prototype.btn4Click = function (event) {
            EffectUtils.showTips("从中间弹出渐渐消失", 4);
        };
        MapMediator.prototype.btn5Click = function (event) {
            EffectUtils.showTips("从大变小", 5);
        };
        MapMediator.prototype.btn6Click = function (event) {
            EffectUtils.showTips("警告字体颜色", 5, 24, true);
        };
        /**
         * 初始化面板数据
         */
        MapMediator.prototype.initData = function () {
        };
        MapMediator.prototype.readExcelButtonClick = function (event) {
        };
        MapMediator.prototype.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        MapMediator.NAME = "MapMediator";
        return MapMediator;
    }(BaseMediator));
    game.MapMediator = MapMediator;
    __reflect(MapMediator.prototype, "game.MapMediator");
})(game || (game = {}));
/**
  * 背包面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var QianghuaMediator = (function (_super) {
        __extends(QianghuaMediator, _super);
        function QianghuaMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, QianghuaMediator.NAME, viewComponent) || this;
            _this.qinghuaPanel = new game.QianghuaPanel();
            return _this;
        }
        QianghuaMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_QIANGHUA,
                PanelNotify.CLOSE_QIANGHUA,
                SysNotify.CONNECT_SERVER_SUCCESS,
                UserInfoNotify.UPDATE_DATA
            ];
        };
        QianghuaMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_QIANGHUA: {
                    //显示角色面板
                    this.showUI(this.qinghuaPanel, false, 0, 0, 3);
                    break;
                }
                case PanelNotify.CLOSE_QIANGHUA: {
                    this.closePanel(1);
                    break;
                }
                case SysNotify.CONNECT_SERVER_SUCCESS: {
                    this.qinghuaPanel.showText.text += "服务器连接成功...\n";
                    break;
                }
                case UserInfoNotify.UPDATE_DATA: {
                    this.qinghuaPanel.showText.text += "userId:" + data.getUserId() + "\nuserName:" + data.getUserName();
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        QianghuaMediator.prototype.initUI = function () {
            this.qinghuaPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            // this.qinghuaPanel.connectServer.addEventListener(egret.TouchEvent.TOUCH_TAP,this.connectServerButtonClick,this);
            // this.qinghuaPanel.sendMsg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sendMsgButtonClick,this);
            // this.qinghuaPanel.groupMap.x=0;
            // this.qinghuaPanel.groupMap.y = 0;
        };
        /**
         * 初始化面板数据
         */
        QianghuaMediator.prototype.initData = function () {
            //加载副本关卡数据
        };
        QianghuaMediator.prototype.connectServerButtonClick = function (event) {
            SocketManager.connectServer("echo.websocket.org", 80);
        };
        QianghuaMediator.prototype.sendMsgButtonClick = function (event) {
            UserInfoRequest.sendUserInfo(Number(this.qinghuaPanel.input1.text), this.qinghuaPanel.input2.text);
        };
        QianghuaMediator.prototype.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        QianghuaMediator.NAME = "QianghuaMediator";
        return QianghuaMediator;
    }(BaseMediator));
    game.QianghuaMediator = QianghuaMediator;
    __reflect(QianghuaMediator.prototype, "game.QianghuaMediator");
})(game || (game = {}));
/**
  * 人物角色面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var RoleMediator = (function (_super) {
        __extends(RoleMediator, _super);
        function RoleMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, RoleMediator.NAME, viewComponent) || this;
            _this.rolePanel = new game.RolePanel();
            return _this;
        }
        RoleMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_ROLE,
                PanelNotify.CLOSE_ROLE
            ];
        };
        RoleMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_ROLE: {
                    //显示角色面板
                    this.showUI(this.rolePanel, false, 0, 0, 4);
                    break;
                }
                case PanelNotify.CLOSE_ROLE: {
                    this.closePanel(1);
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        RoleMediator.prototype.initUI = function () {
            this.rolePanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            // this.rolePanel.readExcel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.readExcelButtonClick,this);
        };
        /**
         * 初始化面板数据
         */
        RoleMediator.prototype.initData = function () {
            this.rolePanel.initData();
        };
        RoleMediator.prototype.readExcelButtonClick = function (event) {
            //下面是测试excel读取
            // var dataProxy = P.getTemplateDataProxy().getGameData();
            // this.rolePanel.showText.text += 
            // dataProxy[this.rolePanel.input1.text][this.rolePanel.input2.text] + "\n";
        };
        RoleMediator.prototype.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        RoleMediator.NAME = "RoleMediator";
        return RoleMediator;
    }(BaseMediator));
    game.RoleMediator = RoleMediator;
    __reflect(RoleMediator.prototype, "game.RoleMediator");
})(game || (game = {}));
/**
  * 背包面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var ShopMediator = (function (_super) {
        __extends(ShopMediator, _super);
        function ShopMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, ShopMediator.NAME, viewComponent) || this;
            _this.shopPanel = new game.ShopPanel();
            _this.isPlay1 = false;
            _this.isPlay2 = false;
            _this.isPlay3 = false;
            _this.isPlay4 = false;
            _this.isPlay5 = false;
            _this.isPlay6 = false;
            _this.isPlay7 = false;
            _this.isPlay8 = false;
            _this.isPlay9 = false;
            _this.isPlay10 = false;
            return _this;
        }
        ShopMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_SHOP,
                PanelNotify.CLOSE_SHOP
            ];
        };
        ShopMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_SHOP: {
                    //显示角色面板
                    this.showUI(this.shopPanel, false, 0, 0, 6);
                    break;
                }
                case PanelNotify.CLOSE_SHOP: {
                    this.closePanel(1);
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        ShopMediator.prototype.initUI = function () {
            this.shopPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            this.shopPanel.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn1Click, this);
            this.shopPanel.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn2Click, this);
            this.shopPanel.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn3Click, this);
            this.shopPanel.btn4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn4Click, this);
            this.shopPanel.btn5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn5Click, this);
            this.shopPanel.btn6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn6Click, this);
            this.shopPanel.btn7.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn7Click, this);
            this.shopPanel.btn8.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn8Click, this);
            this.shopPanel.btn9.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn9Click, this);
            this.shopPanel.btn10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn10Click, this);
        };
        /**
         * 初始化面板数据
         */
        ShopMediator.prototype.initData = function () {
        };
        ShopMediator.prototype.btn1Click = function (event) {
            if (!this.isPlay1) {
                EffectUtils.showTips("旋转特效", 5);
                EffectUtils.rotationEffect(this.shopPanel.img1, 1000);
                this.isPlay1 = true;
            }
            else {
                EffectUtils.showTips("取消旋转特效", 5);
                EffectUtils.removeRotationEffect(this.shopPanel.img1);
                this.isPlay1 = false;
            }
        };
        ShopMediator.prototype.btn2Click = function (event) {
            if (!this.isPlay2) {
                EffectUtils.showTips("中心旋转特效", 5);
                EffectUtils.rotationEffect(this.shopPanel.img2, 1000);
                this.isPlay2 = true;
            }
            else {
                EffectUtils.showTips("取消中心旋转特效", 5);
                EffectUtils.removeRotationEffect(this.shopPanel.img2);
                this.isPlay2 = false;
            }
        };
        ShopMediator.prototype.btn3Click = function (event) {
            EffectUtils.showTips("闪烁特效", 5);
            EffectUtils.blinkEffect(this.shopPanel.img3, 1000);
        };
        ShopMediator.prototype.btn4Click = function (event) {
            EffectUtils.showTips("抖动特效", 5);
            EffectUtils.shakeObj(this.shopPanel.img4);
        };
        ShopMediator.prototype.btn5Click = function (event) {
            EffectUtils.showTips("按下弹大", 5);
            EffectUtils.playEffect(this.shopPanel.img5, 1);
        };
        ShopMediator.prototype.btn6Click = function (event) {
            EffectUtils.showTips("按下轻微弹大", 5);
            EffectUtils.playEffect(this.shopPanel.img6, 2);
        };
        ShopMediator.prototype.btn7Click = function (event) {
            EffectUtils.showTips("按下变小放开变大", 5);
            EffectUtils.playEffect(this.shopPanel.img7, 3);
        };
        ShopMediator.prototype.btn8Click = function (event) {
            if (!this.isPlay8) {
                this.isPlay8 = true;
                EffectUtils.showTips("持续变大变小", 5);
                EffectUtils.playScaleEffect(this.shopPanel.img8);
            }
            else {
                EffectUtils.showTips("正在持续变大变小呢！", 5);
            }
        };
        ShopMediator.prototype.btn9Click = function (event) {
            if (!this.isPlay9) {
                this.isPlay9 = true;
                EffectUtils.showTips("上下浮动特效", 5);
                EffectUtils.flyObj(this.shopPanel.img9, 1000, 15);
            }
            else {
                EffectUtils.showTips("正在上下浮动呢！", 5);
            }
        };
        ShopMediator.prototype.btn10Click = function (event) {
            if (!this.isPlay10) {
                this.isPlay10 = true;
                EffectUtils.showTips("摇头特效", 5);
                EffectUtils.rockObj(this.shopPanel.img10, 500);
            }
            else {
                EffectUtils.showTips("正在摇头呢！", 5);
            }
        };
        ShopMediator.prototype.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        ShopMediator.NAME = "ShopMediator";
        return ShopMediator;
    }(BaseMediator));
    game.ShopMediator = ShopMediator;
    __reflect(ShopMediator.prototype, "game.ShopMediator");
})(game || (game = {}));
/**
  * 背包面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var ZhaoXianMediator = (function (_super) {
        __extends(ZhaoXianMediator, _super);
        function ZhaoXianMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, ZhaoXianMediator.NAME, viewComponent) || this;
            _this.zhaoXianPanel = new game.ZhaoXianPanel();
            return _this;
        }
        ZhaoXianMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_ZHAOXIAN,
                PanelNotify.CLOSE_ZHAOXIAN
            ];
        };
        ZhaoXianMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_ZHAOXIAN: {
                    //显示角色面板
                    this.showUI(this.zhaoXianPanel, false, 0, 0, 5);
                    break;
                }
                case PanelNotify.CLOSE_ZHAOXIAN: {
                    this.closePanel(1);
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        ZhaoXianMediator.prototype.initUI = function () {
            this.zhaoXianPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            this.menuBtn = new EButton(this, "yellowBtn_png", this.onMenuBtnTouchTap, "按钮特效1", 30, 1, null);
            this.menuBtn.x = -300;
            this.menuBtn.y = 300;
            this.zhaoXianPanel.addChild(this.menuBtn);
            this.setBtn = new EButton(this, "yellowBtn_png", this.onSetBtnTouchTap, "按钮特效12", 30, 2, null);
            this.setBtn.x = -300;
            this.setBtn.y = 400;
            this.zhaoXianPanel.addChild(this.setBtn);
            this.buttonBtn = new EButton(this, "yellowBtn_png", this.onButtonBtnTouchTap, "按钮特效3", 30, 3, null);
            this.buttonBtn.x = -300;
            this.buttonBtn.y = 500;
            this.zhaoXianPanel.addChild(this.buttonBtn);
            this.initEffect();
        };
        ZhaoXianMediator.prototype.initEffect = function () {
            egret.setTimeout(function () {
                egret.Tween.get(this.menuBtn).to({ x: this.w / 2 - this.menuBtn.width / 2 }, 600, egret.Ease.backOut);
            }, this, 150 * 1);
            egret.setTimeout(function () {
                egret.Tween.get(this.setBtn).to({ x: this.w / 2 - this.setBtn.width / 2 }, 600, egret.Ease.backOut);
            }, this, 150 * 2);
            egret.setTimeout(function () {
                egret.Tween.get(this.buttonBtn).to({ x: this.w / 2 - this.buttonBtn.width / 2 }, 600, egret.Ease.backOut);
            }, this, 150 * 3);
        };
        ZhaoXianMediator.prototype.onMenuBtnTouchTap = function (event) {
        };
        ZhaoXianMediator.prototype.onSetBtnTouchTap = function (event) {
        };
        ZhaoXianMediator.prototype.onButtonBtnTouchTap = function (event) {
        };
        /**
         * 初始化面板数据
         */
        ZhaoXianMediator.prototype.initData = function () {
        };
        ZhaoXianMediator.prototype.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        ZhaoXianMediator.NAME = "ZhaoXianMediator";
        return ZhaoXianMediator;
    }(BaseMediator));
    game.ZhaoXianMediator = ZhaoXianMediator;
    __reflect(ZhaoXianMediator.prototype, "game.ZhaoXianMediator");
})(game || (game = {}));
/**
 *
 */
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
var game;
(function (game) {
    var BattleFinishPanel = (function (_super) {
        __extends(BattleFinishPanel, _super);
        function BattleFinishPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/eui_skins/panel/BattleFinishPanel.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        BattleFinishPanel.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        BattleFinishPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        BattleFinishPanel.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        return BattleFinishPanel;
    }(eui.Component));
    game.BattleFinishPanel = BattleFinishPanel;
    __reflect(BattleFinishPanel.prototype, "game.BattleFinishPanel");
})(game || (game = {}));
/**
 *
 */
var game;
(function (game) {
    var ChuangDangPanel = (function (_super) {
        __extends(ChuangDangPanel, _super);
        function ChuangDangPanel() {
            var _this = _super.call(this) || this;
            // this.skinName = "src/core/view/panel/ui/ChuangDangSkin.exml";
            _this.skinName = "resource/eui_skins/Panel_ChuangDangSkin.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        ChuangDangPanel.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        ChuangDangPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return ChuangDangPanel;
    }(eui.Component));
    game.ChuangDangPanel = ChuangDangPanel;
    __reflect(ChuangDangPanel.prototype, "game.ChuangDangPanel");
})(game || (game = {}));
/**
 *
 */
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
/**
 *
 */
var game;
(function (game) {
    var QianghuaPanel = (function (_super) {
        __extends(QianghuaPanel, _super);
        function QianghuaPanel() {
            var _this = _super.call(this) || this;
            // this.skinName = "src/core/view/panel/ui/QianghuaSkin.exml";
            _this.skinName = "resource/eui_skins/Panel_QianghuaSkin.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            _this.groupMap.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onMove, _this);
            _this.groupMap.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onMoveBegin, _this);
            _this.groupMap.addEventListener(egret.TouchEvent.TOUCH_END, _this.onMoveEnd, _this);
            return _this;
        }
        QianghuaPanel.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        QianghuaPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        QianghuaPanel.prototype.onMove = function (e) {
            var oldy = this.groupMap.height - this.stage.stageHeight;
            //判断边界
            if (e.stageY - this.currentPointY > 0) {
                if (this.groupMap.y >= 0) {
                    this.groupMap.y = 0;
                    return;
                }
            }
            else {
                if (this.groupMap.y <= -oldy) {
                    this.groupMap.y = -oldy;
                    return;
                }
            }
            this.groupMap.y += e.stageY - this.currentPointY;
            this.currentPointY = e.stageY;
            console.log("move");
        };
        QianghuaPanel.prototype.onMoveBegin = function (e) {
            this.currentPointY = e.$stageY;
            console.log("begin");
        };
        QianghuaPanel.prototype.onMoveEnd = function (e) {
            this.currentPointY = 0;
            console.log("end");
        };
        return QianghuaPanel;
    }(eui.Component));
    game.QianghuaPanel = QianghuaPanel;
    __reflect(QianghuaPanel.prototype, "game.QianghuaPanel");
})(game || (game = {}));
/**
 *
 */
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
/**
 *
 */
var game;
(function (game) {
    var ShopPanel = (function (_super) {
        __extends(ShopPanel, _super);
        function ShopPanel() {
            var _this = _super.call(this) || this;
            // this.skinName = "src/core/view/panel/ui/ShopSkin.exml";
            _this.skinName = "resource/eui_skins/Panel_ShopSkin.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        ShopPanel.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        ShopPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return ShopPanel;
    }(eui.Component));
    game.ShopPanel = ShopPanel;
    __reflect(ShopPanel.prototype, "game.ShopPanel");
})(game || (game = {}));
/**
 *
 */
var game;
(function (game) {
    var ZhaoXianPanel = (function (_super) {
        __extends(ZhaoXianPanel, _super);
        function ZhaoXianPanel() {
            var _this = _super.call(this) || this;
            // this.skinName = "src/core/view/panel/ui/ZhaoXianSkin.exml";
            _this.skinName = "resource/eui_skins/Panel_ZhaoXianSkin.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        ZhaoXianPanel.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        ZhaoXianPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return ZhaoXianPanel;
    }(eui.Component));
    game.ZhaoXianPanel = ZhaoXianPanel;
    __reflect(ZhaoXianPanel.prototype, "game.ZhaoXianPanel");
})(game || (game = {}));
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
/**
 * 主城
 */
/**
 *
 */
var game;
(function (game) {
    var HomeCity = (function (_super) {
        __extends(HomeCity, _super);
        function HomeCity() {
            var _this = _super.call(this) || this;
            // this.skinName = "src/core/view/scene/HomeCitySkin.exml";
            _this.skinName = "resource/eui_skins/HomeCitySkin.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        HomeCity.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
            GameLayerManager.gameLayer().sceneLayer.addChild(this);
        };
        //        public closeBtn: eui.Button;
        // public settingButton:egret.gui.Button;
        // public levelButton:IconButton;
        HomeCity.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return HomeCity;
    }(eui.Component));
    game.HomeCity = HomeCity;
    __reflect(HomeCity.prototype, "game.HomeCity");
})(game || (game = {}));
var game;
(function (game) {
    var MessageController = (function () {
        function MessageController() {
        }
        MessageController.getInstance = function () {
            if (this.instance == null) {
                this.instance = new MessageController();
            }
            return this.instance;
        };
        MessageController.prototype.fireMessage = function (msgid, data) {
            switch (msgid) {
                case 0:
                    new game.Processor_100().executeData(data);
                    break;
                case 101:
                    console.log("101");
                    break;
            }
        };
        return MessageController;
    }());
    game.MessageController = MessageController;
    __reflect(MessageController.prototype, "game.MessageController");
})(game || (game = {}));
/**
 * 网络公共类
 * by dily
 * (c) copyright 2014 - 2035
 * All Rights Reserved.
 * 存放网络公共方法
 * 注意：是同步请求，不是异步
 */
var SocketManager;
(function (SocketManager) {
    var sock = new egret.WebSocket();
    //连接服务器
    function connectServer(host, port) {
        if (host === void 0) { host = ""; }
        if (port === void 0) { port = 80; }
        Global.showWaritPanel();
        this.sock = new egret.WebSocket();
        this.sock.type = "webSocketTypeBinary";
        this.sock.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.sock.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.sock.connect(host, port);
    }
    SocketManager.connectServer = connectServer;
    //连接成功返回
    function onSocketOpen() {
        Global.hideWaritPanel();
        game.AppFacade.getInstance().sendNotification(SysNotify.CONNECT_SERVER_SUCCESS);
    }
    SocketManager.onSocketOpen = onSocketOpen;
    //消息返回  
    function onReceiveMessage() {
        Global.hideWaritPanel();
        var _arr = new egret.ByteArray();
        this.sock.readBytes(_arr);
        var msg_length = _arr.readShort();
        var mainId = _arr.readShort();
        //var subId = _arr.readShort();
        var subId = 1;
        var cmdDataBA = new egret.ByteArray();
        _arr.readBytes(cmdDataBA);
        game.MessageController.getInstance().fireMessage(mainId, cmdDataBA);
        // //        //初始化template_proto
        //        var message = dcodeIO.ProtoBuf.loadProto(RES.getRes("template_proto"));
        // //            
        //        //创建user_login_class
        //        var user_login_class = message.build("LoginResp");
        //        //反序列化
        //        var new_user_login = user_login_class.decode(cmdDataBA.buffer);
        //        console.log("反序列化数据：",new_user_login);  
        // game.AppFacade.getInstance().sendNotification("Processor_" + mainId ,cmdDataBA);
    }
    SocketManager.onReceiveMessage = onReceiveMessage;
    //向服务端发送消息
    function sendMessage(mainId, subId, msg) {
        Global.showWaritPanel();
        var bodyMsg = new egret.ByteArray();
        bodyMsg.writeShort(mainId);
        //bodyMsg.writeShort(subId);
        bodyMsg.writeBytes(new egret.ByteArray(msg));
        var sendMsg = new egret.ByteArray();
        sendMsg.writeInt(bodyMsg.length + 4);
        sendMsg.writeBytes(new egret.ByteArray(bodyMsg.bytes));
        // console.log("反序列化数据："+sendMsg.length);  
        this.sock.writeBytes(sendMsg);
        this.sock.flush();
    }
    SocketManager.sendMessage = sendMessage;
})(SocketManager || (SocketManager = {}));
/**
 * 根据系统时间的计时器
 * @author chenkai
 * 2016/12/30
 * Example:
 * var dateTimer:DateTimer = new DateTimer(1000);
 * dateTimer.addEventListeners(egret.TimerEvent.TIMER, this.onTimerHandler, this);
 * dateTimer.addEventListeners(egret.TimerEvent.TIMER_COMPLETE, this.onTimerComplete, this);
 * dateTimer.reset();
 * dateTimer.start();
 */
var DateTimer = (function (_super) {
    __extends(DateTimer, _super);
    function DateTimer(delay, repeatCount) {
        if (repeatCount === void 0) { repeatCount = 0; }
        var _this = _super.call(this) || this;
        _this.delay = delay;
        _this.repeatCount = repeatCount;
        return _this;
    }
    /**开始计时 */
    DateTimer.prototype.start = function () {
        this.previous = egret.getTimer();
        this.accTime = 0;
        egret.startTick(this.update, this);
    };
    /**重置计时 */
    DateTimer.prototype.reset = function () {
        this.previous = egret.getTimer();
        this.accTime = 0;
        this.currentCount = 0;
    };
    /**停止计时 */
    DateTimer.prototype.stop = function () {
        egret.stopTick(this.update, this);
    };
    /**更新时间 */
    DateTimer.prototype.update = function () {
        this.curTime = egret.getTimer();
        this.passTime = this.curTime - this.previous;
        this.previous = this.curTime;
        this.accTime += this.passTime;
        while (this.accTime >= this.delay) {
            this.accTime -= this.delay;
            this.currentCount++;
            if (this.repeatCount > 0 && (this.currentCount == this.repeatCount)) {
                this.dispatchEvent(new egret.TimerEvent(egret.TimerEvent.TIMER_COMPLETE));
                this.stop();
            }
            this.dispatchEvent(new egret.TimerEvent(egret.TimerEvent.TIMER));
        }
        return false;
    };
    return DateTimer;
}(egret.EventDispatcher));
__reflect(DateTimer.prototype, "DateTimer");
/**
  * 游戏特效汇总
  * by zhaoxin
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 使用方法如：EffectUtils.rotationEffect()
  */
var EffectUtils;
(function (EffectUtils) {
    // 存储旋转对象
    var rotationArr = [];
    //对象旋转特效
    //obj   旋转对象
    //time  旋转一周用时，毫秒
    function rotationEffect(obj, time) {
        if (time === void 0) { time = 1000; }
        if (this.rotationArr == null) {
            this.rotationArr = [];
        }
        if (this.rotationArr[obj.hashCode]) {
            return;
        }
        if ((this.rotationArr[obj.hashCode] == null) || !this.rotationArr[obj.hashCode]) {
            this.rotationArr[obj.hashCode] = true;
        }
        var onComplete1 = function () {
            if (this.rotationArr[obj.hashCode] && (obj != null)) {
                obj.rotation = 0;
                egret.Tween.get(obj).to({ rotation: 360 }, time).call(onComplete1, this);
            }
        };
        obj.rotation = 0;
        egret.Tween.get(obj).to({ rotation: 360 }, time).call(onComplete1, this);
    }
    EffectUtils.rotationEffect = rotationEffect;
    //取消对象旋转
    //obj    旋转对象
    function removeRotationEffect(obj) {
        if (this.rotationArr == null) {
            this.rotationArr = [];
        }
        this.rotationArr[obj.hashCode] = false;
    }
    EffectUtils.removeRotationEffect = removeRotationEffect;
    //对象闪烁特效
    //obj         闪烁对象
    //interval    闪烁总工时间
    function blinkEffect(obj, interval) {
        if (interval === void 0) { interval = 1000; }
        new BitmapBlink(obj, interval);
    }
    EffectUtils.blinkEffect = blinkEffect;
    //抖动对象特效
    //类似ios密码输入错误的特效
    function shakeObj(obj) {
        var shakeNum = 80;
        var oldX = obj.x;
        egret.Tween.get(obj).to({ x: obj.x - 10 }, shakeNum);
        egret.setTimeout(function () {
            egret.Tween.get(obj).to({ x: obj.x + 20 }, shakeNum);
        }, this, shakeNum * 2);
        egret.setTimeout(function () {
            egret.Tween.get(obj).to({ x: obj.x - 20 }, shakeNum);
        }, this, shakeNum * 3);
        egret.setTimeout(function () {
            egret.Tween.get(obj).to({ x: obj.x + 20 }, shakeNum);
        }, this, shakeNum * 4);
        egret.setTimeout(function () {
            egret.Tween.get(obj).to({ x: oldX }, shakeNum);
        }, this, shakeNum * 5);
    }
    EffectUtils.shakeObj = shakeObj;
    //抖动对象特效
    // 1：抖动  2：震动
    function shakeScreen(effectType) {
        if (effectType === void 0) { effectType = 1; }
        var panel = GameConfig.curPanel;
        var shakeNum = 40;
        var oldX = panel.x;
        var oldY = panel.y;
        if (effectType == 1) {
            egret.Tween.get(panel).to({ x: panel.x - 10 }, shakeNum);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x + 20 }, shakeNum);
            }, this, shakeNum * 2);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x - 20 }, shakeNum);
            }, this, shakeNum * 3);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x + 20 }, shakeNum);
            }, this, shakeNum * 4);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: oldX }, shakeNum);
            }, this, shakeNum * 5);
        }
        else {
            egret.Tween.get(panel).to({ x: panel.x - 10, y: panel.y }, shakeNum);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x + 20, y: panel.y }, shakeNum);
            }, this, shakeNum * 2);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x, y: panel.y + 15 }, shakeNum);
            }, this, shakeNum * 3);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x, y: panel.y - 20 }, shakeNum);
            }, this, shakeNum * 4);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: panel.x, y: panel.y + 10 }, shakeNum);
            }, this, shakeNum * 5);
            egret.setTimeout(function () {
                egret.Tween.get(panel).to({ x: oldX, y: oldY }, shakeNum);
            }, this, shakeNum * 6);
        }
    }
    EffectUtils.shakeScreen = shakeScreen;
    /**
    * str             提示内容
    * effectType      动画类型 1：从下到上弹出 2：从左至右弹出 3：从右至左弹出 4：从中间弹出渐渐消失 5：从大变小 等等
    * isWarning       是否是警告，警告是红色
    */
    function showTips(str, effectType, fSize, isWarning, xPoint, yPoint, callback) {
        if (str === void 0) { str = ""; }
        if (effectType === void 0) { effectType = 1; }
        if (fSize === void 0) { fSize = 24; }
        if (isWarning === void 0) { isWarning = false; }
        if (xPoint === void 0) { xPoint = 100; }
        if (yPoint === void 0) { yPoint = 100; }
        switch (effectType) {
            case 1: {
                TipsUtils.showTipsDownToUp(str, isWarning, fSize, xPoint, yPoint);
                break;
            }
            case 2: {
                TipsUtils.showTipsLeftOrRight(str, isWarning, true, fSize, xPoint, yPoint);
                break;
            }
            case 3: {
                TipsUtils.showTipsLeftOrRight(str, isWarning, false, fSize, xPoint, yPoint);
                break;
            }
            case 4: {
                TipsUtils.showTipsFromCenter(str, isWarning, fSize, xPoint, yPoint, callback);
                break;
            }
            case 5: {
                TipsUtils.showTipsBigToSmall(str, isWarning, fSize, xPoint, yPoint);
                break;
            }
            default: {
                // TODO: Implemente default case
            }
        }
    }
    EffectUtils.showTips = showTips;
    //========================== a lot of effect will coming! ============================
    var isPlayEffectPlay = false;
    /**
    * 给显示对象增加特效
    * obj           对象
    * cartoonType   动画类型 1:【可爱】按下变小，放开弹大 2:按下变小，放开轻微弹大 3：按下变小，放开变大
    */
    function playEffect(obj, cartoonType) {
        if (cartoonType === void 0) { cartoonType = 1; }
        if (this.isPlayEffectPlay) {
            return;
        }
        this.isPlayEffectPlay = true;
        var onComplete2 = function () {
            this.isPlayEffectPlay = false;
        };
        var onComplete1 = function () {
            if (cartoonType == 1) {
                egret.Tween.get(obj).to({ scaleX: 1, scaleY: 1, x: obj.x - obj.width / 4, y: obj.y - obj.height / 4 }, 500, egret.Ease.elasticOut).call(onComplete2, this);
            }
            else if (cartoonType == 2) {
                egret.Tween.get(obj).to({ scaleX: 1, scaleY: 1, x: obj.x - obj.width / 4, y: obj.y - obj.height / 4 }, 500, egret.Ease.backOut).call(onComplete2, this);
            }
            else if (cartoonType == 3) {
                egret.Tween.get(obj).to({ scaleX: 1, scaleY: 1, x: obj.x - obj.width / 4, y: obj.y - obj.height / 4 }, 100).call(onComplete2, this);
            }
        };
        egret.Tween.get(obj).to({ scaleX: 0.5, scaleY: 0.5, x: obj.x + obj.width / 4, y: obj.y + obj.height / 4 }, 100, egret.Ease.sineIn).call(onComplete1, this);
    }
    EffectUtils.playEffect = playEffect;
    /**
    * 给显示对象增加持续放大特效
    * obj           对象
    */
    function playScaleEffect(obj) {
        var onComplete1 = function () {
            if (obj != null) {
                var onComplete2 = function () {
                    obj.scaleX = 1;
                    obj.scaleY = 1;
                    egret.Tween.get(obj).to({ alpha: 1 }, 1000).call(onComplete1, self);
                };
                obj.alpha = 1;
                egret.Tween.get(obj).to({ scaleX: 1.5, scaleY: 1.5, alpha: 0 }, 1000).call(onComplete2, self);
            }
        };
        onComplete1();
    }
    EffectUtils.playScaleEffect = playScaleEffect;
    /**
    * 显示对象上线浮动特效
    * obj           对象
    * time          浮动时间 毫秒
    * space         浮动高度
    * todo          多个对象跳动
    */
    function flyObj(obj, time, space) {
        if (space === void 0) { space = 50; }
        var onComplete1 = function () {
            if (obj != null) {
                var onComplete2 = function () {
                    egret.Tween.get(obj).to({ y: obj.y - space }, time).call(onComplete1, this);
                };
                egret.Tween.get(obj).to({ y: obj.y + space }, time).call(onComplete2, this);
            }
        };
        onComplete1();
    }
    EffectUtils.flyObj = flyObj;
    /**
    * 显示对象摇头特效
    * obj           对象
    * time          浮动时间 毫秒
    * space         摇头幅度
    * todo          多个对象摇头
    * 注意：需要将对象的注册点位置：0.5,1
    */
    function rockObj(obj, time, space) {
        if (space === void 0) { space = 20; }
        var onComplete1 = function () {
            if (obj != null) {
                var onComplete2 = function () {
                    egret.Tween.get(obj).to({ rotation: -space }, time).call(onComplete1, this);
                };
                egret.Tween.get(obj).to({ rotation: space }, time).call(onComplete2, this);
            }
        };
        onComplete1();
    }
    EffectUtils.rockObj = rockObj;
    /**
    * 文字打字机效果
    * obj           文本对象
    * content       文字
    * interval      打字间隔 毫秒
    */
    function typerEffect(obj, content, interval) {
        if (content === void 0) { content = ""; }
        if (interval === void 0) { interval = 200; }
        var strArr = content.split("");
        var len = strArr.length;
        for (var i = 0; i < len; i++) {
            egret.setTimeout(function () {
                obj.appendText(strArr[Number(this)]);
            }, i, interval * i);
        }
    }
    EffectUtils.typerEffect = typerEffect;
})(EffectUtils || (EffectUtils = {}));
/**
  * 游戏公用方法汇总
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 使用方法如：Global.setCookie()
  */
var Global;
(function (Global) {
    //显示等待界面
    function showWaritPanel() {
        Global.waitPanel = new WaitPanel(1);
        GameLayerManager.gameLayer().maskLayer.removeChildren();
        GameLayerManager.gameLayer().maskLayer.addChild(Global.waitPanel);
    }
    Global.showWaritPanel = showWaritPanel;
    //移除界面
    function hideWaritPanel() {
        if ((Global.waitPanel != null) && GameLayerManager.gameLayer().maskLayer.contains(Global.waitPanel)) {
            GameLayerManager.gameLayer().maskLayer.removeChild(Global.waitPanel);
        }
    }
    Global.hideWaritPanel = hideWaritPanel;
    //获取html文本
    function getTextFlow(str) {
        var styleParser = new egret.HtmlTextParser();
        return styleParser.parser(str);
    }
    Global.getTextFlow = getTextFlow;
    function getMessage(str) {
        if (Global.message == null) {
            //初始化template_proto
            Global.message = []; //dcodeIO.ProtoBuf.loadProto(RES.getRes("template_proto"));
        }
        return Global.message.build(str);
    }
    Global.getMessage = getMessage;
    //获取大写数字
    function getNumber(num) {
        switch (num) {
            case 0: {
                return "零";
                break;
            }
            case 1: {
                return "一";
                break;
            }
            case 2: {
                return "二";
                break;
            }
            case 3: {
                return "三";
                break;
            }
            case 4: {
                return "四";
                break;
            }
            case 5: {
                return "五";
                break;
            }
            case 6: {
                return "六";
                break;
            }
            case 7: {
                return "七";
                break;
            }
            case 8: {
                return "八";
                break;
            }
            case 9: {
                return "九";
                break;
            }
            default: {
                // TODO: Implemente default case
                console.log("default case");
            }
        }
    }
    Global.getNumber = getNumber;
})(Global || (Global = {}));
/**
  * 调用原生api方法汇总
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 使用方法如：Global.setCookie()
  */
var NativeApi;
(function (NativeApi) {
    // 储存数据需要key和value，都必须是字符串
    function setLocalData(key, value) {
        egret.localStorage.setItem(key, value);
    }
    NativeApi.setLocalData = setLocalData;
    // 读取数据
    function getLocalData(key) {
        return egret.localStorage.getItem(key);
    }
    NativeApi.getLocalData = getLocalData;
    // 删除数据
    function deleteLocalData(key) {
        egret.localStorage.removeItem(key);
    }
    NativeApi.deleteLocalData = deleteLocalData;
    // 将所有数据清空
    function clearLocalData() {
        egret.localStorage.clear();
    }
    NativeApi.clearLocalData = clearLocalData;
    //调用麦克风  
    function getMic() {
        //getUserMedia API 大部分手机不支持，所以暂不考虑
    }
    NativeApi.getMic = getMic;
    //调用canvas截屏
    function getScreen() {
    }
    NativeApi.getScreen = getScreen;
    //调用打电话功能
    function callPhone(telNum) {
        window.open("tel:" + telNum, '_self');
    }
    NativeApi.callPhone = callPhone;
    //调用发短信功能
    function sendMessage(telNum) {
        window.open("sms:" + telNum, '_self');
    }
    NativeApi.sendMessage = sendMessage;
    //获取当前地址
    function getCurUrl() {
        return window.location.href;
    }
    NativeApi.getCurUrl = getCurUrl;
    //当前游戏角度
    //export var curAngle:number = window["orientation"];	
})(NativeApi || (NativeApi = {}));
/**
  * 正则公用方法汇总
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * RegUtils.checkEmail()
  */
var RegUtils;
(function (RegUtils) {
    /*
    用途：检查输入的Email信箱格式是否正确
    输入：strEmail：字符串
    返回：如果通过验证返回true,否则返回false
    */
    function checkEmail(strEmail) {
        //var emailReg = /^[_a-z0-9]+@([_a-z0-9]+\.)+[a-z0-9]{2,3}$/; 
        var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        if (emailReg.test(strEmail)) {
            return true;
        }
        else {
            alert("您输入的Email地址格式不正确！");
            return false;
        }
    }
    RegUtils.checkEmail = checkEmail;
    ;
    /*
    用途：校验ip地址的格式
    输入：strIP：ip地址
    返回：如果通过验证返回true,否则返回false；
    */
    function isIP(strIP) {
        if (isNull(strIP)) {
            return false;
        }
        var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g; //匹配IP地址的正则表达式 
        if (re.test(strIP)) {
            if (Number(RegExp.$1) < 256 && Number(RegExp.$2) < 256 && Number(RegExp.$3) < 256 && Number(RegExp.$4) < 256) {
                return true;
            }
        }
        return false;
    }
    RegUtils.isIP = isIP;
    ;
    /*
    用途：检查输入手机号码是否正确
    输入：strMobile：字符串
    返回：如果通过验证返回true,否则返回false
    */
    function checkMobile(strMobile) {
        var regu = "/^1[3|4|5|7|8][0-9]\d{4,8}$/";
        var re = new RegExp(regu);
        if (re.test(strMobile)) {
            return true;
        }
        else {
            return false;
        }
    }
    RegUtils.checkMobile = checkMobile;
    ;
    /*
    用途：检查输入的电话号码格式是否正确
    输入：strPhone：字符串
    返回：如果通过验证返回true,否则返回false
    */
    function checkPhone(strPhone) {
        var phoneRegWithArea = /^[0][1-9]{2,3}-[0-9]{5,10}$/;
        var phoneRegNoArea = /^[1-9]{1}[0-9]{5,8}$/;
        var prompt = "您输入的电话号码不正确!";
        if (strPhone.length > 9) {
            if (phoneRegWithArea.test(strPhone)) {
                return true;
            }
            else {
                alert(prompt);
                return false;
            }
        }
        else {
            if (phoneRegNoArea.test(strPhone)) {
                return true;
            }
            else {
                alert(prompt);
                return false;
            }
        }
    }
    RegUtils.checkPhone = checkPhone;
    ;
    /*
    用途：检查输入字符串是否为空或者全部都是空格
    输入：str
    返回：如果全是空返回true,否则返回false
    */
    function isNull(str) {
        if (str == "") {
            return true;
        }
        var regu = "^[ ]+$";
        var re = new RegExp(regu);
        return re.test(str);
    }
    RegUtils.isNull = isNull;
    ;
    /*
    用途：检查输入对象的值是否符合整数格式
    输入：str 输入的字符串
    返回：如果通过验证返回true,否则返回false
    */
    function isInteger(str) {
        var regu = /^[-]{0,1}[0-9]{1,}$/;
        return regu.test(str);
    }
    RegUtils.isInteger = isInteger;
    ;
    /*
    用途：检查输入字符串是否符合正整数格式
    输入：s：字符串
    返回：如果通过验证返回true,否则返回false
    */
    function isNumber(s) {
        var regu = "^[0-9]+$";
        var re = new RegExp(regu);
        if (s.search(re) != -1) {
            return true;
        }
        else {
            return false;
        }
    }
    RegUtils.isNumber = isNumber;
    ;
    /*
    用途：检查输入字符串是否符合金额格式,格式定义为带小数的正数，小数点后最多三位
    输入：s：字符串
    返回：如果通过验证返回true,否则返回false
    */
    function isMoney(s) {
        var regu = "^[0-9]+[\.][0-9]{0,3}$";
        var re = new RegExp(regu);
        if (re.test(s)) {
            return true;
        }
        else {
            return false;
        }
    }
    RegUtils.isMoney = isMoney;
    ;
    /*
    function:cTrim(sInputString,iType)
    description:字符串去空格的函数
    parameters:iType：1=去掉字符串左边的空格;2=去掉字符串左边的空格;0=去掉字符串左边和右边的空格
    return value:去掉空格的字符串
    */
    function cTrim(sInputString, iType) {
        var sTmpStr = ' ';
        var i = -1;
        if (iType == 0 || iType == 1) {
            while (sTmpStr == ' ') {
                ++i;
                sTmpStr = sInputString.substr(i, 1);
            }
            sInputString = sInputString.substring(i);
        }
        if (iType == 0 || iType == 2) {
            sTmpStr = ' ';
            i = sInputString.length;
            while (sTmpStr == ' ') {
                --i;
                sTmpStr = sInputString.substr(i, 1);
            }
            sInputString = sInputString.substring(0, i + 1);
        }
        return sInputString;
    }
    RegUtils.cTrim = cTrim;
})(RegUtils || (RegUtils = {}));
/**
  * tips弹出管理类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * tips弹出的管理类
  */
var TipsManager;
(function (TipsManager) {
    //tips面板
    var _tips;
    //tip 对象数据存贮
    // var _dict:Object;
    var _dict = [];
    /**
    * 添加tips方法
    * attachment       		绑定对象
    * descStr        		tips内容
    * effectType        0：没有动画 1:从下到上渐现 2：从左向右 3：从右向左
    */
    function addTips(attachment, descStr, effectType) {
        if (descStr === void 0) { descStr = ""; }
        if (effectType === void 0) { effectType = 0; }
        if (this._dict == null) {
            this._dict = [];
        }
        attachment.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.showTips, this);
        attachment.addEventListener(egret.TouchEvent.TOUCH_END, this.removeTips, this);
        attachment.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.removeTips, this);
        if (this._dict[attachment.hashCode] == null) {
            this._dict[attachment.hashCode] = [];
            this._dict[attachment.hashCode].descStr = descStr;
            this._dict[attachment.hashCode].effectType = effectType;
        }
    }
    TipsManager.addTips = addTips;
    /**
    * 显示tips方法
    */
    function showTips(e) {
        var attachment = e.currentTarget;
        var descStr = "";
        var effectType = 0;
        if (this._tips == null) {
            if (this._dict[attachment.hashCode] != null) {
                descStr = this._dict[attachment.hashCode].descStr;
                effectType = this._dict[attachment.hashCode].effectType;
            }
            this._tips = new TipsPanel(this._dict[attachment.hashCode].descStr);
            if (!GameLayerManager.gameLayer().effectLayer.contains(this._tips)) {
                GameLayerManager.gameLayer().effectLayer.addChild(this._tips);
            }
            var point = attachment.parent.localToGlobal(attachment.x, attachment.y);
            point.x = point.x + attachment.width / 2;
            point.y = point.y - this._tips.getHeight();
            //tips定位
            if (point.x + this._tips.getWidth() > GameConfig.curWidth()) {
                point.x = GameConfig.curWidth() - this._tips.getWidth();
            }
            else if (point.x < 0) {
                point.x = 0;
            }
            if (point.y + this._tips.getHeight() > GameConfig.curHeight()) {
                point.y = GameConfig.curHeight() - this._tips.getHeight();
            }
            else if (point.y < 0) {
                point.y = 0;
            }
            this._tips.x = point.x;
            this._tips.y = point.y;
            switch (effectType) {
                case 0: {
                    // TODO: Implement case content
                    this._tips.alpha = 0;
                    egret.Tween.get(this._tips).to({ alpha: 1 }, 300);
                    break;
                }
                case 1: {
                    this._tips.alpha = 0;
                    this._tips.y += this._tips.getHeight();
                    egret.Tween.get(this._tips).to({ alpha: 1, y: this._tips.y - this._tips.getHeight() }, 500, egret.Ease.backOut);
                    break;
                }
                case 2: {
                    this._tips.alpha = 0;
                    this._tips.x -= this._tips.getWidth();
                    egret.Tween.get(this._tips).to({ alpha: 1, x: this._tips.x + this._tips.getWidth() }, 500, egret.Ease.backOut);
                    break;
                }
                case 3: {
                    this._tips.alpha = 0;
                    this._tips.x += this._tips.getWidth();
                    egret.Tween.get(this._tips).to({ alpha: 1, x: this._tips.x - this._tips.getWidth() }, 500, egret.Ease.backOut);
                    break;
                }
                default: {
                }
            }
        }
    }
    TipsManager.showTips = showTips;
    /**
    * 移除tips方法
    */
    function removeTips(e) {
        var attachment = e.currentTarget;
        if (this._tips != null) {
            var onComplete = function () {
                if (GameLayerManager.gameLayer().effectLayer.contains(this._tips)) {
                    GameLayerManager.gameLayer().effectLayer.removeChild(this._tips);
                    this._tips = null;
                }
            };
            egret.Tween.get(this._tips).to({ alpha: 0 }, 300).call(onComplete, this);
        }
    }
    TipsManager.removeTips = removeTips;
})(TipsManager || (TipsManager = {}));
/**
  * tips类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 提示相关信息
  * todo:九宫格、多动画、图字等
  */
var TipsPanel = (function (_super) {
    __extends(TipsPanel, _super);
    /**
    * descStr        描述
    */
    function TipsPanel(descStr) {
        if (descStr === void 0) { descStr = ""; }
        var _this = _super.call(this) || this;
        _this.descStr = "";
        _this.descStr = descStr;
        _this.initUI();
        return _this;
    }
    // 初始化面板
    TipsPanel.prototype.initUI = function () {
        this.bg = new egret.Bitmap();
        this.bg.texture = RES.getRes("tipsBg_png");
        this.addChild(this.bg);
        this.bg.touchEnabled = true;
        this.descTF = new egret.TextField();
        this.addChild(this.descTF);
        this.descTF.textColor = 0x000000;
        this.descTF.size = 20;
        // this.descTF.width = this.bg.width;
        // this.descTF.height = 24;
        this.descTF.x = 5;
        this.descTF.textAlign = "center";
        this.descTF.text = this.descStr;
        //九宫格
        var rect = new egret.Rectangle(5, 5, 5, 5);
        this.bg.scale9Grid = rect;
        this.bg.width = this.descTF.width + 10;
        this.bg.height = this.descTF.height * 3;
        this.descTF.y = this.bg.height / 2 - this.descTF.height / 2 + 2;
    };
    // 获取高度
    TipsPanel.prototype.getHeight = function () {
        return this.bg.height;
    };
    // 获取宽度
    TipsPanel.prototype.getWidth = function () {
        return this.bg.width;
    };
    return TipsPanel;
}(eui.Component));
__reflect(TipsPanel.prototype, "TipsPanel");
/**
 * Created by 有来有去 on 2014/11/5.
 */
var BitmapBlink = (function (_super) {
    __extends(BitmapBlink, _super);
    /*** @param target 目标位图
    * @param time 闪啊闪的时间
    * @isAuto 是否立即执行，默认是ture，也可以设置false，外部调用start方法
    */
    function BitmapBlink(target, time, isAuto) {
        if (isAuto === void 0) { isAuto = true; }
        var _this = _super.call(this) || this;
        _this._target = target;
        _this._time = time;
        if (isAuto) {
            _this.start();
        }
        return _this;
    }
    BitmapBlink.prototype.start = function () {
        this._currTime = egret.getTimer();
        this._target.addEventListener(egret.Event.ENTER_FRAME, this.runDown, this);
    };
    BitmapBlink.prototype.runDown = function (e) {
        this._target.alpha -= 0.045;
        if (this.checkOver()) {
            return;
        }
        if (this._target.alpha <= 0.6) {
            this._target.removeEventListener(egret.Event.ENTER_FRAME, this.runDown, this);
            this._target.addEventListener(egret.Event.ENTER_FRAME, this.runUp, this);
        }
    };
    BitmapBlink.prototype.runUp = function (e) {
        this._target.alpha += 0.045;
        if (this.checkOver()) {
            return;
        }
        if (this._target.alpha >= 1) {
            this._target.removeEventListener(egret.Event.ENTER_FRAME, this.runUp, this);
            this._target.addEventListener(egret.Event.ENTER_FRAME, this.runDown, this);
        }
    };
    BitmapBlink.prototype.checkOver = function () {
        var nowTime = egret.getTimer();
        if (nowTime - this._currTime >= this._time) {
            this.destroy();
            return true;
        }
        return false;
    };
    BitmapBlink.prototype.destroy = function () {
        this._target.alpha = 1;
        this._target.removeEventListener(egret.Event.ENTER_FRAME, this.runDown, this);
        this._target.removeEventListener(egret.Event.ENTER_FRAME, this.runUp, this);
        this.dispatchEventWith(egret.Event.COMPLETE, false, this._target);
        this._target = null;
    };
    return BitmapBlink;
}(egret.EventDispatcher));
__reflect(BitmapBlink.prototype, "BitmapBlink");
/**
  * tips特效汇总
  * by zhaoxin
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * TipsUtils.showTipsDownToUp()
  */
var TipsUtils;
(function (TipsUtils) {
    //从下到上弹出
    function showTipsDownToUp(str, isWarning, fSize, xPoint, yPoint) {
        if (str === void 0) { str = ""; }
        if (isWarning === void 0) { isWarning = false; }
        if (fSize === void 0) { fSize = 24; }
        var effectTips = new egret.TextField();
        effectTips.size = fSize;
        effectTips.y = GameConfig.curHeight() / 2;
        if (isWarning) {
            effectTips.textColor = GameConfig.TextColors.red;
        }
        else {
            effectTips.textColor = GameConfig.TextColors.green;
        }
        effectTips.alpha = 0;
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        effectTips.x = GameConfig.curWidth() / 2 - effectTips.width / 2;
        effectTips.stroke = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;
        if (!GameLayerManager.gameLayer().effectLayer.contains(effectTips)) {
            GameLayerManager.gameLayer().effectLayer.addChild(effectTips);
        }
        var onComplete2 = function () {
            if (GameLayerManager.gameLayer().effectLayer.contains(effectTips)) {
                GameLayerManager.gameLayer().effectLayer.removeChild(effectTips);
                effectTips = null;
            }
        };
        var onComplete1 = function () {
            egret.Tween.get(effectTips).to({ alpha: 0 }, 500).call(onComplete2, this);
        };
        effectTips.visible = true;
        egret.Tween.get(effectTips).to({ y: effectTips.y - 120, alpha: 1 }, 800, egret.Ease.backOut).call(onComplete1, this);
    }
    TipsUtils.showTipsDownToUp = showTipsDownToUp;
    //从左至右 或者 从右至左
    function showTipsLeftOrRight(str, isWarning, isFromeLeft, fSize, xPoint, yPoint) {
        if (str === void 0) { str = ""; }
        if (isWarning === void 0) { isWarning = false; }
        if (isFromeLeft === void 0) { isFromeLeft = true; }
        if (fSize === void 0) { fSize = 24; }
        var effectTips = new egret.TextField();
        effectTips.size = fSize;
        effectTips.y = GameConfig.curHeight() / 2;
        if (isWarning) {
            effectTips.textColor = GameConfig.TextColors.red;
        }
        else {
            effectTips.textColor = GameConfig.TextColors.green;
        }
        effectTips.alpha = 0;
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        if (isFromeLeft) {
            effectTips.x = -effectTips.width;
        }
        else {
            effectTips.x = GameConfig.curWidth();
        }
        effectTips.stroke = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;
        if (!GameLayerManager.gameLayer().effectLayer.contains(effectTips)) {
            GameLayerManager.gameLayer().effectLayer.addChild(effectTips);
        }
        if (isFromeLeft) {
            egret.Tween.get(effectTips).to({ x: GameConfig.curWidth() / 2 - effectTips.width / 2 - 50, alpha: 1 }, 300, egret.Ease.sineInOut);
        }
        else {
            egret.Tween.get(effectTips).to({ x: GameConfig.curWidth() / 2 - effectTips.width / 2 + 50, alpha: 1 }, 300, egret.Ease.sineInOut);
        }
        egret.setTimeout(function () {
            if (isFromeLeft) {
                egret.Tween.get(effectTips).to({ x: effectTips.x + 100 }, 500);
            }
            else {
                egret.Tween.get(effectTips).to({ x: effectTips.x - 100 }, 500);
            }
        }, this, 300);
        egret.setTimeout(function () {
            if (isFromeLeft) {
                egret.Tween.get(effectTips).to({ x: GameConfig.curWidth() }, 300, egret.Ease.sineIn);
            }
            else {
                egret.Tween.get(effectTips).to({ x: -effectTips.width }, 300, egret.Ease.sineIn);
            }
        }, this, 800);
        egret.setTimeout(function () {
            if (GameLayerManager.gameLayer().effectLayer.contains(effectTips)) {
                GameLayerManager.gameLayer().effectLayer.removeChild(effectTips);
                effectTips = null;
            }
        }, this, 1100);
    }
    TipsUtils.showTipsLeftOrRight = showTipsLeftOrRight;
    //从里到外
    function showTipsFromCenter(str, isWarning, fSize, xPoint, yPoint, callback) {
        if (str === void 0) { str = ""; }
        if (isWarning === void 0) { isWarning = false; }
        if (fSize === void 0) { fSize = 24; }
        var effectTips = new egret.TextField();
        effectTips.size = fSize;
        //effectTips.y = GameConfig.curHeight()/2;
        effectTips.y = yPoint;
        if (isWarning) {
            effectTips.textColor = GameConfig.TextColors.red;
        }
        else {
            effectTips.textColor = GameConfig.TextColors.green;
        }
        effectTips.alpha = 0;
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        //effectTips.x = GameConfig.curWidth()/2;        
        effectTips.x = xPoint;
        effectTips.stroke = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;
        if (!GameLayerManager.gameLayer().effectLayer.contains(effectTips)) {
            GameLayerManager.gameLayer().effectLayer.addChild(effectTips);
        }
        effectTips.anchorOffsetX = effectTips.width / 2;
        effectTips.anchorOffsetY = effectTips.height / 2;
        effectTips.scaleX = 0;
        effectTips.scaleY = 0;
        var onComplete2 = function () {
            if (GameLayerManager.gameLayer().effectLayer.contains(effectTips)) {
                GameLayerManager.gameLayer().effectLayer.removeChild(effectTips);
                effectTips = null;
                if (callback != null) {
                    callback();
                }
            }
        };
        egret.Tween.get(effectTips).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 200);
        egret.setTimeout(function () {
            egret.Tween.get(effectTips).to({ alpha: 0 }, 500).call(onComplete2, this);
        }, this, 1000);
    }
    TipsUtils.showTipsFromCenter = showTipsFromCenter;
    //从外到里
    function showTipsBigToSmall(str, isWarning, fSize, xPoint, yPoint) {
        if (str === void 0) { str = ""; }
        if (isWarning === void 0) { isWarning = false; }
        if (fSize === void 0) { fSize = 24; }
        var effectTips = new egret.TextField();
        effectTips.size = fSize;
        effectTips.y = GameConfig.curHeight() / 2;
        if (isWarning) {
            effectTips.textColor = GameConfig.TextColors.red;
        }
        else {
            effectTips.textColor = GameConfig.TextColors.green;
        }
        effectTips.alpha = 0;
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        effectTips.x = GameConfig.curWidth() / 2;
        effectTips.stroke = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;
        if (!GameLayerManager.gameLayer().effectLayer.contains(effectTips)) {
            GameLayerManager.gameLayer().effectLayer.addChild(effectTips);
        }
        effectTips.anchorOffsetX = effectTips.width / 2;
        effectTips.anchorOffsetY = effectTips.height / 2;
        effectTips.scaleX = 4;
        effectTips.scaleY = 4;
        var onComplete2 = function () {
            if (GameLayerManager.gameLayer().effectLayer.contains(effectTips)) {
                GameLayerManager.gameLayer().effectLayer.removeChild(effectTips);
                effectTips = null;
            }
        };
        egret.Tween.get(effectTips).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 200);
        egret.setTimeout(function () {
            egret.Tween.get(effectTips).to({ alpha: 0 }, 500).call(onComplete2, this);
        }, this, 1000);
    }
    TipsUtils.showTipsBigToSmall = showTipsBigToSmall;
})(TipsUtils || (TipsUtils = {}));
;window.Main = Main;