import { UIActionType } from "./action";

const initialState = {
  loading: false,
  error: null,
};

function loadingReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UIActionType.LOADING_START:
      return { ...state, loading: true, error: null };
    case UIActionType.LOADING_DONE:
      return { ...state, loading: false };
    case UIActionType.LOADING_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default loadingReducer;
