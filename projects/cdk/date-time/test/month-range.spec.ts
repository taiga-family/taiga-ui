import {RANGE_SEPARATOR_CHAR, TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';

describe('TuiMonthRange', () => {
    describe('static method', () => {
        describe('sort returns', () => {
            let y2000m0: TuiMonth;
            let y2000m0v2: TuiMonth;
            let y3000m0: TuiMonth;

            beforeEach(() => {
                y2000m0 = new TuiMonth(2000, 0);
                y2000m0v2 = new TuiMonth(2000, 0);
                y3000m0 = new TuiMonth(3000, 0);
            });

            it('dates in original order if they are already sorted', () => {
                const result = TuiMonthRange.sort(y2000m0, y3000m0);

                expect(result.from).toBe(y2000m0);
                expect(result.to).toBe(y3000m0);
            });

            it('dates in reversed order if they are not sorted', () => {
                const result = TuiMonthRange.sort(y3000m0, y2000m0);

                expect(result.from).toBe(y2000m0);
                expect(result.to).toBe(y3000m0);
            });

            it('dates in original order if they are already identical', () => {
                const result = TuiMonthRange.sort(y2000m0, y2000m0v2);

                expect(result.from).toBe(y2000m0);
                expect(result.to).toBe(y2000m0v2);
            });
        });
    });

    describe('prototype', () => {
        describe('getter', () => {
            describe('isSingleMonth returns', () => {
                it('true if both dates are identical', () => {
                    expect(
                        new TuiMonthRange(new TuiMonth(2000, 0), new TuiMonth(2000, 0))
                            .isSingleMonth,
                    ).toBe(true);
                });

                it('false if dates are different', () => {
                    expect(
                        new TuiMonthRange(new TuiMonth(2000, 0), new TuiMonth(3000, 0))
                            .isSingleMonth,
                    ).toBe(false);
                });
            });
        });

        describe('method monthSame returns', () => {
            let range: TuiMonthRange;

            beforeEach(() => {
                range = new TuiMonthRange(new TuiMonth(2000, 0), new TuiMonth(2000, 0));
            });

            it('true if ranges are identical', () => {
                expect(
                    range.monthSame(
                        new TuiMonthRange(new TuiMonth(2000, 0), new TuiMonth(2000, 0)),
                    ),
                ).toBe(true);
            });

            it('false if ranges are different', () => {
                expect(
                    range.monthSame(
                        new TuiMonthRange(new TuiMonth(2000, 0), new TuiMonth(3000, 0)),
                    ),
                ).toBe(false);
            });
        });
    });

    describe('toString', () => {
        it('returns stringified value in correct format', () => {
            const range = new TuiMonthRange(new TuiMonth(2000, 0), new TuiMonth(3000, 0));

            expect(range.toString()).toBe(`01.2000${RANGE_SEPARATOR_CHAR}01.3000`);
        });
    });

    describe('monthInRange', () => {
        const range = new TuiMonthRange(new TuiMonth(2000, 2), new TuiMonth(2000, 4));

        it('returns true for value within range', () => {
            expect(range.monthInRange(new TuiMonth(2000, 3))).toBe(true);
        });

        it('returns true for value at the start of the range', () => {
            expect(range.monthInRange(new TuiMonth(2000, 2))).toBe(true);
        });

        it('returns true for value at the end of the range', () => {
            expect(range.monthInRange(new TuiMonth(2000, 4))).toBe(true);
        });

        it('returns false for value before the range', () => {
            expect(range.monthInRange(new TuiMonth(2000, 1))).toBe(false);
        });

        it('returns false for value after the range', () => {
            expect(range.monthInRange(new TuiMonth(2000, 5))).toBe(false);
        });

        it('returns false for different year', () => {
            expect(range.monthInRange(new TuiMonth(2001, 3))).toBe(false);
        });
    });
});
