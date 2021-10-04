import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const CircleWrapper = styled.div`
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

const TodoItemByUseState = () => {
    const [state, setState] = useState('inactive');
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (state === 'pending') {
            setTimeout(() => {
                setState('active');
                setCount(count + 1);
                console.log('success event happend')
            }, 1500);
        }
    }, [state, count]);

    return (
        <Wrapper>
            useState: 
            <CircleWrapper
                onClick={() => {
                    if (state === 'inactive') {
                        setState('pending');
                    } else if (state === 'active') {
                        setState('inactive')
                    }
                }}
            >
                <Circle active={state === 'active'} />
            </CircleWrapper>
            state: {state}; count: {count}
        </Wrapper>
    );
};

export default TodoItemByUseState;
