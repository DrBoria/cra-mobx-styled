import { types, Instance, cast } from 'mobx-state-tree';

export enum TMessageTypes {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error',
}

const Message = types.model('Message', {
  type: types.enumeration<TMessageTypes>(Object.values(TMessageTypes)),
  text: types.string,
});

export type TMessage = Instance<typeof Message>;

export const uiStore = types
  .model('uiStore', {
    loading:  types.boolean,
    messages: types.array(Message),
  })
  .actions((self) => ({
    toggleLoading(isLoading: boolean) {
      self.loading = isLoading;
    },
    hideMessage(messageToHide: TMessage) {
      self.messages = cast(self.messages.filter((message) => message.text !== messageToHide.text));
    },
  }))
  // adding second action is fix for type support for async actions
  .actions((self) => ({
    showHideMessage: (message: TMessage) => {
      self.messages.push(message);

      const messageShowTime = 3000;
      setTimeout(() => {
        self.hideMessage(message);
      }, messageShowTime);
    },
  }));

export const uiStoreInitial = {
  loading:  false,
  messages: [],
};

export type TUiStore = Instance<typeof uiStore>;
