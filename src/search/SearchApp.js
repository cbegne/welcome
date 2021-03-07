import { useEffect, useState } from 'react';

import { Box } from '@welcome-ui/box';
import { Text } from '@welcome-ui/text';
import { SearchLayout } from './layout/SearchLayout';
import { JobCardsMain } from './JobCards';

export const SearchApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [jobs, setJobs] = useState();

  useEffect(() => {
    const url =
      'https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k';

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, { method: 'GET', mode: 'cors' });
        const jsonResponse = await response.json();
        setJobs(jsonResponse.jobs);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(jobs);

  return (
    <SearchLayout>
      <Box margin="0 auto" maxWidth={1} w={1280} display="flex">
        <Box mt="10%" backgroundColor="nude.100" w={1} borderRadius="6px">
          <Text variant="h2" textAlign="center">
            Our offers
          </Text>
          <JobCardsMain jobs={jobs} isLoading={isLoading} error={error} />
        </Box>
      </Box>
    </SearchLayout>
  );
};
