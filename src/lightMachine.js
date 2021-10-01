import { createMachine, assign } from 'xstate';

export default createMachine({
    initial: 'RED',
    context: {
        text: 'STOOOOP!!!',
    },
    states: {
        'RED': {
            entry: 'entryRed',
            exit: 'exitRed',
            on: {
                'Turn': {
                    target: 'GREEN',
                    actions: 'turnGreen',
                },
                'Broke': {
                    target: 'BROKEN',
                    actions: 'turnBroken',
                },
            }
        },
        'GREEN': {
            entry: 'entryGreen',
            exit: 'exitGreen',
            on: {
                'Turn': {
                    target: 'YELLOW',
                    actions: 'turnYellow',
                },
                'Broke': {
                    target: 'BROKEN',
                    actions: 'turnBroken',
                },
            }
        },
        'YELLOW': {
            entry: 'entryYellow',
            exit: 'exitYellow',
            on: {
                'Turn': {
                    target: 'RED',
                    actions: 'turnRed',
                },
                'Broke': {
                    target: 'BROKEN',
                    actions: 'turnBroken',
                },
            }
        },
        'BROKEN': {

        }
    }
}, {
    actions: {
        turnRed: assign((context, event) => {
            console.log('Turn Red');

            return {
                ...context,
                text: 'STOOOOP!!!',
            };
        }),
        turnGreen: assign((context, event) => {
            console.log('Turn Green');

            return {
                ...context,
                text: 'GOOOOOO!!!',
            };
        }),
        turnYellow: assign((context, event) => {
            console.log('Turn Yellow');

            return {
                ...context,
                text: 'BRAAAKE!!!',
            };
        }),
        turnBroken: assign((context, event) => {
            console.log('light is broken');

            return {
                ...context,
                text: 'BROKEN!!!',
            };
        }),
        entryRed: (context, event) => console.log('Entry Red'),
        entryGreen: (context, event) => console.log('Entry Green'),
        entryYellow: (context, event) => console.log('Entry Yellow'),
        exitRed: (context, event) => console.log('Exit Red'),
        exitGreen: (context, event) => console.log('Exit Green'),
        exitYellow: (context, event) => console.log('Exit Yellow'),
    },
});
