import {tuiContainsOrAfter} from '@taiga-ui/cdk';

describe('tuiContainsOrAfter', () => {
    it('parent contains child', () => {
        const parent = document.createElement('div');
        const child = document.createElement('button');

        parent.appendChild(child);

        expect(tuiContainsOrAfter(parent, child)).toBe(true);
    });

    it('child does not contain parent', () => {
        const parent = document.createElement('div');
        const child = document.createElement('button');

        parent.appendChild(child);

        expect(tuiContainsOrAfter(child, parent)).toBe(false);
    });

    it('catch error', () => {
        expect(
            tuiContainsOrAfter(
                {
                    contains(_: Node | null): boolean {
                        throw new Error('something');
                    },
                } as unknown as Node,
                document.createElement('button'),
            ),
        ).toBe(false);
    });
});
