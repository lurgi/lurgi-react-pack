import BaseModal from "./components/BaseModal";
import { useModal } from "./hooks";
export { useModal } from "./hooks";

const Modal = Object.assign(BaseModal, {
  useModal,
});

export default Modal;
