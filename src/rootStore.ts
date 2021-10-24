import { createContext, useContext } from 'react';
import { types, Instance } from 'mobx-state-tree';

import { UiStore, UiStoreInitial } from 'models/ui';
import { DemoStore, DemoStoreInitial } from 'models/demo';

export const rootStore = types
  .model({
    UiStore,
    DemoStore,
  })
  .create({
    UiStore: UiStoreInitial,
    DemoStore: DemoStoreInitial,
  });

const RootStoreContext = createContext<null | Instance<typeof rootStore>>(null);
export const StoreProvider = RootStoreContext.Provider;

// Hook based on this idea
// https://dev.to/colbygarland/create-a-usestore-hook-for-mobx-state-tree-1la9
export function useStore() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
