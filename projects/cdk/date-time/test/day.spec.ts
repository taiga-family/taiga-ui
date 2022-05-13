import {TuiDay} from '../day';
import {TuiMonth} from '../month';
import {mockDateInside, pendingIfNotMoscowTimeZone} from './helpers';

describe('TuiDay', () => {
    describe('static method', () => {
        describe('isValidDay returns', () => {
            describe('false if invalid date is passed', () => {
                it('NaN', () => {
                    expect(TuiDay.isValidDay(2000, 6, NaN)).toBe(false);
                });

                it('6.1', () => {
                    expect(TuiDay.isValidDay(2000, 6, 6.1)).toBe(false);
                });

                it('-20', () => {
                    expect(TuiDay.isValidDay(2000, 6, -20)).toBe(false);
                });

                it('100000', () => {
                    expect(TuiDay.isValidDay(2000, 6, 100000)).toBe(false);
                });

                it('2001.02.29', () => {
                    expect(TuiDay.isValidDay(2001, 1, 29)).toBe(false);
                });
            });

            describe('true if valid day is passed', () => {
                it('10', () => {
                    expect(TuiDay.isValidDay(2000, 6, 10)).toBe(true);
                });

                it('9', () => {
                    expect(TuiDay.isValidDay(2000, 6, 9)).toBe(true);
                });

                it('1', () => {
                    expect(TuiDay.isValidDay(2000, 6, 1)).toBe(true);
                });

                it('11', () => {
                    expect(TuiDay.isValidDay(2000, 6, 11)).toBe(true);
                });

                it('30', () => {
                    expect(TuiDay.isValidDay(2000, 6, 30)).toBe(true);
                });

                it('2000.02.29', () => {
                    expect(TuiDay.isValidDay(2000, 1, 29)).toBe(true);
                });
            });
        });

        describe('currentLocal returns date', () => {
            beforeEach(() => {
                pendingIfNotMoscowTimeZone();
            });

            it('same as UTC if UTC is the local time zone', () => {
                mockDateInside(Date.UTC(2000, 0, 15, 10), () => {
                    const currentDate = TuiDay.currentLocal();

                    expect(currentDate.year).toBe(2000);
                    expect(currentDate.month).toBe(0);
                    expect(currentDate.day).toBe(15);
                });
            });

            it('later than UTC if UTC day is earlier than local time zone', () => {
                mockDateInside(Date.UTC(2000, 0, 15, 23), () => {
                    const currentDate = TuiDay.currentLocal();

                    expect(currentDate.year).toBe(2000);
                    expect(currentDate.month).toBe(0);
                    expect(currentDate.day).toBe(16);
                });
            });
        });

        describe('currentUtc returns date', () => {
            beforeEach(() => {
                pendingIfNotMoscowTimeZone();
            });

            it('UTC is the same as local', () => {
                mockDateInside(new Date(2000, 0, 31, 10), () => {
                    const currentDate = TuiDay.currentUtc();

                    expect(currentDate.year).toBe(2000);
                    expect(currentDate.month).toBe(0);
                    expect(currentDate.day).toBe(31);
                });
            });

            it('UTC is smaller than local', () => {
                mockDateInside(new Date(2000, 0, 1, 2), () => {
                    const currentDate = TuiDay.currentUtc();

                    expect(currentDate.year).toBe(1999);
                    expect(currentDate.month).toBe(11);
                    expect(currentDate.day).toBe(31);
                });
            });
        });

        describe('getDayFromMonthRowCol returns', () => {
            describe('day from adjacent month if these coordinates are outside current month', () => {
                describe('2016.03', () => {
                    let y2016m2: TuiMonth;

                    beforeEach(() => {
                        y2016m2 = new TuiMonth(2016, 2);
                    });

                    it('row 0 col 0', () => {
                        expect(TuiDay.getDayFromMonthRowCol(y2016m2, 0, 0)).toEqual(
                            new TuiDay(2016, 1, 29),
                        );
                    });

                    it('row 4 col 6', () => {
                        expect(TuiDay.getDayFromMonthRowCol(y2016m2, 4, 6)).toEqual(
                            new TuiDay(2016, 3, 3),
                        );
                    });

                    it('row 5 col 0', () => {
                        expect(TuiDay.getDayFromMonthRowCol(y2016m2, 5, 0)).toEqual(
                            new TuiDay(2016, 3, 4),
                        );
                    });
                });

                describe('1995.01', () => {
                    let y1995m0: TuiMonth;

                    beforeEach(() => {
                        y1995m0 = new TuiMonth(1995, 0);
                    });

                    it('row 0 col 5', () => {
                        expect(TuiDay.getDayFromMonthRowCol(y1995m0, 0, 5)).toEqual(
                            new TuiDay(1994, 11, 31),
                        );
                    });

                    it('row 5 col 2', () => {
                        expect(TuiDay.getDayFromMonthRowCol(y1995m0, 5, 2)).toEqual(
                            new TuiDay(1995, 1, 1),
                        );
                    });
                });
            });

            describe('day by coordinates', () => {
                describe('for 2018.03 and', () => {
                    let y2018m2: TuiMonth;

                    beforeEach(() => {
                        y2018m2 = new TuiMonth(2018, 2);
                    });

                    it('row 0 col 3 === 1', () => {
                        expect(TuiDay.getDayFromMonthRowCol(y2018m2, 0, 3).day).toBe(1);
                    });

                    it('row 3 col 2 === 21', () => {
                        expect(TuiDay.getDayFromMonthRowCol(y2018m2, 3, 2).day).toBe(21);
                    });

                    it('row 4 col 4 === 30', () => {
                        expect(TuiDay.getDayFromMonthRowCol(y2018m2, 4, 4).day).toBe(30);
                    });
                });

                describe('for 1995.01 and', () => {
                    let y1995m0: TuiMonth;

                    beforeEach(() => {
                        y1995m0 = new TuiMonth(1995, 0);
                    });

                    it('row 1 col 1 === 3', () => {
                        expect(TuiDay.getDayFromMonthRowCol(y1995m0, 1, 1).day).toBe(3);
                    });

                    it('row 5 col 1 === 31', () => {
                        expect(TuiDay.getDayFromMonthRowCol(y1995m0, 5, 1).day).toBe(31);
                    });
                });
            });
        });

        describe('normalizeOf returns', () => {
            describe('minimal value for', () => {
                describe('year if it', () => {
                    it('is NaN', () => {
                        expect(TuiDay.normalizeOf(NaN, 1, 1).year).toBe(0);
                    });

                    it('equals to minimal', () => {
                        expect(TuiDay.normalizeOf(0, 1, 1).year).toBe(0);
                    });

                    it('is smaller than minimal', () => {
                        expect(TuiDay.normalizeOf(-8, 1, 1).year).toBe(0);
                    });
                });

                describe('month if it', () => {
                    it('is NaN', () => {
                        expect(TuiDay.normalizeOf(1, NaN, 1).month).toBe(0);
                    });

                    it('equals to minimal', () => {
                        expect(TuiDay.normalizeOf(1, 0, 1).month).toBe(0);
                    });

                    it('smaller than minimal', () => {
                        expect(TuiDay.normalizeOf(1, -8, 1).month).toBe(0);
                    });
                });

                describe('day if it', () => {
                    it('is NaN', () => {
                        expect(TuiDay.normalizeOf(1, 1, NaN).day).toBe(1);
                    });

                    it('equals to minimal', () => {
                        expect(TuiDay.normalizeOf(1, 1, 0).day).toBe(1);
                    });

                    it('smaller than minimal', () => {
                        expect(TuiDay.normalizeOf(1, 1, -8).day).toBe(1);
                    });
                });
            });

            describe('rounded', () => {
                it('year if a floating number was passed', () => {
                    expect(TuiDay.normalizeOf(2000.1, 1, 1).year).toBe(2000);
                });

                it('month if a floating number was passed', () => {
                    expect(TuiDay.normalizeOf(1, 8.1, 1).month).toBe(8);
                });

                it('day if a floating number was passed', () => {
                    expect(TuiDay.normalizeOf(1, 1, 8.1).day).toBe(8);
                });
            });

            describe('maximum value for', () => {
                describe('year if it', () => {
                    it('equals to maximum', () => {
                        expect(TuiDay.normalizeOf(9999, 1, 1).year).toBe(9999);
                    });

                    it('exceeds maximum', () => {
                        expect(TuiDay.normalizeOf(9999, 1, 1).year).toBe(9999);
                    });
                });

                describe('month if it', () => {
                    it('equals to maximum', () => {
                        expect(TuiDay.normalizeOf(1, 11, 1).month).toBe(11);
                    });

                    it('exceeds maximum', () => {
                        expect(TuiDay.normalizeOf(1, 99, 1).month).toBe(11);
                    });
                });

                describe('day if it', () => {
                    it('equals to maximum', () => {
                        expect(TuiDay.normalizeOf(1, 1, 31).day).toBe(28);
                    });

                    it('exceeds maximum', () => {
                        expect(TuiDay.normalizeOf(1, 1, 99).day).toBe(28);
                    });
                });
            });
        });

        describe('normalizeParse return parsed date', () => {
            describe('from a valid string (dd.mm.yyyy)', () => {
                it("'20.10.2018'", () => {
                    const result = TuiDay.normalizeParse('20.10.2018');

                    expect(result.year).toBe(2018);
                    expect(result.month).toBe(9);
                    expect(result.day).toBe(20);
                });

                it("'01.01.0000'", () => {
                    const result = TuiDay.normalizeParse('01.01.0000');

                    expect(result.year).toBe(0);
                    expect(result.month).toBe(0);
                    expect(result.day).toBe(1);
                });
            });
            describe('from non valid string', () => {
                it("'20.aa.2018'", () => {
                    const result = TuiDay.normalizeParse('20.aa.2018');

                    expect(result.year).toBe(2018);
                    expect(result.month).toBe(0);
                    expect(result.day).toBe(20);
                });

                it("'20.99.2018'", () => {
                    const result = TuiDay.normalizeParse('20.99.2018');

                    expect(result.year).toBe(2018);
                    expect(result.month).toBe(11);
                    expect(result.day).toBe(20);
                });

                it("'test'", () => {
                    const result = TuiDay.normalizeParse('test');

                    expect(result.year).toBe(0);
                    expect(result.month).toBe(0);
                    expect(result.day).toBe(1);
                });
            });
            describe('from yyyy.mm.dd string', () => {
                it("'2021/12/22'", () => {
                    const result = TuiDay.normalizeParse('2021/12/22', 'YMD');

                    expect(result.year).toBe(2021);
                    expect(result.month).toBe(11);
                    expect(result.day).toBe(22);
                });

                it("'1900.05.01'", () => {
                    const result = TuiDay.normalizeParse('1900.05.01', 'YMD');

                    expect(result.year).toBe(1900);
                    expect(result.month).toBe(4);
                    expect(result.day).toBe(1);
                });
            });

            describe('from mm.dd.yyyy string', () => {
                it("'03/10/1956'", () => {
                    const result = TuiDay.normalizeParse('03/10/1956', 'MDY');

                    expect(result.year).toBe(1956);
                    expect(result.month).toBe(2);
                    expect(result.day).toBe(10);
                });

                it("'01.02.0988'", () => {
                    const result = TuiDay.normalizeParse('01.02.0988', 'MDY');

                    expect(result.year).toBe(988);
                    expect(result.month).toBe(0);
                    expect(result.day).toBe(2);
                });
            });
        });

        describe('jsonParse', () => {
            describe('returns parsed date from a valid string', () => {
                it("'2018-10-20'", () => {
                    const result = TuiDay.jsonParse('2018-10-20');

                    expect(result.year).toBe(2018);
                    expect(result.month).toBe(9);
                    expect(result.day).toBe(20);
                });

                it("'0000-01-01'", () => {
                    const result = TuiDay.jsonParse('0000-01-01');

                    expect(result.year).toBe(0);
                    expect(result.month).toBe(0);
                    expect(result.day).toBe(1);
                });
            });
            describe('throws an exception', () => {
                it("'2018-aa-20'", () => {
                    expect(() => TuiDay.jsonParse('2018-aa-20')).toThrowError(
                        'Invalid month: NaN',
                    );
                });

                it("'2018-99-20'", () => {
                    expect(() => TuiDay.jsonParse('2018-99-20')).toThrowError(
                        'Invalid month: 98',
                    );
                });

                it("'2001-02-29'", () => {
                    expect(() => TuiDay.jsonParse('2001-02-29')).toThrowError(
                        'Invalid day: 29',
                    );
                });

                it("'test'", () => {
                    expect(() => TuiDay.jsonParse('test')).toThrowError(
                        'Invalid year: NaN',
                    );
                });
            });
        });

        describe('fromUtcNativeDate returns', () => {
            it('1970.01.01 for UTC(1970, 0, 0)', () => {
                const year = 1970;
                const month = 0;
                const day = 1;

                const result = TuiDay.fromUtcNativeDate(
                    new Date(Date.UTC(year, month, day)),
                );

                expect(result.year).toBe(year);
                expect(result.month).toBe(month);
                expect(result.day).toBe(day);
            });

            it('2000.01.01 for UTC(2000, 0, 0, 23, 59, 59, 999)', () => {
                const year = 2000;
                const month = 0;
                const day = 1;

                const result = TuiDay.fromUtcNativeDate(
                    new Date(Date.UTC(year, month, day, 23, 59, 59, 999)),
                );

                expect(result.year).toBe(year);
                expect(result.month).toBe(month);
                expect(result.day).toBe(day);
            });
        });

        describe('fromLocalNativeDate returns', () => {
            it('1970.01.01 for Date(1970, 0, 0)', () => {
                const year = 1970;
                const month = 0;
                const day = 1;

                const result = TuiDay.fromLocalNativeDate(new Date(year, month, day));

                expect(result.year).toBe(year);
                expect(result.month).toBe(month);
                expect(result.day).toBe(day);
            });

            it('2000.01.01 for Date(2000, 0, 0, 23, 59, 59, 999)', () => {
                const year = 2000;
                const month = 0;
                const day = 1;

                const result = TuiDay.fromLocalNativeDate(
                    new Date(year, month, day, 23, 59, 59, 999),
                );

                expect(result.year).toBe(year);
                expect(result.month).toBe(month);
                expect(result.day).toBe(day);
            });
        });
    });

    describe('prototype', () => {
        describe('getter', () => {
            describe('formattedDayPart returns', () => {
                describe("day padded with '0' if it's a single digit day", () => {
                    it("'01' for 1", () => {
                        expect(new TuiDay(2000, 0, 1).formattedDayPart).toBe('01');
                    });

                    it("'05' for 5", () => {
                        expect(new TuiDay(2000, 4, 5).formattedDayPart).toBe('05');
                    });
                });
                describe("without padded '0' for 2 digit days", () => {
                    it("'10' for 10", () => {
                        expect(new TuiDay(2000, 9, 10).formattedDayPart).toBe('10');
                    });

                    it("'12' for 12", () => {
                        expect(new TuiDay(2000, 11, 12).formattedDayPart).toBe('12');
                    });
                });
            });

            describe('formattedDay returns', () => {
                it("'01.01.2000' for TuiMonth {year: 2000, month: 0, day: 1}", () => {
                    expect(new TuiDay(2000, 0, 1).getFormattedDay('DMY', '.')).toBe(
                        '01.01.2000',
                    );
                });

                it("'05.01.2000' for TuiMonth {year: 2000, month: 0, day: 5}", () => {
                    expect(new TuiDay(2000, 0, 5).getFormattedDay('DMY', '.')).toBe(
                        '05.01.2000',
                    );
                });

                it("'10.01.0000' for TuiMonth {year: 0, month: 0, day: 10}", () => {
                    expect(new TuiDay(0, 0, 10).getFormattedDay('DMY', '.')).toBe(
                        '10.01.0000',
                    );
                });

                it("'12.01.1995' for TuiMonth {year: 1995, month: 0, day: 12}", () => {
                    expect(new TuiDay(1995, 0, 12).getFormattedDay('DMY', '.')).toBe(
                        '12.01.1995',
                    );
                });
            });
        });

        describe('method', () => {
            let y1900m6d10: TuiDay;
            let y2000m4d15: TuiDay;
            let y2000m6d10: TuiDay;
            let y2000m6d15: TuiDay;
            let y2000m6d15v2: TuiDay;
            let y2000m6d20: TuiDay;
            let y2000m8d16: TuiDay;
            let y2100m6d15: TuiDay;

            beforeEach(() => {
                y1900m6d10 = new TuiDay(1900, 6, 10);
                y2000m4d15 = new TuiDay(2000, 4, 15);
                y2000m6d10 = new TuiDay(2000, 6, 10);
                y2000m6d15 = new TuiDay(2000, 6, 15);
                y2000m6d15v2 = new TuiDay(2000, 6, 15);
                y2000m6d20 = new TuiDay(2000, 6, 20);
                y2000m8d16 = new TuiDay(2000, 8, 16);
                y2100m6d15 = new TuiDay(2100, 6, 15);
            });

            describe('dayBefore returns', () => {
                describe('true if passed year', () => {
                    describe('is the same and month', () => {
                        it('is bigger', () => {
                            expect(y2000m6d15.dayBefore(y2000m8d16)).toBe(true);
                        });

                        it('is the same and day is bigger', () => {
                            expect(y2000m6d15.dayBefore(y2000m6d20)).toBe(true);
                        });
                    });

                    it('bigger', () => {
                        expect(y2000m6d15.dayBefore(y2100m6d15)).toBe(true);
                    });
                });

                describe('false if passed year', () => {
                    it('is smaller', () => {
                        expect(y2000m6d15.dayBefore(y1900m6d10)).toBe(false);
                    });

                    describe('is the same and month', () => {
                        it('is smaller', () => {
                            expect(y2000m6d15.dayBefore(y2000m4d15)).toBe(false);
                        });

                        describe('is the same and day', () => {
                            it('is smaller', () => {
                                expect(y2000m6d15.dayBefore(y2000m6d10)).toBe(false);
                            });

                            it('is the same', () => {
                                expect(y2000m6d15.dayBefore(y2000m6d15v2)).toBe(false);
                            });
                        });
                    });
                });
            });

            describe('daySameOrBefore returns', () => {
                describe('true if passed year', () => {
                    describe('is the same and month', () => {
                        describe('is the same and day', () => {
                            it('is the same', () => {
                                expect(y2000m6d15.daySameOrBefore(y2000m6d15v2)).toBe(
                                    true,
                                );
                            });

                            it('is bigger', () => {
                                expect(y2000m6d15.daySameOrBefore(y2000m6d20)).toBe(true);
                            });
                        });

                        it('is bigger', () => {
                            expect(y2000m6d15.daySameOrBefore(y2000m8d16)).toBe(true);
                        });
                    });

                    it('is bigger', () => {
                        expect(y2000m6d15.daySameOrBefore(y2100m6d15)).toBe(true);
                    });
                });

                describe('false if passed year', () => {
                    it('is smaller', () => {
                        expect(y2000m6d15.daySameOrBefore(y1900m6d10)).toBe(false);
                    });

                    describe('is the same and month', () => {
                        it('is smaller', () => {
                            expect(y2000m6d15.daySameOrBefore(y2000m4d15)).toBe(false);
                        });

                        it('is the same and day is the same', () => {
                            expect(y2000m6d15.daySameOrBefore(y2000m6d10)).toBe(false);
                        });
                    });
                });
            });

            describe('daySame returns', () => {
                it('true if passed year is the same, month is the same and day is the same', () => {
                    expect(y2000m6d15.daySame(y2000m6d15v2)).toBe(true);
                });

                describe('false if passed year', () => {
                    it('is smaller', () => {
                        expect(y2000m6d15.daySame(y1900m6d10)).toBe(false);
                    });

                    describe('is the same and month', () => {
                        it('is smaller', () => {
                            expect(y2000m6d15.daySame(y2000m4d15)).toBe(false);
                        });

                        describe('is the same and day', () => {
                            it('is smaller', () => {
                                expect(y2000m6d15.daySame(y2000m6d10)).toBe(false);
                            });

                            it('is bigger', () => {
                                expect(y2000m6d15.daySame(y2000m6d20)).toBe(false);
                            });
                        });

                        it('is bigger', () => {
                            expect(y2000m6d15.daySame(y2000m8d16)).toBe(false);
                        });
                    });

                    it('is bigger', () => {
                        expect(y2000m6d15.daySame(y2100m6d15)).toBe(false);
                    });
                });
            });

            describe('daySameOrAfter returns', () => {
                describe('true if passed year', () => {
                    it('is smaller', () => {
                        expect(y2000m6d15.daySameOrAfter(y1900m6d10)).toBe(true);
                    });

                    describe('is the same and month', () => {
                        it('is smaller', () => {
                            expect(y2000m6d15.daySameOrAfter(y2000m4d15)).toBe(true);
                        });

                        describe('is the same and day', () => {
                            it('is smaller', () => {
                                expect(y2000m6d15.daySameOrAfter(y2000m6d10)).toBe(true);
                            });

                            it('is the same', () => {
                                expect(y2000m6d15.daySameOrAfter(y2000m6d15v2)).toBe(
                                    true,
                                );
                            });
                        });
                    });
                });

                describe('false if passed year', () => {
                    describe('is the same and month', () => {
                        it('is the same and day is smaller', () => {
                            expect(y2000m6d15.daySameOrAfter(y2000m6d20)).toBe(false);
                        });

                        it('is bigger', () => {
                            expect(y2000m6d15.daySameOrAfter(y2000m8d16)).toBe(false);
                        });
                    });

                    it('is bigger', () => {
                        expect(y2000m6d15.daySameOrAfter(y2100m6d15)).toBe(false);
                    });
                });
            });

            describe('dayAfter returns', () => {
                describe('true if passed year', () => {
                    it('is smaller', () => {
                        expect(y2000m6d15.dayAfter(y1900m6d10)).toBe(true);
                    });

                    describe('is the same and month', () => {
                        it('is smaller', () => {
                            expect(y2000m6d15.dayAfter(y2000m4d15)).toBe(true);
                        });

                        it('is the same and day is smaller', () => {
                            expect(y2000m6d15.dayAfter(y2000m6d10)).toBe(true);
                        });
                    });
                });

                describe('false if passed year', () => {
                    describe('is the same and month', () => {
                        describe('is the same and day', () => {
                            it('is the same', () => {
                                expect(y2000m6d15.dayAfter(y2000m6d15v2)).toBe(false);
                            });

                            it('is bigger', () => {
                                expect(y2000m6d15.dayAfter(y2000m6d20)).toBe(false);
                            });
                        });

                        it('is bigger', () => {
                            expect(y2000m6d15.dayAfter(y2000m8d16)).toBe(false);
                        });
                    });

                    it('is bigger', () => {
                        expect(y2000m6d15.dayAfter(y2100m6d15)).toBe(false);
                    });
                });
            });

            describe('dayOfWeek returns', () => {
                it('correct day of week when it starts from Monday', () => {
                    expect(y2000m6d15.dayOfWeek(true)).toBe(5);
                });

                it('correct day of week when it does not start from Monday', () => {
                    expect(y2000m6d15.dayOfWeek(false)).toBe(6);
                });
            });

            describe('append returns', () => {
                it('TuiDay {year: 2000, month: 6, day: 15} if {} was passed', () => {
                    const result = y2000m6d15.append({});

                    expect(result.year).toBe(2000);
                    expect(result.month).toBe(6);
                    expect(result.day).toBe(15);
                });

                it('TuiDay {year: 2000, month: 6, day: 15} if {year: 0} was passed', () => {
                    const result = y2000m6d15.append({year: 0});

                    expect(result.year).toBe(2000);
                    expect(result.month).toBe(6);
                    expect(result.day).toBe(15);
                });

                it('TuiDay {year: 2000, month: 6, day: 15} if {year: 0, month: 0} was passed', () => {
                    const result = y2000m6d15.append({year: 0, month: 0});

                    expect(result.year).toBe(2000);
                    expect(result.month).toBe(6);
                    expect(result.day).toBe(15);
                });

                it('TuiDay {year: 2000, month: 6, day: 15} if {year: 0, month: 0, day: 0} was passed', () => {
                    const result = y2000m6d15.append({
                        year: 0,
                        month: 0,
                        day: 0,
                    });

                    expect(result.year).toBe(2000);
                    expect(result.month).toBe(6);
                    expect(result.day).toBe(15);
                });

                it('TuiDay {year: 2005, month: 6, day: 15} if {year: 5} was passed', () => {
                    const result = y2000m6d15.append({year: 5});

                    expect(result.year).toBe(2005);
                    expect(result.month).toBe(6);
                    expect(result.day).toBe(15);
                });

                it('TuiDay {year: 2005, month: 6, day: 15} if {year: -5} was passed', () => {
                    const result = y2000m6d15.append({year: -5});

                    expect(result.year).toBe(1995);
                    expect(result.month).toBe(6);
                    expect(result.day).toBe(15);
                });

                it('TuiDay {year: 1995, month: 6, day: 15} if {year: 5}, true was passed', () => {
                    const result = y2000m6d15.append({year: 5}, true);

                    expect(result.year).toBe(1995);
                    expect(result.month).toBe(6);
                    expect(result.day).toBe(15);
                });

                it('TuiDay {year: 2000, month: 11, day: 15} if {month: 5} was passed', () => {
                    const result = y2000m6d15.append({month: 5});

                    expect(result.year).toBe(2000);
                    expect(result.month).toBe(11);
                    expect(result.day).toBe(15);
                });

                it('TuiDay {year: 2000, month: 1, day: 15} if {month: -5} was passed', () => {
                    const result = y2000m6d15.append({month: -5});

                    expect(result.year).toBe(2000);
                    expect(result.month).toBe(1);
                    expect(result.day).toBe(15);
                });

                it('TuiDay {year: 2000, month: 1, day: 15} if {month: 5}, true was passed', () => {
                    const result = y2000m6d15.append({month: 5}, true);

                    expect(result.year).toBe(2000);
                    expect(result.month).toBe(1);
                    expect(result.day).toBe(15);
                });

                it('TuiDay {year: 2000, month: 6, day: 20} if {day: 5} was passed', () => {
                    const result = y2000m6d15.append({day: 5});

                    expect(result.year).toBe(2000);
                    expect(result.month).toBe(6);
                    expect(result.day).toBe(20);
                });

                it('TuiDay {year: 2000, month: 6, day: 10} if {day: -5} was passed', () => {
                    const result = y2000m6d15.append({day: -5});

                    expect(result.year).toBe(2000);
                    expect(result.month).toBe(6);
                    expect(result.day).toBe(10);
                });

                it('TuiDay {year: 2000, month: 6, day: 10} if {day: 5}, true was passed', () => {
                    const result = y2000m6d15.append({day: 5}, true);

                    expect(result.year).toBe(2000);
                    expect(result.month).toBe(6);
                    expect(result.day).toBe(10);
                });

                it('TuiDay {year: 2000, month: 7, day: 1} if {day: 17} was passed', () => {
                    const result = y2000m6d15.append({day: 17});

                    expect(result.year).toBe(2000);
                    expect(result.month).toBe(7);
                    expect(result.day).toBe(1);
                });

                it('TuiDay {year: 2000, month: 11, day: 31} if {day: 169} was passed', () => {
                    const result = y2000m6d15.append({day: 169});

                    expect(result.year).toBe(2000);
                    expect(result.month).toBe(11);
                    expect(result.day).toBe(31);
                });

                it('TuiDay {year: 2001, month: 0, day: 1} if {day: 170} was passed', () => {
                    const result = y2000m6d15.append({day: 170});

                    expect(result.year).toBe(2001);
                    expect(result.month).toBe(0);
                    expect(result.day).toBe(1);
                });

                it('TuiDay {year: 1999, month: 11, day: 31} if {day: -197} was passed', () => {
                    const result = y2000m6d15.append({day: -197});

                    expect(result.year).toBe(1999);
                    expect(result.month).toBe(11);
                    expect(result.day).toBe(31);
                });

                it('TuiDay {year: 2000, month: 5, day: 30} if {day: -15} was passed', () => {
                    const result = y2000m6d15.append({day: -15});

                    expect(result.year).toBe(2000);
                    expect(result.month).toBe(5);
                    expect(result.day).toBe(30);
                });

                it('TuiDay {year: 2000, month: 2, day: 29} if {month: -4, day: 14} was passed', () => {
                    const result = y2000m6d15.append({month: -4, day: 14});

                    expect(result.year).toBe(2000);
                    expect(result.month).toBe(2);
                    expect(result.day).toBe(29);
                });

                it('TuiDay {year: 1999, month: 11, day: 31} if {month: -6, day: -15} was passed', () => {
                    const result = y2000m6d15.append({month: -6, day: -15});

                    expect(result.year).toBe(1999);
                    expect(result.month).toBe(11);
                    expect(result.day).toBe(31);
                });

                it('TuiDay {year: 1999, month: 11, day: 31} if {month: 6, day: 15}, true was passed', () => {
                    const result = y2000m6d15.append({month: 6, day: 15}, true);

                    expect(result.year).toBe(1999);
                    expect(result.month).toBe(11);
                    expect(result.day).toBe(31);
                });

                it('capped day when moving forward', () => {
                    const result = new TuiDay(2018, 2, 30).append({
                        month: -1,
                    });

                    expect(result.year).toBe(2018);
                    expect(result.month).toBe(1);
                    expect(result.day).toBe(28);
                });

                it('capped day when moving backward', () => {
                    const result = new TuiDay(2018, 0, 31).append({month: 1});

                    expect(result.year).toBe(2018);
                    expect(result.month).toBe(1);
                    expect(result.day).toBe(28);
                });
            });

            describe('toJSON returns', () => {
                it("'2000-01-01' for TuiMonth {year: 2000, month: 0, day: 1}", () => {
                    expect(new TuiDay(2000, 0, 1).toJSON()).toBe('2000-01-01');
                });

                it("'2000-01-10' for TuiMonth {year: 2000, month: 0, day: 10}", () => {
                    expect(new TuiDay(2000, 0, 10).toJSON()).toBe('2000-01-10');
                });

                it("'0200-01-01' for TuiMonth {year: 200, month: 0, day: 1}", () => {
                    expect(new TuiDay(200, 0, 1).toJSON()).toBe('0200-01-01');
                });

                it("'0200-01-10' for TuiMonth {year: 200, month: 0, day: 10}", () => {
                    expect(new TuiDay(200, 0, 10).toJSON()).toBe('0200-01-10');
                });
            });

            it('toLocalNativeDate returns native Date with time zone offset', () => {
                pendingIfNotMoscowTimeZone();

                const result = new TuiDay(2000, 0, 1);

                expect(result.toLocalNativeDate()).toEqual(new Date(2000, 0, 1));
            });

            it('toUtcNativeDate returns native Date without time zone offset', () => {
                pendingIfNotMoscowTimeZone();

                const result = new TuiDay(2000, 0, 1);

                expect(result.toUtcNativeDate()).toEqual(new Date(Date.UTC(2000, 0, 1)));
            });

            describe('dayLimit returns', () => {
                it('minimal date if it is bigger than current', () => {
                    expect(y2000m6d15.dayLimit(y2100m6d15, null)).toBe(y2100m6d15);
                });

                it('current date if it is within the limits', () => {
                    expect(y2000m6d15.dayLimit(y1900m6d10, y2100m6d15)).toBe(y2000m6d15);
                });

                it('maximum date if it is smaller than current', () => {
                    expect(y2000m6d15.dayLimit(null, y1900m6d10)).toBe(y1900m6d10);
                });
            });

            describe('toString returns', () => {
                describe('(DMY mode, default)', () => {
                    it("'10.07.1900' for TuiMonth {year: 1900, month: 6, day: 10}", () => {
                        expect(y1900m6d10.toString()).toBe('10.07.1900');
                    });

                    it("'15.05.2000' for TuiMonth {year: 2000, month: 4, day: 15}", () => {
                        expect(y2000m4d15.toString()).toBe('15.05.2000');
                    });

                    it("'16.09.2000' for TuiMonth {year: 2000, month: 8, day: 16}", () => {
                        expect(y2000m8d16.toString()).toBe('16.09.2000');
                    });

                    it("'15.07.2100' for TuiMonth {year: 2100, month: 6, day: 15}", () => {
                        expect(y2100m6d15.toString()).toBe('15.07.2100');
                    });
                });

                describe("(MDY mode, '/' as separator)", () => {
                    it("'07/10/1900' for TuiMonth {year: 1900, month: 6, day: 10}", () => {
                        expect(y1900m6d10.toString('MDY', '/')).toBe('07/10/1900');
                    });

                    it("'05/15/2000' for TuiMonth {year: 2000, month: 4, day: 15}", () => {
                        expect(y2000m4d15.toString('MDY', '/')).toBe('05/15/2000');
                    });

                    it("'09/16/2000' for TuiMonth {year: 2000, month: 8, day: 16}", () => {
                        expect(y2000m8d16.toString('MDY', '/')).toBe('09/16/2000');
                    });

                    it("'07/15/2100' for TuiMonth {year: 2100, month: 6, day: 15}", () => {
                        expect(y2100m6d15.toString('MDY', '/')).toBe('07/15/2100');
                    });
                });

                describe("(YMD mode, '-' as separator)", () => {
                    it("'1900-07-10' for TuiMonth {year: 1900, month: 6, day: 10}", () => {
                        expect(y1900m6d10.toString('YMD', '-')).toBe('1900-07-10');
                    });

                    it("'2000-05-15' for TuiMonth {year: 2000, month: 4, day: 15}", () => {
                        expect(y2000m4d15.toString('YMD', '-')).toBe('2000-05-15');
                    });

                    it("'2000-09-16' for TuiMonth {year: 2000, month: 8, day: 16}", () => {
                        expect(y2000m8d16.toString('YMD', '-')).toBe('2000-09-16');
                    });

                    it("'2100-07-15' for TuiMonth {year: 2100, month: 6, day: 15}", () => {
                        expect(y2100m6d15.toString('YMD', '-')).toBe('2100-07-15');
                    });
                });
            });

            describe('valueOf returns', () => {
                it('the primitive value of TuiDay', () => {
                    const day = new TuiDay(2000, 5, 13);

                    expect(Number(day)).toBeInstanceOf(Number);
                    expect(day.valueOf()).toBeInstanceOf(Number);
                    expect(day > new TuiDay(2000, 5, 10)).toBeTrue();
                    expect(day < new TuiDay(2001, 5, 10)).toBeTrue();
                });
            });
        });
    });
});
