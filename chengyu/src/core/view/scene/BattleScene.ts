/**
 * 战斗场景
 */
module game{
	export class BattleScene extends eui.Component {
		public constructor() {
			super();
			this.skinName = "src/core/view/scene/BattleScene.exml";
			this.addEventListener(eui.UIEvent.COMPLETE,this.createCompleteEvent,this);
			//this.createCompleteEvent();
		}

		public heroBg1:eui.Image;
		public heroBg2:eui.Image;
		public heroBg3:eui.Image;
		public heroBg4:eui.Image;
		public heroBg5:eui.Image;
		public heroBg6:eui.Image;

		public monsterBg1:eui.Image;
		public monsterBg2:eui.Image;
		public monsterBg3:eui.Image;
		public monsterBg4:eui.Image;
		public monsterBg5:eui.Image;
		public monsterBg6:eui.Image;

		public aniList:AniMC[] = []  ;

		public createCompleteEvent(event: eui.UIEvent): void {
				this.removeEventListener(eui.UIEvent.COMPLETE,this.createCompleteEvent,this);
				BattleManager.getInstance().CreateBattle();

				for (var i = 1; i <= 6; i ++) {
					if(BattleManager.getInstance().formation1.formation[i-1] > 0)
					{
						this.aniList[i-1] = new AniMC();
						let herobg = this.getChildByName("heroBg"+i);
						this.aniList[i-1].x = herobg.x  -herobg.width/2;
						this.aniList[i-1].y = herobg.y +herobg.height/2 ;
						this.addChild(this.aniList[i-1]); 
						this.aniList[i-1].gotoAndPlay("stand",-1);
					}

				}	

				for (var i = 1; i <= 6; i ++) {
					  
					if(BattleManager.getInstance().formation2.formation[i-1] > 0)
					{
						let nIndex = 6+i-1;
						this.aniList[nIndex] = new AniMC();
						let herobg = this.getChildByName("monsterBg"+i);

						this.aniList[nIndex].x = herobg.x  -herobg.width/2;
						this.aniList[nIndex].y = herobg.y +herobg.height/2 ;

						this.addChild(this.aniList[nIndex]); 
						this.aniList[nIndex].gotoAndPlay("stand",-1);
					}
				}	

				GameLayerManager.gameLayer().sceneLayer.addChild(this);        

				this.PlayBattle();
		}

		private  PlayBattle(){
			
			//攻击方，被攻击方，攻击类型，技能id，附带效果，伤害
			// this.batData = "1,6,0,1,0,100;1,6,0,1,0,100;1,6,0,1,0,100;";
			let strList = BattleManager.getInstance().batData.split(";");
			for(var i=0;i<strList.length;i++)
			{
				if( strList.length >0 )
				{
					let atkList = strList[i].split(",");
					if(atkList.length>=6){
						let atkIndex:number = Number( atkList[0]);
						let defIndex:number = Number(atkList[1]);
						let atkType:string = atkList[2];
						let skillID:string = atkList[3];
						let bufferID:string = atkList[4];
						let damageValue:string = atkList[5];
						console.log(atkIndex+"使用技能"+skillID+"攻击"+defIndex+"收到伤害"+damageValue);
						
						var oldX = this.aniList[atkIndex].x;
						var oldY = this.aniList[atkIndex].y;

						//移动到目标位置
						var bs1:BattleSingle = new BattleSingle();
						bs1.battleType = BattleSingleType.move;
						bs1.AtkObj = this.aniList[atkIndex];
						bs1.xPoint = this.aniList[defIndex].x-this.aniList[defIndex].width;
						bs1.yPoint = this.aniList[defIndex].y ;
						BattleManager.getInstance().battleSingleArray.unshift(bs1);

						var bsAtk:BattleSingle = new BattleSingle();
						bsAtk.battleType = BattleSingleType.atk;
						bsAtk.AtkObj = this.aniList[atkIndex];
						bsAtk.xPoint = 0;
						bsAtk.yPoint = 0;
						bsAtk.defObj = this.aniList[defIndex];
						BattleManager.getInstance().battleSingleArray.unshift(bsAtk);

						var bs2:BattleSingle = new BattleSingle();
						bs2.battleType = BattleSingleType.move;
						bs2.AtkObj = this.aniList[atkIndex];
						bs2.xPoint = oldX;
						bs2.yPoint = oldY;
						BattleManager.getInstance().battleSingleArray.unshift(bs2);
					}
				}
			}

			BattleManager.getInstance().PlayBattle();
			
		}

		// /**
		//  * 移动到目标
		//  */
		// private async MoveTo(objAni:AniMC,xPoint:number,yPoint:number) {
		// 	try {
		// 		console.log("开始移动到目标"+xPoint+"   "+yPoint);
		// 		egret.Tween.get(objAni).to({ x:xPoint,y: yPoint},300);   
		// 	}
		// 	catch (e) {
		// 		console.error(e);
		// 	}
		// }

		// /**
		//  * 播放攻击动画
		//  */
		// private async PlayAtkAni(objAni:AniMC) {
		// 	try {
		// 		objAni.gotoAndPlay("Atk",1);
		// 	}
		// 	catch (e) {
		// 		console.error(e);
		// 	}
		// }

		// /**
		//  * 移动回来
		//  */
		// private async MoveBack(objAni:AniMC,xPoint:number,yPoint:number) {
		// 	try {
		// 		console.log("开始移动回元目标"+xPoint+"   "+yPoint);
		// 		egret.Tween.get(objAni).to({ x:xPoint,y: yPoint},300);   
		// 	}
		// 	catch (e) {
		// 		console.error(e);
		// 	}
		// }
		

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}
		
	}
}