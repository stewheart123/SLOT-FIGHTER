import { IStep } from "./IStep";
import { Signal } from "signals";

export class Step implements IStep {
  public isComplete = false;

  public start(signal: Signal<any>): void {
    console.log("step started");
    console.log("step ended");
    this.isComplete = true;
    signal.dispatch();
  }
}
