import z from 'zod';
import { configLangZodSchema } from './lang.js';
/**
 * @fileoverview Configuration for the application.
 * @author 2023, Matan Nahmani
 */
const configSchema = z.object({
    apiKey: z.string(),
    files: z.object({
        folder: z.object({
            paths: z.array(z.string()).describe('The paths to scan.'),
            recursive: z.boolean().default(true).describe('Whether to scan the paths recursively.'),
            exclude: z.array(z.string()).describe('Paths to exclude from the scan.'),
        }).describe('Folder configuration.')
        ,
        files: z.object({
            patterns: z.array(z.string()).describe('The file patterns to scan.'),
            exclude: z.array(z.string()).describe('Files to exclude from the scan.'),
        }).optional().describe('Files configuration.'),
    }),
    locale: configLangZodSchema.default('en').describe('The locale to use for the application.'),
})
    .describe('Configuration for the application.');

type ConfigOptions = z.infer<typeof configSchema>;

export {
    configSchema,
    ConfigOptions
}
