import { Meta, StoryObj } from "@storybook/react";
import Image from ".";

import LowerImage from "../assets/happy-dog.jpg";
import HigherImage from "../assets/clock.jpeg";

const meta = {
  title: "Components/Image",
  component: Image,
  argTypes: {
    src: { description: "이미지 경로를 설정합니다." },
    style: { description: "이미지 요소에 해당하는 style css를 설정합니다." },
  },
  args: {
    style: { maxHeight: "200px" },
  },
} satisfies Meta<typeof Image>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const Loading: Stroy = {
  name: "Progressive Loading을 적용합니다.",
  args: {
    src: HigherImage,
    style: {
      width: "200px",
      height: "300px",
      objectFit: "cover",
    },
  },
};

export const NoLoading: Stroy = {
  name: "100KB보다 작은 이미지는 Progressive Loading을 적용하지 않습니다.",
  args: {
    src: LowerImage,
  },
};

export const SkeletonLoading: Stroy = {
  name: "Skeleton Loading을 적용합니다. width, height 값을 지정한 경우에만 나타납니다.",
  args: {
    src: LowerImage,
    style: {
      width: "200px",
      height: "300px",
      objectFit: "cover",
    },
  },
};
