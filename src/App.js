import { createTheme, WuiProvider } from '@welcome-ui/core';
import { SearchApp } from './search/SearchApp';

const theme = createTheme();

const App = () => (
  <WuiProvider theme={theme}>
    <SearchApp />
  </WuiProvider>
);

export default App;
