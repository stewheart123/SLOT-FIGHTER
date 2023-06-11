import { Step } from "./Step";

export class StepOne extends Step {
    override isComplete = false;

    override start(signal:any): void {
        console.log('overridden step started');
        console.log('overridden step ended');
        this.isComplete = true;
        signal();
       }
}