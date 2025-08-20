const UIActionType = {
  LOADING_START: "UI/LOADING_START",
  LOADING_DONE: "UI/LOADING_DONE",
  LOADING_ERROR: "UI/LOADING_ERROR",
};

function loadingStart() {
  return { type: UIActionType.LOADING_START };
}

function loadingDone() {
  return { type: UIActionType.LOADING_DONE };
}

function loadingError(error) {
  return { type: UIActionType.LOADING_ERROR, payload: error };
}

export { UIActionType, loadingStart, loadingDone, loadingError };
