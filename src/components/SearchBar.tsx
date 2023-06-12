import { Input } from "antd";
import SearchOutlined from "@ant-design/icons/SearchOutlined";

export default function SearchBar({
  className = "",
  placeholder = "Search...",
  value = "",
  onChange = () => {},
}: Props) {
  return (
    <Input
      prefix={<SearchOutlined className="site-form-item-icon" />}
      className={`navbar-search ${className}`}
      placeholder={placeholder}
      size="large"
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
}

interface Props {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: any) => void;
}
