import { useEffect, useState } from 'react';

import { Text } from '@welcome-ui/text';
import { SearchLayout } from './layout/SearchLayout';
import { JobCardsMain } from './JobCards';
import { SearchFields } from './SearchFields';
import {
  filterByContractType,
  filterPublishedAfter,
} from './utils/searchUtils';

export const SearchAppMain = () => (
  <SearchLayout>
    <SearchApp />
  </SearchLayout>
);

export const SearchApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [allJobs, setAllJobs] = useState();
  const [jobs, setJobs] = useState();
  const [contractType, setContractType] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const url =
      'https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k';

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, { method: 'GET', mode: 'cors' });
        const data = await response.json();
        setAllJobs(data.jobs);
        setJobs(data.jobs);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (allJobs?.length > 0) {
      const jobsFiltered = allJobs.filter(
        (job) =>
          filterByContractType(job, contractType) &&
          filterPublishedAfter(job, date)
      );
      setJobs(jobsFiltered);
    }
  }, [contractType, date]);

  console.log(jobs);

  return (
    <>
      <Text variant="h2" textAlign="center">
        Our offers
      </Text>
      {!isLoading && !error && (
        <SearchFields
          allJobs={allJobs}
          setDate={setDate}
          setContractType={setContractType}
          contractType={contractType}
        />
      )}
      <JobCardsMain jobs={jobs} isLoading={isLoading} error={error} />
    </>
  );
};
