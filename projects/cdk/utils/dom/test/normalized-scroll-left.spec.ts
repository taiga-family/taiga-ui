import {tuiGetNormalizedScrollLeft, tuiToNativeScrollLeft} from '@taiga-ui/cdk/utils/dom';

function fakeElement(
    overrides: {
        scrollLeft?: number;
        scrollWidth?: number;
        clientWidth?: number;
        rtl?: boolean;
    } = {},
): HTMLElement {
    return {
        scrollLeft: overrides.scrollLeft ?? 0,
        scrollWidth: overrides.scrollWidth ?? 300,
        clientWidth: overrides.clientWidth ?? 100,
        matches: () => overrides.rtl ?? false,
    } as unknown as HTMLElement;
}

describe('normalized scrollLeft', () => {
    describe('LTR', () => {
        it('returns native scrollLeft as is', () => {
            expect(tuiGetNormalizedScrollLeft(fakeElement({scrollLeft: 40}))).toBe(40);
        });

        it('clamps the value to the scrollable range', () => {
            const element = fakeElement();

            expect(tuiToNativeScrollLeft(element, -10)).toBe(0);
            expect(tuiToNativeScrollLeft(element, 50)).toBe(50);
            expect(tuiToNativeScrollLeft(element, 500)).toBe(200);
        });
    });

    describe('RTL', () => {
        it('returns the absolute value of the negative native scrollLeft', () => {
            expect(
                tuiGetNormalizedScrollLeft(fakeElement({scrollLeft: -30, rtl: true})),
            ).toBe(30);
        });

        it('negates the value', () => {
            const element = fakeElement({rtl: true});

            expect(tuiToNativeScrollLeft(element, 50)).toBe(-50);
            expect(tuiToNativeScrollLeft(element, 500)).toBe(-200);
        });

        it('does not scroll when there is no overflow', () => {
            const element = fakeElement({scrollWidth: 100, clientWidth: 100, rtl: true});

            expect(tuiToNativeScrollLeft(element, 50)).toBe(0);
        });
    });
});
