import { AxiosResponse } from "axios";

import { TAPIName } from "store/reducers/HealthStatus/Actions/getAllStatus";
import { IStatus } from "store/reducers/HealthStatus/healthStatus.slice";

import internalApi from "../api/internalApi";

type THealthStatusService = (
  APIName: TAPIName
) => Promise<AxiosResponse<IStatus>>;

export const healthStatusService: THealthStatusService = (APIName) =>
  internalApi.get(`${APIName}/health/status`);
