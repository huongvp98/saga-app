import { createStore, applyMiddleware } from "redux";
import rootReducer from "@reducer";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);
