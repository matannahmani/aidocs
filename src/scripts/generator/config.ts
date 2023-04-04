import { writeFile } from "fs"
import { configSchema, type ConfigOptions } from "../config/config.js"

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
    writeFile('aidocs.json', baseCFGStr, (err) => {
        if (err) {
            throw err
        }
    }
    )
}
export { writeBaseConfig, baseCFG }