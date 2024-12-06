import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${( { theme }) => theme.COLORS.BLUE};
  color: ${( { theme }) => theme.BACKGROUND_800};
  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500px;

  &:disabled {
    opacity: 0.5;
  }
`; 