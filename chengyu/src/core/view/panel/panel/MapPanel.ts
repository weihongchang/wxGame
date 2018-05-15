/**
 * 
 */

module game {

    export class MapPanel extends eui.Component {
        private list:eui.List = null;
        public constructor() {
            super();
            // this.skinName = "src/core/view/panel/ui/MapSkin.exml";
            this.skinName = "resource/eui_skins/Panel_MapSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);
            this.btnHero.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnHeroClick,this);
            this.btnItem.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnItemClick,this);
            this.btn_Active.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnActiveClick,this);
        }

        public createCompleteEvent(event:eui.UIEvent):void{
            this.removeEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        }

        protected createChildren() {
            //初始化后改变滚动的位置
            this.scroller.viewport.validateNow();
            this.scroller.viewport.scrollV = 0;
            
        }

        public initListData(nType:number)
        {
           this.updateBtnStatus(nType);
            //创建一个列表
            if(this.list == null)
                this.list = new eui.List();
            

            this.list.useVirtualLayout = true;
            if(nType == 1)
            {
                this.list.itemRenderer = Item_DungeonList;
            }
            else if(nType == 2)
            {
                this.list.itemRenderer = Item_ItemList;
            }

            var sourceArr:any[] = [];

            for (var i:number = 1; i < 10; i++){
                sourceArr.push({name:"item"+i,index:i});
            }
            this.list.dataProvider = new eui.ArrayCollection(sourceArr);
            // this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onImgClick,this);
            //  this.list.dataProviderRefreshed();
            this.scroller.viewport = this.list;
        }

        private OnBtnHeroClick():void{
            this.initListData(1);
        }
        private OnBtnItemClick():void{
            this.initListData(2);
        }
        private OnBtnActiveClick():void{
            this.initListData(1);
        }

        public updateBtnStatus(selected:number)
        {
            if( selected == 1 )
            {
                this.btnHero.enabled = false;
                this.btnItem.enabled = true;
                this.btn_Active.enabled = true;
            }
            else if( selected == 2 )
            {
                this.btnHero.enabled = true;
                this.btnItem.enabled = false;
                this.btn_Active.enabled = true;
            }
            else if( selected == 3 )
            {
                this.btnHero.enabled = true;
                this.btnItem.enabled = true;
                this.btn_Active.enabled = false;
            }
        }

        // private onImgClick(e:eui.PropertyEvent)
		// {
            
        //     var item = e.currentTarget.selectedItem;
		// 	console.log("img click!!"+e.target);
        //     console.log("img click!!"+e.target.selectedItem);
        //     console.log("img click!!"+item.name);
            
		// }

        public closeBtn: eui.Button;
        public scroller:eui.Scroller;
        public btnHero: eui.Button;
        public btnItem: eui.Button;
        public btn_Active: eui.Button;

        
        public partAdded(partName:string, instance:any):void{
            super.partAdded(partName, instance);
        }
    }
}