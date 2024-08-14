/// <reference lib="es2021" />
import fs from 'node:fs';
import path from 'node:path';

import {tuiIsCI} from '../../cdk/schematics';

const verbose = !tuiIsCI();

(function main(): void {
    const src = path.join(process.cwd(), 'node_modules', 'lucide-static', 'icons');
    const dest = process.argv[2] || path.join(process.cwd(), 'projects', 'icons', 'src');

    fs.readdirSync(src).forEach((filename: string) => {
        const filledFilename = renameToFilled(filename);
        const content = fs
            .readFileSync(path.join(src, filename), 'utf-8')
            .replace(/class="[a-zA-Z0-9:;.\s()\-,]*"/, '')
            .replaceAll(
                /<(circle|ellipse|line|polygon|polyline|path|rect)/g,
                '<$1 vector-effect="non-scaling-stroke"',
            );
        const filled = content.replaceAll('fill="none"', 'fill="currentColor"');
        const filePath = path.join(dest, filename);
        const fileFilledPath = path.join(dest, filledFilename);

        fs.writeFileSync(filePath, content);
        verbose && console.info('copied:', filePath);

        fs.writeFileSync(fileFilledPath, filled);
        verbose && console.info('copied:', fileFilledPath);
    });

    // 2. copy flags from design tokens
    // noinspection DuplicatedCode
    const flagsDir = path.resolve('node_modules/@taiga-ui/design-tokens/icons/flags');

    fs.readdirSync(flagsDir).forEach((filename: string) => {
        const content = fs.readFileSync(path.join(flagsDir, filename), 'utf-8');
        const filePath = path.join(dest, 'flags', filename);

        fs.mkdirSync(path.dirname(filePath), {recursive: true});
        fs.writeFileSync(filePath, content);
        verbose && console.info('copied:', filePath);
    });
})();

function renameToFilled(filename: string): string {
    const [name, extension] = filename.split('.');

    return `${name}-filled.${extension}`;
}
