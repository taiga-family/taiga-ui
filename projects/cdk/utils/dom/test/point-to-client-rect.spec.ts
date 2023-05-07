import {tuiPointToClientRect} from '@taiga-ui/cdk';

describe(`tuiPointToClientRect`, () => {
    it(`default`, () => {
        expect(tuiPointToClientRect()).toEqual(
            // @ts-ignore
            expect.objectContaining({
                x: 0,
                y: 0,
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                width: 0,
                height: 0,
            }),
        );
    });

    it(`default`, () => {
        expect(tuiPointToClientRect(100, 200)).toEqual(
            // @ts-ignore
            expect.objectContaining({
                x: 100,
                y: 200,
                left: 100,
                right: 100,
                top: 200,
                bottom: 200,
                width: 0,
                height: 0,
            }),
        );
    });
});
