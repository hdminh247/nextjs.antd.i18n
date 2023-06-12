import React from "react";
import { Table as AntTable } from "antd";

export default function DataTable({ columns, data, loading }: Props) {
  return (
    <AntTable
      rowKey="id"
      className={"data-table"}
      columns={columns}
      dataSource={data}
      scroll={{ y: 600, x: "100%" }}
      showHeader
      bordered={false}
      loading={loading}
      pagination={false}
    />
  );
}

interface Props {
  columns: any;
  data: any;
  loading: boolean;
}
