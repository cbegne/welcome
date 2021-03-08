import { Loader } from '@welcome-ui/loader';
import { Card } from '@welcome-ui/card';
import { Text } from '@welcome-ui/text';
import { Stack } from '@welcome-ui/stack';
import { Box } from '@welcome-ui/box';
import { Button } from '@welcome-ui/button';

export const JobCardsMain = ({ jobs, jobsByGroup, isLoading, error }) => {
  if (isLoading)
    return (
      <WrapperBox>
        <Loader />
      </WrapperBox>
    );

  if (error) return <WrapperBox>Sorry, an error occured</WrapperBox>;

  if (!jobs.length)
    return <WrapperBox>Sorry, no job offer available</WrapperBox>;

  return <JobCards jobs={jobs} jobsByGroup={jobsByGroup} />;
};

const JobCards = ({ jobs, jobsByGroup }) => {
  const openModal = () => {
    console.log('open modal');
  };

  if (jobsByGroup) {
    const groups = Object.keys(jobsByGroup);
    return groups.map((group, index) => (
      <Stack padding={30} key={index}>
        <Text variant="h4" as="p">
          {group}
        </Text>
        {jobsByGroup[group].map((job) => (
          <JobCard job={job} openModal={openModal} key={job.id} />
        ))}
      </Stack>
    ));
  }

  return (
    <Stack padding={30}>
      {jobs.map((job) => (
        <JobCard job={job} openModal={openModal} key={job.id} />
      ))}
    </Stack>
  );
};

const JobCard = ({ job, openModal }) => {
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
      <Button onClick={openModal}>See more</Button>
    </Card>
  );
};

const WrapperBox = ({ children }) => (
  <Box display="flex" justifyContent="center" margin={50}>
    {children}
  </Box>
);
