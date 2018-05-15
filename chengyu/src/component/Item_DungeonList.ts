module game {
	export class Item_DungeonList extends eui.ItemRenderer{
		public constructor() {
			super();
			this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onImgClick,this);
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}

		public imgHead:eui.Image;

		private onImgClick()
		{
			console.log("img click!!"+this.data.name);
			game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_QIANGHUA);
		}

		protected childrenCreated():void
		{
			super.childrenCreated();
		}

		protected dataChanged(): void {
			// console.trace(this.data, ">>>>>>>>>>>>>>>>>>>>>>>>>>")
			console.log(this.data, ">>>>>>>>>>>>>>>>>>>>>>>>>>");
			// this.imgHead.source = "dungeon"+this.data.index+"_jpg";
			var dungeon =  DataManager.getInstance().getDungeonForID(this.data.index);
			if( dungeon != null )
			{
				this.imgHead.source = dungeon.dungeonImg;
			}
		}
	}
}