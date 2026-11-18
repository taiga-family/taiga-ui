import {tuiGetNormalizedScrollLeft, tuiToNativeScrollLeft} from '@taiga-ui/cdk/utils/dom';

function fakeElement(
    overrides: {
        scrollLeft?: number;
        scrollWidth?: number;
        clientWidth?: number;
        rtl?: boolean;
        dir?: string | null;
        /**
         * What the old selector-based check would report: it matches whenever
         * any outer `dir="rtl"` ancestor exists, even under a nearer `dir="ltr"`.
         */
        matchesRtl?: boolean;
    } = {},
): HTMLElement {
    const dir = overrides.dir ?? (overrides.rtl ? 'rtl' : null);
    const matchesRtl = overrides.matchesRtl ?? dir === 'rtl';

    return {
        scrollLeft: overrides.scrollLeft ?? 0,
        scrollWidth: overrides.scrollWidth ?? 300,
        clientWidth: overrides.clientWidth ?? 100,
        matches: () => matchesRtl,
        closest: () => (dir === null ? null : {getAttribute: () => dir}),
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

        it('treats the element as LTR when a nearer dir="ltr" ancestor overrides an outer dir="rtl"', () => {
            const element = fakeElement({scrollLeft: -30, dir: 'ltr', matchesRtl: true});

            expect(tuiGetNormalizedScrollLeft(element)).toBe(-30);
            expect(tuiToNativeScrollLeft(element, 50)).toBe(50);
        });
    });
});
