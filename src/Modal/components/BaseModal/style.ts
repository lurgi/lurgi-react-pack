import styled from "@emotion/styled";
import COLOR_PALETTE from "../../../constants/colorPalette";

const S = {
  ModalOverlay: styled.dialog<{ backdropColor?: string }>`
    max-width: 100%;
    max-height: 100%;
    min-width: 300px;

    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 0;

    background-color: ${COLOR_PALETTE.HIGHLIGHT_LIGHTEST};
    color: ${COLOR_PALETTE.GRAY_DARK};
    border-radius: 8px;

    width: fit-content;
    height: fit-content;

    &::backdrop {
      background-color: ${(props) => props.backdropColor || "rgba(0, 0, 0, 0.5)"};
    }
  `,

  // ModalTitle: styled.p`
  //   font-weight: 700;
  //   font-size: 18px;
  //   color: ${COLOR_PALETTE.GRAY_DARK};
  // `,

  // ModalDescription: styled.p`
  //   font-weight: 500;
  //   font-size: 12px;
  //   color: ${COLOR_PALETTE.GRAY_MEDIUM};
  // `,

  // ModalInput: styled.input`
  //   box-sizing: border-box;
  //   width: 100%;
  //   padding: 10px;
  //   margin-bottom: 20px;
  //   border: 2px solid ${COLOR_PALETTE.HIGHLIGHT_MEDIUM};
  //   border-radius: 4px;
  //   outline: none;
  //   &:focus {
  //     border-color: ${COLOR_PALETTE.HIGHLIGHT_DARK};
  //   }
  // `,

  // ModalFooter: styled.div`
  //   display: flex;
  //   justify-content: flex-end;
  //   gap: 10px;
  // `,
};

export default S;
