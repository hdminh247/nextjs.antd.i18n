import React from "react";
import { Select } from "antd";

const { Option } = Select;

export default function CustomSelect({ data, valueProp = "value", labelProp = "label", className = "" }: Props) {
  return (
    <Select
      defaultValue={data[0].value}
      className={`custom-select ${className}`}
      getPopupContainer={(trigger) => trigger.parentNode}
    >
      {data.map((item: any, index: number) => {
        return (
          <Option value={item[valueProp]} key={index}>
            {item[labelProp]}
          </Option>
        );
      })}
    </Select>
  );
}

interface Props {
  data: any;
  valueProp?: string;
  labelProp?: string;
  className?: string;
}
