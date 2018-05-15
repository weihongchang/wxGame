module game{
	export class BattleFinishPanel extends eui.Component  {
		public constructor() {
			super();
			this.skinName = "resource/eui_skins/panel/BattleFinishPanel.exml";
			this.addEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);
		}
		public createCompleteEvent(event:eui.UIEvent):void{
				this.removeEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);
				// game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
		}

		public closeBtn: eui.Button;

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}


		protected childrenCreated():void
		{
			super.childrenCreated();
		}
		
	}
}