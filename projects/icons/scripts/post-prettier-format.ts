import {readFileSync, writeFileSync} from 'fs';
import prettier, {Options as PrettierOptions} from 'prettier';

interface Options {
    file: string;
    config: PrettierOptions;
}

export async function tuiPostPrettierFormat({file, config}: Options): Promise<void> {
    console.info(`\x1B[36m%s\x1B[0m`, `format: ${file} by parser - ${config.parser}`);

    const bundledBody = readFileSync(file, `utf8`);
    const formatted = await prettier.format(bundledBody, config);

    writeFileSync(file, formatted);
}
