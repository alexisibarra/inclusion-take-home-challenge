import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { TAppState, TAppDispatch } from "store/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): TAppDispatch => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;
