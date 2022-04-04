import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAPIName } from "./Actions/getAllStatus";

export interface IStatus {
  success: boolean;
  message: string;
  hostname: string;
  time: number;
  version: string;
}

const initialStatus: IStatus = {
  success: false,
  message: "UNKOWN",
  hostname: "UNKOWN",
  time: 0,
  version: "UNKOWN",
};

export type THealthStatusValue = IStatus;

type IState = Record<TAPIName, THealthStatusValue>;

export const initialState: IState = {
  accounts: initialStatus,
  assets: initialStatus,
  customers: initialStatus,
  datapoints: initialStatus,
  devices: initialStatus,
  documents: initialStatus,
  forms: initialStatus,
  invites: initialStatus,
  media: initialStatus,
  messages: initialStatus,
  namespaces: initialStatus,
  orders: initialStatus,
  patients: initialStatus,
  relationships: initialStatus,
  rules: initialStatus,
  templates: initialStatus,
  users: initialStatus,
  workflows: initialStatus,
};

const sliceName = "healthStatus";

const healthStatusSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    addStatus: (
      state,
      action: PayloadAction<{ APIName: TAPIName; status: IStatus }>
    ) => {
      state[action.payload.APIName] = action.payload.status;
    },
    reset: () => initialState,
  },
});

export const { addStatus } = healthStatusSlice.actions;

export default healthStatusSlice.reducer;
