import { createTheme, WuiProvider } from '@welcome-ui/core';
import { OffersAppMain } from './offers/OffersApp';
import { JobProvider } from './offers/context/JobContext';

const theme = createTheme();

const App = () => (
  <WuiProvider theme={theme}>
    <JobProvider>
      <OffersAppMain />
    </JobProvider>
  </WuiProvider>
);

export default App;
