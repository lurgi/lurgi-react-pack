import { Meta, StoryObj } from "@storybook/react";
import Modal, { ModalToggleBtn } from "../../";

const TestModalToggleBtn = () => {
  return (
    <>
      <ModalToggleBtn>모달 토글 버튼</ModalToggleBtn>
      <Modal>
        <ModalToggleBtn>모달 토글 버튼</ModalToggleBtn>
        <div>모달이 여기에 표시됩니다.</div>
      </Modal>
    </>
  );
};

const meta: Meta<typeof TestModalToggleBtn> = {
  title: "Components/ToggleBtn",
  component: TestModalToggleBtn,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "토글 버튼으로 모달 열기",
};
