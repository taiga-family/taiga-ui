import {TuiMonthNumber} from '../../enums/month-number';
import {TuiMonth} from '../month';
import {tuiMockDateInside, tuiPendingIfNotMoscowTimeZone} from './helpers';

describe('TuiMonth', () => {
    describe('static method', () => {
        describe('isValidMonth', () => {
            describe('invalid month', () => {
                it('NaN', () => {
                    expect(TuiMonth.isValidMonth(2000, NaN)).toBe(false);
                });

                it('6.1', () => {
                    expect(TuiMonth.isValidMonth(2000, 6.1)).toBe(false);
                });

                it('-20', () => {
                    expect(TuiMonth.isValidMonth(2000, -20)).toBe(false);
                });

                it('100000', () => {
                    expect(TuiMonth.isValidMonth(2000, 100000)).toBe(false);
                });
            });

            describe('valid month', () => {
                it('10', () => {
                    expect(TuiMonth.isValidMonth(2000, 10)).toBe(true);
                });

                it('9', () => {
                    expect(TuiMonth.isValidMonth(2000, 9)).toBe(true);
                });

                it('0', () => {
                    expect(TuiMonth.isValidMonth(2000, 0)).toBe(true);
                });

                it('11', () => {
                    expect(TuiMonth.isValidMonth(2000, 11)).toBe(true);
                });
            });
        });

        describe('getMonthDaysCount returns', () => {
            describe('31 if month is', () => {
                it('January', () => {
                    expect(TuiMonth.getMonthDaysCount(TuiMonthNumber.January, true)).toBe(
                        31,
                    );
                });

                it('May', () => {
                    expect(TuiMonth.getMonthDaysCount(TuiMonthNumber.May, true)).toBe(31);
                });

                it('July', () => {
                    expect(TuiMonth.getMonthDaysCount(TuiMonthNumber.July, true)).toBe(
                        31,
                    );
                });

                it('August', () => {
                    expect(TuiMonth.getMonthDaysCount(TuiMonthNumber.August, true)).toBe(
                        31,
                    );
                });

                it('October', () => {
                    expect(TuiMonth.getMonthDaysCount(TuiMonthNumber.October, true)).toBe(
                        31,
                    );
                });

                it('December', () => {
                    expect(
                        TuiMonth.getMonthDaysCount(TuiMonthNumber.December, true),
                    ).toBe(31);
                });
            });

            describe('30 if month is', () => {
                it('April', () => {
                    expect(TuiMonth.getMonthDaysCount(TuiMonthNumber.April, true)).toBe(
                        30,
                    );
                });

                it('June', () => {
                    expect(TuiMonth.getMonthDaysCount(TuiMonthNumber.June, true)).toBe(
                        30,
                    );
                });

                it('September', () => {
                    expect(
                        TuiMonth.getMonthDaysCount(TuiMonthNumber.September, true),
                    ).toBe(30);
                });

                it('November', () => {
                    expect(
                        TuiMonth.getMonthDaysCount(TuiMonthNumber.November, true),
                    ).toBe(30);
                });
            });

            it('29 if month is February and the year is a leap year', () => {
                expect(TuiMonth.getMonthDaysCount(TuiMonthNumber.February, true)).toBe(
                    29,
                );
            });

            it('28 if month is February and the year is not a leap year', () => {
                expect(TuiMonth.getMonthDaysCount(TuiMonthNumber.February, false)).toBe(
                    28,
                );
            });
        });

        describe('currentLocal', () => {
            beforeEach(() => {
                tuiPendingIfNotMoscowTimeZone();
            });

            it('UTC month is the same as local', () => {
                tuiMockDateInside(Date.UTC(2000, 0, 31, 10), () => {
                    const currentDate = TuiMonth.currentLocal();

                    expect(currentDate.year).toBe(2000);
                    expect(currentDate.month).toBe(0);
                });
            });

            it('UTC month is smaller than local', () => {
                tuiMockDateInside(Date.UTC(2000, 0, 31, 23), () => {
                    const currentDate = TuiMonth.currentLocal();

                    expect(currentDate.year).toBe(2000);
                    expect(currentDate.month).toBe(1);
                });
            });
        });

        describe('currentUtc', () => {
            beforeEach(() => {
                tuiPendingIfNotMoscowTimeZone();
            });

            it('UTC is the same as local', () => {
                tuiMockDateInside(new Date(2000, 0, 31, 10), () => {
                    const currentDate = TuiMonth.currentUtc();

                    expect(currentDate.year).toBe(2000);
                    expect(currentDate.month).toBe(0);
                });
            });

            it('UTC is smaller than local', () => {
                tuiMockDateInside(new Date(2000, 0, 1, 2), () => {
                    const currentDate = TuiMonth.currentUtc();

                    expect(currentDate.year).toBe(1999);
                    expect(currentDate.month).toBe(11);
                });
            });
        });

        describe('lengthBetween', () => {
            it('one month', () => {
                const first = new TuiMonth(2020, 4);
                const second = new TuiMonth(2020, 5);

                expect(TuiMonth.lengthBetween(first, second)).toBe(1);
            });

            it('13 months', () => {
                const first = new TuiMonth(2020, 4);
                const second = new TuiMonth(2021, 5);

                expect(TuiMonth.lengthBetween(first, second)).toBe(13);
            });

            it('second less than first', () => {
                const first = new TuiMonth(2020, 4);
                const second = new TuiMonth(2020, 2);

                expect(TuiMonth.lengthBetween(first, second)).toBe(-2);
            });
        });
    });

    describe('prototype', () => {
        describe('getter', () => {
            describe('formattedMonthPart returns', () => {
                describe("month with padded '0' if it is a single digit month", () => {
                    it("'01' if month is 0", () => {
                        expect(new TuiMonth(2000, 0).formattedMonthPart).toBe('01');
                    });

                    it("'05' if month is 4", () => {
                        expect(new TuiMonth(2000, 4).formattedMonthPart).toBe('05');
                    });
                });
                describe("month withouth padded '0' if it is a two digit month", () => {
                    it("'10' if month is 9", () => {
                        expect(new TuiMonth(2000, 9).formattedMonthPart).toBe('10');
                    });

                    it("'12' if month is 11", () => {
                        expect(new TuiMonth(2000, 11).formattedMonthPart).toBe('12');
                    });
                });
            });

            describe('daysCount', () => {
                describe('31 if month is', () => {
                    it('January', () => {
                        expect(new TuiMonth(2000, TuiMonthNumber.January).daysCount).toBe(
                            31,
                        );
                    });

                    it('May', () => {
                        expect(new TuiMonth(2000, TuiMonthNumber.May).daysCount).toBe(31);
                    });

                    it('July', () => {
                        expect(new TuiMonth(2000, TuiMonthNumber.July).daysCount).toBe(
                            31,
                        );
                    });

                    it('August', () => {
                        expect(new TuiMonth(2000, TuiMonthNumber.August).daysCount).toBe(
                            31,
                        );
                    });

                    it('October', () => {
                        expect(new TuiMonth(2000, TuiMonthNumber.October).daysCount).toBe(
                            31,
                        );
                    });

                    it('December', () => {
                        expect(
                            new TuiMonth(2000, TuiMonthNumber.December).daysCount,
                        ).toBe(31);
                    });
                });

                describe('30 if month is', () => {
                    it('April', () => {
                        expect(new TuiMonth(2000, TuiMonthNumber.April).daysCount).toBe(
                            30,
                        );
                    });

                    it('June', () => {
                        expect(new TuiMonth(2000, TuiMonthNumber.June).daysCount).toBe(
                            30,
                        );
                    });

                    it('September', () => {
                        expect(
                            new TuiMonth(2000, TuiMonthNumber.September).daysCount,
                        ).toBe(30);
                    });

                    it('November', () => {
                        expect(
                            new TuiMonth(2000, TuiMonthNumber.November).daysCount,
                        ).toBe(30);
                    });
                });

                it('29 if month is February and the year is a leap year', () => {
                    expect(new TuiMonth(2000, TuiMonthNumber.February).daysCount).toBe(
                        29,
                    );
                });

                it('28 if month is February and the year is not a leap year', () => {
                    expect(new TuiMonth(2001, TuiMonthNumber.February).daysCount).toBe(
                        28,
                    );
                });
            });
        });

        describe('method', () => {
            let y1900m6: TuiMonth;
            let y2000m4: TuiMonth;
            let y2000m6: TuiMonth;
            let y2000m6v2: TuiMonth;
            let y2000m8: TuiMonth;
            let y2100m6: TuiMonth;

            beforeEach(() => {
                y1900m6 = new TuiMonth(1900, 6);
                y2000m4 = new TuiMonth(2000, 4);
                y2000m6 = new TuiMonth(2000, 6);
                y2000m6v2 = new TuiMonth(2000, 6);
                y2000m8 = new TuiMonth(2000, 8);
                y2100m6 = new TuiMonth(2100, 6);
            });

            describe('monthBefore returns', () => {
                describe('true if passed year', () => {
                    describe('is the same and month', () => {
                        it('is bigger', () => {
                            expect(y2000m6.monthBefore(y2000m8)).toBe(true);
                        });
                    });

                    it('is bigger', () => {
                        expect(y2000m6.monthBefore(y2100m6)).toBe(true);
                    });
                });

                describe('false if passed year', () => {
                    it('is smaller', () => {
                        expect(y2000m6.monthBefore(y1900m6)).toBe(false);
                    });

                    describe('is the same and month', () => {
                        it('is smaller', () => {
                            expect(y2000m6.monthBefore(y2000m4)).toBe(false);
                        });

                        it('is the same', () => {
                            expect(y2000m6.monthBefore(y2000m6v2)).toBe(false);
                        });
                    });
                });
            });

            describe('monthSameOrBefore returns', () => {
                describe('true if passed year', () => {
                    describe('is the same and month', () => {
                        it('is the same', () => {
                            expect(y2000m6.monthSameOrBefore(y2000m6v2)).toBe(true);
                        });

                        it('is bigger', () => {
                            expect(y2000m6.monthSameOrBefore(y2000m8)).toBe(true);
                        });
                    });

                    it('is bigger', () => {
                        expect(y2000m6.monthSameOrBefore(y2100m6)).toBe(true);
                    });
                });

                describe('false if passed year', () => {
                    it('is smaller', () => {
                        expect(y2000m6.monthSameOrBefore(y1900m6)).toBe(false);
                    });

                    describe('is the same and month', () => {
                        it('is smaller', () => {
                            expect(y2000m6.monthSameOrBefore(y2000m4)).toBe(false);
                        });
                    });
                });
            });

            describe('monthSame returns', () => {
                describe('true if passed year', () => {
                    describe('is the same and month', () => {
                        it('is the same', () => {
                            expect(y2000m6.monthSame(y2000m6v2)).toBe(true);
                        });
                    });
                });
                describe('false if passed year', () => {
                    it('is smaller', () => {
                        expect(y2000m6.monthSame(y1900m6)).toBe(false);
                    });

                    describe('is the same and month', () => {
                        it('is smaller', () => {
                            expect(y2000m6.monthSame(y2000m4)).toBe(false);
                        });

                        it('is bigger', () => {
                            expect(y2000m6.monthSame(y2000m8)).toBe(false);
                        });
                    });

                    it('is bigger', () => {
                        expect(y2000m6.monthSame(y2100m6)).toBe(false);
                    });
                });
            });

            describe('monthSameOrAfter returns', () => {
                describe('true if passed year', () => {
                    it('is smaller', () => {
                        expect(y2000m6.monthSameOrAfter(y1900m6)).toBe(true);
                    });

                    describe('is the same and month', () => {
                        it('is smaller', () => {
                            expect(y2000m6.monthSameOrAfter(y2000m4)).toBe(true);
                        });

                        it('is the same', () => {
                            expect(y2000m6.monthSameOrAfter(y2000m6v2)).toBe(true);
                        });
                    });
                });
                describe('false if passed year', () => {
                    describe('is the same and month', () => {
                        it('is bigger', () => {
                            expect(y2000m6.monthSameOrAfter(y2000m8)).toBe(false);
                        });
                    });

                    it('is bigger', () => {
                        expect(y2000m6.monthSameOrAfter(y2100m6)).toBe(false);
                    });
                });
            });

            describe('monthAfter returns', () => {
                describe('true if passed year', () => {
                    it('is smaller', () => {
                        expect(y2000m6.monthAfter(y1900m6)).toBe(true);
                    });

                    describe('is the same and month', () => {
                        it('is smaller', () => {
                            expect(y2000m6.monthAfter(y2000m4)).toBe(true);
                        });
                    });
                });
                describe('false if passed year', () => {
                    describe('is the same and month', () => {
                        it('is the same', () => {
                            expect(y2000m6.monthAfter(y2000m6v2)).toBe(false);
                        });

                        it('is bigger', () => {
                            expect(y2000m6.monthAfter(y2000m8)).toBe(false);
                        });
                    });

                    it('is bigger', () => {
                        expect(y2000m6.monthAfter(y2100m6)).toBe(false);
                    });
                });
            });

            describe('append returns', () => {
                it('TuiMonth {year: 2000, month: 6} if passed value was {}', () => {
                    const result: TuiMonth = y2000m6.append({});

                    expect(result.year).toBe(2000);
                    expect(result.month).toBe(6);
                });

                it('TuiMonth {year: 2000, month: 6} if passed value was {year: 0, month: 0}', () => {
                    const result: TuiMonth = y2000m6.append({
                        year: 0,
                        month: 0,
                    });

                    expect(result.year).toBe(2000);
                    expect(result.month).toBe(6);
                });

                it('TuiMonth {year: 2001, month: 6} if passed value was {year: 1}', () => {
                    const result: TuiMonth = y2000m6.append({year: 1});

                    expect(result.year).toBe(2001);
                    expect(result.month).toBe(6);
                });

                it('TuiMonth {year: 1999 month: 6} if passed value was {year: -1}', () => {
                    const result: TuiMonth = y2000m6.append({year: -1});

                    expect(result.year).toBe(1999);
                    expect(result.month).toBe(6);
                });

                it('TuiMonth {year: 1999 month: 6} if passed value was {year: 1}, true', () => {
                    const result: TuiMonth = y2000m6.append({year: 1}, true);

                    expect(result.year).toBe(1999);
                    expect(result.month).toBe(6);
                });

                it('TuiMonth {year: 2001, month: 6} if passed value was {month: 12}', () => {
                    const result: TuiMonth = y2000m6.append({month: 12});

                    expect(result.year).toBe(2001);
                    expect(result.month).toBe(6);
                });

                it('TuiMonth {year: 1999, month: 6} if passed value was {month: -12}', () => {
                    const result: TuiMonth = y2000m6.append({month: -12});

                    expect(result.year).toBe(1999);
                    expect(result.month).toBe(6);
                });

                it('TuiMonth {year: 1999, month: 6} if passed value was {month: 12}, true', () => {
                    const result: TuiMonth = y2000m6.append({month: 12}, true);

                    expect(result.year).toBe(1999);
                    expect(result.month).toBe(6);
                });

                it('TuiMonth {year: 2001, month: 7} if passed value was {year: 1, month: 1}', () => {
                    const result: TuiMonth = y2000m6.append({
                        year: 1,
                        month: 1,
                    });

                    expect(result.year).toBe(2001);
                    expect(result.month).toBe(7);
                });

                it('TuiMonth {year: 1999, month: 5} if passed value was {year: -1, month: -1}', () => {
                    const result: TuiMonth = y2000m6.append({
                        year: -1,
                        month: -1,
                    });

                    expect(result.year).toBe(1999);
                    expect(result.month).toBe(5);
                });

                it('TuiMonth {year: 1999, month: 5} if passed value was {year: 1, month: 1}, true', () => {
                    const result: TuiMonth = y2000m6.append({year: 1, month: 1}, true);

                    expect(result.year).toBe(1999);
                    expect(result.month).toBe(5);
                });
            });

            describe('toJSON returns', () => {
                it("'2000-01' for TuiMonth {year: 2000, month: 0}", () => {
                    expect(new TuiMonth(2000, 0).toJSON()).toBe('2000-01');
                });

                it("'2000-10' for TuiMonth {year: 2000, month: 9}", () => {
                    expect(new TuiMonth(2000, 9).toJSON()).toBe('2000-10');
                });

                it("'0200-01' for TuiMonth {year: 200, month: 0}", () => {
                    expect(new TuiMonth(200, 0).toJSON()).toBe('0200-01');
                });

                it("'0200-10' for TuiMonth {year: 200, month: 9}", () => {
                    expect(new TuiMonth(200, 9).toJSON()).toBe('0200-10');
                });
            });

            it('toLocalNativeDate returns Date(2000, 0) for TuiMonth {year: 2000, month: 0}', () => {
                expect(new TuiMonth(2000, 0).toLocalNativeDate().toString()).toEqual(
                    new Date(2000, 0).toString(),
                );
            });

            it('toUtcNativeDate returns Date(Date.UTC(2000, 0)) for TuiMonth {year: 2000, month: 0}', () => {
                expect(new TuiMonth(2000, 0).toUtcNativeDate().toString()).toEqual(
                    new Date(Date.UTC(2000, 0)).toString(),
                );
            });

            describe('valueOf returns', () => {
                it('the primitive value of a TuiMonth object', () => {
                    const month = new TuiMonth(2000, 5);

                    expect(Number(month)).toBeInstanceOf(Number);
                    expect(month.valueOf()).toBeInstanceOf(Number);
                    expect(month > new TuiMonth(2000, 4)).toBeTrue();
                    expect(month < new TuiMonth(2001, 6)).toBeTrue();
                });
            });

            describe('Symbol.toPrimitive returns', () => {
                it('a number if the hint is number', () => {
                    const month = new TuiMonth(1998, 7);

                    expect(Number(month)).toBeInstanceOf(Number);
                    expect(month.valueOf()).toBeInstanceOf(Number);
                    expect(month[Symbol.toPrimitive]('number')).toBeInstanceOf(Number);
                });

                it('a string if the hint is string', () => {
                    const month = new TuiMonth(2030, 1);

                    expect(String(month)).toBeInstanceOf(String);
                    expect(month.toString()).toBeInstanceOf(String);
                    expect(month[Symbol.toPrimitive]('string')).toBeInstanceOf(String);
                });

                it('a string if the hint is default', () => {
                    const month = new TuiMonth(1905, 2);

                    expect(`${month}`).toBeInstanceOf(String);
                    expect(month[Symbol.toPrimitive]('default')).toBeInstanceOf(String);
                });
            });
        });
    });
});
