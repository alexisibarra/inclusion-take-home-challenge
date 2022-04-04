import { configureStore } from "@reduxjs/toolkit";

import feedback from "./reducers/Feedback/feedback.slice";
import loader from "./reducers/Loader/loader.slice";
import healthStatus from "./reducers/HealthStatus/healthStatus.slice";

const rootReducer = {
  feedback,
  loader,
  healthStatus,
};

const store = configureStore({
  reducer: rootReducer,
});

export type TAppState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export default store;
