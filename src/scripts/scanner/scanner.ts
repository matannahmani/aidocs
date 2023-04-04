// import { readFile, readdir } from 'fs/promises';
// import { join } from 'path';
// import LRU from 'lru-cache';
// import minimatch from 'minimatch';

// const openai = new OpenAI(process.env.OPENAI_API_KEY);

// interface ScannerOptions {
//   filePattern: string;
//   excludeFiles?: string[];
// }

// interface CacheEntry {
//   content: string;
//   lastModified: number;
// }

// export class Scanner {
//   private cache: LRU<string, CacheEntry>;

//   constructor() {
//     this.cache = new LRU<string, CacheEntry>({ max: 1000 });
//   }

//   async scanFiles(
//     directoryPath: string,
//     options: ScannerOptions = { filePattern: '**/*.ts' }
//   ): Promise<string[]> {
//     const files = await readdir(directoryPath);
//     const pattern = options.filePattern;
//     const excludeFiles = options.excludeFiles || [];
//     const filteredFiles = files.filter(
//       (file) => minimatch(file, pattern) && !excludeFiles.includes(file)
//     );

//     const textPromises = filteredFiles.map(async (file) => {
//       const filePath = join(directoryPath, file);
//       const lastModified = (await this.getFileStat(filePath)).mtimeMs;
//       const cachedEntry = this.cache.get(filePath);

//       if (cachedEntry && cachedEntry.lastModified === lastModified) {
//         // If the file is already in the cache and has not been modified, return the cached content.
//         return cachedEntry.content;
//       } else {
//         // If the file is not in the cache or has been modified, scan the file using the OpenAI API.
//         const fileContents = await readFile(filePath, 'utf8');
//         const response = await openai.completions.create({
//           engine: 'davinci-codex',
//           prompt: fileContents,
//           max_tokens: 1024,
//           n: 1,
//           stop: ['\n']
//         });
//         const text = response.choices[0].text.trim();
//         // Update the cache with the new content and last modified time.
//         this.cache.set(filePath, { content: text, lastModified });
//         return text;
//       }
//     });

//     return Promise.all(textPromises);
//   }

//   private async getFileStat(filePath: string): Promise<import('fs').Stats> {
//     try {
//       return await stat(filePath);
//     } catch (error) {
//       throw new Error(`Unable to get file stats for "${filePath}": ${error}`);
//     }
//   }
// }
