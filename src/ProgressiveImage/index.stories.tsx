import { Meta, StoryObj } from "@storybook/react";
import Image from ".";

const meta = {
  title: "Components/Image",
  component: Image,
  argTypes: {
    src: { description: "이미지 경로를 설정합니다." },
  },
} satisfies Meta<typeof Image>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const Default: Stroy = {
  name: "Progressive Loading을 확인합니다.",
  args: {
    src: "./",
  },
};
