import React, { useState } from "react";
import { Dropdown, Menu, Avatar } from "antd";
import { useTranslation } from "next-i18next";

import { useAuth } from "../context/auth";

import { profileMenus } from "../constants/menu";

import { toggleChat } from "../utils/help-center";

export default function ProfileMenu({ less = false }: Props) {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { logOut } = useAuth();
  const [visible, setVisible] = useState(false);

  const onMenuClick = (key: string) => {
    switch (key) {
      case "log-out": {
        logOut();
        break;
      }
      case "help-center": {
        if (window) {
          toggleChat();
        }
        break;
      }

      case "support": {
        if (window) {
          toggleChat();
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  const onSelect = ({ key }: any) => {
    setVisible(false);
    onMenuClick(key);
  };

  return (
    <Dropdown
      overlay={<Menu className="profile-dropdown-menu" items={profileMenus(t)} onClick={onSelect}></Menu>}
      trigger={["click"]}
      className="profile-dropdown"
      onOpenChange={(f) => setVisible(f)}
      open={visible}
      placement="bottomRight"
    >
      <div className="profile-dropdown-item ml-16" onClick={(e) => e.preventDefault()}>
        <Avatar
          className={"profile-dropdown-item__avatar"}
          size={24}
          icon={<img src={user?.avatar || "/icons/user.svg"} alt={"dropdown"} />}
        />
        {!less && (
          <>
            <span className={"weight-600 ml-8"}>{user?.username || "UserName"}</span>
            <img className={"profile-dropdown-item__icon"} src={"/icons/dropdown.svg"} alt={"dropdown"} />
          </>
        )}
      </div>
    </Dropdown>
  );
}

interface Props {
  less?: boolean;
}
