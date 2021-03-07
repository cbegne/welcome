import styled from 'styled-components';

import { Box } from '@welcome-ui/box';

export const SearchLayout = ({ children }) => (
  <WrapperStyled as="main">
    <Box margin="0 auto" maxWidth={1} w={1280} display="flex">
      <Box mt="10%" backgroundColor="nude.100" w={1} borderRadius="6px">
        {children}
      </Box>
    </Box>
  </WrapperStyled>
);

const WrapperStyled = styled(Box).attrs({ minHeight: '100vh' })`
  ${({ theme }) =>
    `background: linear-gradient(180deg, ${theme.colors.primary[200]} 400px, ${theme.colors.light[900]} 0%)`}
`;
