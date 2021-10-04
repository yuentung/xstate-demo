import React, { useEffect } from 'react';
import styled from 'styled-components';
import { createMachine, assign } from 'xstate';
import { useMachine } from '@xstate/react';

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

const toggleMachine = createMachine({
    initial: 'inactive',
    context: {
        count: 0
    },
    states: {
        inactive: {
            on: {
                TOGGLE: { target: 'pending' }
            }
        },
        pending: {
            entry: (context, event) => console.log('entered pending'),
            exit: (context, event) => console.log('left pending'),
            on: {
                SUCCESS: {
                    target: 'active',
                    actions: assign((context, event) => {
                        console.log('success event happend');
                        return {
                            count: context.count + 1
                        }
                    })
                }
            }
        },
        active: {
            on: {
                TOGGLE: { target: 'inactive' }
            }
        },
    }
});

const TodoItemByUseMachine = () => {
    const [state, send] = useMachine(toggleMachine);

    useEffect(() => {
        if (state.value === 'pending') {
            setTimeout(() => {
                send('SUCCESS');
            }, 1500);
        }
    }, [state, send]);

    return (
        <Wrapper>
            useMachine: 
            <CircleWrapper
                onClick={() => send('TOGGLE')}
            >
                <Circle active={state.value === 'active'} />
            </CircleWrapper>
            state: {state.value}; count: {state.context.count}
        </Wrapper>
    );
};

export default TodoItemByUseMachine;
