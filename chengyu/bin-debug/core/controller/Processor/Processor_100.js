var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
  * 服务器命令返回
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var Processor_100 = (function (_super) {
        __extends(Processor_100, _super);
        function Processor_100() {
            return _super.call(this) || this;
        }
        /**
         * 注册消息
         */
        Processor_100.prototype.register = function () {
            this.facade.registerCommand("Processor_100", Processor_100);
        };
        Processor_100.prototype.executeData = function (data) {
            //创建user_login_class
            var user_login_class = Global.getMessage("LoginResp");
            //反序列化
            var new_user_login = user_login_class.decode(data.buffer);
            console.log("反序列化数据：", new_user_login);
            this.sendNotification(UserInfoNotify.UPDATE_DATA, new_user_login);
        };
        Processor_100.prototype.execute = function (notification) {
            var data = notification.getBody(); //携带数据
            //创建user_login_class
            var user_login_class = Global.getMessage("LoginResp");
            //反序列化
            var new_user_login = user_login_class.decode(data.buffer);
            console.log("反序列化数据：", new_user_login);
            this.sendNotification(UserInfoNotify.UPDATE_DATA, new_user_login);
        };
        Processor_100.NAME = "Processor_100";
        return Processor_100;
    }(puremvc.SimpleCommand));
    game.Processor_100 = Processor_100;
    __reflect(Processor_100.prototype, "game.Processor_100", ["puremvc.ICommand", "puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=Processor_100.js.map