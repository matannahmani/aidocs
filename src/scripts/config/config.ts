import z from 'zod';
import { configLangZodSchema } from './lang.js';
/**
 * @fileoverview Configuration for the application.
 * @author 2023, Matan Nahmani
 */
const configSchema = z.object({
    /** Open AI API KEY */
    apiKey: z.string(),
    /** Files configuration */
    files: z.object({
        /** Folder configuration */
        folder: z.object({
            /** The paths to scan. */
            paths: z.array(z.string()).describe('The paths to scan.'),
            /** Whether to scan the paths recursively. */
            recursive: z.boolean().default(true).describe('Whether to scan the paths recursively.'),
            /** Paths to exclude from the scan. */
            exclude: z.array(z.string()).describe('Paths to exclude from the scan.'),
        }).describe('Folder configuration.')
        ,
        /** File Scanner configuration */
        files: z.object({
            /** The file patterns to scan. */
            patterns: z.array(z.string()).describe('The file patterns to scan.'),
            /** Files to exclude from the scan. */
            exclude: z.array(z.string()).describe('Files to exclude from the scan.'),
        }).optional().describe('File Scanner configuration.'),
    }).required().describe('Files configuration.'),
    /** Output configuration */
    output: z.string().describe('The output file path.'),
    /** The locale to use for the application. */
    locale: configLangZodSchema.default('en').describe('The locale to use for the application.'),
}).strict()
    .describe('Configuration for the application.');

    /**
     * @title Configuration for the application.
     */
type ConfigOptions = z.infer<typeof configSchema>;

export {
    configSchema,
}

export type {
    ConfigOptions,
}