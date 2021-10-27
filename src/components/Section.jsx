import React from 'react';

//Import components
import TaskContainer from './TaskContainer';
import DoneContainer from './DoneContainer';

const Section = () => {
  return (
    <section>
      <TaskContainer />
      <DoneContainer />
    </section>
  );
};

export default Section;
