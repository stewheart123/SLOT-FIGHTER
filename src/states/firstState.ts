import { FirstSequence } from "../sequences/firstSequence";

export class FirstState {
    
    firstSquence = new FirstSequence();
    startSequence() :void {
        this.firstSquence.initialiseSequence();
    }
}