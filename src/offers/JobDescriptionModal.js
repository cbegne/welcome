import styled from 'styled-components';
import { Box } from '@welcome-ui/box';
import { Text } from '@welcome-ui/text';
import { Button } from '@welcome-ui/button';

import { Modal } from '../modal/Modal';
import { useJobContext } from './context/JobContext';

export const JobDescriptionModal = ({ closeModal }) => {
  const { job } = useJobContext();

  if (!job) return null;

  const {
    description,
    profile,
    recruitment_process,
    websites_urls,
    name,
  } = job;

  const application = websites_urls.find(
    (elem) => elem.website_reference === 'wttj_fr'
  );

  return (
    <Modal onCloseModal={closeModal} title="Job description">
      <ScrollWrapper>
        <Text variant="h4" marginTop={10}>
          {name}
        </Text>
        <Text variant="h5" as="p">
          Description
        </Text>
        <Box dangerouslySetInnerHTML={{ __html: description }} />
        <Text variant="h5" as="p">
          Profile
        </Text>
        <Box dangerouslySetInnerHTML={{ __html: profile }} />
        <Text variant="h5" as="p">
          Recruitment process
        </Text>
        <Box dangerouslySetInnerHTML={{ __html: recruitment_process }} />
        <Box
          display="flex"
          justifyContent="center"
          marginTop={60}
          marginBottom={20}
        >
          <Button
            size="lg"
            w={1 / 4}
            as="a"
            href={application.url}
            target="_blank"
            rel="noopener nofollow"
          >
            Apply
          </Button>
        </Box>
      </ScrollWrapper>
    </Modal>
  );
};

const ScrollWrapper = styled(Box)`
  overflow-y: auto;
`;
