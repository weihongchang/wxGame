/**
 * 影片剪辑基类
 * @author chenkai
 * @since 2017/10/16
 */
class BaseMovieClip extends egret.MovieClip{
    public constructor() {
        super();
    }
    
    public mcDataFactory:egret.MovieClipDataFactory;
    /**
     * @param dataKey json配置文件
     * @param textureKey png纹理集
     * @param movieClipName 影片剪辑名
     */
    public config(dataKey:string, textureKey:string, movieClipName:string){
        let data = RES.getRes(dataKey);
        let texture = RES.getRes(textureKey);
        this.mcDataFactory = new egret.MovieClipDataFactory(data, texture);
        this.movieClipData = this.mcDataFactory.generateMovieClipData(movieClipName);
        
        
    }

    /**隐藏 */
    public hide(){
        this.parent && this.parent.removeChild(this);
    }

    /**销毁 */
    public destoryMe(){
        this.stop();
        this.hide();
    }
}