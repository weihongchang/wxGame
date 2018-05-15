

class AniManager extends egret.DisplayObjectContainer{
	public movie:dragonBones.Movie;
	// public armatureDisplay:dragonBones.EgretArmatureDisplay;
	public constructor() {
		super();
		dragonBones.addMovieGroup(RES.getRes("NewProject_ske_dbmv"), RES.getRes("NewProject_tex_png")); // 添加动画数据和贴图
		this.movie = dragonBones.buildMovie("stand"); // 创建 白鹭极速格式 的动画
        
		//this.movie.scaleX = 0.2;
		//this.movie.scaleY = 0.2;
		// this.movie.play("stand");
		// this.addChild(this.movie);



		// let factory = dragonBones.EgretFactory.factory;
		// let dragonbonesData = RES.getRes("NewProject_ske_json");
		// let textureData = RES.getRes("NewProject_tex_json");
		// let texture = RES.getRes("NewProject_tex_png");
		// factory.parseDragonBonesData(dragonbonesData);
		// factory.parseTextureAtlasData(textureData, texture);


		// this.armatureDisplay = factory.buildArmatureDisplay("NewProject");
		//this.armatureDisplay.animation.play("stand", 0);
        //this.addChild(this.armatureDisplay);
	}

	public destoryMe(){
		this.movie.stop();
		this.movie.dispose();
		this.movie.parent && this.movie.parent.removeChild(this.movie);
		// this.armatureDisplay.animation.stop();
		// this.armatureDisplay.animation.reset();
		// this.armatureDisplay.dispose();
		// this.armatureDisplay = null;
		// this.parent && this.parent.removeChild(this);
	}
}