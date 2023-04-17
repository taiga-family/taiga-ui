import {tuiCleanObject} from '@taiga-ui/cdk';

describe(`tuiCleanObject`, () => {
    it(`should be clear empty values`, (): void => {
        expect(
            tuiCleanObject({
                a: null,
                b: undefined,
                c: ``,
                d: null,
                e: NaN,
                f: [
                    {
                        a: 2,
                        b: undefined,
                        c: ``,
                    },
                    {
                        a: 0,
                        b: undefined,
                        c: ``,
                    },
                ],
                g: {
                    a: 4,
                    b: undefined,
                    c: `   `,
                },
            }),
        ).toEqual({f: [{a: 2}, {a: 0}], g: {a: 4}});
    });
});
