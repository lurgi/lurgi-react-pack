export { default as ModalToggleBtn } from "./components/ModalToggleBtn";
export { useModal } from "./hooks";
declare const Modal: import("react").FC<import("./components/BaseModal").IModalProps> & {
    useModal: import("zustand").UseBoundStore<import("zustand").StoreApi<import("./hooks").IUseModalStore>>;
    ModalToggleBtn: ({ children, style }: import("./components/ModalToggleBtn").IModalToggleBtn) => import("react/jsx-runtime").JSX.Element;
};
export default Modal;
