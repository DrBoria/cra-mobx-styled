import { types, Instance } from 'mobx-state-tree';
import { createContext, useContext } from 'react';

import { demoStore, demoStoreInitial } from 'models/demo';
import { uiStore, uiStoreInitial } from 'models/ui';

export const rootStore = types
  .model({
    uiStore,
    demoStore,
  })
  .create({
    uiStore:   uiStoreInitial,
    demoStore: demoStoreInitial,
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
