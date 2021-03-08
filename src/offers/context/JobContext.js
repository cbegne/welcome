import { createContext, useContext, useState } from 'react';

const JobContext = createContext(null);

export const useJobContext = () => useContext(JobContext);

export const JobProvider = ({ children }) => {
  const [job, setJob] = useState();

  const providerState = {
    job,
    setJob,
  };

  return (
    <JobContext.Provider value={providerState}>{children}</JobContext.Provider>
  );
};
