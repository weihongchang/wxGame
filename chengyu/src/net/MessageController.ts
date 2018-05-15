module game {
	export class MessageController {
		private static instance:MessageController;

		public static getInstance():MessageController{

			if(this.instance == null){
				this.instance = new MessageController();
			}
			return this.instance;
		}

		public fireMessage(msgid:number,data:egret.ByteArray)
		{
			switch(msgid)
			{
				case 0:
					new Processor_100().executeData(data);
					break;
				case 101:
					console.log("101");
					break;
			}
		}

	}
}