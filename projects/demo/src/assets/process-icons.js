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
            const name = file.replace('.svg', '');
            const wrapped = wrapIcon(src, name);
            const final =
                typeof wrapped === 'string'
                    ? wrapped.replace(
                          START,
                          `<svg xmlns="http://www.w3.org/2000/svg"><g id="${name}" xmlns="http://www.w3.org/2000/svg"><svg`,
                      ) + '</g></svg>'
                    : `<svg xmlns="http://www.w3.org/2000/svg" width="${
                          wrapped.width / 16
                      }em" height="${wrapped.height / 16}em">${wrapped.src}</svg>`;

            fs.writeFileSync(file, final);
        });
    });
}

function wrapIcon(source, name) {
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

    return {
        width: `${width / 16}em`,
        height: `${height / 16}em`,
        src: `<g id="${name}" xmlns="http://www.w3.org/2000/svg"><svg  x="50%" y="50%" width="${
            width / 16
        }em" height="${
            height / 16
        }em" overflow="visible" viewBox="0 0 ${width} ${height}"><svg x="${
            -width / 2
        }" y="${-height / 2}">${src}</svg></svg></g>`,
    };
}
