import {canScroll} from '../can-scroll';

describe(`canScroll`, () => {
    it(`works vertically`, () => {
        const parent = document.createElement(`div`);
        const child = document.createElement(`div`);

        parent.appendChild(child);

        expect(canScroll(child, parent, true, true)).toEqual(false);
    });

    it(`works horizontally`, () => {
        const parent = document.createElement(`div`);
        const child = document.createElement(`div`);

        parent.appendChild(child);

        expect(canScroll(child, parent, false, true)).toEqual(false);
    });
});
