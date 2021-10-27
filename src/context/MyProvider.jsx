import { useState, useRef, useEffect } from 'react';

import MyContext from './MyContext';

const MyProvider = (props) => {
  //Create the states and their setters
  const [task, setTask] = useState({ id: 0, task: '', done: false });
  const [tasks, setTasks] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);

  //Create a reference to handle focus
  const inputRef = useRef();

  //When the component mounts focus on the input field
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //This use effect runs the first time the component is mounted(Only once)
  //If there is any local storage for tasks and or tasksDone, put them into
  //their corresponding states
  useEffect(() => {
    let storage = localStorage.getItem('tasks');
    let storageItem = JSON.parse(storage);
    storageItem !== null && setTasks(storageItem);

    storage = null;
    storageItem = null;

    storage = localStorage.getItem('tasksDone');
    storageItem = JSON.parse(storage);
    storageItem !== null && setTasksDone(storageItem);
  }, []);

  //This effect will run everytime the tasks state changes
  //Set local storage with the tasks array
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  //This effect will run everytime the tasksDone state changes
  //Set local storage with the tasksDone array
  useEffect(() => {
    localStorage.setItem('tasksDone', JSON.stringify(tasksDone));
  }, [tasksDone]);

  //Place the entered task into the tasks array and clear the input field. Also refocus the input field
  const handleSubmit = (e) => {
    e.preventDefault();
    task.task.length > 0 && setTasks([...tasks, task]);
    setTask({ id: 0, task: '', done: false });
    inputRef.current.focus();
  };

  //If the tick icon for either the active tasks or the done tasks is clicked
  //update the done flag for that task
  const handleTick = (id, array) => {
    const tempTasks = array.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
        return task;
      } else {
        return task;
      }
    });

    //Separate out the active and not active tasks
    const tasksArray = tempTasks.filter((task) => task.done === false);
    const doneArray = tempTasks.filter((task) => task.done === true);

    //Move all tasks to either active or done
    if (array === tasks) {
      setTasks(tasksArray);
      setTasksDone((previousDone) => [...previousDone, ...doneArray]);
    } else {
      setTasksDone(doneArray);
      setTasks((previousTasks) => [...previousTasks, ...tasksArray]);
    }
  };

  //Delete either active or done tasks when the bin icon is clicked
  const handleDelete = (id, array) => {
    const tempArray = array.filter((item) => item.id !== id);
    array === tasks ? setTasks(tempArray) : setTasksDone(tempArray);
  };

  return (
    <MyContext.Provider
      value={{
        task,
        setTask,
        handleSubmit,
        inputRef,
        tasks,
        tasksDone,
        handleTick,
        handleDelete,
      }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
