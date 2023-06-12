import React, { useState } from "react";
import { Row, Form, Col, Button } from "antd";
import { useTranslation } from "next-i18next";

import BrandLogo from "../BrandLogo";
import CustomInput from "../CustomInput";

import { useAuth } from "../../context/auth";

export default function LoginForm({ onSuccess, onForgot, onSignUp }: Props) {
  const { t } = useTranslation("login");
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: any) => {
    const { error } = await login(data.email, data.password);
    if (!error) {
      onSuccess();
    }
  };
  return (
    <div className={"login-form"}>
      <Row>
        <Col xl={12} xxl={12} lg={12} className={"login-form__image align-v-center align-h-center  large-and-up"}>
          <div>
            <BrandLogo />
            <div className={"login-form__logo-text"}>
              {t("the_best_online")} <span className={"weight-700"}>form</span>!
            </div>
          </div>
        </Col>
        <Col xl={12} xxl={12} lg={12} md={24} sm={24} xs={24} className={"login-form__right-content"}>
          <Form
            onFinish={(data) => {
              onSubmit(data);
            }}
            name="form-card"
            className="form-card large"
            layout="vertical"
          >
            <div className={"login-form__title"}>{t("sign_in_to_your_account")}</div>
            <div className={"login-form__sub-title mb-24"}>
              {t("do_not_have_account")}?{" "}
              <span className={"login-form__sub-title--green weight-600 cursor-pointer"} onClick={onSignUp}>
                {t("sign_up")}
              </span>
            </div>

            <Form.Item
              className={"login-form__input-wrapper"}
              name="email"
              rules={[{ required: true, message: t("please_input_your_email") }]}
            >
              <CustomInput
                placeholder={t("enter_the_email")}
                addonAfter={<img src={"/icons/profile.svg"} alt={"email"} />}
                label={t("username_or_email")}
              />
            </Form.Item>
            <Form.Item
              className={"login-form__input-wrapper"}
              name="password"
              rules={[{ required: true, message: t("please_input_your_password") }]}
            >
              <CustomInput
                type={showPassword ? "text" : "password"}
                placeholder={t("enter_the_password")}
                addonAfter={
                  <img
                    src={showPassword ? "/icons/eye.svg" : "/icons/eye-hide.svg"}
                    className={"cursor-pointer"}
                    alt={"email"}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                }
                label={t("password")}
              />
            </Form.Item>

            <Button htmlType={"submit"} type="primary" className={"common-btn mt-24 w-100"} onClick={() => {}}>
              {t("sign_in")}
            </Button>

            <div className={"login-form__forgot-pass-section mt-24 cursor-pointer"} onClick={onForgot}>
              {t("forgot_your_password")} ?
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

interface Props {
  onSuccess: () => void;
  onClose?: () => void;
  handleState?: boolean;
  onForgot: () => void;
  onSignUp: () => void;
}
