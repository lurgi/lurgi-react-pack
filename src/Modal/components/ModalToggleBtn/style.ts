import styled from "@emotion/styled";
import COLOR_PALETTE from "../../../constants/colorPalette";

const S = {
  Button: styled.button`
    padding: 4px 8px;
    font-size: 16px;
    color: white;
    background-color: ${COLOR_PALETTE.HIGHLIGHT_MEDIUM};

    border: none;
    border-radius: 4px;

    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${COLOR_PALETTE.HIGHLIGHT_DARK};
    }
  `,
};

export default S;
