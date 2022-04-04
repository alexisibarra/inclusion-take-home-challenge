import { useEffect, useState } from "react";

import { ColumnsType } from "antd/lib/table";

import {
  IStatus,
  THealthStatusValue,
} from "store/reducers/HealthStatus/healthStatus.slice";

type TUseHealthStatusColumn = () => ColumnsType<IStatus>;

export const useHealthStatusColumn: TUseHealthStatusColumn = () => {
  const [columns, setColumns] = useState<ColumnsType<THealthStatusValue>>([]);

  useEffect(() => {
    const newColumns: ColumnsType<THealthStatusValue> = [
      {
        key: "success",
        dataIndex: "success",
        align: "center",
        title: "Success",
        render: (value: boolean) => (value ? "✅" : "❌"),
      },
      {
        key: "message",
        dataIndex: "message",
        align: "center",
        title: "Message",
      },
      {
        key: "hostname",
        dataIndex: "hostname",
        align: "center",
        title: "HostName",
      },
      {
        key: "time",
        dataIndex: "time",
        align: "center",
        title: "time",
      },
      {
        key: "version0",
        dataIndex: "version",
        align: "center",
        title: "version",
      },
    ];

    setColumns(newColumns);
  }, []);

  return columns;
};
