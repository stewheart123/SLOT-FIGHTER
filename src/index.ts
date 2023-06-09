import { Application } from 'pixi.js';
import {LoaderScene} from "./loaderScene";

const loaderScene = new LoaderScene(window.innerWidth, window.innerHeight );

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x000000,
	width: window.innerWidth,
	height: window.innerHeight
});


app.stage.addChild(loaderScene);
app.stage.addChild(loaderScene.aSprite);
