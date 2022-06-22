/// <reference types="karma-viewport" />
import {
    tuiGetViewportHeight,
    tuiGetViewportWidth,
    tuiIsMobile,
    TuiMedia,
} from '@taiga-ui/core';

describe('getViewport', () => {
    it('width', () => {
        expect(window.document.documentElement.clientWidth).toEqual(770);
        expect(window.innerWidth).toEqual(785);
        expect(tuiGetViewportWidth(window)).toEqual(785);

        viewport.set(500, 200);

        expect(window.document.documentElement.clientWidth).toEqual(485);
        expect(window.innerWidth).toEqual(500);
        expect(tuiGetViewportWidth(window)).toEqual(500);
    });

    it('height', () => {
        expect(window.document.documentElement.clientHeight).toEqual(600);
        expect(window.innerHeight).toEqual(600);
        expect(tuiGetViewportHeight(window)).toEqual(600);

        viewport.set(500, 200);

        expect(window.document.documentElement.clientHeight).toEqual(200);
        expect(window.innerHeight).toEqual(200);
        expect(tuiGetViewportHeight(window)).toEqual(200);
    });

    describe('iPhone X', () => {
        const emulatedDesktopWidth = 1280;
        const logicalIphoneWidth = 375;
        const smallDevicesTablets = 768;

        it(`isMobile when 'content="width=${emulatedDesktopWidth}, initial-scale=1"'`, () => {
            expect(
                tuiIsMobile(
                    {
                        innerWidth: logicalIphoneWidth,
                        document: {documentElement: {clientWidth: emulatedDesktopWidth}},
                    } as unknown as Window,
                    {mobile: smallDevicesTablets} as unknown as TuiMedia,
                ),
            ).toEqual(false);
        });

        it(`isMobile when 'content="width=device-width, initial-scale=1, maximum-scale=1"'`, () => {
            expect(
                tuiIsMobile(
                    {
                        innerWidth: logicalIphoneWidth,
                        document: {documentElement: {clientWidth: logicalIphoneWidth}},
                    } as unknown as Window,
                    {mobile: smallDevicesTablets} as unknown as TuiMedia,
                ),
            ).toEqual(true);
        });
    });

    afterEach(() => viewport.reset());
});
