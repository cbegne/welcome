import { useRef, useEffect, useState } from 'react';
import { InputText } from '@welcome-ui/input-text';
import { Select } from '@welcome-ui/select';
import { Box } from '@welcome-ui/box';
import { DatePicker } from '@welcome-ui/date-picker';

import { getContractTypes } from './utils/searchUtils';

export const SearchFields = ({
  allJobs,
  setContractType,
  setDate,
  contractType,
}) => {
  const dateRef = useRef();
  const [contractTypes, setContractTypes] = useState([]);

  useEffect(() => {
    if (allJobs?.length > 0) {
      const types = getContractTypes(allJobs);
      setContractTypes(types);
    }
  }, [allJobs]);

  const handleTextChange = (event) => {
    console.log(event.target.value);
  };

  const handleContractTypeChange = (value) => {
    setContractType(value);
  };

  const handleDateChange = (value) => {
    setDate(value);
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
    </Box>
  );
};
