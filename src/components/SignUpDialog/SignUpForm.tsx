import React, { useState } from "react";
import { useRouter } from "next/router";
import { Row, Form, Col, Button, Checkbox } from "antd";
import { useTranslation } from "next-i18next";

import BrandLogo from "../BrandLogo";
import CustomInput from "../CustomInput";

import { useAuth } from "../../context/auth";
import Links from "../../constants/links";

export default function SignUpForm({ onSuccess, onClose, onLogin }: Props) {
  const { t } = useTranslation("signup");
  const { push } = useRouter();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerm, setAcceptTerm] = useState(false);

  const onSubmit = (data: any) => {
    login(data.username, data.password);

    onSuccess();
  };

  const goTo = (url: string) => {
    push(url);
  };

  return (
    <div className={"signup-form"}>
      <Row>
        <Col xl={12} xxl={12} lg={12} className={"signup-form__image align-v-center align-h-center large-and-up"}>
          <div>
            <BrandLogo />
            <div className={"signup-form__logo-text"}>
              {t("the_best_online")} <span className={"weight-700"}>form</span>!
            </div>
          </div>
        </Col>
        <Col xl={12} xxl={12} lg={12} md={24} sm={24} xs={24} className={"signup-form__right-content"}>
          <Form
            onFinish={(data) => {
              onSubmit(data);
            }}
            name="form-card"
            className="form-card large"
            layout="vertical"
          >
            <div className={"signup-form__title"}>{t("create_an_account")}</div>
            <div className={"signup-form__sub-title mb-24"}>{t("enter_your_information")}</div>

            <Form.Item
              className={"signup-form__input-wrapper"}
              name="username"
              rules={[{ required: true, message: t("please_input_your_username") }]}
            >
              <CustomInput
                placeholder={t("enter_the_username")}
                addonAfter={<img src={"/icons/profile.svg"} alt={"email"} />}
                label={t("username")}
              />
            </Form.Item>

            <Form.Item
              className={"signup-form__input-wrapper"}
              name="email"
              rules={[{ required: true, message: t("please_input_your_email") }]}
            >
              <CustomInput
                placeholder={t("enter_the_email")}
                addonAfter={<img src={"/icons/email.svg"} alt={"email"} />}
                label={t("email")}
              />
            </Form.Item>

            <Form.Item
              className={"signup-form__input-wrapper"}
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

            <Checkbox
              className={"signup-form__checkbox"}
              onChange={(e) => {
                setAcceptTerm(e.target.checked);
              }}
            >
              {t("by_ticking_the_box")}&nbsp;
              <span
                className={"grey-link"}
                onClick={() => {
                  onClose();
                  goTo(Links.terms);
                }}
              >
                {t("term_of_service")}
              </span>
            </Checkbox>

            <Button htmlType={"submit"} type="primary" className={"common-btn mt-24 w-100"} disabled={!acceptTerm}>
              {t("sign_up")}
            </Button>

            <div className={"signup-form__forgot-pass-section mt-24"}>
              {t("already_have_an_account")}?{" "}
              <span className={"weight-500 cursor-pointer grey-link"} onClick={onLogin}>
                {t("login")}
              </span>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

interface Props {
  onSuccess: () => void;
  onClose: () => void;
  handleState?: boolean;
  onLogin: () => void;
}
