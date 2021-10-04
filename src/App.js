import React from 'react';
import TodoItemByUseMachine from './TodoItemByUseMachine';
import TodoItemByUseState from './TodoItemByUseState';
import TodoItemByUseReducer from './TodoItemByUseReducer';

const App = () => {
    return (
        <div>
            <TodoItemByUseMachine />
            <TodoItemByUseState />
            <TodoItemByUseReducer />
        </div>
    );
};

export default App;
