import { types, flow, Instance } from 'mobx-state-tree';
import { demoQuery, TDemoCredentials } from 'api/demoQuery';

import { TMessageTypes, TUiStore } from 'models/ui';

export const DemoStore = types
  .model({
    demoResponse: types.boolean,
  })
  .actions((self) => ({
    fetchDemoLogin: flow(function* fetchDemoLogin(UiStore: TUiStore, demoCredentials: TDemoCredentials) {
      UiStore.toggleLoading(true);

      try {
        self.demoResponse = yield demoQuery(demoCredentials);
        UiStore.toggleLoading(false);
      } catch (error) {
        UiStore.toggleLoading(false);
        UiStore.showHideMessage({
          type: TMessageTypes.error,
          text: `${error}`,
        });
      }
    }),
  }));

export const DemoStoreInitial = {
  demoResponse: false,
};

export type TDemoStore = {} & Instance<typeof DemoStore>;
