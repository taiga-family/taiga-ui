import fs from 'fs';
import {parse} from 'path';

const START = '<svg';
const WIDTH_SEARCH = 'width="';
const HEIGHT_SEARCH = 'height="';

interface WrappedContent {
    height: string;
    width: string;
    src: string;
}

type ContentInterceptor = (src: string) => string;

export function processIcons(files: string[], interceptor?: ContentInterceptor): void {
    for (const file of files) {
        const baseContent = String(fs.readFileSync(file));
        const src = interceptor ? interceptor(baseContent) : baseContent;

        const name = parse(file).base.replace('.svg', '');

        if (src.includes(`id="${name}"`)) {
            console.info('\x1b[33m%s\x1b[0m', `[skip]:`, file);
            continue;
        }

        const wrapped = wrapIcon(src, name);

        const final =
            typeof wrapped === 'string'
                ? wrapped.replace(
                      START,
                      `<svg xmlns="http://www.w3.org/2000/svg"><g id="${name}" xmlns="http://www.w3.org/2000/svg"><svg`,
                  ) + '</g></svg>'
                : `<svg xmlns="http://www.w3.org/2000/svg" width="${wrapped.width}" height="${wrapped.height}">${wrapped.src}</svg>`;

        fs.writeFileSync(file, final);

        console.info('\x1b[32m%s\x1b[0m', `[preprocessed]:`, file);
    }
}

function wrapIcon(source: string, name: string): string | WrappedContent {
    const src = source.substring(source.indexOf(START));
    const attributes = src.substring(0, src.indexOf('>'));

    if (
        !attributes ||
        !attributes.includes(WIDTH_SEARCH) ||
        !attributes.includes(HEIGHT_SEARCH)
    ) {
        return src;
    }

    const indexOfWidth = attributes.indexOf(WIDTH_SEARCH);
    const indexOfHeight = attributes.indexOf(HEIGHT_SEARCH);
    const widthOffset = indexOfWidth + WIDTH_SEARCH.length;
    const heightOffset = indexOfHeight + HEIGHT_SEARCH.length;
    const widthString = attributes.substring(
        widthOffset,
        attributes.indexOf('"', widthOffset),
    );
    const heightString = attributes.substring(
        heightOffset,
        attributes.indexOf('"', heightOffset),
    );

    if (
        !heightString ||
        !widthString ||
        widthString.includes('%') ||
        heightString.includes('%')
    ) {
        return src.replace(START, `<svg id="${name}"`);
    }

    const width = parseInt(widthString, 10);
    const height = parseInt(heightString, 10);
    const emWidth = width / 16;
    const emHeight = height / 16;

    return {
        width: `${emWidth}em`,
        height: `${emHeight}em`,
        src: `
        <g id="${name}" xmlns="http://www.w3.org/2000/svg">
            <svg x="50%" y="50%" width="${emWidth}em" height="${emHeight}em" overflow="visible" viewBox="0 0 ${width} ${height}">
                <svg x="${-width / 2}" y="${-height / 2}">${src}</svg>
            </svg>
        </g>`.trim(),
    };
}
