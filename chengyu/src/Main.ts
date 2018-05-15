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

class Main extends eui.UILayer {


private imgBG :egret.Sprite;
    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

        //游戏自定义容器添加到舞台上
        this.addChild(GameLayerManager.gameLayer());

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        this.startAnimation(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            GameLayerManager.gameLayer().addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            //await RES.loadConfig("resource/resource.json", "resource/");
            await this.loadTheme();
           await RES.loadGroup("loading",1);
            
            await RES.loadGroup("preload", 0, loadingView);
            GameLayerManager.gameLayer().removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    // private textfield: egret.TextField;
    private  iconshengyin:eui.Image;
    private isSound:boolean = true;
    private  iconSet:eui.Image;

    private bitmap : egret.Bitmap;

    private btnClose:eui.Button;

    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        this.imgBG = new egret.Sprite;
        let sky = this.createBitmapByName("main1_png");
        // let sky = this.createBitmapByName("main1_webp");
        
        // let bg2 = this.createBitmapByName("bg2_png");
        this.imgBG.addChild(sky);
        // this.imgBG.addChild(bg2);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        // let topMask = new egret.Shape();
        // topMask.graphics.beginFill(0x000000, 0.5);
        // topMask.graphics.drawRect(0, 0, stageW, 172);
        // topMask.graphics.endFill();
        // topMask.y = 33;
        // this.imgBG.addChild(topMask);

        

        let icon_name: egret.Bitmap = this.createBitmapByName("youximingzi_png");
        this.imgBG.addChild(icon_name);
        icon_name.width = icon_name.width*2;
        icon_name.x = stageW/2 - icon_name.width/2;
        icon_name.y = icon_name.height*2;


        let icon:eui.Image = new eui.Image();
        icon.source="xgw20_png";
        icon.width = 170;
        icon.height = 136;
        // let icon: egret.Bitmap = this.createBitmapByName("xgw20_png");
        this.imgBG.addChild(icon);
        icon.x = stageW/2 - icon.width/2;
        icon.y = stageH/2;

        let icon_t: egret.Bitmap = this.createBitmapByName("main8_png");
        this.imgBG.addChild(icon_t);
        icon_t.x = icon.x - icon_t.width;
        icon_t.y = icon.y - icon_t.height/3;

        //声音按钮
        this.iconshengyin = new eui.Image();
        this.iconshengyin.source="shengyin1_png";
        this.iconshengyin.width = 110;
        this.iconshengyin.height = 110;
        this.imgBG.addChild(this.iconshengyin);
        this.iconshengyin.x = this.iconshengyin.width*1;
        this.iconshengyin.y = stageH - this.iconshengyin.height*2;

        //设置按钮
        this.iconSet = new eui.Image();
        this.iconSet.source="weixin_png";
        this.iconSet.width = 110;
        this.iconSet.height = 110;
        this.imgBG.addChild(this.iconSet);
        this.iconSet.x = stageW - this.iconSet.width*2;
        this.iconSet.y = stageH - this.iconSet.height*2;


        // let sharedBtn = new eui.Button();
        // sharedBtn.y = 35;
        // sharedBtn.label = 'btnShared';
        // this.imgBG.addChild(sharedBtn);
        this.iconSet.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            window.platform.shareAppMessage().then((res) => {
                console.log('分享成功回调', res);
            }, (err) => {
                console.log('分享失败回调', err);
            });
        }, this);


        this.btnClose = new eui.Button();
        this.btnClose.label = "btnClose!";
        this.btnClose.y = 35;
        this.btnClose.horizontalCenter = 0;
        this.imgBG.addChild(this.btnClose);
        this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClickRank, this);


        this.iconshengyin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSoundClick,this);
        // this.iconSet.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSoundClick,this);
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this);


        GameLayerManager.gameLayer().addChild(this.imgBG);
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: Array<any>): void {
        let parser = new egret.HtmlTextParser();

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

    }

    /**
     * 点击按钮
     * Click the button
     */
    private onButtonClick(e: egret.TouchEvent) {

        game.AppFacade.getInstance().startUp(GameLayerManager.gameLayer());
        game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_HOME);
        game.AppFacade.getInstance().sendNotification(MainNotify.OPEN_MAIN);
        GameLayerManager.gameLayer().removeChild(this.imgBG);
       
    }

    private onSoundClick(e: egret.TouchEvent) {

        if(this.isSound)
        {
            this.isSound = false;
            this.iconshengyin.source = "shengyin2_png";
            // window.platform.setUserCloudData().then(
            //     (res) => {
            //     console.log('上传积分成功', res);
            // }, (err) => {
            //     console.log('上传积分失败', err);
            // });
        }
        else
        {
            this.isSound = true;
            this.iconshengyin.source = "shengyin1_png";
            //var kvlist = 
            window.platform.getUserCloudStorage();
            //console.log(kvlist);
        }
       
    }



    private isdisplay = false;
    /**
     * 排行榜遮罩，为了避免点击开放数据域影响到主域，在主域中建立一个遮罩层级来屏蔽点击事件.</br>
     * 根据自己的需求来设置遮罩的 alpha 值 0~1.</br>
     * 
     */
    private rankingListMask: egret.Shape;
    /**
     * 点击按钮
     * Click the button
     */
    private onButtonClickRank(e: egret.TouchEvent) {
        let openDataContext = wx.getOpenDataContext();

        if (this.isdisplay) {
            this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
            this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
            this.isdisplay = false;
        } else {
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
            const bitmapdata = new egret.BitmapData(window["sharedCanvas"]);
            bitmapdata.$deleteSource = false;
            const texture = new egret.Texture();
            texture._setBitmapData(bitmapdata);
            this.bitmap = new egret.Bitmap(texture);
            this.bitmap.width = this.stage.stageWidth;
            this.bitmap.height = this.stage.stageHeight;
            this.addChild(this.bitmap);

            egret.startTick((timeStarmp: number) => {
                egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
                bitmapdata.webGLTexture = null;
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
    }
}
