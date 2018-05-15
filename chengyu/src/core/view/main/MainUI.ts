/**
 * 主界面
 */
module game {

    export class MainUI extends eui.Component {
        private isUp: boolean = false;
        private speed:number = 0.7;
        private enemySpeed:number = 0.6;
        private dateTimer:DateTimer;
        private enemy:Array<eui.Image> = new Array(5);
        private enemyType:number[] = [0,0,0,0,0];
        private enemyIconType:number[] = [0,0,0,0,0];
        private enemyIndex:number = 0;
        private hNum:number = 600-200;
        private maxStarNum = 0;

        private starNum = 0;

        public constructor() {
            super();
            this.skinName = "resource/eui_skins/MainUISkin.exml";

            this.mainBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClickRank,this);
            this.group_game.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onMainBtnClick,this);
            this.btn_new.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNewClick,this);
            this.btn_home.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClickRank,this);

            this.dateTimer = new DateTimer(1);
            this.dateTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this);
            this.dateTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerComplete, this);

            if(GameConfig.isWeiXin())
            {
                wx.getUserCloudStorage({
                        keyList:["num"],
                        success: (res) => {
                            console.log('获取积分成功', res.KVDataList);
                        },
                        fail: (err) => {
                            console.log('获取积分失败', err);
                        },
                        complete: () => {

                        }
                });
            }
            this.gameInit();
        }

        private gameInit()
        {
            this.starNum = 0;
            this.lable_starNum.text = this.starNum+"";
            this.starInit(this.isUp);

            this.cube.visible = true;
            this.cube.y = this.height/2;
            this.group_game.visible = true;
            this.group_over.visible = false;
            this.enemy = new Array(5);
            this.dateTimer.reset();
            this.dateTimer.start();
        }

        private starInit(status:boolean)
        {
            //显示上边的星星
            if(status){
                this.starTop.visible = true;
                this.starBottom.visible = false;
            }else{
                this.starTop.visible = false;
                this.starBottom.visible = true;
            }
        }

        

        private onTimerHandler()
        {
            this.cubeStageUpdate();
            if(this.dateTimer.currentCount % 1000 == 0)
            {
                this.createOtherCube();
            }
            if(this.isUp){
                this.cube.y-=this.speed;
            }else{
                this.cube.y+=this.speed;
            }

            this.starStatus();

            //enemy移动
            for(var i=0;i<this.enemy.length;i++)
            {
                if(this.enemy[i] != null){
                    //电锯旋转
                    if(this.enemyIconType[i] == 1)
                    {
                        this.enemy[i].rotation+=10;
                    }
                    //判断是否有碰撞
                    if( this.isOverlap(this.enemy[i],this.cube))
                    {
                        this.GameOver();
                    }

                    if(this.enemyType[i] == 0)
                    {
                        this.enemy[i].x += this.enemySpeed;
                    }
                    else
                    {
                        this.enemy[i].x -= this.enemySpeed;
                    }
                }
            }
        }


        private onTimerComplete()
        {
            
        }

        //判断是否得分
        private starStatus()
        {
            //判断是否有碰撞
            if(this.starTop.visible)
            {
                if( this.isOverlap(this.starTop,this.cube))
                {
                    this.starInit(false);
                    this.starNum++;
                    this.lable_starNum.text = this.starNum+"";
                    console.log("分数："+this.starNum);
                }
            }
            if(this.starBottom.visible)
            {
                if( this.isOverlap(this.starBottom,this.cube))
                {
                    this.starInit(true);
                    this.starNum++;
                    this.lable_starNum.text = this.starNum+"";
                    console.log("分数："+this.starNum);
                }
            }
        }

        //判断是否到弹簧
        private cubeStageUpdate()
        {
            if(this.isUp){
                if(this.cube.y <= this.boxTop.y+this.boxTop.height/2)
                    this.isUp = !this.isUp;
            }else{
                if( this.cube.y >= this.boxBottom.y )
                    this.isUp = !this.isUp;
            }
        }


        /**
         * @brief 判断两个轴对齐的矩形是否重叠
         * @param rc1 第一个矩阵的位置
         * @param rc2 第二个矩阵的位置
         * @return 两个矩阵是否重叠（边沿重叠，也认为是重叠）
         */
        private isOverlap(rc1:eui.Image,rc2:eui.Image):boolean
        {
            if (rc1.x + rc1.width -20 > rc2.x &&
                rc2.x + rc2.width-20  > rc1.x &&
                rc1.y + rc1.height-20 > rc2.y &&
                rc2.y + rc2.height-20 > rc1.y
            )
                return true;
            else
                return false;
        }

        private onMainBtnClick(e: egret.TouchEvent) {
            if(this.isUp){
                this.isUp = !this.isUp;
            }else{
                this.isUp = !this.isUp;
            }
        }

        private onGameOver(e: egret.TouchEvent) {
            this.GameOver();
        }

        private onNewClick(e: egret.TouchEvent) {
            this.gameInit();
        }
        

        private GameOver()
        {
            if(GameConfig.isWeiXin())
            {
                wx.setUserCloudStorage({
                    KVDataList:[{key:"num",value:this.starNum+""}],
                    success: (res) => {
                        console.log('上传积分成功', res);
                    },
                    fail: (err) => {
                        console.log('上传积分失败', err);
                    },
                    complete: () => {

                    }
                });
            }
            this.dateTimer.stop();
            this.cube.visible = false;
            this.group_game.visible = false;
            this.group_over.visible = true;

            for(var i=0;i<this.enemy.length;i++)
            {
                if(this.enemy[i] != null && this.enemy[i].parent != null){
                    this.removeChild(this.enemy[i]);
                }
            }
        }

        //创建动态障碍
        private createOtherCube()
        {
            if(this.enemyIndex >= 5)
                this.enemyIndex = 0;
            var rand = Math.random() *10;
            this.enemy[this.enemyIndex] = new eui.Image();
            if( rand >=5 ){
                //创建大障碍物
                this.enemy[this.enemyIndex].source = "dianju1_png";
                this.enemy[this.enemyIndex].width = 80;
                this.enemy[this.enemyIndex].height = 80;
                this.enemyIconType[this.enemyIndex] = 1;
            }
            else{
                //创建小障碍物
                this.enemy[this.enemyIndex].source = "zhangai1_1_png";
                this.enemy[this.enemyIndex].width = 46;
                this.enemy[this.enemyIndex].height = 46;
                this.enemyIconType[this.enemyIndex] = 0;
            }
            //随机方向
            var randX = Math.random() *10;
            if( randX >=5 )
            {
                //左向右
                this.enemyType[this.enemyIndex] = 0;
                this.enemy[this.enemyIndex].x = -this.enemy[this.enemyIndex].width;
            }
            else
            {
                //右向左
                this.enemyType[this.enemyIndex] = 1;
                this.enemy[this.enemyIndex].x = this.width + this.enemy[this.enemyIndex].width;
            }
            
            //随机位置
            var randY = Math.random() *1000;
            if( randY > 400 )
                randY-=400;
            
            this.enemy[this.enemyIndex].y = this.boxTop.y + 100 + randY;

            this.enemy[this.enemyIndex].anchorOffsetX = this.enemy[this.enemyIndex].width/2;
            this.enemy[this.enemyIndex].anchorOffsetY = this.enemy[this.enemyIndex].height/2;


            this.addChild(this.enemy[this.enemyIndex]);

            this.enemyIndex++;
        }

        


        public mainBtn: eui.Button;
        public mainBG:eui.Image;
        public cube:eui.Image;
        public boxTop:eui.Image;
        public boxBottom:eui.Image;
        public btn_new:eui.Image;
        public group_game:eui.Group;
        public group_over:eui.Group;
        public starTop:eui.Image;
        public starBottom:eui.Image;
        public lable_starNum:eui.Label;
        public btn_home:eui.Image;

        public partAdded(partName: string,instance: any): void {
            super.partAdded(partName,instance);
        }



    private isdisplay = false;
    private bitmap : egret.Bitmap;
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
            this.mainBtn.visible=false;
        } else {
            //处理遮罩，避免开放数据域事件影响主域。
            this.rankingListMask = new egret.Shape();
            this.rankingListMask.graphics.beginFill(0x000000, 1);
            this.rankingListMask.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
            this.rankingListMask.graphics.endFill();
            this.rankingListMask.alpha = 0.5;
            this.rankingListMask.touchEnabled = true;
            this.addChild(this.rankingListMask);

            this.mainBtn.visible=true;
            //简单实现，打开这关闭使用一个按钮
             this.addChild(this.mainBtn);
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
}