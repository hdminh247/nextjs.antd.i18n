import { Select } from "antd";
import React from "react";

const { Option } = Select;

export default function CustomSelect({
  items = [],
  className = "",
  valueKey = "value",
  labelKey = "label",
  iconKey = "icon",
  includeIcon = false,
  label = "",
  noBorder = false,
  onChange = () => {},
  defaultValue = items[0][valueKey],
  value = defaultValue ? defaultValue : items[0][valueKey],
}: Props) {
  return (
    <>
      {label && <div className={"custom-select__label"}>{label}</div>}
      <Select
        defaultValue={defaultValue}
        className={`custom-select input-select ${className} ${noBorder ? "custom-select--no-border" : ""}`}
        value={value}
        onChange={(value) => {
          onChange(value);
        }}
        getPopupContainer={(trigger) => trigger.parentNode}
      >
        {items.map((item: any, index: number) => {
          return (
            <Option value={item[valueKey]} key={index}>
              {includeIcon && <img src={item[iconKey]} alt={item[labelKey]} />}
              {item[labelKey]}
            </Option>
          );
        })}
      </Select>
    </>
  );
}

interface Props {
  label?: string;
  items: any[];
  className?: string;
  valueKey?: string;
  labelKey?: string;
  includeIcon?: boolean;
  iconKey?: string;
  noBorder?: boolean;
  value?: any;
  onChange?: (value: string) => void;
  defaultValue?: any;
}
