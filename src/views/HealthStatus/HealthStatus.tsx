import React, { FC, useEffect, useState } from "react";

import { Card, Table } from "antd";
import { useDispatch } from "react-redux";

import getAllStatus from "store/reducers/HealthStatus/Actions/getAllStatus";
import { TAppState } from "store/store";
import { useAppSelector } from "store/Utils/storeHooks";
import {
  IStatus,
  THealthStatusValue,
} from "store/reducers/HealthStatus/healthStatus.slice";

import { HealthStatusStyled } from "./HealthStatus.Styles";
import { useHealthStatusColumn } from "./Hooks/useHealthStatusColumn.hook";
import { useInterval } from "./Hooks/useInterval.hook";
import { TableWrapperStyled } from "./TableWrapper.Styles";
import { INTERVAL_SECONDS } from "../../config/INTERVAL_SECONDS";

const HealthStatus: FC = () => {
  const dispatch = useDispatch();

  const healthStatus = useAppSelector((state: TAppState) => state.healthStatus);

  const columns = useHealthStatusColumn();

  const [healthStatusValues, setHealthStatusValues] = useState<
    THealthStatusValue[]
  >([]);

  useEffect(() => {
    const newValues = Object.values(healthStatus);

    setHealthStatusValues(newValues);
  }, [healthStatus]);

  useInterval(() => {
    dispatch(getAllStatus());
  }, Number(INTERVAL_SECONDS));

  useEffect(() => {
    dispatch(getAllStatus());
  }, []);

  return (
    <HealthStatusStyled>
      <Card title="API Services Status" bordered={false}>
        <TableWrapperStyled>
          <Table
            aria-labelledby="app-section-label"
            aria-label="enhanced table"
            columns={columns}
            dataSource={healthStatusValues}
            pagination={false}
            showSorterTooltip={false}
            onRow={(status: IStatus) => ({
              className: status.success ? "success" : "error",
            })}
          />
        </TableWrapperStyled>
      </Card>
    </HealthStatusStyled>
  );
};

export default HealthStatus;
