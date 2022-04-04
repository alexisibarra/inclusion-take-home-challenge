import styled from "styled-components";

export const HealthStatusStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  .ant-card {
    height: 80vh;
    width: 70vw;
    overflow-y: scroll;
  }

  .ant-card-body {
    padding: 0;
  }
`;
