import { Loader } from '@welcome-ui/loader';
import { Box } from '@welcome-ui/box';

import { JobCards } from './JobCards';

export const JobCardsMain = ({ jobs, jobsByGroup, isLoading, error }) => {
  if (isLoading)
    return (
      <WrapperBox>
        <Loader />
      </WrapperBox>
    );

  if (error) return <WrapperBox>Sorry, an error occured</WrapperBox>;

  if (!jobs.length)
    return <WrapperBox>Sorry, no job offer available</WrapperBox>;

  return <JobCards jobs={jobs} jobsByGroup={jobsByGroup} />;
};

const WrapperBox = ({ children }) => (
  <Box display="flex" justifyContent="center" margin={50}>
    {children}
  </Box>
);
