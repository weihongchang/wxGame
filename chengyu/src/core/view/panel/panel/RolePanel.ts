/**
 * 
 */

module game {

    export class RolePanel extends eui.Component {
        private listHero:eui.List = null;
        private listHeroHead:eui.List = null;

        private size:number = 4;


        public closeBtn: eui.Button;
        public scroller:eui.Scroller;
        public scroller_head:eui.Scroller;

        private currentPointX:number;
        private isMoving:boolean = false;
        private currentPage = 0;

        public constructor() {
            super();
            // this.skinName = "src/core/view/panel/ui/RoleSkin.exml";
            this.skinName = "resource/eui_skins/Panel_RoleSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);
            this.scroller.throwSpeed=0;
            this.scroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onMoveBegin,this);
            this.scroller.addEventListener(eui.UIEvent.CHANGE_END,this.onMoveEnd,this);
            // this.scroller.addEventListener(egret.TouchEvent.TOUCH_END,this.onMoveEnd,this);
            // this.scroller.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);
            // this.scroller.addEventListener(egret.TouchEvent.TOUCH_CANCEL,this.onMoveCancel,this);
            
        }

        public createCompleteEvent(event:eui.UIEvent):void{
            this.removeEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        }

        protected createChildren() {
            //初始化后改变滚动的位置
            
            this.scroller.viewport.validateNow();
            this.scroller.viewport.scrollV = 0;
            this.scroller.horizontalScrollBar.visible = false;
            this.scroller.verticalScrollBar.visible = false;
            
        }

        public initData()
        {
           this.initHeroList();
           this.initHeroHeadList();
        }

        /**
         * 初始话英雄列表
         */
        public initHeroList(){
            //创建一个列表
            if(this.listHero == null)
                this.listHero = new eui.List();
            
            this.listHero.useVirtualLayout = true;
            this.listHero.layout = new eui.HorizontalLayout();
            this.listHero.itemRenderer = Item_Hero;
            var sourceArr:any[] = [];

            for (var i:number = 0; i < this.size; i++){
                sourceArr.push({name:"item"+i,index:i});
            }
            this.listHero.dataProvider = new eui.ArrayCollection(sourceArr);
            this.scroller.viewport = this.listHero;
        }
         /**
         * 初始话英雄头像列表
         */
        public initHeroHeadList(){
            //创建一个列表
            if(this.listHeroHead == null)
                this.listHeroHead = new eui.List();
            
            this.listHeroHead.useVirtualLayout = true;
            this.listHeroHead.layout = new eui.HorizontalLayout();
            this.listHeroHead.itemRenderer = Item_HeroHeadList;
            var sourceArr:any[] = [];

            for (var i:number = 0; i < this.size*2; i++){
                sourceArr.push({name:"item"+i,index:i});
            }
            this.listHeroHead.dataProvider = new eui.ArrayCollection(sourceArr);
            this.scroller_head.viewport = this.listHeroHead;
        }

        
        
        public partAdded(partName:string, instance:any):void{
            super.partAdded(partName, instance);
        }

       

        public onMoveBegin(e:egret.TouchEvent)
        {
            // this.currentPointX = e.$stageX;
           // console.log("begin");
        }
        
        public onMove(e:egret.TouchEvent)
        {
            console.log("move");
        }
        public onMoveCancel(e:egret.TouchEvent)
        {
            console.log("onMoveCancel");
        }
        public onMoveEnd(e:egret.TouchEvent)
        {
            // this.currentPointX = 0;
            this.getCurrentPage();
            console.log("end");
        }

        private getCurrentPage()
        {
            var moNum = this.scroller.viewport.scrollH % this.stage.stageWidth;
            let pageNum:number = this.scroller.viewport.scrollH / this.stage.stageWidth;
            pageNum = Math.floor(pageNum);
            // console.log( this.scroller.viewport.scrollH+"     "+ moNum+"   "+chuNum);
            if(moNum > this.stage.stageWidth/2)
            {
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
            var npoint = pageNum* this.stage.stageWidth;
            this.MovePanel(npoint);
        }

        private MovePanel(nPoint:number)
        {
            // if(this.page<0)
            //     return;
            if(!this.isMoving)
            {
                this.isMoving = true;
                console.log("move to "+nPoint);
                egret.Tween.get(this.scroller.viewport, { loop: false })
                .to({scrollH: nPoint}, 200).call(()=>this.MoveStatusChange(),this);
            }
        }
        
        private MoveStatusChange(){
            this.isMoving=false;
        }

    }
}