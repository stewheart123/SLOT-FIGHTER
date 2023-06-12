import { Step } from "./Step";
import appProps from "../models/App";
import { Graphics, Container, Assets } from "pixi.js";
import { Signal } from "signals";
import liveComponents from "../models/LiveComponents";

import { manifest } from "../AssetManifest";
export class LoadScreenStep extends Step {
  override isComplete = false;
  public loadedAssets: any;
  public loaderBarFill = new Graphics()

  override start(signal: Signal<any>): void {
    if (liveComponents.first) {
        liveComponents.first.destroy();
        liveComponents.first = undefined;
      }
    const loadingContainer = new Container();
     // lets make a loader graphic:
    const loaderBarWidth = appProps.theApp.screen.width ; // just an auxiliar variable

    // the fill of the bar.
    this.loaderBarFill.beginFill(0xff7a00, 1);
    this.loaderBarFill.drawRect(0, 0, loaderBarWidth, 25);
    this.loaderBarFill.endFill();
    this.loaderBarFill.scale.x = 0; // we draw the filled bar and with scale we set the %

    // The border of the bar.
    let loaderBarProgress = new Graphics();
    loaderBarProgress.beginFill(0x332e2e, 1);
    loaderBarProgress.endFill();
    loaderBarProgress.drawRect(0, 0, loaderBarWidth, 25);

    // Now we keep the border and the fill in a container so we can move them together.
    let loaderBar = new Container();
    loaderBar.addChild(this.loaderBarFill);
    loaderBar.addChild(loaderBarProgress);
    //Looks complex but this just centers the bar on screen.
    //loaderBar.position.x = appProps.theApp.screen.width / 2;
    //loadingContainer.pivot.set(0.5, 0.5);
    loadingContainer.position.x = (appProps.theApp.screen.width / 2) -( loaderBarWidth / 2);
    loadingContainer.position.y =
      (appProps.theApp.screen.height - loaderBar.height) / 2;
    //loaderBar.pivot.set(0.5);
      loadingContainer.addChild(loaderBar);
      loadingContainer.addChild(this.loaderBarFill);
    appProps.theApp.stage.addChild(loadingContainer);
    liveComponents.loadScreen = loadingContainer;


    // Start loading!
    this.initializeLoader().then(() => {
        // Remember that constructors can't be async, so we are forced to use .then(...) here!
        //this.gameLoaded();
        
        this.isComplete = true;
        if (liveComponents.loadScreen) {
            liveComponents.loadScreen.destroy();
            liveComponents.loadScreen = undefined;
        }
        signal.dispatch();
       
    });
  }
  private async initializeLoader(): Promise<void> {
      await Assets.init({ manifest: manifest });
      const bundleIds = manifest.bundles.map((bundle) => bundle.name);
      console.log(bundleIds);
      this.loadedAssets = bundleIds;
  
      // The second parameter for `loadBundle` is a function that reports the download progress!
      await Assets.loadBundle(bundleIds, this.downloadProgress.bind(this));
    }
  
    private downloadProgress(progressRatio: number): void {
      // progressRatio goes from 0 to 1, so set it to scale
      this.loaderBarFill.scale.x = progressRatio;
    }
}
