/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { readFile } from "fs";
import type { ConfigOptions} from "./config.js";
import { configName, configSchema } from "./config.js";

/**
 * @description loads the configuration from the config file at project root.
 * @returns {Promise<ConfigOptions>}
 */
async function loadConfig(): Promise<ConfigOptions> {
    const config = await new Promise<unknown>((resolve, reject) => {
        readFile(`./${configName}`, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data.toString()));
            }
        });
    });
    return configSchema.parse(config);
}

export default loadConfig;