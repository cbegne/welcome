import styled from 'styled-components';

import { Box } from '@welcome-ui/box';

export const SearchLayout = ({ children }) => {
  return <WrapperStyled as="main">{children}</WrapperStyled>;
};

const WrapperStyled = styled(Box).attrs({ minHeight: '100vh' })`
  ${({ theme }) =>
    console.log(theme) ||
    `background: linear-gradient(180deg, ${theme.colors.primary[200]} 400px, ${theme.colors.light[900]} 0%)`}
`;
