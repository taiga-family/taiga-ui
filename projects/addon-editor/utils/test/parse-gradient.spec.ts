import {tuiParseGradient} from '../parse-gradient';

describe(`tuiParseGradient`, () => {
    it(`test case 1`, () => {
        expect(
            tuiParseGradient(
                `to bottom right, rgba(0, 255, 255, 1), rgba(255, 0, 255, 0)`,
            ),
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
        expect(tuiParseGradient(`red 10%, blue 20%`)).toEqual({
            stops: [],
            side: `to bottom`,
        });
    });

    it(`test case 3`, () => {
        expect(
            tuiParseGradient(`to top left, #ff0000 10%, rgb(0, 255, 255) 20%`),
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
            ],
            side: `to top left`,
        });
    });

    it(`test case 4`, () => {
        expect(
            tuiParseGradient(
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
