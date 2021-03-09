import { createTheme, WuiProvider } from '@welcome-ui/core';
import { OffersAppContainer } from './offers/OffersApp';
import { JobProvider } from './offers/context/JobContext';

const theme = createTheme();

const App = () => (
  <WuiProvider theme={theme}>
    <JobProvider>
      <OffersAppContainer />
    </JobProvider>
  </WuiProvider>
);

export default App;
