import { Container, Sprite, Assets } from 'pixi.js';

export class AssetLoader {
  
    loadedScreenAssets : null | any = null;
    
    async assetsAndLoadingScreen() {
        const assetManifest = {
          bundles: [{
            name: 'load-screen',
            assets: [
                {
                    name: 'loadingImage',
                    srcs: '/static/load-image.jpg',
                },
            ],
        },
        {
            name: 'splash-screen',
            assets: [
                {
                    name: 'splashBackground',
                    srcs: '/static/into-screen-background.jpg',
                }
            ],
        }], // this is object from AssetManifest.js
        };
    
        await Assets.init({ manifest: assetManifest });
        // bundles can be loaded in the background too!
        //PIXI.Assets.backgroundLoadBundle(['load-screen', 'game-screen']);
    
        this.makeLoadScreen();
      }


    async makeLoadScreen() : Promise<any> {
        await Assets.loadBundle("load-screen");
        return new Promise<any>((resolve) => {
            const loadingContainer = new Container();
            // get the assets from the load screen bundle.
            // If the bundle was already downloaded the promise resolves instantly!
          
            // create a new Sprite from the resolved loaded texture
            const imageWhileYouWait = new Sprite(this.loadedScreenAssets.loadingImage);
            imageWhileYouWait.anchor.set(0.5);
            imageWhileYouWait.x = window.innerWidth / 2;
            imageWhileYouWait.y = window.innerHeight / 2;
            imageWhileYouWait.width = window.innerWidth / 4;
            imageWhileYouWait.height = window.innerHeight / 4;
          //   imageWhileYouWait.height = utility.autoRatioHeight(
          //     this.loadedScreenAssets.loadingImage.width,
          //     this.loadedScreenAssets.loadingImage.height,
          //     app.screen.width / 1.5
          //   );
            loadingContainer.addChild(imageWhileYouWait);
            resolve(loadingContainer);
        });
    }
    

  }
  