/**
  * 服务器命令返回
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  */
module game {

    export class Processor_100 extends puremvc.SimpleCommand implements puremvc.ICommand {
        public constructor() {
            super();
        }

        public static NAME: string = "Processor_100";

        /**
         * 注册消息
         */
        public register(): void {
            this.facade.registerCommand("Processor_100",Processor_100);
        }

        public executeData(data:egret.ByteArray): void {
           
            //创建user_login_class
            var user_login_class = Global.getMessage("LoginResp");
            
            //反序列化
            var new_user_login = user_login_class.decode(data.buffer);
            console.log("反序列化数据：",new_user_login);
            
            this.sendNotification(UserInfoNotify.UPDATE_DATA,new_user_login);
        }
        public execute(notification: puremvc.INotification): void {
            var data: any = notification.getBody();//携带数据

            //创建user_login_class
            var user_login_class = Global.getMessage("LoginResp");
            
            //反序列化
            var new_user_login = user_login_class.decode(data.buffer);
            console.log("反序列化数据：",new_user_login);
            
            this.sendNotification(UserInfoNotify.UPDATE_DATA,new_user_login);
        }
    }
}
