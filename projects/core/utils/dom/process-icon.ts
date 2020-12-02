const WIDTH_SEARCH = 'width="';
const HEIGHT_SEARCH = 'height="';
const START = '<svg';

export function processIcon(src: string, name: string): string {
    const indexOfStart = src.indexOf(START);
    const attibutes = src.substring(indexOfStart, src.indexOf('>', indexOfStart));

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

    return `<g id="${name}" xmlns="http://www.w3.org/2000/svg" transform="${transform}"><svg x="50%" y="50%">${src}</svg></g>`;
}
