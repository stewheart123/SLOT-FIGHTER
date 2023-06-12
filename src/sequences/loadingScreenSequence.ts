import { ISequence } from "./ISequence";
import { Signal } from "signals";
import { LoadScreenStep } from "../steps/loadScreenStep";
import { Step } from "../steps/Step";
import stateChanger from "../stateChanger/stateChanger";

export class LoadingScreenSequence implements ISequence {
  loadScreenStep = new LoadScreenStep();

  steps: Step[] = [
    this.loadScreenStep,
  ];

  sequenceSignal: Signal<any> = new Signal();

  initialiseSequence(): void {
    this.sequenceSignal.add(() => {
        this.startSequence();
    });
    this.startSequence();
  }


  startSequence(): void {
    for (let x = 0; x < this.steps.length; x++) {
      if (this.steps[x].isComplete === false) {
        this.steps[x].start(this.sequenceSignal);
        return;
      }
    }
    this.stateChange();
  }
  stateChange(): void {
    stateChanger.stateChange("splashScreenState");
  }
}
