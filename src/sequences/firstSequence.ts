/**
 * Just a test sequence
 */
import { ISequence } from "./ISequence";
import { Step } from "../steps/Step";
import { StepOne } from "../steps/StepOne";
import { Signal } from "signals";
import stateChanger from "../stateChanger/stateChanger";
export class FirstSequence implements ISequence {
  step = new Step();
  stepOne = new StepOne();

  steps: Step[] = [
    this.step,
     this.stepOne
  ];

  sequenceSignal: Signal<any> = new Signal();

  initialiseSequence(): void {
    console.log('initialise seq');
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
    stateChanger.stateChange("loadingScreenState");
  }
}
