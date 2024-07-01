import { PropsWithChildren } from "react";
import { useModal } from "../../hooks";

import S from "./style";

export interface IModalToggleBtn extends PropsWithChildren {
  style?: React.CSSProperties;
}

const ModalToggleBtn = ({ children, style }: IModalToggleBtn) => {
  const { isOpen, open, close } = useModal();

  return (
    <S.Button onClick={isOpen ? close : open} style={style}>
      {children}
    </S.Button>
  );
};

export default ModalToggleBtn;
