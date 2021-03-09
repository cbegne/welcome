import {
  getContractTypes,
  getJobsByGroup,
  filterPublishedAfter,
  filterByContractType,
  filterByTextSearch,
} from '../offersUtils';

describe('offersUtils getContractTypes', () => {
  it('returns an array of contract types with no duplicate on a select format', () => {
    const jobs = [
      {
        id: 1,
        contract_type: {
          en: 'Full-Time',
        },
      },
      {
        id: 2,
        contract_type: {
          en: 'Full-Time',
        },
      },
      {
        id: 3,
        contract_type: {
          en: 'Internship',
        },
      },
      {
        id: 4,
        contract_type: {
          en: 'Freelance',
        },
      },
    ];

    const expectedReturn = [
      {
        value: 'Full-Time',
        label: 'Full-Time',
      },
      {
        value: 'Internship',
        label: 'Internship',
      },
      {
        value: 'Freelance',
        label: 'Freelance',
      },
    ];

    expect(getContractTypes(jobs)).toEqual(expectedReturn);
  });
});

describe('offersUtils getJobsByGroup', () => {
  const jobs = [
    {
      id: 1,
      city: 'Prague',
    },
    {
      id: 2,
      city: 'Paris',
    },
    {
      id: 3,
      city: 'Paris',
    },
    {
      id: 4,
      city: 'Paris',
    },
  ];

  it('returns null if the second argument is null', () => {
    expect(getJobsByGroup(jobs, null)).toEqual(null);
  });

  it('returns jobs grouped by according to the second argument value', () => {
    const expectedReturn = {
      Prague: [{ id: 1, city: 'Prague' }],
      Paris: [
        { id: 2, city: 'Paris' },
        { id: 3, city: 'Paris' },
        { id: 4, city: 'Paris' },
      ],
    };

    expect(getJobsByGroup(jobs, 'city')).toEqual(expectedReturn);
  });
});

describe('offersUtils filterPublishedAfter', () => {
  const job = {
    id: 1,
    published_at: '2021-02-28T23:00:00.000Z',
  };

  it('returns false if the second argument is a date posterior to the job published_at date', () => {
    expect(
      filterPublishedAfter(job, new Date('2021-03-09T14:27:53.413+01:00'))
    ).toEqual(false);
  });

  it('returns true if the second argument is a date anterior to the job published_at date', () => {
    expect(
      filterPublishedAfter(job, new Date('2021-01-09T14:27:53.413+01:00'))
    ).toEqual(true);
  });

  it('returns true if the second argument is null or undefined', () => {
    const job = {
      id: 1,
      published_at: '2021-02-28T23:00:00.000Z',
    };

    expect(filterPublishedAfter(job, null)).toEqual(true);
  });
});

describe('offersUtils filterByContractType', () => {
  const job = {
    id: 1,
    contract_type: {
      en: 'Full-Time',
    },
  };

  it('returns false if the second argument is not the same contract type', () => {
    expect(filterByContractType(job, 'Freelance')).toEqual(false);
  });

  it('returns true if the second argument is the same contract type', () => {
    expect(filterByContractType(job, 'Full-Time')).toEqual(true);
  });

  it('returns true if the second argument is null or undefined', () => {
    expect(filterByContractType(job, null)).toEqual(true);
  });
});

describe('offersUtils filterByTextSearch', () => {
  const job = {
    id: 1,
    name: 'Senior Editor / Journalist',
  };

  it('returns false if the second argument does not match part of the name', () => {
    expect(filterByTextSearch(job, 'Frontend')).toEqual(false);
  });

  it('returns true if the second argument matches part of the name', () => {
    expect(filterByTextSearch(job, 'Jour')).toEqual(true);
  });

  it('returns true if the second argument matches part of the name, even if the capitalization is different', () => {
    expect(filterByTextSearch(job, 'JOUR')).toEqual(true);
  });

  it('returns true if the second argument is null or undefined', () => {
    expect(filterByTextSearch(job, null)).toEqual(true);
  });
});
