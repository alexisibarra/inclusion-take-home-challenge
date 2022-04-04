import { createSlice } from "@reduxjs/toolkit";

type IState = {
  isOpen: boolean;
};

export const initialState: IState = {
  isOpen: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    openLoadingModal: (state) => {
      state.isOpen = true;
    },
    closeLoadingModal: (state) => {
      state.isOpen = false;
    },
    reset: () => initialState,
  },
});

export const { closeLoadingModal, openLoadingModal } = loaderSlice.actions;

export default loaderSlice.reducer;
