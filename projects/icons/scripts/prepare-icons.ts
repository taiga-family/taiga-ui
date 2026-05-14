import fs from 'node:fs';
import path from 'node:path';

import {prepareSvg} from '../../../scripts/prepare-svg';

const verbose = !process.env.CI;
const cwd = process.cwd();
const projectRoot = path.join(cwd, 'projects', 'icons');
const lucideSrc = path.join(cwd, 'node_modules', 'lucide-static', 'icons');

const flagsSrc = path.join(
    cwd,
    'node_modules',
    '@taiga-ui',
    'design-tokens',
    'icons',
    'flags',
);

const assetsSrc = path.join(projectRoot, 'assets');
const dest = process.argv[2] || path.join(projectRoot, 'src');

prepareDest(dest);
copyLucideIcons({src: lucideSrc, dest});
copyDirectory({src: assetsSrc, dest});
copyDirectory({src: flagsSrc, dest: path.join(dest, 'flags')});

function prepareDest(dest: string): void {
    fs.rmSync(dest, {recursive: true, force: true});
    fs.mkdirSync(dest, {recursive: true});
}

function copyLucideIcons(options: {src: string; dest: string}): void {
    fs.readdirSync(options.src).forEach((filename) => {
        const content = prepareSvg(
            fs.readFileSync(path.join(options.src, filename), 'utf-8'),
        ).replaceAll('stroke-width="2"', 'stroke-width="calc((100vw - 100vh) / 10)"');

        writeFile(path.join(options.dest, filename), content);
        writeFile(
            path.join(options.dest, renameToFilled(filename)),
            getFilledIcon(content),
        );
    });
}

function copyDirectory(options: {src: string; dest: string}): void {
    if (!fs.existsSync(options.src)) {
        return;
    }

    fs.cpSync(options.src, options.dest, {recursive: true});

    verbose && console.info('copied:', options.src);
}

function writeFile(filePath: string, content: string): void {
    fs.mkdirSync(path.dirname(filePath), {recursive: true});
    fs.writeFileSync(filePath, content);

    verbose && console.info('copied:', filePath);
}

function getFilledIcon(content: string): string {
    return content.replaceAll('fill="none"', 'fill="currentColor"');
}

function renameToFilled(filename: string): string {
    return filename.replace(/\.svg$/, '-filled.svg');
}
