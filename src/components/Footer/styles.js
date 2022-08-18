import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align  : center;
  span{
    color: ${theme.colors.secondaryColor};
  }
  a {
      color: ${theme.colors.primaryColor};
      text-decoration: none;
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`;
