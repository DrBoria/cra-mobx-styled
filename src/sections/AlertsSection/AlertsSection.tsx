import React, { FC } from 'react';
import { observer } from 'mobx-react';

import Alerts from 'components/Alerts';
import { useStore } from 'rootStore';

const AlertsSection: FC<any> = () => {
  const { UiStore } = useStore();
  return <>{UiStore.messages.length && <Alerts messages={UiStore.messages} hideMessage={UiStore.hideMessage} />}</>;
};

export default observer(AlertsSection);
