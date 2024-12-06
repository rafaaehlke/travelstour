import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  color: ${({ theme, $isactive }) =>  $isactive ? theme.COLORS.BLUE : theme.COLORS.BACKGROUND_700};

  border: none;
  font-size: 16px;
`;  