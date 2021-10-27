import React, { useContext } from 'react'; //Import useRef & useEffect from React
import { v4 as uuidv4 } from 'uuid'; //Use the uuid library to create unique id numbers

import MyContext from '../context/MyContext';

const Form = () => {
  const context = useContext(MyContext);
  const { task, setTask, handleSubmit, inputRef } = context;

  return (
    <form>
      <label>Please enter your task</label>
      <input
        maxLength='40'
        ref={inputRef}
        type='text'
        value={task.task}
        onChange={
          (e) => setTask({ id: uuidv4(), task: e.target.value, done: false }) //Record our entered task
        }
      />
      <button onClick={handleSubmit}>Add</button>{' '}
      {/* Calls the submit function from the parent(App) */}
    </form>
  );
};

export default Form;
