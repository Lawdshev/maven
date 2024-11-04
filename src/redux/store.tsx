import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { dashboardReducer } from "./reducers";
import { rootSaga } from "./sagas";

export type RootState = ReturnType<typeof dashboardReducer>;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(dashboardReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
