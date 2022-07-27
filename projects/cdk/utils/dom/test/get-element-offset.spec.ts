import {getElementOffset} from '../get-element-offset';

describe(`getElementOfset`, () => {
    it(`should return offsets`, () => {
        const grandParent = document.createElement(`div`);
        const parent = document.createElement(`div`);
        const child = document.createElement(`button`);

        grandParent.appendChild(parent);
        parent.appendChild(child);

        Object.defineProperty(child, `offsetParent`, {value: parent});
        Object.defineProperty(parent, `offsetParent`, {value: grandParent});

        expect(getElementOffset(grandParent, child)).toEqual({
            offsetTop: 0,
            offsetLeft: 0,
        });
    });
});
