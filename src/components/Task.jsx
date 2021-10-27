import React, { useContext } from 'react';

//Import icons from the react-icons library
import { TiTick } from 'react-icons/ti';
import { MdDelete } from 'react-icons/md';
import MyContext from '../context/MyContext';

//Receive relevant props from parent
const Task = ({ item }) => {
  const context = useContext(MyContext);
  const { tasks, handleTick, handleDelete } = context;

  return (
    <div className='task-container'>
      <div className='tick'>
        <TiTick
          style={{
            fontSize: '22px',
          }}
          onClick={() => handleTick(item.id, tasks)} //Handle the tick functionality
        />
      </div>
      <div className='task'>
        <p>{item.task}</p>
      </div>

      <div className='bin'>
        <MdDelete
          style={{ fontSize: '22px' }}
          onClick={() => handleDelete(item.id, tasks)} //Handle the delete functionality
        />
      </div>
    </div>
  );
};

export default Task;
