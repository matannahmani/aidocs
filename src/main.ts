/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { cli, command } from 'cleye'
import pckg from '../package.json' assert { type: 'json' }
const { version,description } = pckg
import aidocsCMD from './scripts/commands/aidocs.js'
import { writeBaseConfig } from './scripts/generator/config.js'
// Parse argv
const argv = cli({
    name: 'aidocs',
    version,
    help: {
        description,
    },
    ignoreArgv: type => type === 'unknown-flag' || type === 'argument',

commands: [
    command({
        name: 'generate',
        'alias': 'g',
        flags: {
            docs: Boolean,
            config: Boolean,
        }
    }),
    command({
        name: 'build',
        'alias': 'b', 
    }),
]
    
    // // // Define parameters
    // parameters: [
    //     '[generate]' // Last name is optional
    // ],

    // Define flags/options
    // flags: {

    //     configure: {
    //         type: Boolean,
    //         description: 'Generate a default configuration file',
    //         default: false
    //     },
    //     // // Define a flag with a short alias
    // }
})

if (argv.command === "generate")
    writeBaseConfig();

if (argv.command === "build" || !argv.command && !argv.flags.help)
    aidocsCMD();


export {}