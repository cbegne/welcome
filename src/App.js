import { createTheme, WuiProvider } from '@welcome-ui/core';
import { SearchAppMain } from './search/SearchApp';

const theme = createTheme();

const App = () => (
  <WuiProvider theme={theme}>
    <SearchAppMain />
  </WuiProvider>
);

export default App;
