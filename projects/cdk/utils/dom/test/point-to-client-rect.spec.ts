import {tuiPointToClientRect} from '@taiga-ui/cdk';

describe(`tuiPointToClientRect`, () => {
    it(`default`, () => {
        expect(tuiPointToClientRect()).toEqual(
            // @ts-ignore
            expect.objectContaining({
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0,
                x: 0,
                y: 0,
            }),
        );
    });

    it(`default`, () => {
        expect(tuiPointToClientRect(100, 200)).toEqual(
            // @ts-ignore
            expect.objectContaining({
                bottom: 200,
                height: 0,
                left: 100,
                right: 100,
                top: 200,
                width: 0,
                x: 100,
                y: 200,
            }),
        );
    });
});
