module game {
	export class Item_HeroList extends eui.ItemRenderer {
		public imgHero:eui.Image;
		public constructor() {
			super();

			this.imgHero = new eui.Image();
		}

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