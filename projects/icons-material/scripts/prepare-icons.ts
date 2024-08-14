/// <reference lib="es2021" />
import fs from 'node:fs';
import path from 'node:path';

import {PAYMENTS_ICONS} from '../../../scripts/custom-icons';
import {makeIconIndexFile, makeIconName} from '../../../scripts/make-icon-index-file';
import {tuiIsCI} from '../../cdk/schematics';

const verbose = !tuiIsCI();

(function main(): void {
    const dest =
        process.argv[2] || path.join(process.cwd(), 'projects', 'icons-material', 'src');
    const icons: string[] = PAYMENTS_ICONS.map((name) =>
        makeIconName(`material.${name}`),
    );

    // 1. copy material icons
    ['filled', 'outlined', 'round', 'sharp', 'two-tone'].forEach((type) => {
        const src = path.join(
            process.cwd(),
            'node_modules',
            '@material-design-icons',
            'svg',
            type,
        );

        fs.readdirSync(src).forEach((filename: string) => {
            const content = fs
                .readFileSync(path.join(src, filename), 'utf-8')
                .replace(/class="[a-zA-Z0-9:;.\s()\-,]*"/, '')
                .replaceAll(
                    /<(circle|ellipse|line|polygon|polyline|path|rect)/g,
                    '<$1 vector-effect="non-scaling-stroke"',
                );

            const filePath = path.join(dest, 'material', type, filename);

            icons.push(makeIconName(`material.${type}.${filename.replace('.svg', '')}`));

            fs.mkdirSync(path.dirname(filePath), {recursive: true});
            fs.writeFileSync(filePath, content);

            verbose && console.info('copied:', filePath);
        });
    });

    // 2. copy flags from design tokens
    const flagsDir = path.resolve('node_modules/@taiga-ui/design-tokens/icons/flags');

    fs.readdirSync(flagsDir).forEach((filename: string) => {
        const content = fs.readFileSync(path.join(flagsDir, filename), 'utf-8');
        const filePath = path.join(dest, 'flags', filename);

        fs.mkdirSync(path.dirname(filePath), {recursive: true});
        fs.writeFileSync(filePath, content);
        icons.push(makeIconName(`material.flags.${filename.replace('.svg', '')}`));
        verbose && console.info('copied:', filePath);
    });

    // 3. copy payment icons
    PAYMENTS_ICONS.forEach((filename) => {
        const filePath = path.join('projects/icons/src', `${filename}.svg`);

        fs.writeFileSync(
            path.join(dest, `${filename}.svg`),
            fs.readFileSync(path.join(filePath), 'utf-8'),
        );

        icons.push(makeIconName(`material.${filename.replace('.svg', '')}`));
        verbose && console.info('copied:', filePath);
    });

    // 4. make index.ts
    fs.writeFileSync(path.join(dest, '..', 'index.ts'), makeIconIndexFile(icons));
})();
