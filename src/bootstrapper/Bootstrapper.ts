/**
 * makes instances of all components, 
 * exports an instance of the game
 */

import { FirstState } from "../states/firstState";

const firstState = new FirstState();

firstState.startSequence();