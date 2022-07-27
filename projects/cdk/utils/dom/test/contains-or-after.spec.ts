import {containsOrAfter} from '../contains-or-after';

describe(`containsOrAfter`, () => {
    it(`Parent contains child`, () => {
        const parent = document.createElement(`div`);
        const child = document.createElement(`button`);

        parent.appendChild(child);

        expect(containsOrAfter(parent, child)).toEqual(true);
    });

    it(`Child does not contain parent`, () => {
        const parent = document.createElement(`div`);
        const child = document.createElement(`button`);

        parent.appendChild(child);

        expect(containsOrAfter(child, parent)).toEqual(false);
    });
});
