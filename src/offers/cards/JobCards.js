import { useState } from 'react';
import { Card } from '@welcome-ui/card';
import { Text } from '@welcome-ui/text';
import { Stack } from '@welcome-ui/stack';
import { Box } from '@welcome-ui/box';
import { Button } from '@welcome-ui/button';

import { JobDescriptionModal } from '../modal/JobDescriptionModal';
import { useJobContext } from '../context/JobContext';

export const JobCards = ({ jobs, jobsByGroup }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  if (jobsByGroup) {
    const groups = Object.keys(jobsByGroup);
    return groups.map((group, index) => (
      <JobsCardWrapper
        key={index}
        showModal={showModal}
        closeModal={closeModal}
      >
        <Text variant="h4" as="p">
          {group}
        </Text>
        {jobsByGroup[group].map((job) => (
          <JobCard job={job} openModal={openModal} key={job.id} />
        ))}
      </JobsCardWrapper>
    ));
  }

  return (
    <JobsCardWrapper showModal={showModal} closeModal={closeModal}>
      {jobs.map((job) => (
        <JobCard job={job} openModal={openModal} key={job.id} />
      ))}
    </JobsCardWrapper>
  );
};

const JobsCardWrapper = ({ children, showModal, closeModal, job }) => (
  <>
    <Stack padding={30}>{children}</Stack>
    {showModal && <JobDescriptionModal closeModal={closeModal} />}
  </>
);

const JobCard = ({ job, openModal }) => {
  const { setJob } = useJobContext();

  const onClick = () => {
    setJob(job);
    openModal();
  };

  const { name, contract_type, office } = job;
  return (
    <Card
      padding={20}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Text variant="h5" as="p">
          {name}
        </Text>
        <Text>
          {contract_type.en} - {office.name}
        </Text>
      </Box>
      <Button onClick={onClick}>See more</Button>
    </Card>
  );
};
