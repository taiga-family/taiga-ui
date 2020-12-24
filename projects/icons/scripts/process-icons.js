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
                    ? wrapped.replace('<svg', '<svg focusable="false"')
                    : `<svg xmlns="http://www.w3.org/2000/svg" width="${wrapped.width}" height="${wrapped.height}" focusable="false">${wrapped.src}</svg>`;

            fs.writeFileSync(file, final);
        });
    });
}

function wrapIcon(source, name) {
    const indexOfSTART = source.indexOf(START);
    const src = source.substring(indexOfSTART);
    const attibutes = src.substring(indexOfSTART, src.indexOf('>', indexOfSTART));

    if (
        !attibutes ||
        !attibutes.includes(WIDTH_SEARCH) ||
        !attibutes.includes(HEIGHT_SEARCH)
    ) {
        return '';
    }

    const indexOfWidth = attibutes.indexOf(WIDTH_SEARCH);
    const indexOfHeight = attibutes.indexOf(HEIGHT_SEARCH);
    const widthOffset = indexOfWidth + WIDTH_SEARCH.length;
    const heightOffset = indexOfHeight + HEIGHT_SEARCH.length;
    const widthString = attibutes.substring(
        widthOffset,
        attibutes.indexOf('"', widthOffset),
    );
    const heightString = attibutes.substring(
        heightOffset,
        attibutes.indexOf('"', heightOffset),
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
