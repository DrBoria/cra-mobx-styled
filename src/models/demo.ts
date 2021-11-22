import { types, flow, Instance } from 'mobx-state-tree';

import { fetchDemoQuery, TDemoCredentials } from 'api/demoQuery';

import { TMessageTypes, TUiStore } from 'models/ui';

export const demoStore = types
  .model({
    demoResponse: types.boolean,
  })
  .actions((self) => ({
    fetchDemoQueryLogin: flow(function* fetchDemoQueryLogin(uiStore: TUiStore, demoCredentials: TDemoCredentials) {
      uiStore.toggleLoading(true);

      try {
        self.demoResponse = yield fetchDemoQuery(demoCredentials);
        uiStore.toggleLoading(false);
      } catch (error) {
        uiStore.toggleLoading(false);
        uiStore.showHideMessage({
          type: TMessageTypes.error,
          text: `${error}`,
        });
      }
    }),
  }));

export const demoStoreInitial = {
  demoResponse: false,
};

export type TDemoStore = Instance<typeof demoStore>;
