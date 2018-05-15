/**
 * 网络公共类
 * by dily
 * (c) copyright 2014 - 2035
 * All Rights Reserved. 
 * 存放网络公共方法 
 * 注意：是同步请求，不是异步
 */
module SocketManager {

    var sock: egret.WebSocket = new egret.WebSocket();
    
    //连接服务器
    export function connectServer(host: string = "", port: number = 80) {
        Global.showWaritPanel();
        this.sock = new egret.WebSocket();
        this.sock.type = "webSocketTypeBinary";
        this.sock.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.sock.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);

        this.sock.connect(host, port);
    }

    //连接成功返回
    export function onSocketOpen(): void {
        Global.hideWaritPanel();
        game.AppFacade.getInstance().sendNotification(SysNotify.CONNECT_SERVER_SUCCESS);
    }

    //消息返回  
    export function onReceiveMessage(): void {
        Global.hideWaritPanel();
        var _arr: egret.ByteArray = new egret.ByteArray();
        this.sock.readBytes(_arr);
        var msg_length = _arr.readShort();
        var mainId = _arr.readShort();
        //var subId = _arr.readShort();
        var subId = 1;
        var cmdDataBA: egret.ByteArray = new egret.ByteArray();
        _arr.readBytes(cmdDataBA);

        game.MessageController.getInstance().fireMessage(mainId,cmdDataBA);
        
// //        //初始化template_proto
//        var message = dcodeIO.ProtoBuf.loadProto(RES.getRes("template_proto"));
// //            
//        //创建user_login_class
//        var user_login_class = message.build("LoginResp");
           
//        //反序列化
//        var new_user_login = user_login_class.decode(cmdDataBA.buffer);
//        console.log("反序列化数据：",new_user_login);  
        
        // game.AppFacade.getInstance().sendNotification("Processor_" + mainId ,cmdDataBA);
    }

    //向服务端发送消息
    export function sendMessage(mainId: number,subId: number,msg: any): void {
        Global.showWaritPanel();
        var bodyMsg: egret.ByteArray = new egret.ByteArray();
        bodyMsg.writeShort(mainId);
        //bodyMsg.writeShort(subId);
        bodyMsg.writeBytes(new egret.ByteArray(msg));

        var sendMsg: egret.ByteArray = new egret.ByteArray();
        sendMsg.writeInt(bodyMsg.length+4);
        sendMsg.writeBytes(new egret.ByteArray(bodyMsg.bytes));
        // console.log("反序列化数据："+sendMsg.length);  
        this.sock.writeBytes(sendMsg);
        
        this.sock.flush();
    }
}



