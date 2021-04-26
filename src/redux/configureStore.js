import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers/index";

const configureStore = (initialState) => {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    devTools(applyMiddleware(reduxImmutableStateInvariant()))
  );
};

export default configureStore;
