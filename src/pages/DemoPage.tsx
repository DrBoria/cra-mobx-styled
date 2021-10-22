import React from 'react';
import { useObserver } from 'mobx-react';

import TodoList from 'sections/TodoList';
import { useStore } from 'rootStore';
import Header from 'sections/Header';

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

const TeacherSubmit = () => {
  const { taskStore } = useStore();
  return useObserver(() => (
    <>
      <Header menu={menuFields} />

      <div className="App">
        <div>
          <h3 className="subtitle">Make a new To do</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              taskStore.add({
                name: 'name',
                details: 'value',
              });
            }}
          >
            <button className="btn btn-info mb-2" type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="card-container">
          {taskStore.Todo.map((todo: any, i: number) => (
            <TodoList todo={todo} key={i} />
          ))}
        </div>
      </div>
    </>
  ));
};

export default TeacherSubmit;
