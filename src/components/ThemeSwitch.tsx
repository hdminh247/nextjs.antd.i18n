import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Select } from "antd";
import Image from "next/image";

const { Option } = Select;

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // <select value={theme} onChange={(e) => setTheme(e.target.value)}>
  //   <option value="system">System</option>
  //   <option value="dark">Dark</option>
  //   <option value="light">Light</option>
  // </select>;

  const items = [
    {
      label: <span className={"ml-8 language-dropdown__label"}>System</span>,
      id: "system",
      icon: <Image src={"/icons/system-theme.png"} alt={"en"} width={16} height={16} />,
    },
    {
      label: <span className={"ml-8 language-dropdown__label"}>Dark</span>,
      id: "dark",
      icon: <Image src={"/icons/dark-theme.svg"} alt={"en"} width={16} height={16} />,
    },
    {
      label: <span className={"ml-8 language-dropdown__label"}>Light</span>,
      id: "light",
      icon: <Image src={"/icons/light-theme.png"} alt={"en"} width={16} height={16} />,
    },
  ];

  return (
    <div className={"sidebar-container__language-selection"}>
      <Select value={theme} onChange={(value) => setTheme(value)} getPopupContainer={(trigger) => trigger.parentNode}>
        {items.map(({ label, id, icon }: any, index: number) => {
          return (
            <Option value={id} key={index}>
              {icon}
              {label}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default ThemeSwitch;
