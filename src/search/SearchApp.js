import { useEffect, useState } from 'react';
import { Text } from '@welcome-ui/text';

import { SearchLayout } from './layout/SearchLayout';
import { JobCardsMain } from './JobCards';
import { SearchFields } from './SearchFields';
import {
  filterByContractType,
  filterPublishedAfter,
  filterByTextSearch,
  getJobsByGroup,
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
  const [jobsByGroup, setJobsByGroup] = useState();

  const [contractType, setContractType] = useState(null);
  const [date, setDate] = useState(null);
  const [search, setSearch] = useState('');
  const [group, setGroup] = useState(null);

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
      const jobsFiltered = allJobs
        .filter((job) => filterByTextSearch(job, search))
        .filter((job) => filterByContractType(job, contractType))
        .filter((job) => filterPublishedAfter(job, date));
      const jobsGrouped = getJobsByGroup(jobsFiltered, group);
      setJobsByGroup(jobsGrouped);
      setJobs(jobsFiltered);
    }
  }, [search, contractType, date, group]);

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
          setSearch={setSearch}
          group={group}
          setGroup={setGroup}
        />
      )}
      <JobCardsMain
        jobs={jobs}
        jobsByGroup={jobsByGroup}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};
