/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { cli } from 'cleye'
import {version,description} from '../package.json'
// Parse argv
const argv = cli({
    name: 'aidocs',
    version,
    help: {
        description,
    },
    ignoreArgv: type => type === 'unknown-flag' || type === 'argument',

    // Define parameters
    parameters: [
        '<first name>', // First name is required
        '[last name]' // Last name is optional
    ],

    // Define flags/options
    flags: {

        // Parses `--time` as a string
        time: {
            type: String,
            description: 'Time of day to greet (morning or evening)',
            default: 'morning'
        }
    }
})


export {}