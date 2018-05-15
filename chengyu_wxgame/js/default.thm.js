var egret = window.egret;window.skins={};
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
generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","BattleScene":"resource/eui_skins/BattleScene.exml","game.Item_HeroList":"resource/eui_skins/Item_HeroList.exml","game.Item_ItemList":"resource/eui_skins/Item_ItemList.exml","game.Item_DungeonList":"resource/eui_skins/Item_DungeonList.exml","game.Item_Hero":"resource/eui_skins/Item_Hero.exml","game.Item_HeroHeadList":"resource/eui_skins/Item_HeroHeadList.exml"}
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/CloseBtnSkin.exml'] = window.main.CloseBtnSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/HomeCitySkin.exml'] = window.HomeCitySkin = (function (_super) {
	__extends(HomeCitySkin, _super);
	function HomeCitySkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = HomeCitySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1280;
		t.source = "";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return HomeCitySkin;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainBtnSkin.exml'] = window.main.MainBtnSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainUISkin.exml'] = window.MainUISkin = (function (_super) {
	__extends(MainUISkin, _super);
	function MainUISkin() {
		_super.call(this);
		this.skinParts = ["mainBG","btn_new","btn_home","mainBtn","group_over","boxTop","boxBottom","cube","starTop","starBottom","lable_starNum","group_game"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.mainBG_i(),this.group_over_i(),this.group_game_i()];
	}
	var _proto = MainUISkin.prototype;

	_proto.mainBG_i = function () {
		var t = new eui.Image();
		this.mainBG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.source = "module_bg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_over_i = function () {
		var t = new eui.Group();
		this.group_over = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.btn_new_i(),this.btn_home_i(),this.mainBtn_i()];
		return t;
	};
	_proto.btn_new_i = function () {
		var t = new eui.Image();
		this.btn_new = t;
		t.height = 65;
		t.source = "chongxinkaishi_png";
		t.verticalCenter = 0;
		t.width = 90;
		t.x = 165;
		return t;
	};
	_proto.btn_home_i = function () {
		var t = new eui.Image();
		this.btn_home = t;
		t.height = 65;
		t.source = "fanhuizhuye_png";
		t.verticalCenter = 0;
		t.width = 90;
		t.x = 333;
		return t;
	};
	_proto.mainBtn_i = function () {
		var t = new eui.Button();
		this.mainBtn = t;
		t.height = 80;
		t.label = "按钮";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "main.MainBtnSkin";
		t.visible = false;
		t.width = 80;
		t.x = 529;
		t.y = 244;
		return t;
	};
	_proto.group_game_i = function () {
		var t = new eui.Group();
		this.group_game = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.boxTop_i(),this.boxBottom_i(),this.cube_i(),this._Image1_i(),this.starTop_i(),this.starBottom_i(),this._Image2_i(),this.lable_starNum_i()];
		return t;
	};
	_proto.boxTop_i = function () {
		var t = new eui.Image();
		this.boxTop = t;
		t.height = 113;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bar2-sheet1_png";
		t.width = 326;
		t.x = 197;
		t.y = 185;
		return t;
	};
	_proto.boxBottom_i = function () {
		var t = new eui.Image();
		this.boxBottom = t;
		t.height = 113;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bar2-sheet1_png";
		t.width = 326;
		t.x = 197;
		t.y = 952;
		return t;
	};
	_proto.cube_i = function () {
		var t = new eui.Image();
		this.cube = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "p2-sheet1_png";
		t.width = 80;
		t.x = 360;
		t.y = 617;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 20;
		t.x = 342;
		t.y = 625;
		return t;
	};
	_proto.starTop_i = function () {
		var t = new eui.Image();
		this.starTop = t;
		t.height = 60;
		t.source = "xingxing_png";
		t.visible = false;
		t.width = 60;
		t.x = 330;
		t.y = 303;
		return t;
	};
	_proto.starBottom_i = function () {
		var t = new eui.Image();
		this.starBottom = t;
		t.height = 60;
		t.source = "xingxing_png";
		t.width = 60;
		t.x = 330;
		t.y = 889;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.source = "xingxing_png";
		t.width = 60;
		t.x = 80;
		t.y = 57;
		return t;
	};
	_proto.lable_starNum_i = function () {
		var t = new eui.Label();
		this.lable_starNum = t;
		t.fontFamily = "Times";
		t.height = 50;
		t.size = 45;
		t.text = "1000";
		t.textAlign = "left";
		t.textColor = 0xed9f2a;
		t.verticalAlign = "middle";
		t.width = 159;
		t.x = 156;
		t.y = 67;
		return t;
	};
	return MainUISkin;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/Panel_RoleSkin.exml'] = window.Panle_RoleSkin = (function (_super) {
	__extends(Panle_RoleSkin, _super);
	function Panle_RoleSkin() {
		_super.call(this);
		this.skinParts = ["scroller","img_item_right_ring","img_item_left_ring","img_item_weapon","img_item_armor","img_item_necklace","img_item_helmet","label_zizhi","label_hp","label_atk","label_def_atk","label_jiban1","label_jiban2","label_jiban3","label_jiban4","label_def_magic","group_heroInfo","img_leftBtn","img_rightBtn","scroller_head","group_top","closeBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.scroller_i(),this.img_item_right_ring_i(),this._Image3_i(),this.img_item_left_ring_i(),this.img_item_weapon_i(),this.img_item_armor_i(),this.img_item_necklace_i(),this.img_item_helmet_i(),this.group_heroInfo_i(),this.group_top_i(),this.closeBtn_i()];
	}
	var _proto = Panle_RoleSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1110;
		t.source = "mainuibg_png";
		t.width = 720;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 1110;
		t.source = "gray_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
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
	_proto.img_item_right_ring_i = function () {
		var t = new eui.Image();
		this.img_item_right_ring = t;
		t.height = 93;
		t.source = "ring_png";
		t.width = 90;
		t.x = 606;
		t.y = 484;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.source = "item_1101016_png";
		t.width = 90;
		t.x = 606;
		t.y = 484;
		return t;
	};
	_proto.img_item_left_ring_i = function () {
		var t = new eui.Image();
		this.img_item_left_ring = t;
		t.height = 93;
		t.source = "ring_png";
		t.width = 90;
		t.x = 606;
		t.y = 723;
		return t;
	};
	_proto.img_item_weapon_i = function () {
		var t = new eui.Image();
		this.img_item_weapon = t;
		t.height = 93;
		t.source = "weapon_png";
		t.width = 90;
		t.x = 40;
		t.y = 723;
		return t;
	};
	_proto.img_item_armor_i = function () {
		var t = new eui.Image();
		this.img_item_armor = t;
		t.height = 93;
		t.source = "armor_png";
		t.width = 90;
		t.x = 40;
		t.y = 484;
		return t;
	};
	_proto.img_item_necklace_i = function () {
		var t = new eui.Image();
		this.img_item_necklace = t;
		t.height = 93;
		t.source = "necklace_png";
		t.width = 90;
		t.x = 606;
		t.y = 245;
		return t;
	};
	_proto.img_item_helmet_i = function () {
		var t = new eui.Image();
		this.img_item_helmet = t;
		t.height = 93;
		t.source = "helmet_png";
		t.width = 90;
		t.x = 40;
		t.y = 245;
		return t;
	};
	_proto.group_heroInfo_i = function () {
		var t = new eui.Group();
		this.group_heroInfo = t;
		t.height = 259;
		t.width = 720;
		t.x = 0;
		t.y = 859;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Label1_i(),this._Image8_i(),this._Label2_i(),this.label_zizhi_i(),this._Label3_i(),this.label_hp_i(),this._Label4_i(),this.label_atk_i(),this._Label5_i(),this.label_def_atk_i(),this._Label6_i(),this.label_jiban1_i(),this.label_jiban2_i(),this.label_jiban3_i(),this.label_jiban4_i(),this.label_def_magic_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 257;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tableBg_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cell9s_png";
		t.width = 350;
		t.x = 6;
		t.y = 77.00000000000011;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 156;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cell9s_png";
		t.width = 350;
		t.x = 365;
		t.y = 77.00000000000011;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line2_png";
		t.width = 232;
		t.x = 70;
		t.y = 109.00000000000011;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "羁绊";
		t.textColor = 0x282213;
		t.width = 74;
		t.x = 149;
		t.y = 105.00000000000011;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 37;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "input_bg_png";
		t.width = 266;
		t.x = 408;
		t.y = 91.00000000000011;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 26;
		t.text = "资质:";
		t.x = 421;
		t.y = 99;
		return t;
	};
	_proto.label_zizhi_i = function () {
		var t = new eui.Label();
		this.label_zizhi = t;
		t.bold = true;
		t.size = 26;
		t.text = "1000";
		t.width = 107;
		t.x = 514;
		t.y = 99;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 26;
		t.text = "生命:";
		t.textColor = 0xf48155;
		t.width = 68;
		t.x = 414;
		t.y = 142;
		return t;
	};
	_proto.label_hp_i = function () {
		var t = new eui.Label();
		this.label_hp = t;
		t.bold = true;
		t.size = 26;
		t.text = "1000";
		t.textColor = 0x070000;
		t.width = 77;
		t.x = 479;
		t.y = 142;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 26;
		t.text = "攻击:";
		t.textColor = 0xf48155;
		t.width = 68;
		t.x = 557;
		t.y = 142;
		return t;
	};
	_proto.label_atk_i = function () {
		var t = new eui.Label();
		this.label_atk = t;
		t.bold = true;
		t.size = 26;
		t.text = "1000";
		t.textColor = 0x070000;
		t.width = 77;
		t.x = 626;
		t.y = 142;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 26;
		t.text = "物防:";
		t.textColor = 0xf48155;
		t.width = 68;
		t.x = 414;
		t.y = 187;
		return t;
	};
	_proto.label_def_atk_i = function () {
		var t = new eui.Label();
		this.label_def_atk = t;
		t.bold = true;
		t.size = 26;
		t.text = "1000";
		t.textColor = 0x070000;
		t.width = 77;
		t.x = 479;
		t.y = 187;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 26;
		t.text = "法防:";
		t.textColor = 0xf48155;
		t.width = 68;
		t.x = 557;
		t.y = 187;
		return t;
	};
	_proto.label_jiban1_i = function () {
		var t = new eui.Label();
		this.label_jiban1 = t;
		t.bold = true;
		t.size = 26;
		t.text = "羁绊1";
		t.textColor = 0xF48155;
		t.width = 120;
		t.x = 60.36;
		t.y = 142;
		return t;
	};
	_proto.label_jiban2_i = function () {
		var t = new eui.Label();
		this.label_jiban2 = t;
		t.bold = true;
		t.size = 26;
		t.text = "羁绊2";
		t.textColor = 0xF48155;
		t.width = 120;
		t.x = 203.36;
		t.y = 142;
		return t;
	};
	_proto.label_jiban3_i = function () {
		var t = new eui.Label();
		this.label_jiban3 = t;
		t.bold = true;
		t.size = 26;
		t.text = "羁绊3";
		t.textColor = 0xF48155;
		t.width = 120;
		t.x = 60.36;
		t.y = 187;
		return t;
	};
	_proto.label_jiban4_i = function () {
		var t = new eui.Label();
		this.label_jiban4 = t;
		t.bold = true;
		t.size = 26;
		t.text = "羁绊4";
		t.textColor = 0xF48155;
		t.width = 120;
		t.x = 203.36;
		t.y = 187;
		return t;
	};
	_proto.label_def_magic_i = function () {
		var t = new eui.Label();
		this.label_def_magic = t;
		t.bold = true;
		t.size = 26;
		t.text = "1000";
		t.textColor = 0x070000;
		t.width = 77;
		t.x = 626;
		t.y = 187;
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.height = 205;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this.img_leftBtn_i(),this.img_rightBtn_i(),this.scroller_head_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scaleY = -1;
		t.source = "top_cutline_png";
		t.width = 720;
		t.x = 0;
		t.y = 205;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scaleY = 1;
		t.source = "top_cutline_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_leftBtn_i = function () {
		var t = new eui.Image();
		this.img_leftBtn = t;
		t.height = 110;
		t.scaleX = -1;
		t.source = "right_dr_png";
		t.width = 80;
		t.x = 90;
		t.y = 45;
		return t;
	};
	_proto.img_rightBtn_i = function () {
		var t = new eui.Image();
		this.img_rightBtn = t;
		t.height = 110;
		t.scaleX = 1;
		t.source = "right_dr_png";
		t.width = 80;
		t.x = 632;
		t.y = 45;
		return t;
	};
	_proto.scroller_head_i = function () {
		var t = new eui.Scroller();
		this.scroller_head = t;
		t.height = 115;
		t.width = 506;
		t.x = 111;
		t.y = 50;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
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
	return Panle_RoleSkin;
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
})(eui.Skin);