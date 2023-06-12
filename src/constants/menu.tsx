import Image from "next/image";
import React from "react";

export const profileMenus = (t: any) => {
  return [
    {
      key: "help-center",
      label: <span className={"ml-8"}>{t("help_center")}</span>,
      icon: <Image src={"/icons/help-center.svg"} alt={"en"} width={16} height={16} />,
    },
    {
      key: "log-out",
      label: <span className={"ml-8"}>{t("log_out")}</span>,
      icon: <Image src={"/icons/logout.svg"} alt={"en"} width={16} height={16} />,
    },
  ];
};
