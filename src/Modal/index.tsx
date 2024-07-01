import BaseModal from "./components/BaseModal";

import ModalToggleBtn from "./components/ModalToggleBtn";
export { default as ModalToggleBtn } from "./components/ModalToggleBtn";

import { useModal } from "./hooks";
export { useModal } from "./hooks";

const Modal = Object.assign(BaseModal, {
  useModal,
  ModalToggleBtn,
});

export default Modal;
