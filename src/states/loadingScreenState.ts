import { LoadingScreenSequence } from "../sequences/loadingScreenSequence";

export class LoadingScreenState {
    
    loadingScreenSequence = new LoadingScreenSequence();
    
    public startSequence() :void {
        console.log('start sequence reached');
        this.loadingScreenSequence.initialiseSequence();
    }
}