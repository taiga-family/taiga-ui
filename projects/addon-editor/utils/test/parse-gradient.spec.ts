import {parseGradient} from '../parse-gradient';

describe(`parseGradient`, () => {
    it(`test case 1`, () => {
        expect(
            parseGradient(`to bottom right, rgba(0, 255, 255, 1), rgba(255, 0, 255, 0)`),
        ).toEqual({
            stops: [
                {
                    color: `rgba(0, 255, 255, 1)`,
                    position: `0%`,
                },
                {
                    color: `rgba(255, 0, 255, 0)`,
                    position: `100%`,
                },
            ],
            side: `to bottom right`,
        });
    });

    it(`test case 2`, () => {
        expect(parseGradient(`red 10%, blue 20%`)).toEqual({
            stops: [],
            side: `to bottom`,
        });
    });

    it(`test case 3`, () => {
        expect(parseGradient(`to top left, #ff0000 10%, rgb(0, 255, 255) 20%`)).toEqual({
            stops: [
                {
                    color: `#ff0000`,
                    position: `10%`,
                },
                {
                    color: `rgb(0, 255, 255)`,
                    position: `20%`,
                },
            ],
            side: `to top left`,
        });
    });

    it(`test case 4`, () => {
        expect(
            parseGradient(
                `to top, #ff0000 10%, rgb(0, 255, 255) 20%, rgba(255, 0, 0, 0.1) 40%, #00ff00 100%`,
            ),
        ).toEqual({
            stops: [
                {
                    color: `#ff0000`,
                    position: `10%`,
                },
                {
                    color: `rgb(0, 255, 255)`,
                    position: `20%`,
                },
                {
                    color: `rgba(255, 0, 0, 0.1)`,
                    position: `40%`,
                },
                {
                    color: `#00ff00`,
                    position: `100%`,
                },
            ],
            side: `to top`,
        });
    });
});
