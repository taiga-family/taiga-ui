import {writeFileSync} from 'fs';

export function overwriteVersion(file: string, version: string) {
    writeFileSync(file, `export const VERSION = '${version}';\n`, {encoding: 'utf-8'});
}
