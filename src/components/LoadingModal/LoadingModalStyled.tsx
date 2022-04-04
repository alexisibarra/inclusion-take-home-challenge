import styled from "styled-components";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const LoadingModalStyled = styled(Spin)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: loading-modal-background 0.25s ease-in forwards;

  @keyframes loading-modal-background {
    0% {
      background: transparent;
    }
    100% {
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const LoadingOutlinedStyled = styled(LoadingOutlined)`
  font-size: 44px;
`;
