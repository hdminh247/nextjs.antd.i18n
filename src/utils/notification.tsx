import { notification } from "antd";

export const success = (message: string) => {
  notification.success({
    message: "",
    description: message,
  });
};
