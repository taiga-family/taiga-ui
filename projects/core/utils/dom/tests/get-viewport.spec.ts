import type {TuiMedia} from '@taiga-ui/core';
import {tuiGetViewportHeight, tuiGetViewportWidth, tuiIsMobile} from '@taiga-ui/core';
import {tuiTestingViewport} from '@taiga-ui/testing';

describe('viewport', () => {
    it('width/height', () => {
        tuiTestingViewport(770, 600);

        expect(window.document.documentElement.clientWidth).toBe(755);
        expect(window.innerWidth).toBe(770);

        expect(window.document.documentElement.clientHeight).toBe(600);
        expect(window.innerHeight).toBe(600);

        expect(tuiGetViewportWidth(window)).toBe(770);
        expect(tuiGetViewportHeight(window)).toBe(600);
    });

    describe('iPhone X', () => {
        const emulatedDesktopWidth = 1280;
        const logicalIphoneWidth = 375;
        const mobileBreakPoint = 768;

        it(`isMobile when 'content="width=${emulatedDesktopWidth}, initial-scale=1"'`, () => {
            expect(
                tuiIsMobile(
                    {
                        innerWidth: logicalIphoneWidth,
                        document: {documentElement: {clientWidth: emulatedDesktopWidth}},
                    } as unknown as Window,
                    {mobile: mobileBreakPoint} as unknown as TuiMedia,
                ),
            ).toBe(false);
        });

        it('isMobile when \'content="width=device-width, initial-scale=1, maximum-scale=1"\'', () => {
            expect(
                tuiIsMobile(
                    {
                        innerWidth: logicalIphoneWidth,
                        document: {documentElement: {clientWidth: logicalIphoneWidth}},
                    } as unknown as Window,
                    {mobile: mobileBreakPoint} as unknown as TuiMedia,
                ),
            ).toBe(true);
        });

        it('device-width is not mobile', () => {
            expect(
                tuiIsMobile(
                    {
                        innerWidth: 768 /* px */,
                        document: {documentElement: {clientWidth: 768 /* px */}},
                    } as unknown as Window,
                    {mobile: mobileBreakPoint} as unknown as TuiMedia,
                ),
            ).toBe(false);
        });

        it('device-width is mobile', () => {
            expect(
                tuiIsMobile(
                    {
                        innerWidth: 767 /* px */,
                        document: {documentElement: {clientWidth: 767 /* px */}},
                    } as unknown as Window,
                    {mobile: mobileBreakPoint} as unknown as TuiMedia,
                ),
            ).toBe(true);
        });
    });
});
