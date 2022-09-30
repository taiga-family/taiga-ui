import {readFileSync, writeFileSync} from 'fs';
import prettier from 'prettier';

export function postPrettierFormat(filePath: string, prettierConfig?: string): void {
    const bundledBody = readFileSync(filePath, `utf8`);
    const options = prettier.resolveConfig.sync(prettierConfig ?? `prettier.config.js`);
    const formatted = prettier.format(bundledBody, {...options, parser: `typescript`});

    writeFileSync(filePath, formatted);
}
