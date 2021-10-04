import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const CircleWrapper = styled.div`
    display: inline-block;
    width: 40px;
    padding: 5px;
    border-radius: 30px;
    margin-right: 10px;
    background-color: gray;
    cursor: pointer;
`;

const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: ${({ active }) => active && '20px'};
    background-color: black;
    transition: all .5s;
`;

const reducer = (state, action) => {
    switch (state) {
        case 'inactive':
            if (action.type === 'TOGGLE') return 'pending';
            return state;
        case 'pending':
            if (action.type === 'SUCCESS') return 'active';
            return state;
        case 'active':
            if (action.type === 'TOGGLE') return 'inactive';
            return state;
        default:
            return state;
    }
};

const TodoItemByUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, 'inactive');
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (state === 'pending') {
            setTimeout(() => {
                dispatch({ type: 'SUCCESS' });
                setCount(count + 1);
                console.log('success event happend');
            }, 1500);
        }
    }, [state, count]);

    return (
        <Wrapper>
            useReducer:
            <CircleWrapper
                onClick={() => dispatch({ type: 'TOGGLE' })}
            >
                <Circle active={state === 'active'} />
            </CircleWrapper>
            state: {state}; count: {count}
        </Wrapper>
    );
};

export default TodoItemByUseReducer;
