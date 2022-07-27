import {toGradient} from '../to-gradient';

describe(`toGradient`, () => {
    it(`test case 1`, () => {
        expect(
            toGradient({
                stops: [
                    {
                        color: `rgba(0, 255, 0, 1)`,
                        position: `10%`,
                    },
                    {
                        color: `#0000ff`,
                        position: `100%`,
                    },
                ],
                side: `to bottom`,
            }),
        ).toBe(
            `linear-gradient(to bottom, rgba(0, 255, 0, 1) 10%, rgba(0, 0, 255, 1) 100%)`,
        );
    });

    it(`test case 2`, () => {
        expect(
            toGradient({
                stops: [
                    {
                        color: `rgb(42, 237, 0)`,
                        position: `0%`,
                    },
                    {
                        color: `rgb(237, 42, 0)`,
                        position: `100%`,
                    },
                ],
                side: `to top left`,
            }),
        ).toBe(
            `linear-gradient(to top left, rgba(42, 237, 0, 1) 0%, rgba(237, 42, 0, 1) 100%)`,
        );
    });
});
