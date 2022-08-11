import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.primaryColor};
    text-decoration: none;
    

    > img {
      max-height: 3rem;
    }
  `}
`;
