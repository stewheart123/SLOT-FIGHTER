import { SplashScreenSequence } from "../sequences/splashScreenSequence";

export class SplashScreenState {
    
    splashScreenSequence = new SplashScreenSequence();
    
    public startSequence() :void {
        this.splashScreenSequence.initialiseSequence();
    }
}