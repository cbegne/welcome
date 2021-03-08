import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
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
    <WrapperStyled>
      <InputStyled>
        <InputText placeholder="Your dream job?" onChange={handleTextChange} />
      </InputStyled>
      <SelectStyled>
        <Select
          placeholder="Contract type"
          options={contractTypes}
          onChange={handleContractTypeChange}
          value={contractType}
          isClearable
        />
      </SelectStyled>
      <SelectStyled>
        <DatePicker
          placeholder="Date"
          onChange={handleDateChange}
          ref={dateRef}
          value=""
        />
      </SelectStyled>
      <SelectStyled>
        <Select
          placeholder="Group by"
          options={GROUPS}
          onChange={handleGroupChange}
          value={group}
          isClearable
        />
      </SelectStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: 30,
  paddingRight: 30,
})``;

const InputStyled = styled(Box)`
  width: 40%;
`;

const SelectStyled = styled(Box)`
  width: 18%;
`;
