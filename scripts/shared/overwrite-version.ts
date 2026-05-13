import {writeFileSync} from 'node:fs';

export function overwriteVersion(file: string, version: string): void {
    writeFileSync(file, `export const TUI_VERSION = '${version}';\n`);
}

export function overwriteVersionLess(file: string, version: string): void {
    writeFileSync(file, `@tui-version: '${version}';\n`);
}
