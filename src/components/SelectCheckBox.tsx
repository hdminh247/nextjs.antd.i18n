import React from "react";
import Select, { components } from "react-select";

import { Checkbox } from "antd";

const SelectCheckBox = ({ data = [], label = "" }: Props) => {
  const ValueContainer = ({ children, ...props }: any) => {
    return (
      <components.ValueContainer {...props}>
        <span className={"hide-but-active-element"}>{children}</span>
      </components.ValueContainer>
    );
  };

  const Control = ({ children, ...props }: any) => {
    const count = props.selectProps?.value?.length || 0;
    return (
      <components.Control {...props}>
        <span>
          {label}&nbsp;
          {count > 0 && (
            <span className={"select-checkbox__item-count"}>({props.selectProps?.value?.length || 0})</span>
          )}
          {count === 0 && <span className={"select-checkbox__item-count"}>(All)</span>}
        </span>
        {children}
      </components.Control>
    );
  };

  const Option = (props: any) => {
    return (
      <div>
        <components.Option {...props}>
          <div className={"align-v-center"}>
            <Checkbox checked={props.isSelected}>{props.value}</Checkbox>
          </div>

          <span className={"select-checkbox__tag"}>{props.data.amount}</span>
        </components.Option>
      </div>
    );
  };

  return (
    <Select
      instanceId={"select-checkbox"}
      className={"select-checkbox"}
      classNamePrefix={"select-checkbox"}
      components={{ Control, ValueContainer, Option }}
      options={data}
      isMulti
      hideSelectedOptions={false}
    />
  );
};

interface Props {
  data: any[];
  label?: string;
}

export default SelectCheckBox;
