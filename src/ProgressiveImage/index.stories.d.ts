import { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: (props: import(".").IImageProps) => import("react/jsx-runtime").JSX.Element;
    argTypes: {
        src: {
            description: string;
        };
        style: {
            description: string;
        };
    };
    args: {
        style: {
            maxHeight: string;
        };
    };
};
export default meta;
type Stroy = StoryObj<typeof meta>;
export declare const Loading: Stroy;
export declare const NoLoading: Stroy;
export declare const SkeletonLoading: Stroy;
