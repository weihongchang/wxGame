var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var MessageController = (function () {
        function MessageController() {
        }
        MessageController.getInstance = function () {
            if (this.instance == null) {
                this.instance = new MessageController();
            }
            return this.instance;
        };
        MessageController.prototype.fireMessage = function (msgid, data) {
            switch (msgid) {
                case 0:
                    new game.Processor_100().executeData(data);
                    break;
                case 101:
                    console.log("101");
                    break;
            }
        };
        return MessageController;
    }());
    game.MessageController = MessageController;
    __reflect(MessageController.prototype, "game.MessageController");
})(game || (game = {}));
//# sourceMappingURL=MessageController.js.map