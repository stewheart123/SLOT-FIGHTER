import { Step } from "./Step";
import  appProps  from "../models/App";
import { Graphics } from "pixi.js";
import { Signal } from "signals";
export class StepOne extends Step {
    override isComplete = false;

    override start(signal:Signal<any>): void {
        let loaderBarFill = new Graphics();
        loaderBarFill.beginFill(0xff7a00, 1);
        loaderBarFill.drawRect(0, 0, 600, 25);
        loaderBarFill.endFill();
        appProps.theApp.stage.addChild(loaderBarFill);
        console.log('overridden step started');
        console.log('overridden step ended');
        this.isComplete = true;
        signal.dispatch();
       }
}