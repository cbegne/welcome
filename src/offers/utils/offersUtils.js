import groupBy from 'lodash/groupBy';

export const getContractTypes = (jobs) => {
  const contractList = jobs.reduce((acc, value) => {
    if (!acc.includes(value.contract_type.en))
      return [...acc, value.contract_type.en];
    return acc;
  }, []);

  const contractTypesForSelect = contractList.map((item) => ({
    value: item,
    label: item,
  }));

  return contractTypesForSelect;
};

export const getJobsByGroup = (jobs, group) => {
  if (!group) return null;
  const jobsByGroup = groupBy(jobs, group);
  return jobsByGroup;
};

export const filterPublishedAfter = (job, date) =>
  date ? new Date(job.published_at).getTime() > date.getTime() : true;

export const filterByContractType = (job, contractType) =>
  contractType ? job.contract_type.en === contractType : true;

export const filterByTextSearch = (job, text) =>
  text ? job.name.toLowerCase().includes(text.toLowerCase()) : true;
