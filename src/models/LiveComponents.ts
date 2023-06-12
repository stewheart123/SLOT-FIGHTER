/**
 * Live components is used to make note of containers, used like scenes
 * Always wrap a scene in a component and add it to this object. 
 * Destroy the object and make the value undefined in this object
 */

const liveComponents: { first: undefined | any, loadScreen: undefined | any, splashScreen: undefined | any } = {
    first: undefined,
    loadScreen: undefined,
    splashScreen: undefined
  };
  
  export default liveComponents;
  