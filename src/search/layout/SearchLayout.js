import { Box } from '@welcome-ui/box';

export const SearchLayout = ({ children }) => {
  return (
    <Box margin="0 auto" maxWidth={1} paddingLeft={{ md: 270 }} w={1280}>
      <Box
        as="main"
        mb={{ xs: '3xl', md: 0 }}
        minHeight="100vh"
        mt={{ xs: 60, md: 0 }}
        p={{ xs: 'xl', lg: 60 }}
      >
        {children}
      </Box>
    </Box>
  );
};
