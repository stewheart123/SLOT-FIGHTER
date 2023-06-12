import { Bootstrapper } from "./bootstrapper/Bootstrapper";
import { Application } from 'pixi.js';

import  appProps  from "./models/App";
// import {LoaderScene} from "./loaderScene";

// const loaderScene = new LoaderScene(window.innerWidth, window.innerHeight );
//sets instance of an app to an object property, not a class - this is so we can reference the same value everywhere,
//just import the object 'app' and  addChild to it anywhere!
appProps.theApp = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x111926,
	width: 1056,
	height: 609
});

const bootstrapper = new Bootstrapper();
bootstrapper.start();

//this could be similar to sequencer, runs through all the states in a loop?
// or maybe its just called from the steps in each sequence and the state changer?