import {writeFileSync} from 'fs';

export function overwriteVersion(file: string, version: string): void {
    writeFileSync(file, `export const VERSION = '${version}';\n`, {encoding: `utf-8`});
}
