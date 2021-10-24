import React, { FC } from 'react';
import styled from 'styled-components';

import Button from 'components/Button';

import { Theme } from 'styles/baseTheme';
import { TMessage, TMessageTypes } from 'models/ui';

const AlertContainer = styled.div`
  ${({ theme: { offsets, zIndex } }: { theme: Theme }) => `
    position: fixed;
    width: 40%;
    min-width: 300px;
    bottom: ${offsets.section};
    right: ${offsets.section};

  
    > * {
      margin-bottom: ${offsets.batweenElements};
    }
    z-index: ${zIndex.alert};
  `}
`;

const Message = styled.div`
  ${({ type, theme: { offsets, colors, border } }: { type: TMessageTypes; theme: Theme }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: ${border.radius};
    padding: ${offsets.elementContent};

    color: ${colors.typography.navigationText};
    background-color: ${colors.background[type]};
  `}
`;

type IAlertsProps = { messages: TMessage[]; hideMessage: (message: TMessage) => void };
const Alerts: FC<IAlertsProps> = ({ messages, hideMessage }) => {
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
