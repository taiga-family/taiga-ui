import {tuiCanScroll} from '@taiga-ui/cdk';

describe(`tuiCanScroll`, () => {
    it(`works vertically`, () => {
        const parent = document.createElement(`div`);
        const child = document.createElement(`div`);

        parent.appendChild(child);

        expect(tuiCanScroll(child, parent, true, true)).toEqual(false);
    });

    it(`works horizontally`, () => {
        const parent = document.createElement(`div`);
        const child = document.createElement(`div`);

        parent.appendChild(child);

        expect(tuiCanScroll(child, parent, false, true)).toEqual(false);
    });
});
