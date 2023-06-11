import { FirstSequence } from "../sequences/firstSequence";

export class FirstState {
    
    firstSquence = new FirstSequence();
    
    public startSequence() :void {
        this.firstSquence.initialiseSequence();
    }
}