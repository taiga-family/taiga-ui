import {
    tuiGetViewportHeight,
    tuiGetViewportWidth,
    tuiIsMobile,
    TuiMedia,
} from '@taiga-ui/core';

describe('viewport', () => {
    it('width/height', () => {
        setViewport(770, 600);

        expect(window.document.documentElement.clientWidth).toEqual(755);
        expect(window.innerWidth).toEqual(770);

        expect(window.document.documentElement.clientHeight).toEqual(600);
        expect(window.innerHeight).toEqual(600);

        expect(tuiGetViewportWidth(window)).toEqual(770);
        expect(tuiGetViewportHeight(window)).toEqual(600);
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
            ).toEqual(false);
        });

        it(`isMobile when 'content="width=device-width, initial-scale=1, maximum-scale=1"'`, () => {
            expect(
                tuiIsMobile(
                    {
                        innerWidth: logicalIphoneWidth,
                        document: {documentElement: {clientWidth: logicalIphoneWidth}},
                    } as unknown as Window,
                    {mobile: mobileBreakPoint} as unknown as TuiMedia,
                ),
            ).toEqual(true);
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
            ).toEqual(false);
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
            ).toEqual(true);
        });
    });
});

function setViewport(width: number, height: number): void {
    spyOnProperty(window, 'innerWidth').and.returnValue(width);
    spyOnProperty(window, 'innerHeight').and.returnValue(height);
    spyOnProperty(window.document.documentElement, 'clientWidth').and.returnValue(
        width - 15 /* scroll width */,
    );
    spyOnProperty(window.document.documentElement, 'clientHeight').and.returnValue(
        height,
    );
}
