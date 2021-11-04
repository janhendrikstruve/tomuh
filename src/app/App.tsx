import React from 'react';
import ToDo from './components/Todo/Todo';

function App(): JSX.Element {
  return (
    <>
      <ToDo
        isDone={false}
        title={'Kuh streicheln'}
        description={'Streichle die Kühe'}
      ></ToDo>
      <ToDo
        isDone={false}
        title={'Kuh streicheln'}
        description={'Streichle die Kühe'}
      ></ToDo>
    </>
  );
}

export default App;
