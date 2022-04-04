import React, { FC, useCallback, useEffect } from "react";

import { notification } from "antd";

import { useAppDispatch, useAppSelector } from "store/Utils/storeHooks";
import { reset as resetFeedbackStore } from "store/reducers/Feedback/feedback.slice";

import { Alert } from "../Alert/Alert";

import { notificationStyle, messageListStyle } from "./Feedback.Styles";

export const Feedback: FC = () => {
  const { message, messageType } = useAppSelector((state) => state.feedback);
  const dispatch = useAppDispatch();

  const handleClose = useCallback(() => dispatch(resetFeedbackStore()), [
    dispatch,
  ]);

  useEffect(() => {
    if (message && messageType) {
      notification.open({
        message: "",
        description: (
          <Alert
            type={messageType}
            message={
              message instanceof Array ? (
                <ul style={messageListStyle}>
                  {message.map((error) => (
                    <li>{error.toUpperCase()}</li>
                  ))}
                </ul>
              ) : (
                message.toUpperCase()
              )
            }
            onClose={handleClose}
          />
        ),
        placement: "bottomRight",
        style: notificationStyle,
        onClose: handleClose,
        closeIcon: <div />,
      });
    }
  }, [handleClose, message, messageType]);

  return <div />;
};
