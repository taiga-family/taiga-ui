import {writeFileSync} from 'node:fs';

export function overwriteVersion(file: string, version: string): void {
    writeFileSync(file, `export const TUI_VERSION = '${version}';\n`, {
        encoding: 'utf-8',
    });
}
