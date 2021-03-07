import { Loader } from '@welcome-ui/loader';
import { Card } from '@welcome-ui/card';
import { Text } from '@welcome-ui/text';
import { Stack } from '@welcome-ui/stack';
import { Box } from '@welcome-ui/box';
import { Button } from '@welcome-ui/button';

export const JobCardsMain = ({ jobs, isLoading, error }) => {
  if (isLoading)
    return (
      <WrapperBox>
        <Loader />
      </WrapperBox>
    );

  if (error) return <WrapperBox>Sorry, an error occured</WrapperBox>;

  if (!jobs.length)
    return <WrapperBox>Sorry, no job offer available now</WrapperBox>;

  return <JobCards jobs={jobs} />;
};

const JobCards = ({ jobs }) => {
  const openModal = () => {
    console.log('open modal');
  };

  console.log(jobs);

  return (
    <Stack padding={30}>
      {jobs.map(({ id, name, contract_type, office }) => (
        <Card
          key={id}
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
      ))}
    </Stack>
  );
};

const WrapperBox = ({ children }) => (
  <Box display="flex" justifyContent="center" margin={50}>
    {children}
  </Box>
);
