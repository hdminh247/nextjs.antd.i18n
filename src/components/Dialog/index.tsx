import React from "react";
import { Modal } from "antd";

export default function Dialog({
  title = "",
  visible,
  onCancel,
  children,
  reset = false,
  className = "",
  closable = true,
}: Props) {
  return (
    <Modal
      title={title}
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered
      closable={closable}
      wrapClassName={className}
      destroyOnClose={reset}
      closeIcon={<img src={"/icons/close-modal.svg"} alt={"close"} />}
    >
      {children}
    </Modal>
  );
}

interface Props {
  title?: string;
  visible: boolean;
  onCancel?: () => void;
  children: any;
  className?: string;
  reset?: boolean;
  closable?: boolean;
}
