import { observer } from 'mobx-react';
import { FC } from 'react';
import { useStore } from 'rootStore';

import Alerts from 'components/Alerts';

const AlertsSection: FC<any> = () => {
  const { uiStore } = useStore();
  return <>{uiStore.messages.length && <Alerts messages={uiStore.messages} hideMessage={uiStore.hideMessage} />}</>;
};

export default observer(AlertsSection);
