module game {
	export class Item_Hero extends eui.ItemRenderer{

		public imgHero:eui.Image;
		public imgbg:eui.Image;
		public constructor() {
			super();
			// this.imgbg = new eui.Image();
			// this.imgbg.width = 720;
			// this.imgbg.height = 500;
			// this.addChild(this.imgbg);

			this.imgHero = new eui.Image();
			this.imgHero.horizontalCenter = 0;
			
			this.addChild(this.imgHero);

		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}


		protected childrenCreated():void
		{
			super.childrenCreated();
		}

		protected dataChanged(): void {
			// console.trace(this.data, ">>>>>>>>>>>>>>>>>>>>>>>>>>")
			// console.log(this.data, ">>>>>>>>>>>>>>>>>>>>>>>>>>");
			if( this.data.index == 1 || this.data.index == 3 )
			{
				// this.imgbg.source = "follower_normal_1_png";
				this.imgHero.source = "quan_jiang_nvzhu_png";
				
			}
			else
			{
				// this.imgbg.source = "follower_normal_2_png";
				this.imgHero.source = "quan_jiang_zhanghe_png";
			}
			
		}
	}
}