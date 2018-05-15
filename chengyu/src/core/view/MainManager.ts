  /**
    * 主界面管理类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 所有的弹窗都需要在register注册事件
    * 在execute添加消息处理面板打开关闭事件
    */
module game {

    export class MainManager extends puremvc.SimpleCommand implements puremvc.ICommand{
        private mainUI: game.MainUI;

        public constructor(){
            super();
        }

        public static NAME:string = "MainManager";

        /**
         * 注册消息
         */
        public register():void{
            this.facade.registerCommand(MainNotify.OPEN_MAIN , MainManager);
            this.facade.registerCommand(MainNotify.CLOSE_MAIN , MainManager);
        }

        public execute(notification:puremvc.INotification):void{
            var data:any = notification.getBody();//携带数据
            var panelCon = GameLayerManager.gameLayer().mainLayer;
            switch(notification.getName()){
                case MainNotify.OPEN_MAIN:{
                    if(GameLayerManager.gameLayer().mainUI == null){
                        GameLayerManager.gameLayer().mainUI = new game.MainUI();
                        panelCon.addChild(GameLayerManager.gameLayer().mainUI);
                    }
                    break;
                }
                case MainNotify.CLOSE_MAIN:{
                    if(GameLayerManager.gameLayer().mainUI != null)
                    {
                        panelCon.removeChild(GameLayerManager.gameLayer().mainUI);
                        GameLayerManager.gameLayer().mainUI = null;
                    }                    
                    break;
                }
            }
        }
    }
}
