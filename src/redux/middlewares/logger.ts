const logger = (state) => (next) => (action) => {
  /*  console.log("state.getState():", state.getState());
  console.log("action:", action);
  return next(action); */

  console.group("action.type:", action.type);
  console.info("Prev State:", state.getState());
  const result = next(action);
  console.info("Next State:", state.getState());
  console.groupEnd();
  return result;
};

export default logger;

/* I have watched the video of the module (24-4) till 8:49 mins */

/* 
function logger(state){
    return (next) => {
        return (action) => {
            // expression
        }
    }
}

*/
