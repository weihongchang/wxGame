/**
 * 
 */

module game {

    export class QianghuaPanel extends eui.Component {

        public constructor() {
            super();
            // this.skinName = "src/core/view/panel/ui/QianghuaSkin.exml";
            this.skinName = "resource/eui_skins/Panel_QianghuaSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);
            this.groupMap.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);
            this.groupMap.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onMoveBegin,this);
            this.groupMap.addEventListener(egret.TouchEvent.TOUCH_END,this.onMoveEnd,this);
        }

        public createCompleteEvent(event:eui.UIEvent):void{
            this.removeEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        }

        public closeBtn: eui.Button;
        public connectServer: eui.Button;
        public sendMsg: eui.Button;
        public input1: eui.Label;
        public input2: eui.Label;
        public showText: eui.Label;
        public imgBG:eui.Image;
        public groupMap:eui.Group;
        
        public partAdded(partName:string, instance:any):void{
            super.partAdded(partName, instance);
        }

        private currentPointY:number;
        public onMove(e:egret.TouchEvent)
        {
            var oldy = this.groupMap.height-this.stage.stageHeight
            //判断边界
            if( e.stageY - this.currentPointY >0 ){
                if( this.groupMap.y >= 0)
                {
                    this.groupMap.y = 0;
                    return;
                }
            }
            else{
                if( this.groupMap.y<= -oldy )
                {
                    this.groupMap.y = -oldy;
                    return;
                }
            }
            this.groupMap.y += e.stageY - this.currentPointY;
            this.currentPointY = e.stageY;
            console.log("move");
        }

        public onMoveBegin(e:egret.TouchEvent)
        {
            this.currentPointY = e.$stageY;
            console.log("begin");
        }

        public onMoveEnd(e:egret.TouchEvent)
        {
            this.currentPointY = 0;
            console.log("end");
        }
    }
}