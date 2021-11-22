import { FC } from 'react';
import styled, { css } from 'styled-components';

import Button from 'components/Button';

import { TMessage, TMessageTypes } from 'models/ui';

const AlertContainer = styled.div`
  position: fixed;
  right: ${({ theme }) => theme.offsets.section};
  bottom: ${({ theme }) => theme.offsets.section};
  z-index: ${({ theme }) => theme.zIndex.alert};

  width: 40%;
  min-width: 300px;

  > * {
    margin-bottom: ${({ theme }) => theme.offsets.batweenElements};
  }
`;

const MessageTypes = (type: TMessageTypes) => css`
  background-color: ${({ theme }) => theme.colors[type]};
`;

const Message = styled.div<{ type: TMessageTypes }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: ${({ theme }) => theme.border.radius};

  padding: ${({ theme }) => theme.offsets.elementContent};

  color: ${({ theme }) => theme.colors.sectionContent};
  ${({ type }) => MessageTypes(type)}
`;

type TAlertsProps = { messages: TMessage[]; hideMessage: (message: TMessage) => void };
const Alerts: FC<TAlertsProps> = ({ messages, hideMessage }) => {
  return (
    <AlertContainer>
      {messages.map((message: TMessage, index: number) => (
        <Message key={index} type={message.type}>
          {message.text}
          <Button onClick={() => hideMessage(message)}>Close</Button>
        </Message>
      ))}
    </AlertContainer>
  );
};
export default Alerts;
