import {tuiContainsOrAfter} from '@taiga-ui/cdk';

describe(`tuiContainsOrAfter`, () => {
    it(`Parent contains child`, () => {
        const parent = document.createElement(`div`);
        const child = document.createElement(`button`);

        parent.appendChild(child);

        expect(tuiContainsOrAfter(parent, child)).toEqual(true);
    });

    it(`Child does not contain parent`, () => {
        const parent = document.createElement(`div`);
        const child = document.createElement(`button`);

        parent.appendChild(child);

        expect(tuiContainsOrAfter(child, parent)).toEqual(false);
    });
});
