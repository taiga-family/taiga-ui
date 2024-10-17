/// <reference lib="es2021" />
import fs from 'node:fs';
import path from 'node:path';

import {PAYMENTS_ICONS} from '../../../scripts/custom-icons';
import {prepareSvg} from '../../../scripts/prepare-svg';

const verbose = !process.env.CI;
const dest =
    process.argv[2] || path.join(process.cwd(), 'projects', 'icons-material', 'src');

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
        const content = prepareSvg(fs.readFileSync(path.join(src, filename), 'utf-8'));
        const filePath = path.join(dest, 'material', type, filename);

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

    verbose && console.info('copied:', filePath);
});

// 3. copy payment icons
PAYMENTS_ICONS.forEach((filename) => {
    const filePath = path.join('projects/icons/src', `${filename}.svg`);

    fs.writeFileSync(
        path.join(dest, `${filename}.svg`),
        fs.readFileSync(path.join(filePath), 'utf-8'),
    );

    verbose && console.info('copied:', filePath);
});
