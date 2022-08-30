import {RANGE_SEPARATOR_CHAR, TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';

describe(`TuiMonthRange`, () => {
    describe(`static method`, () => {
        describe(`sort returns`, () => {
            let y2000m0: TuiMonth;
            let y2000m0v2: TuiMonth;
            let y3000m0: TuiMonth;

            beforeEach(() => {
                y2000m0 = new TuiMonth(2000, 0);
                y2000m0v2 = new TuiMonth(2000, 0);
                y3000m0 = new TuiMonth(3000, 0);
            });

            it(`dates in original order if they are already sorted`, () => {
                const result = TuiMonthRange.sort(y2000m0, y3000m0);

                expect(result.from).toBe(y2000m0);
                expect(result.to).toBe(y3000m0);
            });

            it(`dates in reversed order if they are not sorted`, () => {
                const result = TuiMonthRange.sort(y3000m0, y2000m0);

                expect(result.from).toBe(y2000m0);
                expect(result.to).toBe(y3000m0);
            });

            it(`dates in original order if they are already identical`, () => {
                const result = TuiMonthRange.sort(y2000m0, y2000m0v2);

                expect(result.from).toBe(y2000m0);
                expect(result.to).toBe(y2000m0v2);
            });
        });
    });

    describe(`prototype`, () => {
        describe(`getter`, () => {
            describe(`isSingleMonth returns`, () => {
                it(`true if both dates are identical`, () => {
                    expect(
                        new TuiMonthRange(new TuiMonth(2000, 0), new TuiMonth(2000, 0))
                            .isSingleMonth,
                    ).toBe(true);
                });

                it(`false if dates are different`, () => {
                    expect(
                        new TuiMonthRange(new TuiMonth(2000, 0), new TuiMonth(3000, 0))
                            .isSingleMonth,
                    ).toBe(false);
                });
            });
        });

        describe(`method monthSame returns`, () => {
            let range: TuiMonthRange;

            beforeEach(() => {
                range = new TuiMonthRange(new TuiMonth(2000, 0), new TuiMonth(2000, 0));
            });

            it(`true if ranges are identical`, () => {
                expect(
                    range.monthSame(
                        new TuiMonthRange(new TuiMonth(2000, 0), new TuiMonth(2000, 0)),
                    ),
                ).toBe(true);
            });

            it(`false if ranges are different`, () => {
                expect(
                    range.monthSame(
                        new TuiMonthRange(new TuiMonth(2000, 0), new TuiMonth(3000, 0)),
                    ),
                ).toBe(false);
            });
        });
    });

    describe(`toString`, () => {
        it(`returns stringified value in correct format`, () => {
            const range = new TuiMonthRange(new TuiMonth(2000, 0), new TuiMonth(3000, 0));

            expect(range.toString()).toBe(`01.2000${RANGE_SEPARATOR_CHAR}01.3000`);
        });
    });
});
