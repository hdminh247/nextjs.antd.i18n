import Dialog from "../Dialog";
import SignUpForm from "./SignUpForm";

export default function SignUpDialog({ visible, setVisible, onLogin }: Props) {
  return (
    <Dialog visible={visible} onCancel={setVisible} reset={true} className="signup-dialog">
      {visible && <SignUpForm onSuccess={setVisible} onClose={setVisible} handleState onLogin={onLogin} />}
    </Dialog>
  );
}

interface Props {
  visible: boolean;
  setVisible: () => void;
  onLogin: () => void;
}
