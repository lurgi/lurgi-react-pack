import React, { PropsWithChildren } from "react";
export interface IModalProps extends PropsWithChildren {
    isOpen?: boolean;
    style?: React.CSSProperties;
    backdropColor?: string;
}
declare const BaseModal: React.FC<IModalProps>;
export default BaseModal;
