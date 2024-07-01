import { Meta, StoryObj } from "@storybook/react";
import Modal from "../../";
import { useModal } from "../../";
import { IModalProps } from ".";

const TestModal = (props: IModalProps) => {
  const modal = useModal();

  return (
    <>
      <button onClick={modal.open}>모달이 열려야 합니다.</button>
      <Modal {...props}>
        <button onClick={modal.close}>모달이 닫혀야 합니다.</button>
      </Modal>
    </>
  );
};

const meta = {
  title: "Components/Modal",
  component: TestModal,
  argTypes: {
    isOpen: { description: "첫 렌더링시 모달을 연상태로 렌더링 하고 싶다면, 이 값을 true값으로 설정하세요." },
    style: { description: "모달의 스타일을 지정할 수 있습니다." },
    backdropColor: { description: "모달창 바깥 배경의 색상을 지정합니다." },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const Default: Stroy = {
  name: "모달의 작동을 확인합니다.",
  args: {
    isOpen: true,
  },
};

export const StyledModal: Stroy = {
  name: "스타일을 적용합니다.",
  args: {
    isOpen: true,
    style: {
      borderRadius: "15px",
      background: "red",
      border: "5px solid green",
    },
    backdropColor: "blue",
  },
};
