import React, { FC } from "react";

import { useSelector } from "react-redux";
import { TAppState } from "store/store";

import {
  LoadingModalStyled,
  LoadingOutlinedStyled,
} from "./LoadingModalStyled";

const LoadingModal: FC = () => {
  const { isOpen } = useSelector((state: TAppState) => state.loader);

  return isOpen ? (
    <LoadingModalStyled indicator={<LoadingOutlinedStyled spin />} />
  ) : (
    <></>
  );
};

export default LoadingModal;
