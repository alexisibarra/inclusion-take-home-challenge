import { AxiosResponse } from "axios";

import { TThunk } from "store/interfaces/TThunk";

import { healthStatusService } from "services/healthStatus.service";
import {
  closeLoadingModal,
  openLoadingModal,
} from "store/reducers/Loader/loader.slice";
import { addStatus, IStatus } from "../healthStatus.slice";
import { TAPIName } from "./getAllStatus";

type TGetStatus = (APIName: TAPIName) => TThunk<void>;

const getStatus: TGetStatus = (APIName) => async (dispatch, getState) => {
  const state = getState();

  const {
    loader: { isOpen },
  } = state;

  if (!isOpen) {
    dispatch(openLoadingModal());
  }

  try {
    const response: AxiosResponse<IStatus> = await healthStatusService(APIName);

    dispatch(addStatus({ APIName, status: response.data }));
  } catch (error) {
    dispatch(
      addStatus({
        APIName,
        status: {
          success: false,
          message: "NETWORK ERROR",
          hostname: "UNKNOWN",
          time: 0,
          version: "UNKNOWN",
        },
      })
    );
  } finally {
    if (isOpen) {
      dispatch(closeLoadingModal());
    }
  }
};

export default getStatus;
