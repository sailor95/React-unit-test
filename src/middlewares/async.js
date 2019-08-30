export default ({ dispatch }) => next => action => {
  // Check if action has promise on its payload

  // If it does, wait for it to resolve

  // If it does not, sent to next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // We want to wait for the promise to resolve and then 
  // create a new action with that data and dispatch it
  action.payload.then(function (response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
}

