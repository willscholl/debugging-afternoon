import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { createPromise } from "redux-promise-middleware";

export default createStore(reducer, applyMiddleware(createPromise()));
