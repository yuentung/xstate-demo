import React from 'react';
import styled from 'styled-components';
import { useMachine } from '@xstate/react';
import lightMachine from './lightMachine';

const LightWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Light = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 15px;
`;

const RedLight = styled(Light)`
    background-color: red;
`;

const GreenLight = styled(Light)`
    background-color: green;
`;

const YellowLight = styled(Light)`
    background-color: yellow;
`;

const App = () => {
    const [state, send] = useMachine(lightMachine);

    console.log(state.context);

    return (
        <div>
            <LightWrapper>
                {state.matches('RED') && <RedLight />}
                {state.matches('GREEN') && <GreenLight />}
                {state.matches('YELLOW') && <YellowLight />}
                {state.matches('BROKEN') && null}
                <p>{state.context.text}</p>

            </LightWrapper>
            <button
                onClick={() => send('Turn')}
            >
                Turn
            </button>
            <button
                onClick={() => send('Broke')}
            >
                Broke
            </button>
        </div>
    );
};

export default App;
