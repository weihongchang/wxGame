/**
 * 
 */

module game {

    export class BackpackPanel extends eui.Component {

        private list:eui.List = null;

        public constructor() {
            super();
            //this.skinName = "src/core/view/panel/ui/BackpackSkin.exml";
            this.skinName = "resource/eui_skins/Panel_BagSkin.exml";

            // //创建一个按钮，点击后改变 Scroller 滚动的位置
            // var btn = new eui.Button();
            // btn.x = 200;
            // this.addChild(btn);
            // btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.moveScroller,this);

            this.addEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);

            this.btnHero.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnHeroClick,this);
            this.btnItem.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnItemClick,this);
        }

        public initListData(nType:number)
        {
           
            //创建一个列表
            if(this.list == null)
                this.list = new eui.List();
            

            this.list.useVirtualLayout = true;
            if(nType == 1)
            {
                this.list.itemRenderer = Item_HeroList;
            }
            else if(nType == 2)
            {
                this.list.itemRenderer = Item_ItemList;
            }

            var sourceArr:any[] = [];

            for (var i:number = 1; i < 10; i++){
                if(nType == 1)
                {
                    sourceArr.push({Item_HeroList:"item"+i});
                }
                else if(nType == 2)
                {
                    sourceArr.push({Item_ItemList:"item"+i});
                }
            }
            
            this.list.dataProvider = new eui.ArrayCollection(sourceArr);
            
            //  this.list.dataProviderRefreshed();
            this.scroller.viewport = this.list;
        }

        protected createChildren() {
            //初始化后改变滚动的位置
            this.scroller.viewport.validateNow();
            this.scroller.viewport.scrollV = 0;
        }

        public createCompleteEvent(event:eui.UIEvent):void{
            this.removeEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        }

        private OnBtnHeroClick():void{
            this.initListData(1);
        }
        private OnBtnItemClick():void{
            this.initListData(2);
        }
        private moveScroller():void{

            //点击按钮后改变滚动的位置
            var sc = this.scroller;
            sc.viewport.scrollV += 10;
            if ((sc.viewport.scrollV + sc.height) >= sc.viewport.contentHeight) {
            console.log("滚动到底部了");
            }
        }

        public closeBtn: eui.Button;
        public btnHero: eui.Button;
        public btnItem: eui.Button;
        // public input1: eui.Label;
        // public showText: eui.Label;
        public scroller:eui.Scroller;
        
        public partAdded(partName:string, instance:any):void{
            super.partAdded(partName, instance);
        }
    }
}