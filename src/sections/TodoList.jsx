import React from 'react';
import { observer } from 'mobx-react';
import Button from 'components/Button';

const TodoList = ({ todo }) => {
  return (
    <div className="card">
      <ul>
        {todo.TaskList.items.map((item, i) => (
          <li key={i}>
            {item.name} - Minutes needed {item.time_taken}
          </li>
        ))}
      </ul>
      <Button
        onClick={todo.TaskList.add({
          name: 'name',
          time_taken: 123,
        })}
      >
        Add
      </Button>
    </div>
  );
};

export default observer(TodoList);
