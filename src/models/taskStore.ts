import { types } from 'mobx-state-tree';

const Item = types.model('Item', {
  name: types.string,
  time_taken: types.number,
});

const TaskList = types
  .model('List', {
    items: types.array(Item),
  })
  .actions((self) => ({
    add(item: any) {
      self.items.push(item);
    },
  }));

// the todo model that identifies what fits into a model todo
const Todo = types
  .model('Todo', {
    name: types.string,
    details: types.string,
    is_done: false,
    TaskList: types.optional(TaskList, { items: [] }),
  })
  .actions((self) => ({
    markDone() {
      self.is_done = true;
    },
  }))
  .views((self) => ({
    status() {
      return self.is_done ? 'Done' : 'Not Done';
    },
  }));

export const taskStore = types
  .model('Todo', {
    Todo: types.array(Todo),
  })
  .actions((self) => ({
    add(task: any) {
      self.Todo.push(task);
    },
  }));

export const taskStoreInitialState = {
  Todo: [
    {
      name: 'name',
      details: 'details',
      is_done: false,
      TaskList: {
        items: [
          {
            name: 'name',
            time_taken: 123,
          },
        ],
      },
    },
  ],
};
