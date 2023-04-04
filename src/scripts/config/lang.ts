import z from 'zod';

const configLangZodSchema = z.enum(
    ['en', 
    'he',
    'ar',
    'ru',
    'fr',
    'es',
    'de',
    'it',
    'pt',
    'ja',
    'ko',
    'zh',
    'zh-TW',
    'nl',
    'sv',
    'da',
    'no',
    'fi',
    'pl',
    'cs',
    'tr',
    'ro',
    'hu',
    'el',
    'bg',
    'uk',]
    );
type ConfigLangOptions = z.infer<typeof configLangZodSchema>;

export {
    configLangZodSchema
};
export type { ConfigLangOptions };
