import { TGetState } from "interfaces/TGetState";
import { TAppDispatch } from "store/store";

export type TThunk<T> = (dispatch: TAppDispatch, getState: TGetState) => T;
