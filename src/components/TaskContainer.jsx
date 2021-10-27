import React, { useContext } from 'react';
import Task from './Task'; //Import component

import MyContext from '../context/MyContext';

const TaskContainer = () => {
  const context = useContext(MyContext);
  const { tasks } = context;

  return (
    <aside>
      <h3>Active Tasks</h3>
      {tasks.length > 0 ? (
        tasks.map((item) => <Task key={item.id} item={item} />)
      ) : (
        <h2>No tasks pending</h2>
      )}
    </aside>
  );
};

export default TaskContainer;
