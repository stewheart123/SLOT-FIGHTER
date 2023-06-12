import stateChanger from "../stateChanger/stateChanger";
/**
 * makes instances of all components,
 * exports an instance of the game
 * 
 * to use - firstly make your steps and sequences, 
 * then import them here like the example below
 * 
 * then set the state changer object, adding in a  property for each state we make i.e. first state, second state... 
 * 
 * we then need to call the stateChange anywhere where we reach the end of a sequence...

 */

import { FirstState } from "../states/firstState";

export class Bootstrapper {
  //instantiate more states here as we make them
  firstState = new FirstState();

  public start(): void {
    //add the state instance startSequence method the the state changer object here
    stateChanger.firstState = this.firstState.startSequence();

    stateChanger.stateChange("firstState");
  }
}
