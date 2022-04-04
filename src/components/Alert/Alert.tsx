import React, { FC } from "react";

import { Alert as AlertAntd, AlertProps } from "antd";

export const Alert: FC<AlertProps> = (props) => (
  <AlertAntd showIcon closable {...props} />
);
