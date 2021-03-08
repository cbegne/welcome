import styled from 'styled-components';
import { Box } from '@welcome-ui/box';
import { Text } from '@welcome-ui/text';
import { Button } from '@welcome-ui/button';
import { CrossIcon } from '@welcome-ui/icons.cross';

export const Modal = ({ onCloseModal, title, children }) => (
  <Background>
    <Wrapper>
      <CloseButton
        shape="circle"
        size="lg"
        variant="tertiary"
        onClick={onCloseModal}
      >
        <CrossIcon size="lg" />
      </CloseButton>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  </Background>
);

const Background = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  zIndex: 999,
})`
  background-color: rgba(0, 0, 0, 0.55);
  inset: 0px;
`;

const Wrapper = styled(Box).attrs({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'light.900',
  borderRadius: 0,
  borderStyle: 'solid',
  borderWidth: '2px',
  zIndex: 999,
  padding: 50,
})`
  width: 1000px;
  height: 95%;
`;

const CloseButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
`;

const Title = styled(Text).attrs(({ variant }) => ({
  variant: 'h3',
  paddingBottom: 20,
  borderBottom: '2px solid',
  borderColor: 'dark.900',
}))``;
