/**
 * makes instances of all components, 
 * exports an instance of the game
 */

import { FirstState } from "../states/firstState";


export class Bootstrapper {
 firstState = new FirstState();
 public start() : void {
 this.firstState.startSequence();

 }
}