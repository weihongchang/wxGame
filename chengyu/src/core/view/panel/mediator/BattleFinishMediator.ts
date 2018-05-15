
module game {

    export class BattleFinishMediator extends BaseMediator {
        public static NAME: string = "BattleFinishMediator";

        public constructor(viewComponent: any = null) {
            super(BattleFinishMediator.NAME,viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                PanelNotify.OPEN_BattleFinish,
                PanelNotify.CLOSE_BattleFinish
            ];
        }
        private backpackPanel: BattleFinishPanel = new BattleFinishPanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
            switch(notification.getName()) {
                case PanelNotify.OPEN_BattleFinish: {
                    //显示角色面板
                    this.showUI(this.backpackPanel,false,0,0,1);
                    break;
                }
                case PanelNotify.CLOSE_BattleFinish: {
                    this.closePanel(1);
                    break;
                }
            }
        }       

        /**
         * 初始化面板ui
         */
        public initUI(): void {
            this.backpackPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeButtonClick,this);
            
        }	

        /**
         * 初始化面板数据
         */
        public initData(): void {

        }

     
        private closeButtonClick(event: egret.TouchEvent): void {
            this.closePanel(1);
        }
    }
}