import { initialState as feedback } from "./reducers/Feedback/feedback.slice";
import { initialState as loader } from "./reducers/Loader/loader.slice";
import { initialState as healthStatus } from "./reducers/HealthStatus/healthStatus.slice";

import { TAppState } from "./store";

export const initialState: TAppState = {
  feedback,
  healthStatus,
  loader,
};
