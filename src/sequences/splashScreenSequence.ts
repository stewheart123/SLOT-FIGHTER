import { ISequence } from "./ISequence";
import { Signal } from "signals";
import { StepSplashScreen } from "../steps/StepSplashScreen";
import { Step } from "../steps/Step";

export class SplashScreenSequence implements ISequence {
  stepSplashScreen = new StepSplashScreen();

  steps: Step[] = [
    this.stepSplashScreen,
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
    //replace line below with next state
    console.log("END OF SEQUENCE");
  }
}
