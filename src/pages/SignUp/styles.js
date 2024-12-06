import styled from 'styled-components';
import backgroundImg from '../../assets/test.jpg'

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: stretch;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 136px;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > P {
    font-size: 14px; 
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.BLUE};
  }
`;

export const Background = styled.div`
 flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`; 