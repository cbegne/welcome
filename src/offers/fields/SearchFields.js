import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { InputText } from '@welcome-ui/input-text';
import { Select } from '@welcome-ui/select';
import { Box } from '@welcome-ui/box';
import { DatePicker } from '@welcome-ui/date-picker';

import { getContractTypes } from '../utils/offersUtils';
import { useDebounce } from '../../hooks/useDebounce';
import { GROUPS } from '../utils/offersConstants';

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

  return (
    <WrapperStyled>
      <InputStyled>
        <InputText
          placeholder="Your dream job?"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </InputStyled>
      <SelectStyled>
        <Select
          placeholder="Contract type"
          options={contractTypes}
          onChange={(value) => {
            setContractType(value);
          }}
          value={contractType}
          isClearable
        />
      </SelectStyled>
      <SelectStyled>
        <DatePicker
          placeholder="Date"
          onChange={(value) => {
            setDate(value);
          }}
          ref={dateRef}
          value=""
        />
      </SelectStyled>
      <SelectStyled>
        <Select
          placeholder="Group by"
          options={GROUPS}
          onChange={(value) => {
            setGroup(value);
          }}
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
