import { ImgHTMLAttributes } from "react";
export interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
}
declare const ProgressiveImage: (props: IImageProps) => import("react/jsx-runtime").JSX.Element;
export default ProgressiveImage;
