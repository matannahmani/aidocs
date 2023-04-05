import { writeFile } from "fs"
import { configName, type ConfigOptions } from "../config/config.js"
import { log } from "@clack/prompts"

const baseCFG: ConfigOptions = {
    'apiKey': '',
    files: {
        'folder': {
            'exclude': [],
            'paths': [],
            'recursive': true
        },
        'files': {
            'patterns': [],
            'exclude': []
        }
    },
    'locale': 'en',
    'output': 'aidocs/'
}


/**
 * @overview Writes the base configuration to project root.
 */
const writeBaseConfig = (): void => {
    const baseCFGStr = JSON.stringify(baseCFG, null, 4)
    log.info('Writing base configuration to project root...')
    writeFile(configName, baseCFGStr, (err) => {
        if (err) {
            throw err
        }
    }
    )
}
export { writeBaseConfig, baseCFG }