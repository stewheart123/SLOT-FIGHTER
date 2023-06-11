import { ISequence } from "./ISequence";
import { Step } from "../steps/Step";
//import { StepOne } from "../steps/StepOne";
import { Signal } from "signals";

export class FirstSequence implements ISequence {
  step = new Step();
  //stepOne = new StepOne();

  steps: Step[] = [
    this.step,
    // this.stepOne
  ];

  sequenceSignal: Signal<any> = new Signal();

  initialiseSequence(): void {
    this.sequenceSignal.add(() => {
        this.startSequence();
    });
   // console.log(this.sequenceSignal);
    this.startSequence();
  }


  startSequence(): void {
    console.log('start seq');
    for (let x = 0; x < this.steps.length; x++) {
      if (this.steps[x].isComplete === false) {
        this.steps[x].start(this.sequenceSignal);
      }
    }
    this.stateChange();
  }
  stateChange(): void {
    console.log("STATE change");
  }
}
