#!/usr/bin/env node
const Draughtboard = require('./draughtboard_generator');

if (process.argv.length >= 2) {
    let argumentsValues = process.argv.slice(2);
    let parameters = { height: null, width: null, black: null, white: null };

    for (let j = 0; j < argumentsValues.length; j++) {
        if (argumentsValues[j].startsWith('--') && argumentsValues[j].includes('='))
        {
            let argumentValuePair = argumentsValues[j].slice(2).split('=');
            if (argumentValuePair.length === 2)
                if (argumentValuePair[0] === 'height')
                    parameters.height = argumentValuePair[1];
        }
    }

    const BOARD = new Draughtboard(parameters.height, parameters.width);
    console.log(BOARD.display(parameters.black, parameters.white));
}
