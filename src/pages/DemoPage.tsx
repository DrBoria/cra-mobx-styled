import { observer } from 'mobx-react';
import { FC } from 'react';
import { useStore } from 'rootStore';

import { TMessageTypes } from 'models/ui';

import Header from 'sections/Header';
import Intro from 'sections/Intro';

const menuFields = [
  {
    id:    '1',
    title: 'title',
    url:   'url',
  },
  {
    id:    '2',
    title: 'title',
    url:   'url',
  },
  {
    id:    '3',
    title: 'title',
    url:   'url',
  },
  {
    id:    '4',
    title: 'title',
    url:   'url',
  },
];

const DemoPage: FC<any> = () => {
  const { uiStore, demoStore } = useStore();
  return (
    <>
      <Header menu={menuFields} />
      <Intro
        submit={() => demoStore.fetchDemoQueryLogin(uiStore, null)}
        success={() =>
          uiStore.showHideMessage({
            type: TMessageTypes.success,
            text: 'Success',
          })
        }
      />

      {uiStore.loading && 'loading...'}
    </>
  );
};

export default observer(DemoPage);
