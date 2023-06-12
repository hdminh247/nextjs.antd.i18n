import Dialog from "../Dialog";
import LoginForm from "./LoginForm";

export default function LoginDialog({ visible, setVisible, onForgot, onSignUp }: Props) {
  return (
    <Dialog visible={visible} onCancel={setVisible} reset={true} className="login-dialog">
      {visible && (
        <LoginForm onSuccess={setVisible} onClose={setVisible} handleState onForgot={onForgot} onSignUp={onSignUp} />
      )}
    </Dialog>
  );
}

interface Props {
  visible: boolean;
  setVisible: () => void;
  onForgot: () => void;
  onSignUp: () => void;
}
