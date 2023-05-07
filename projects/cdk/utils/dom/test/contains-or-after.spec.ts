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

    it(`catch error`, () => {
        expect(
            tuiContainsOrAfter(
                {
                    contains(_: Node | null): boolean {
                        throw new Error(`something`);
                    },
                } as unknown as Node,
                document.createElement(`button`),
            ),
        ).toEqual(false);
    });
});
