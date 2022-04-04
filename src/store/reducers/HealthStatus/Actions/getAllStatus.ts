import { TThunk } from "store/interfaces/TThunk";

import getStatus from "./getStatus";

type TGetAllStatus = () => TThunk<void>;

export type TAPIName =
  | "accounts"
  | "assets"
  | "customers"
  | "datapoints"
  | "devices"
  | "documents"
  | "forms"
  | "invites"
  | "media"
  | "messages"
  | "namespaces"
  | "orders"
  | "patients"
  | "relationships"
  | "rules"
  | "templates"
  | "users"
  | "workflows";

const APINames: TAPIName[] = [
  "accounts",
  "assets",
  "customers",
  "datapoints",
  "devices",
  "documents",
  "forms",
  "invites",
  "media",
  "messages",
  "namespaces",
  "orders",
  "patients",
  "relationships",
  "rules",
  "templates",
  "users",
  "workflows",
];

const getAllStatus: TGetAllStatus = () => (dispatch) => {
  APINames.forEach((APIName) => {
    dispatch(getStatus(APIName));
  });
};

export default getAllStatus;
