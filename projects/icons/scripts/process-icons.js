const fs = require('fs');
const glob = require('glob');
const WIDTH_SEARCH = 'width="';
const HEIGHT_SEARCH = 'height="';
const START = '<svg';

processIcons();

function processIcons() {
    glob('*.svg', {}, (err, files) => {
        files.forEach(file => {
            const src = String(fs.readFileSync(file));
            const wrapped = wrapIcon(src, file.replace('.svg', ''));
            const final =
                typeof wrapped === 'string'
                    ? wrapped.replace(START, '<svg focusable="false"')
                    : `<svg xmlns="http://www.w3.org/2000/svg" width="${wrapped.width}" height="${wrapped.height}" focusable="false">${wrapped.src}</svg>`;

            fs.writeFileSync(file, final);
        });
    });
}

function wrapIcon(source, name) {
    const indexOfSTART = source.indexOf(START);
    const src = source.substring(indexOfSTART);
    const attributes = src.substring(indexOfSTART, src.indexOf('>', indexOfSTART));

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
    const transform = `translate(-${width / 2},-${height / 2})`;

    return {
        width,
        height,
        src: `<g id="${name}" xmlns="http://www.w3.org/2000/svg" transform="${transform}"><svg x="50%" y="50%">${src}</svg></g>`,
    };
}
