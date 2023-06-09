import { Container, Graphics, Assets, Sprite } from "pixi.js";
import { manifest } from "./AssetManifest";

export class LoaderScene extends Container {

    // for making our loader graphics...
    private loaderBar: Container;
    private loaderBarProgress: Graphics;
    private loaderBarFill: Graphics;
    public loadedAssets : any;
    public aSprite : any;
    public backgroundImage : any;
    public insertCoinButton : any;

    constructor(screenWidth: number, screenHeight: number) {
        super();

        // lets make a loader graphic:
        const loaderBarWidth = screenWidth * 0.25; // just an auxiliar variable

        // the fill of the bar.
        let loaderBarFill = new Graphics();
        loaderBarFill.beginFill(0xFF7A00, 1);
        loaderBarFill.drawRect(0, 0, loaderBarWidth, 25);
        loaderBarFill.endFill();
        loaderBarFill.scale.x = 0; // we draw the filled bar and with scale we set the %
        this.loaderBarFill = loaderBarFill;

        // The border of the bar.
        let loaderBarProgress = new Graphics();
        loaderBarProgress.beginFill(0x332E2E, 1);
        loaderBarProgress.endFill();
        loaderBarProgress.drawRect(0, 0, loaderBarWidth, 25);
        this.loaderBarProgress = loaderBarProgress;

        // Now we keep the border and the fill in a container so we can move them together.
        let loaderBar = new Container();
        loaderBar.addChild(this.loaderBarFill);
        loaderBar.addChild(this.loaderBarProgress);
        //Looks complex but this just centers the bar on screen.
        loaderBar.position.x = (screenWidth / 2 ); 
        loaderBar.position.y = (screenHeight - loaderBar.height) / 2;
        loaderBar.pivot.set(0.5);
        this.loaderBar = loaderBar;
        this.addChild(this.loaderBar);

        // Start loading!
        this.initializeLoader().then(() => {
            // Remember that constructors can't be async, so we are forced to use .then(...) here!
            this.gameLoaded();
            
        })
    }

    private async initializeLoader(): Promise<void>
    {
          await Assets.init({ manifest: manifest });
        const bundleIds =  manifest.bundles.map(bundle => bundle.name);
        console.log(bundleIds);
        this.loadedAssets = bundleIds;

        // The second parameter for `loadBundle` is a function that reports the download progress!
        await Assets.loadBundle(bundleIds, this.downloadProgress.bind(this));
    }

    private downloadProgress(progressRatio: number): void {
        // progressRatio goes from 0 to 1, so set it to scale
        this.loaderBarFill.scale.x = progressRatio;
    }

    private gameLoaded(): void {
        // Our game finished loading!

        // Let's remove our loading bar
        this.removeChild(this.loaderBar);


        this.aSprite = Sprite.from("foregroundImage");
        this.aSprite.width = window.innerWidth;
        this.aSprite.height= window.innerHeight;
        this.backgroundImage = Sprite.from("backgroundImage");
        this.backgroundImage.width = window.innerWidth;
        this.backgroundImage.height = window.innerHeight;
        this.addChild(this.backgroundImage);
        this.addChild(this.aSprite);

        const insertCoinButton = new Graphics();
        insertCoinButton.beginFill(0xFF7A00, 1);
        insertCoinButton.drawRect((window.innerWidth / 2) - 150, window.innerHeight / 1.5, 300, 100);
        insertCoinButton.endFill();
        insertCoinButton.interactive = true;
        this.insertCoinButton = insertCoinButton;
        this.addChild(insertCoinButton);
        

    }
}