import React, { PropsWithChildren, useEffect, useRef } from "react";
import S from "../style";
import { useModal } from "..";

export interface IModalProps extends PropsWithChildren {
  isOpen?: boolean;
  style?: React.CSSProperties;
  backdropColor?: string;
}

const BaseModal: React.FC<IModalProps> = ({ isOpen: isOpenInit = false, style, backdropColor, children }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { isOpen, open, close } = useModal();
  if (isOpenInit) open();

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen && !dialogRef.current.open) {
        dialogRef.current.showModal();
      }
      if (!isOpen && dialogRef.current.open) {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleOutsideClick = (event: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    if (event.target === dialogRef.current) close();
  };

  return (
    <S.ModalOverlay ref={dialogRef} style={style} backdropColor={backdropColor} onClick={handleOutsideClick}>
      <div>{children}</div>
    </S.ModalOverlay>
  );
};

export default BaseModal;
