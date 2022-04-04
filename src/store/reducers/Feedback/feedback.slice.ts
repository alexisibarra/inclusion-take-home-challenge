import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFeedbackState {
  message?: string | string[];
  messageType?: "error" | "success";
}

export const initialState: IFeedbackState = {};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    setSuccessMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
      state.messageType = "success";
    },
    setErrorMessage: (state, action: PayloadAction<string | string[]>) => {
      state.message = action.payload;
      state.messageType = "error";
    },
    reset: () => initialState,
  },
});

export const {
  setErrorMessage,
  setSuccessMessage,
  reset,
} = feedbackSlice.actions;

export default feedbackSlice.reducer;
