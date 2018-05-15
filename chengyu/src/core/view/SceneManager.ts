  /**
    * 场景管理类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 所有的弹窗都需要在register注册事件
    * 在execute添加消息处理面板打开关闭事件
    */
module game {

    export class SceneManager extends puremvc.SimpleCommand implements puremvc.ICommand{

        

        public constructor(){
            super();
        }

        public static NAME:string = "SceneManager";

        /**
         * 注册消息
         */
        public register():void{
            this.facade.registerCommand(SceneNotify.OPEN_HOME , SceneManager);//打开主城
            this.facade.registerCommand(SceneNotify.CLOSE_HOME , SceneManager);//关闭主城

            this.facade.registerCommand(SceneNotify.OPEN_BATTLE , SceneManager);//打开战斗
            this.facade.registerCommand(SceneNotify.CLOSE_BATTLE , SceneManager);//关闭战斗
        }

        public execute(notification:puremvc.INotification):void{
            var data:any = notification.getBody();//携带数据
            var panelCon = GameLayerManager.gameLayer().sceneLayer;
            switch(notification.getName()){
                case SceneNotify.OPEN_HOME:{
                    if(GameLayerManager.gameLayer().homeCity == null){
                        GameLayerManager.gameLayer().homeCity = new HomeCity();
                        panelCon.addChild(GameLayerManager.gameLayer().homeCity);
                    }
                    break;
                }
                case SceneNotify.CLOSE_HOME:{
                    if(GameLayerManager.gameLayer().homeCity != null){
                        panelCon.removeChild(GameLayerManager.gameLayer().homeCity);
                        GameLayerManager.gameLayer().homeCity = null;
                    }
                    break;
                }
                case SceneNotify.OPEN_BATTLE:{
                    if(GameLayerManager.gameLayer().battleScene == null){
                        GameLayerManager.gameLayer().battleScene = new BattleScene();
                        panelCon.addChild(GameLayerManager.gameLayer().battleScene);
                    }
                    break;
                }
                case SceneNotify.CLOSE_BATTLE:{
                    if(GameLayerManager.gameLayer().battleScene != null){
                        panelCon.removeChild(GameLayerManager.gameLayer().battleScene);
                        GameLayerManager.gameLayer().battleScene = null;
                    }
                    break;
                }
            }
        }
    }
}
