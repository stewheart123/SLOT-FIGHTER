import { FirstState } from "../states/firstState";
import { LoadingScreenState } from "../states/loadingScreenState";

const firstState = new FirstState();
const loadingScreenState = new LoadingScreenState();
const stateChanger = {
    stateChange: changeTheState.bind(this),
  };

  function changeTheState(stateId: string) {
    switch (stateId) {
      case "firstState":
        firstState.startSequence();
        break;
        case "loadingScreenState":
          loadingScreenState.startSequence();
          break;
      default:
        //
        console.log('default reached');
        break;
    }
  }
export default stateChanger