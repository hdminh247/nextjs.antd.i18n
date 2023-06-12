import React, { useState } from "react";
import { Form, Button } from "antd";
import { useTranslation } from "next-i18next";

import CustomInput from "./CustomInput";

export default function ChangePasswordForm() {
  const { t } = useTranslation("account");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className={"change-password-form"}>
      <div className={"change-password-form__title"}>{t("change_password")}</div>
      <Form onFinish={() => {}} name="change-password-form" className="form-card large" layout="vertical">
        <Form.Item
          className={"change-password-form__input-wrapper"}
          name="oldPassword"
          rules={[{ required: true, message: t("please_input_your_old_password") }]}
        >
          <CustomInput
            type={showOldPassword ? "text" : "password"}
            placeholder={t("enter_the_old_password")}
            label={t("old_password")}
            addonAfter={
              <img
                src={showOldPassword ? "/icons/eye.svg" : "/icons/eye-hide.svg"}
                className={"cursor-pointer"}
                alt={"old-pass"}
                onClick={() => setShowOldPassword(!showOldPassword)}
              />
            }
          />
        </Form.Item>

        <Form.Item
          className={"change-password-form__input-wrapper"}
          name="newPassword"
          rules={[{ required: true, message: t("please_input_your_new_password") }]}
        >
          <CustomInput
            type={showPassword ? "text" : "password"}
            placeholder={t("enter_the_new_password")}
            addonAfter={
              <img
                src={showPassword ? "/icons/eye.svg" : "/icons/eye-hide.svg"}
                className={"cursor-pointer"}
                alt={"new-pass"}
                onClick={() => setShowPassword(!showPassword)}
              />
            }
            label={t("new_password")}
          />
        </Form.Item>

        <Form.Item
          className={"change-password-form__input-wrapper"}
          name="confirmPassword"
          rules={[{ required: true, message: t("please_input_your_confirm_password") }]}
        >
          <CustomInput
            type={showConfirmPassword ? "text" : "password"}
            placeholder={t("enter_the_confirm_password")}
            addonAfter={
              <img
                src={showConfirmPassword ? "/icons/eye.svg" : "/icons/eye-hide.svg"}
                className={"cursor-pointer"}
                alt={"confirm-pass"}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            }
            label={t("confirm_password")}
          />
        </Form.Item>

        <Button
          htmlType={"submit"}
          type="primary"
          className={"common-btn mt-24 change-password-form__save-btn"}
          onClick={() => {}}
        >
          {t("save")}
        </Button>
      </Form>
    </div>
  );
}

// interface Props {}
