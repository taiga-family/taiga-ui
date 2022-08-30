import {RANGE_SEPARATOR_CHAR, TuiDay, TuiDayRange} from '@taiga-ui/cdk';

describe(`TuiDayRange`, () => {
    describe(`static method`, () => {
        describe(`sort returns`, () => {
            let y2000m0d1: TuiDay;
            let y2000m0d1v2: TuiDay;
            let y3000m0d1: TuiDay;

            beforeEach(() => {
                y2000m0d1 = new TuiDay(2000, 0, 1);
                y2000m0d1v2 = new TuiDay(2000, 0, 1);
                y3000m0d1 = new TuiDay(3000, 0, 1);
            });

            it(`dates in original order if they are already sorted`, () => {
                const result = TuiDayRange.sort(y2000m0d1, y3000m0d1);

                expect(result.from).toBe(y2000m0d1);
                expect(result.to).toBe(y3000m0d1);
            });

            it(`dates in reversed order if they are not sorted`, () => {
                const result = TuiDayRange.sort(y3000m0d1, y2000m0d1);

                expect(result.from).toBe(y2000m0d1);
                expect(result.to).toBe(y3000m0d1);
            });

            it(`dates in original order if they are already identical`, () => {
                const result = TuiDayRange.sort(y2000m0d1, y2000m0d1v2);

                expect(result.from).toBe(y2000m0d1);
                expect(result.to).toBe(y2000m0d1v2);
            });
        });

        describe(`normalizeParse returns`, () => {
            it(`corresponding range in normal case`, () => {
                const result: TuiDayRange = TuiDayRange.normalizeParse(
                    `12.03.4567${RANGE_SEPARATOR_CHAR}07.06.9321`,
                );

                expect(result.from.day).toBe(12);
                expect(result.from.month).toBe(2);
                expect(result.from.year).toBe(4567);
                expect(result.to.day).toBe(7);
                expect(result.to.month).toBe(5);
                expect(result.to.year).toBe(9321);
            });

            it(`corresponding range ignoring wrong delimiters`, () => {
                const result: TuiDayRange = TuiDayRange.normalizeParse(
                    `12#03#4567#!#07#06#9321`,
                );

                expect(result.from.day).toBe(12);
                expect(result.from.month).toBe(2);
                expect(result.from.year).toBe(4567);
                expect(result.to.day).toBe(7);
                expect(result.to.month).toBe(5);
                expect(result.to.year).toBe(9321);
            });

            it(`properly normalized range`, () => {
                const result: TuiDayRange = TuiDayRange.normalizeParse(
                    `00.00.0000${RANGE_SEPARATOR_CHAR}99.99.9999`,
                );

                expect(result.from.day).toBe(1);
                expect(result.from.month).toBe(0);
                expect(result.from.year).toBe(0);
                expect(result.to.day).toBe(31);
                expect(result.to.month).toBe(11);
                expect(result.to.year).toBe(9999);
            });

            it(`sorted range if the order is wrong`, () => {
                const result: TuiDayRange = TuiDayRange.normalizeParse(
                    `07.06.9321${RANGE_SEPARATOR_CHAR}12.03.4567`,
                );

                expect(result.from.day).toBe(12);
                expect(result.from.month).toBe(2);
                expect(result.from.year).toBe(4567);
                expect(result.to.day).toBe(7);
                expect(result.to.month).toBe(5);
                expect(result.to.year).toBe(9321);
            });

            it(`one day range if rangeString is not long enough`, () => {
                const result: TuiDayRange = TuiDayRange.normalizeParse(
                    `07.06.9321${RANGE_SEPARATOR_CHAR}12.03.4`,
                );

                expect(result.from.day).toBe(7);
                expect(result.from.month).toBe(5);
                expect(result.from.year).toBe(9321);
                expect(result.to.day).toBe(7);
                expect(result.to.month).toBe(5);
                expect(result.to.year).toBe(9321);
            });

            it(`correctly works with dateMode="YMD" + separator = "-"`, () => {
                const result: TuiDayRange = TuiDayRange.normalizeParse(
                    `2021-12-14${RANGE_SEPARATOR_CHAR}2022-06-19`,
                    `YMD`,
                );

                expect(result.from.day).toBe(14);
                expect(result.from.month).toBe(11);
                expect(result.from.year).toBe(2021);
                expect(result.to.day).toBe(19);
                expect(result.to.month).toBe(5);
                expect(result.to.year).toBe(2022);
            });

            it(`correctly works with dateMode="MDY" + separator = "/"`, () => {
                const result: TuiDayRange = TuiDayRange.normalizeParse(
                    `12/14/2021${RANGE_SEPARATOR_CHAR}06/19/2022`,
                    `MDY`,
                );

                expect(result.from.day).toBe(14);
                expect(result.from.month).toBe(11);
                expect(result.from.year).toBe(2021);
                expect(result.to.day).toBe(19);
                expect(result.to.month).toBe(5);
                expect(result.to.year).toBe(2022);
            });
        });
    });

    describe(`prototype`, () => {
        describe(`getter`, () => {
            describe(`isSingleDay returns`, () => {
                it(`true if both dates are identical`, () => {
                    expect(
                        new TuiDayRange(new TuiDay(2000, 0, 1), new TuiDay(2000, 0, 1))
                            .isSingleDay,
                    ).toBe(true);
                });

                it(`false if dates are different`, () => {
                    expect(
                        new TuiDayRange(new TuiDay(2000, 0, 1), new TuiDay(3000, 0, 1))
                            .isSingleDay,
                    ).toBe(false);
                });
            });
        });

        describe(`method daySame returns`, () => {
            let range: TuiDayRange;

            beforeEach(() => {
                range = new TuiDayRange(new TuiDay(2000, 0, 1), new TuiDay(2000, 0, 1));
            });

            it(`true if ranges are identical`, () => {
                expect(
                    range.daySame(
                        new TuiDayRange(new TuiDay(2000, 0, 1), new TuiDay(2000, 0, 1)),
                    ),
                ).toBe(true);
            });

            it(`false if ranges are different`, () => {
                expect(
                    range.daySame(
                        new TuiDayRange(new TuiDay(2000, 0, 1), new TuiDay(3000, 0, 1)),
                    ),
                ).toBe(false);
            });
        });
    });

    describe(`toString`, () => {
        it(`returns stringified value in correct format`, () => {
            const range = new TuiDayRange(new TuiDay(2000, 0, 1), new TuiDay(3000, 0, 1));

            expect(range.toString()).toBe(`01.01.2000${RANGE_SEPARATOR_CHAR}01.01.3000`);
        });
    });

    describe(`dayLimit`, () => {
        it(`limits from one side if the other is null`, () => {
            const y2000m0d1 = new TuiDay(2000, 0, 1);
            const y2001m0d1 = new TuiDay(2001, 0, 1);
            const y3000m0d1 = new TuiDay(3000, 0, 1);

            const range = new TuiDayRange(y2000m0d1, y3000m0d1);
            const limitedRange = range.dayLimit(y2001m0d1, null);

            expect(limitedRange.from).toBe(y2001m0d1);
        });

        it(`limits from second side correctly`, () => {
            const y2000m0d1 = new TuiDay(2000, 0, 1);
            const y2999m0d1 = new TuiDay(2999, 0, 1);
            const y3000m0d1 = new TuiDay(3000, 0, 1);

            const range = new TuiDayRange(y2000m0d1, y3000m0d1);
            const limitedRange = range.dayLimit(null, y2999m0d1);

            expect(limitedRange.to).toBe(y2999m0d1);
        });
    });

    describe(`getFormattedDayRange returns`, () => {
        it(`formatted string (DMY)`, () => {
            expect(
                new TuiDayRange(
                    new TuiDay(2000, 11, 20),
                    new TuiDay(3000, 9, 18),
                ).getFormattedDayRange(`DMY`, `.`),
            ).toBe(`20.12.2000${RANGE_SEPARATOR_CHAR}18.10.3000`);
        });

        it(`formatted string (MDY)`, () => {
            expect(
                new TuiDayRange(
                    new TuiDay(2000, 11, 20),
                    new TuiDay(3000, 9, 18),
                ).getFormattedDayRange(`MDY`, `/`),
            ).toBe(`12/20/2000${RANGE_SEPARATOR_CHAR}10/18/3000`);
        });

        it(`formatted string (YMD)`, () => {
            expect(
                new TuiDayRange(
                    new TuiDay(2000, 11, 20),
                    new TuiDay(3000, 9, 18),
                ).getFormattedDayRange(`YMD`, `-`),
            ).toBe(`2000-12-20${RANGE_SEPARATOR_CHAR}3000-10-18`);
        });
    });
});
