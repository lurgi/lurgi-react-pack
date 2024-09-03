import { StoryObj } from "@storybook/react";
import { IModalProps } from ".";
declare const meta: {
    title: string;
    component: (props: IModalProps) => import("react/jsx-runtime").JSX.Element;
    argTypes: {
        isOpen: {
            description: string;
        };
        style: {
            description: string;
        };
        backdropColor: {
            description: string;
        };
    };
};
export default meta;
type Stroy = StoryObj<typeof meta>;
export declare const Default: Stroy;
export declare const StyledModal: Stroy;
