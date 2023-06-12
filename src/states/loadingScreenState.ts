import { LoadingScreenSequence } from "../sequences/loadingScreenSequence";

export class LoadingScreenState {
    
    loadingScreenSequence = new LoadingScreenSequence();
    
    public startSequence() :void {
        this.loadingScreenSequence.initialiseSequence();
    }
}