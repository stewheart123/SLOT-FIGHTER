import { ISequence } from "./ISequence";
import { Signal } from "signals";
import { LoadScreenStep } from "../steps/loadScreenStep";
import { Step } from "../steps/Step";

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
   // console.log(this.sequenceSignal);
    this.startSequence();
  }


  startSequence(): void {
    console.log('start seq');
    for (let x = 0; x < this.steps.length; x++) {
      if (this.steps[x].isComplete === false) {
        this.steps[x].start(this.sequenceSignal);
        return;
      }
    }
    this.stateChange();
  }
  stateChange(): void {
    console.log("END OF SEQUENCE");
  }
}
