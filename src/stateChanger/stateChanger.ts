const stateChanger = {
    stateChange: changeTheState.bind(this),
    firstState : undefined as undefined | void 
  };

  function changeTheState(stateId: string) {
    switch (stateId) {
      case "firstState":
        stateChanger;
        break;
      default:
        //
        break;
    }
  }
export default stateChanger