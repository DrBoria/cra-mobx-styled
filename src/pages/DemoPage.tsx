import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'rootStore';

import Header from 'sections/Header';
import Intro from 'sections/Intro';
import { TMessageTypes } from 'models/ui';

const menuFields = [
  {
    id: '1',
    title: 'title',
    url: 'url',
  },
  {
    id: '2',
    title: 'title',
    url: 'url',
  },
  {
    id: '3',
    title: 'title',
    url: 'url',
  },
  {
    id: '4',
    title: 'title',
    url: 'url',
  },
];

const DemoPage: FC<any> = () => {
  const { UiStore, DemoStore } = useStore();
  return (
    <>
      <Header menu={menuFields} />
      <Intro
        submit={() => DemoStore.fetchDemoLogin(UiStore, null)}
        success={() =>
          UiStore.showHideMessage({
            type: TMessageTypes.success,
            text: 'Success',
          })
        }
      />

      {UiStore.loading && 'loading...'}
    </>
  );
};

export default observer(DemoPage);
