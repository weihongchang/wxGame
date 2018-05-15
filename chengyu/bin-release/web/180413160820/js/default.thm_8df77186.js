window.skins={};
window.main={};
function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.generateEUI = {};
generateEUI.paths = {};
generateEUI.styles = undefined;
generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","BattleScene":"resource/eui_skins/BattleScene.exml","game.Item_HeroList":"resource/eui_skins/Item_HeroList.exml","game.Item_ItemList":"resource/eui_skins/Item_ItemList.exml","game.Item_DungeonList":"resource/eui_skins/Item_DungeonList.exml","game.Item_Hero":"resource/eui_skins/Item_Hero.exml"}
generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","resource/assets/Button/button_down.png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "resource/assets/Button/button_up.png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma 'Microsoft Yahei'";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","resource/assets/CheckBox/checkbox_select_up.png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","resource/assets/CheckBox/checkbox_select_down.png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","resource/assets/CheckBox/checkbox_select_disabled.png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "resource/assets/CheckBox/checkbox_unselect.png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "resource/assets/ScrollBar/roundthumb.png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "resource/assets/Slider/track.png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "resource/assets/Slider/thumb.png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text")
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Item_DungeonList.exml'] = window.Item_DungeonListSkin = (function (_super) {
	__extends(Item_DungeonListSkin, _super);
	function Item_DungeonListSkin() {
		_super.call(this);
		this.skinParts = ["imgHead"];
		
		this.height = 195;
		this.width = 720;
		this.elementsContent = [this.imgHead_i(),this._Image1_i(),this._Image2_i()];
	}
	var _proto = Item_DungeonListSkin.prototype;

	_proto.imgHead_i = function () {
		var t = new eui.Image();
		this.imgHead = t;
		t.fillMode = "scale";
		t.height = 143;
		t.source = "dungeon1_jpg";
		t.width = 640;
		t.x = 9;
		t.y = 26;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.fillMode = "scale";
		t.height = 189;
		t.scale9Grid = new egret.Rectangle(573,3,21,1);
		t.source = "dungeonframe_png";
		t.touchEnabled = false;
		t.width = 720;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.height = 33;
		t.source = "name_dungeon1_png";
		t.touchEnabled = false;
		t.width = 123;
		t.x = 50;
		t.y = 43;
		return t;
	};
	return Item_DungeonListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Item_Hero.exml'] = window.Item_HeroSkin = (function (_super) {
	__extends(Item_HeroSkin, _super);
	function Item_HeroSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 500;
		this.width = 720;
	}
	var _proto = Item_HeroSkin.prototype;

	return Item_HeroSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Item_HeroList.exml'] = window.Item_HeroListSkin = (function (_super) {
	__extends(Item_HeroListSkin, _super);
	function Item_HeroListSkin() {
		_super.call(this);
		this.skinParts = ["imgHeadBG","imgHead","label_level","label_Name","label_Name0","label_zizhi","img_shangzhen"];
		
		this.height = 157;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.imgHeadBG_i(),this.imgHead_i(),this.label_level_i(),this.label_Name_i(),this.label_Name0_i(),this.label_zizhi_i(),this.img_shangzhen_i()];
	}
	var _proto = Item_HeroListSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.fillMode = "clip";
		t.height = 157;
		t.scale9Grid = new egret.Rectangle(573,3,21,1);
		t.source = "bg_attr_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgHeadBG_i = function () {
		var t = new eui.Image();
		this.imgHeadBG = t;
		t.fillMode = "scale";
		t.height = 85;
		t.source = "icon_normal_2_png";
		t.width = 85;
		t.x = 18;
		t.y = 52.5;
		return t;
	};
	_proto.imgHead_i = function () {
		var t = new eui.Image();
		this.imgHead = t;
		t.fillMode = "scale";
		t.height = 80;
		t.source = "head_bianshi_png";
		t.width = 80;
		t.x = 20;
		t.y = 54.5;
		return t;
	};
	_proto.label_level_i = function () {
		var t = new eui.Label();
		this.label_level = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 22;
		t.size = 22;
		t.text = "999";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.width = 42.5;
		t.x = 89.5;
		t.y = 22;
		return t;
	};
	_proto.label_Name_i = function () {
		var t = new eui.Label();
		this.label_Name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 22;
		t.size = 22;
		t.text = "吃人了吧你";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.width = 137.5;
		t.x = 140;
		t.y = 22;
		return t;
	};
	_proto.label_Name0_i = function () {
		var t = new eui.Label();
		this.label_Name0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 22;
		t.size = 17;
		t.text = "资质:";
		t.textAlign = "left";
		t.textColor = 0x050000;
		t.verticalAlign = "bottom";
		t.width = 57;
		t.x = 110.75;
		t.y = 87;
		return t;
	};
	_proto.label_zizhi_i = function () {
		var t = new eui.Label();
		this.label_zizhi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 22;
		t.size = 17;
		t.text = "10001";
		t.textAlign = "left";
		t.textColor = 0x050000;
		t.verticalAlign = "bottom";
		t.width = 97;
		t.x = 167.75;
		t.y = 87;
		return t;
	};
	_proto.img_shangzhen_i = function () {
		var t = new eui.Image();
		this.img_shangzhen = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 96;
		t.source = "being_fronted_png";
		t.width = 94;
		t.x = 612.5;
		t.y = 13;
		return t;
	};
	return Item_HeroListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Item_ItemList.exml'] = window.Item_ItemListSkin = (function (_super) {
	__extends(Item_ItemListSkin, _super);
	function Item_ItemListSkin() {
		_super.call(this);
		this.skinParts = ["imgHeadBG","imgHead","label_level1","label_level0","label_Name","label_Name0","label_zizhi","img_shangzhen"];
		
		this.height = 157;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.imgHeadBG_i(),this.imgHead_i(),this.label_level1_i(),this.label_level0_i(),this.label_Name_i(),this.label_Name0_i(),this.label_zizhi_i(),this.img_shangzhen_i()];
	}
	var _proto = Item_ItemListSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.fillMode = "clip";
		t.height = 157;
		t.scale9Grid = new egret.Rectangle(29,49,41,27);
		t.source = "cell_back_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.height = 31;
		t.scale9Grid = new egret.Rectangle(13,14,23,21);
		t.source = "input_bg_png";
		t.width = 96;
		t.x = 41;
		t.y = 15.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.height = 31;
		t.scale9Grid = new egret.Rectangle(13,14,23,21);
		t.source = "input_bg_png";
		t.width = 177;
		t.x = 140;
		t.y = 15.5;
		return t;
	};
	_proto.imgHeadBG_i = function () {
		var t = new eui.Image();
		this.imgHeadBG = t;
		t.fillMode = "scale";
		t.height = 85;
		t.source = "icon_normal_2_png";
		t.width = 85;
		t.x = 18;
		t.y = 52.5;
		return t;
	};
	_proto.imgHead_i = function () {
		var t = new eui.Image();
		this.imgHead = t;
		t.fillMode = "scale";
		t.height = 80;
		t.source = "item_1105016_png";
		t.width = 80;
		t.x = 20;
		t.y = 54.5;
		return t;
	};
	_proto.label_level1_i = function () {
		var t = new eui.Label();
		this.label_level1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 22;
		t.size = 22;
		t.text = "LV.";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.width = 42.5;
		t.x = 54.5;
		t.y = 22;
		return t;
	};
	_proto.label_level0_i = function () {
		var t = new eui.Label();
		this.label_level0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 22;
		t.size = 22;
		t.text = "999";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.width = 42.5;
		t.x = 89.5;
		t.y = 22;
		return t;
	};
	_proto.label_Name_i = function () {
		var t = new eui.Label();
		this.label_Name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 22;
		t.size = 22;
		t.text = "吃人了吧你";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.width = 137.5;
		t.x = 155;
		t.y = 22;
		return t;
	};
	_proto.label_Name0_i = function () {
		var t = new eui.Label();
		this.label_Name0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 22;
		t.size = 17;
		t.text = "资质:";
		t.textAlign = "left";
		t.textColor = 0x050000;
		t.verticalAlign = "bottom";
		t.width = 57;
		t.x = 110.75;
		t.y = 87;
		return t;
	};
	_proto.label_zizhi_i = function () {
		var t = new eui.Label();
		this.label_zizhi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 22;
		t.size = 17;
		t.text = "10001";
		t.textAlign = "left";
		t.textColor = 0x050000;
		t.verticalAlign = "bottom";
		t.width = 97;
		t.x = 167.75;
		t.y = 87;
		return t;
	};
	_proto.img_shangzhen_i = function () {
		var t = new eui.Image();
		this.img_shangzhen = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 96;
		t.source = "being_fronted_png";
		t.width = 94;
		t.x = 612.5;
		t.y = 13;
		return t;
	};
	return Item_ItemListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","contentGroup","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.contentGroup_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "resource/assets/Panel/border.png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "resource/assets/Panel/header.png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.bottom = 30;
		t.top = 50;
		t.percentWidth = 100;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/CloseBtnSkin.exml'] = window.main.CloseBtnSkin = (function (_super) {
	__extends(CloseBtnSkin, _super);
	function CloseBtnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","closeBtn_png"),
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
		];
	}
	var _proto = CloseBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "closeBtn_png";
		t.percentWidth = 100;
		return t;
	};
	return CloseBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Panel_BagSkin.exml'] = window.Panel_BagSkin = (function (_super) {
	__extends(Panel_BagSkin, _super);
	function Panel_BagSkin() {
		_super.call(this);
		this.skinParts = ["scroller","closeBtn","btnHero","btnItem"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.scroller_i(),this.closeBtn_i(),this.btnHero_i(),this.btnItem_i()];
	}
	var _proto = Panel_BagSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 126.6;
		t.scale9Grid = new egret.Rectangle(19,12,21,87);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "menubg_png";
		t.width = 720;
		t.x = 0;
		t.y = 130.4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 864;
		t.scale9Grid = new egret.Rectangle(41,12,561,457);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "module_bg_png";
		t.width = 720;
		t.x = 0;
		t.y = 242;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 854.85;
		t.width = 720;
		t.x = 0;
		t.y = 245.15;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 820;
		t.width = 720;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "按钮";
		t.skinName = "main.CloseBtnSkin";
		t.x = 608;
		t.y = 1168;
		return t;
	};
	_proto.btnHero_i = function () {
		var t = new eui.Button();
		this.btnHero = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.label = "Button";
		t.width = 136;
		t.x = 36;
		t.y = 175;
		return t;
	};
	_proto.btnItem_i = function () {
		var t = new eui.Button();
		this.btnItem = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.label = "Button";
		t.width = 136;
		t.x = 224;
		t.y = 175;
		return t;
	};
	return Panel_BagSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Panel_ChuangDangSkin.exml'] = window.Panel_ChuangDangSkin = (function (_super) {
	__extends(Panel_ChuangDangSkin, _super);
	function Panel_ChuangDangSkin() {
		_super.call(this);
		this.skinParts = ["readExcel","closeBtn","input1"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.readExcel_i(),this.closeBtn_i(),this.input1_i(),this._Label1_i()];
	}
	var _proto = Panel_ChuangDangSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.fillMode = "scale";
		t.height = 1280;
		t.source = "homeBg3_jpg";
		t.width = 720;
		return t;
	};
	_proto.readExcel_i = function () {
		var t = new eui.Button();
		this.readExcel = t;
		t.height = 108;
		t.horizontalCenter = -12;
		t.label = "播放面板打开动画";
		t.width = 272;
		t.y = 277;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "按钮";
		t.skinName = "main.CloseBtnSkin";
		t.x = 608;
		t.y = 6;
		return t;
	};
	_proto.input1_i = function () {
		var t = new eui.Label();
		this.input1 = t;
		t.background = true;
		t.backgroundColor = 0x000000;
		t.height = 78;
		t.horizontalCenter = 127;
		t.text = "0";
		t.textAlign = "left";
		t.type = "input";
		t.verticalAlign = "middle";
		t.width = 430;
		t.y = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.background = true;
		t.backgroundColor = 0x000000;
		t.height = 39;
		t.text = "请输入面板动画类型（0-6）：";
		t.textColor = 0xFFFFFF;
		t.width = 443;
		t.x = 77;
		t.y = 118;
		return t;
	};
	return Panel_ChuangDangSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Panel_MapSkin.exml'] = window.Panel_MapSkin = (function (_super) {
	__extends(Panel_MapSkin, _super);
	function Panel_MapSkin() {
		_super.call(this);
		this.skinParts = ["scroller","closeBtn","btnHero","btnItem"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.scroller_i(),this.closeBtn_i(),this.btnHero_i(),this.btnItem_i()];
	}
	var _proto = Panel_MapSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 126.6;
		t.scale9Grid = new egret.Rectangle(19,12,21,87);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "menubg_png";
		t.width = 720;
		t.x = 0;
		t.y = 130.4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 864;
		t.scale9Grid = new egret.Rectangle(41,12,561,457);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "module_bg_png";
		t.width = 720;
		t.x = 0;
		t.y = 242;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 854.85;
		t.width = 720;
		t.x = 0;
		t.y = 245.15;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 820;
		t.width = 720;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "按钮";
		t.skinName = "main.CloseBtnSkin";
		t.x = 608;
		t.y = 1168;
		return t;
	};
	_proto.btnHero_i = function () {
		var t = new eui.Button();
		this.btnHero = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.label = "普通副本";
		t.width = 136;
		t.x = 36;
		t.y = 175;
		return t;
	};
	_proto.btnItem_i = function () {
		var t = new eui.Button();
		this.btnItem = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.label = "精英副本";
		t.width = 136;
		t.x = 224;
		t.y = 175;
		return t;
	};
	return Panel_MapSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Panel_QianghuaSkin.exml'] = window.Panel_QianghuaSkin = (function (_super) {
	__extends(Panel_QianghuaSkin, _super);
	function Panel_QianghuaSkin() {
		_super.call(this);
		this.skinParts = ["imgBG","groupMap","closeBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.groupMap_i(),this.closeBtn_i()];
	}
	var _proto = Panel_QianghuaSkin.prototype;

	_proto.groupMap_i = function () {
		var t = new eui.Group();
		this.groupMap = t;
		t.height = 1440;
		t.width = 720;
		t.x = 0;
		t.y = -160;
		t.elementsContent = [this.imgBG_i()];
		return t;
	};
	_proto.imgBG_i = function () {
		var t = new eui.Image();
		this.imgBG = t;
		t.height = 1440;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dungeonMap1_jpg";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "按钮";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "main.CloseBtnSkin";
		t.x = 608;
		t.y = 0;
		return t;
	};
	return Panel_QianghuaSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Panel_RoleSkin.exml'] = window.Panle_RoleSkin = (function (_super) {
	__extends(Panle_RoleSkin, _super);
	function Panle_RoleSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","scroller"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.closeBtn_i(),this.scroller_i()];
	}
	var _proto = Panle_RoleSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1118;
		t.source = "homeBg3_jpg";
		t.width = 720;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "按钮";
		t.skinName = "main.CloseBtnSkin";
		t.x = 608;
		t.y = 6;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.height = 600;
		t.throwSpeed = 0;
		t.width = 720;
		t.x = 0;
		t.y = 257;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		return t;
	};
	return Panle_RoleSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Panel_ShopSkin.exml'] = window.Panel_ShopSkin = (function (_super) {
	__extends(Panel_ShopSkin, _super);
	function Panel_ShopSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","btn1","btn2","btn3","btn4","btn5","btn6","btn7","btn8","btn9","btn10"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.closeBtn_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img10_i(),this.btn1_i(),this.btn2_i(),this.btn3_i(),this.btn4_i(),this.btn5_i(),this.btn6_i(),this.btn7_i(),this.btn8_i(),this.btn9_i(),this.btn10_i()];
	}
	var _proto = Panel_ShopSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1280;
		t.source = "homeBg3_jpg";
		t.width = 720;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "按钮";
		t.skinName = "main.CloseBtnSkin";
		t.x = 608;
		t.y = 3;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 59;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 180;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 301;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 422;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 543;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 664;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 785;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 897;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 1019;
		return t;
	};
	_proto.img10_i = function () {
		var t = new eui.Image();
		this.img10 = t;
		t.source = "activityBtn_png";
		t.x = 138;
		t.y = 1139;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Button();
		this.btn1 = t;
		t.label = "图片特效1";
		t.x = 336;
		t.y = 85;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Button();
		this.btn2 = t;
		t.label = "图片特效2";
		t.x = 336;
		t.y = 208;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Button();
		this.btn3 = t;
		t.label = "图片特效3";
		t.x = 336;
		t.y = 330;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new eui.Button();
		this.btn4 = t;
		t.label = "图片特效4";
		t.x = 336;
		t.y = 453;
		return t;
	};
	_proto.btn5_i = function () {
		var t = new eui.Button();
		this.btn5 = t;
		t.label = "图片特效5";
		t.x = 336;
		t.y = 576;
		return t;
	};
	_proto.btn6_i = function () {
		var t = new eui.Button();
		this.btn6 = t;
		t.label = "图片特效6";
		t.x = 336;
		t.y = 698;
		return t;
	};
	_proto.btn7_i = function () {
		var t = new eui.Button();
		this.btn7 = t;
		t.label = "图片特效7";
		t.x = 336;
		t.y = 821;
		return t;
	};
	_proto.btn8_i = function () {
		var t = new eui.Button();
		this.btn8 = t;
		t.label = "图片特效8";
		t.x = 336;
		t.y = 925;
		return t;
	};
	_proto.btn9_i = function () {
		var t = new eui.Button();
		this.btn9 = t;
		t.label = "图片特效9";
		t.x = 336;
		t.y = 1050;
		return t;
	};
	_proto.btn10_i = function () {
		var t = new eui.Button();
		this.btn10 = t;
		t.label = "图片特效10";
		t.x = 336;
		t.y = 1170;
		return t;
	};
	return Panel_ShopSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Panel_ZhaoXianSkin.exml'] = window.Panel_ZhaoXianSkin = (function (_super) {
	__extends(Panel_ZhaoXianSkin, _super);
	function Panel_ZhaoXianSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.closeBtn_i(),this._Label1_i()];
	}
	var _proto = Panel_ZhaoXianSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1280;
		t.source = "homeBg3_jpg";
		t.width = 720;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "按钮";
		t.skinName = "main.CloseBtnSkin";
		t.x = 615;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.background = true;
		t.backgroundColor = 0x000000;
		t.height = 160;
		t.text = "目前自定义了三种，后续扩展";
		t.textAlign = "center";
		t.width = 554;
		t.x = 83;
		t.y = 380;
		return t;
	};
	return Panel_ZhaoXianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "resource/assets/ProgressBar/track.png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "resource/assets/ProgressBar/thumb.png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","resource/assets/RadioButton/radiobutton_select_up.png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","resource/assets/RadioButton/radiobutton_select_down.png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","resource/assets/RadioButton/radiobutton_select_disabled.png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "resource/assets/RadioButton/radiobutton_unselect.png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","resource/assets/ToggleSwitch/off.png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","resource/assets/ToggleSwitch/off.png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","resource/assets/ToggleSwitch/off.png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "resource/assets/ToggleSwitch/on.png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "resource/assets/ToggleSwitch/handle.png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "resource/assets/ScrollBar/roundthumb.png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "resource/assets/Slider/track.png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "resource/assets/Slider/thumb.png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/panel/BattleFinishPanel.exml'] = window.BattleFinishPanelSkin = (function (_super) {
	__extends(BattleFinishPanelSkin, _super);
	function BattleFinishPanelSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this.closeBtn_i()];
	}
	var _proto = BattleFinishPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.height = 334;
		t.scale9Grid = new egret.Rectangle(17,13,43,10);
		t.source = "tipsBg_png";
		t.width = 456;
		t.x = -28;
		t.y = -17;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "战斗胜利";
		t.textAlign = "center";
		t.textColor = 0xe2e024;
		t.width = 200;
		t.x = 100;
		t.y = 84.33;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "退出";
		t.x = 148.5;
		t.y = 173;
		return t;
	};
	return BattleFinishPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/ActivityBtnSkin.exml'] = window.main.ActivityBtnSkin = (function (_super) {
	__extends(ActivityBtnSkin, _super);
	function ActivityBtnSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("_Image1","source","activityBtn_png"),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
		];
	}
	var _proto = ActivityBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "activityBtn_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 24;
		t.text = "标签";
		t.textAlign = "center";
		t.textColor = 0x2EFF00;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 20;
		t.y = 20;
		return t;
	};
	return ActivityBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/KaiFuBtnSkin.exml'] = window.main.KaiFuBtnSkin = (function (_super) {
	__extends(KaiFuBtnSkin, _super);
	function KaiFuBtnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("_Image1","source","kaiFuBtn_png"),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("_Image1","source","kaiFuBtn_png"),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("_Image1","source","kaiFuBtn_png"),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
		];
	}
	var _proto = KaiFuBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "activityBtn_png";
		t.percentWidth = 100;
		return t;
	};
	return KaiFuBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/InfoBtnSkin.exml'] = window.main.InfoBtnSkin = (function (_super) {
	__extends(InfoBtnSkin, _super);
	function InfoBtnSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("_Image1","source","infoBtn_png"),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("_Image1","source","infoBtn_png"),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("_Image1","source","infoBtn_png"),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
		];
	}
	var _proto = InfoBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "infoBtn_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.italic = true;
		t.size = 24;
		t.text = "标签";
		t.textAlign = "center";
		t.textColor = 0x2EFF00;
		t.verticalCenter = 0;
		t.width = 110;
		t.x = 40;
		t.y = 40;
		return t;
	};
	return InfoBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/ActivityBarSkin.exml'] = window.ActivityBarSkin = (function (_super) {
	__extends(ActivityBarSkin, _super);
	function ActivityBarSkin() {
		_super.call(this);
		this.skinParts = ["activityBtn","kaiFuBtn","infoBtn"];
		
		this.height = 550;
		this.width = 120;
		this.elementsContent = [this._Image1_i(),this.activityBtn_i(),this.kaiFuBtn_i(),this.infoBtn_i()];
	}
	var _proto = ActivityBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "shuImg_png";
		t.x = 18;
		return t;
	};
	_proto.activityBtn_i = function () {
		var t = new eui.Button();
		this.activityBtn = t;
		t.label = "待续";
		t.skinName = "main.ActivityBtnSkin";
		t.x = 4;
		t.y = 128;
		return t;
	};
	_proto.kaiFuBtn_i = function () {
		var t = new eui.Button();
		this.kaiFuBtn = t;
		t.label = "待续";
		t.skinName = "main.KaiFuBtnSkin";
		t.x = 4;
		t.y = 266;
		return t;
	};
	_proto.infoBtn_i = function () {
		var t = new eui.Button();
		this.infoBtn = t;
		t.label = "待续";
		t.skinName = "main.InfoBtnSkin";
		t.x = 4;
		t.y = 403;
		return t;
	};
	return ActivityBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/BackpackBtnSkin.exml'] = window.main.BackpackBtnSkin = (function (_super) {
	__extends(BackpackBtnSkin, _super);
	function BackpackBtnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("_Image1","source","backpackBtn_png"),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
		];
	}
	var _proto = BackpackBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "backpackBtn_png";
		t.percentWidth = 100;
		return t;
	};
	return BackpackBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/ChuangDangBtnSkin.exml'] = window.main.ChuangDangBtnSkin = (function (_super) {
	__extends(ChuangDangBtnSkin, _super);
	function ChuangDangBtnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("_Image1","source","chuangDangBtn_png"),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
		];
	}
	var _proto = ChuangDangBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "chuangDangBtn_png";
		t.percentWidth = 100;
		return t;
	};
	return ChuangDangBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/RoleBtnSkin.exml'] = window.main.RoleBtnSkin = (function (_super) {
	__extends(RoleBtnSkin, _super);
	function RoleBtnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("_Image1","source","roleBtn_png"),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("_Image1","source","roleBtn_png"),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
		];
	}
	var _proto = RoleBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "roleBtn_png";
		t.percentWidth = 100;
		return t;
	};
	return RoleBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/QianghuaBtnSkin.exml'] = window.main.QianghuaBtnSkin = (function (_super) {
	__extends(QianghuaBtnSkin, _super);
	function QianghuaBtnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("_Image1","source","qianghuaBtn_png"),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
		];
	}
	var _proto = QianghuaBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "qianghuaBtn_png";
		t.percentWidth = 100;
		return t;
	};
	return QianghuaBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/ZhaoXianBtnSkin.exml'] = window.main.ZhaoXianBtnSkin = (function (_super) {
	__extends(ZhaoXianBtnSkin, _super);
	function ZhaoXianBtnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("_Image1","source","zhaoXianBtn_png"),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
		];
	}
	var _proto = ZhaoXianBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "zhaoXianBtn_png";
		t.percentWidth = 100;
		return t;
	};
	return ZhaoXianBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/ShopBtnSkin.exml'] = window.main.ShopBtnSkin = (function (_super) {
	__extends(ShopBtnSkin, _super);
	function ShopBtnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("_Image1","source","shopBtn_png"),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
		];
	}
	var _proto = ShopBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "shopBtn_png";
		t.percentWidth = 100;
		return t;
	};
	return ShopBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/MapBtnSkin.exml'] = window.main.MapBtnSkin = (function (_super) {
	__extends(MapBtnSkin, _super);
	function MapBtnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("_Image1","source","mapBtn_png"),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
		];
	}
	var _proto = MapBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "mapBtn_png";
		t.percentWidth = 100;
		return t;
	};
	return MapBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/FunctionBarSkin.exml'] = window.FunctionBarSkin = (function (_super) {
	__extends(FunctionBarSkin, _super);
	function FunctionBarSkin() {
		_super.call(this);
		this.skinParts = ["roleBtn","backpackBtn","qianghuaBtn","zhaoXianBtn","chuangDangBtn","shopBtn","mapBtn"];
		
		this.height = 120;
		this.width = 658;
		this.elementsContent = [this._Image1_i(),this.roleBtn_i(),this.backpackBtn_i(),this.qianghuaBtn_i(),this.zhaoXianBtn_i(),this.chuangDangBtn_i(),this.shopBtn_i(),this.mapBtn_i()];
	}
	var _proto = FunctionBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "hengImg_png";
		t.visible = false;
		t.width = 701;
		t.x = -22;
		t.y = 17;
		return t;
	};
	_proto.roleBtn_i = function () {
		var t = new eui.Button();
		this.roleBtn = t;
		t.enabled = true;
		t.height = 80;
		t.label = "Excel";
		t.skinName = "main.RoleBtnSkin";
		t.width = 80;
		t.x = 28;
		t.y = 19;
		return t;
	};
	_proto.backpackBtn_i = function () {
		var t = new eui.Button();
		this.backpackBtn = t;
		t.height = 80;
		t.label = "prox数据存取";
		t.skinName = "main.BackpackBtnSkin";
		t.width = 80;
		t.x = 117.33333333333333;
		t.y = 19;
		return t;
	};
	_proto.qianghuaBtn_i = function () {
		var t = new eui.Button();
		this.qianghuaBtn = t;
		t.height = 80;
		t.label = "protobuf演示";
		t.skinName = "main.QianghuaBtnSkin";
		t.width = 80;
		t.x = 206.66666666666666;
		t.y = 19;
		return t;
	};
	_proto.zhaoXianBtn_i = function () {
		var t = new eui.Button();
		this.zhaoXianBtn = t;
		t.height = 80;
		t.label = "按钮特效";
		t.skinName = "main.ZhaoXianBtnSkin";
		t.width = 80;
		t.x = 295.99999999999994;
		t.y = 19;
		return t;
	};
	_proto.chuangDangBtn_i = function () {
		var t = new eui.Button();
		this.chuangDangBtn = t;
		t.height = 80;
		t.label = "面板特效";
		t.skinName = "main.ChuangDangBtnSkin";
		t.width = 80;
		t.x = 385.33333333333326;
		t.y = 19;
		return t;
	};
	_proto.shopBtn_i = function () {
		var t = new eui.Button();
		this.shopBtn = t;
		t.height = 80;
		t.label = "图片特效";
		t.skinName = "main.ShopBtnSkin";
		t.width = 80;
		t.x = 474.6666666666666;
		t.y = 19;
		return t;
	};
	_proto.mapBtn_i = function () {
		var t = new eui.Button();
		this.mapBtn = t;
		t.height = 80;
		t.label = "提示特效";
		t.skinName = "main.MapBtnSkin";
		t.width = 80;
		t.x = 564;
		t.y = 19;
		return t;
	};
	return FunctionBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/MainBtnSkin.exml'] = window.main.MainBtnSkin = (function (_super) {
	__extends(MainBtnSkin, _super);
	function MainBtnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("_Image1","source","mainBtn_png"),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","x",6),
					new eui.SetProperty("_Image1","y",6),
					new eui.SetProperty("","width",112),
					new eui.SetProperty("","height",112)
				])
		];
	}
	var _proto = MainBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "mainBtn_png";
		t.percentWidth = 100;
		return t;
	};
	return MainBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/RoleInfoSkin.exml'] = window.RoleInfoSkin = (function (_super) {
	__extends(RoleInfoSkin, _super);
	function RoleInfoSkin() {
		_super.call(this);
		this.skinParts = ["imgHead"];
		
		this.height = 177;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.imgHead_i(),this._Image4_i()];
	}
	var _proto = RoleInfoSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.height = 123;
		t.scale9Grid = new egret.Rectangle(80,4,480,26);
		t.source = "titlebg_png";
		t.width = 720;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.fillMode = "scale";
		t.height = 51;
		t.source = "top_bg_png";
		t.width = 601;
		t.x = 119;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 120;
		t.source = "headicon_png";
		t.width = 120;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.imgHead_i = function () {
		var t = new eui.Image();
		this.imgHead = t;
		t.fillMode = "clip";
		t.height = 80;
		t.source = "head_bianshi_png";
		t.width = 80;
		t.x = 20;
		t.y = 11;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 17;
		t.scaleY = -1;
		t.source = "top_cutline_png";
		t.width = 720;
		t.x = 0;
		t.y = 129.5;
		return t;
	};
	return RoleInfoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/main/MainUISkin.exml'] = window.MainUISkin = (function (_super) {
	__extends(MainUISkin, _super);
	function MainUISkin() {
		_super.call(this);
		this.skinParts = ["activityBar","functionBar","mainBtn","roleInfo"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.activityBar_i(),this.functionBar_i(),this.mainBtn_i(),this.roleInfo_i()];
	}
	var _proto = MainUISkin.prototype;

	_proto.activityBar_i = function () {
		var t = new game.ActivityBar();
		this.activityBar = t;
		t.skinName = "ActivityBarSkin";
		t.visible = false;
		t.x = 600;
		t.y = 660;
		return t;
	};
	_proto.functionBar_i = function () {
		var t = new game.FunctionBar();
		this.functionBar = t;
		t.skinName = "FunctionBarSkin";
		t.x = -12.16;
		t.y = 1160;
		return t;
	};
	_proto.mainBtn_i = function () {
		var t = new eui.Button();
		this.mainBtn = t;
		t.bottom = 20;
		t.height = 80;
		t.label = "按钮";
		t.skinName = "main.MainBtnSkin";
		t.width = 80;
		t.x = 640;
		return t;
	};
	_proto.roleInfo_i = function () {
		var t = new game.RoleInfo();
		this.roleInfo = t;
		t.skinName = "RoleInfoSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return MainUISkin;
})(eui.Skin);