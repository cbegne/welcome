import { useRef, useEffect, useState } from 'react';
import { InputText } from '@welcome-ui/input-text';
import { Select } from '@welcome-ui/select';
import { Box } from '@welcome-ui/box';
import { DatePicker } from '@welcome-ui/date-picker';

import { getContractTypes } from './utils/searchUtils';
import { useDebounce } from './hooks/useDebounce';
import { GROUPS } from './utils/searchConstants';

export const SearchFields = ({
  allJobs,
  setContractType,
  setDate,
  contractType,
  setSearch,
  group,
  setGroup,
}) => {
  const dateRef = useRef();
  const [contractTypes, setContractTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (allJobs?.length > 0) {
      const types = getContractTypes(allJobs);
      setContractTypes(types);
    }
  }, [allJobs]);

  useEffect(() => {
    setSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleTextChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleContractTypeChange = (value) => {
    setContractType(value);
  };

  const handleDateChange = (value) => {
    setDate(value);
  };

  const handleGroupChange = (value) => {
    setGroup(value);
  };

  return (
    <Box display="flex" paddingLeft={30}>
      <InputText placeholder="Your dream job?" onChange={handleTextChange} />
      <Select
        placeholder="Contract type"
        options={contractTypes}
        onChange={handleContractTypeChange}
        value={contractType}
      />
      <DatePicker
        placeholder="Date"
        onChange={handleDateChange}
        ref={dateRef}
        value=""
      />
      <Select
        placeholder="Group by"
        options={GROUPS}
        onChange={handleGroupChange}
        value={group}
      />
    </Box>
  );
};
