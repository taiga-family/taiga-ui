import {TuiYear} from '../year';

describe('TuiYear', () => {
    describe('static method', () => {
        describe('isValidYear returns', () => {
            describe('false if passed year is invalid', () => {
                it('NaN', () => {
                    expect(TuiYear.isValidYear(NaN)).toBe(false);
                });

                it('-200', () => {
                    expect(TuiYear.isValidYear(-200)).toBe(false);
                });

                it('2000.1', () => {
                    expect(TuiYear.isValidYear(2000.1)).toBe(false);
                });

                it('100000', () => {
                    expect(TuiYear.isValidYear(100000)).toBe(false);
                });
            });

            describe('true if passed year is valid', () => {
                it('0', () => {
                    expect(TuiYear.isValidYear(0)).toBe(true);
                });

                it('1', () => {
                    expect(TuiYear.isValidYear(1)).toBe(true);
                });

                it('1990', () => {
                    expect(TuiYear.isValidYear(1990)).toBe(true);
                });

                it('2000', () => {
                    expect(TuiYear.isValidYear(2000)).toBe(true);
                });

                it('9999', () => {
                    expect(TuiYear.isValidYear(9999)).toBe(true);
                });
            });
        });

        describe('isLeapYear returns', () => {
            describe('false if passed year is not a leap year', () => {
                it('1', () => {
                    expect(TuiYear.isLeapYear(1)).toBe(false);
                });

                it('2', () => {
                    expect(TuiYear.isLeapYear(2)).toBe(false);
                });

                it('3', () => {
                    expect(TuiYear.isLeapYear(3)).toBe(false);
                });

                it('5', () => {
                    expect(TuiYear.isLeapYear(5)).toBe(false);
                });

                it('2001', () => {
                    expect(TuiYear.isLeapYear(2001)).toBe(false);
                });

                it('2018', () => {
                    expect(TuiYear.isLeapYear(2018)).toBe(false);
                });

                it('2100', () => {
                    expect(TuiYear.isLeapYear(2100)).toBe(false);
                });

                it('1995', () => {
                    expect(TuiYear.isLeapYear(1995)).toBe(false);
                });

                it('1334', () => {
                    expect(TuiYear.isLeapYear(1334)).toBe(false);
                });

                it('3421', () => {
                    expect(TuiYear.isLeapYear(3421)).toBe(false);
                });
            });

            describe('true if passed year is a leap year', () => {
                it('0', () => {
                    expect(TuiYear.isLeapYear(0)).toBe(true);
                });

                it('4', () => {
                    expect(TuiYear.isLeapYear(4)).toBe(true);
                });

                it('20', () => {
                    expect(TuiYear.isLeapYear(20)).toBe(true);
                });

                it('1200', () => {
                    expect(TuiYear.isLeapYear(1200)).toBe(true);
                });

                it('2000', () => {
                    expect(TuiYear.isLeapYear(2000)).toBe(true);
                });

                it('2020', () => {
                    expect(TuiYear.isLeapYear(2020)).toBe(true);
                });

                it('2104', () => {
                    expect(TuiYear.isLeapYear(2104)).toBe(true);
                });
            });
        });

        describe('getAbsoluteLeapYears returns', () => {
            it('0 if passed value was 0', () => {
                expect(TuiYear.getAbsoluteLeapYears(0)).toBe(0);
            });

            it('1 if passed value was 1', () => {
                expect(TuiYear.getAbsoluteLeapYears(1)).toBe(1);
            });

            it('1 if passed value was 2', () => {
                expect(TuiYear.getAbsoluteLeapYears(2)).toBe(1);
            });

            it('1 if passed value was 3', () => {
                expect(TuiYear.getAbsoluteLeapYears(3)).toBe(1);
            });

            it('1 if passed value was 4', () => {
                expect(TuiYear.getAbsoluteLeapYears(4)).toBe(1);
            });

            it('2 if passed value was 5', () => {
                expect(TuiYear.getAbsoluteLeapYears(5)).toBe(2);
            });

            it('2 if passed value was 6', () => {
                expect(TuiYear.getAbsoluteLeapYears(6)).toBe(2);
            });

            it('2 if passed value was 7', () => {
                expect(TuiYear.getAbsoluteLeapYears(7)).toBe(2);
            });

            it('2 if passed value was 8', () => {
                expect(TuiYear.getAbsoluteLeapYears(8)).toBe(2);
            });

            it('3 if passed value was 9', () => {
                expect(TuiYear.getAbsoluteLeapYears(9)).toBe(3);
            });

            it('3 if passed value was 10', () => {
                expect(TuiYear.getAbsoluteLeapYears(10)).toBe(3);
            });

            it('485 if passed value was 2000', () => {
                expect(TuiYear.getAbsoluteLeapYears(2000)).toBe(485);
            });

            it('2425 if passed value was 9999', () => {
                expect(TuiYear.getAbsoluteLeapYears(9999)).toBe(2425);
            });
        });
    });

    describe('prototype', () => {
        describe('getter', () => {
            describe('formattedYear returns', () => {
                it("'0000' if year is 0", () => {
                    expect(new TuiYear(0).formattedYear).toBe('0000');
                });

                it("'0001' if year is 1", () => {
                    expect(new TuiYear(0).formattedYear).toBe('0000');
                });

                it("'0020' if year is 20", () => {
                    expect(new TuiYear(20).formattedYear).toBe('0020');
                });

                it("'2000' if year is 2000", () => {
                    expect(new TuiYear(2000).formattedYear).toBe('2000');
                });

                it("'9999' if year is 9999", () => {
                    expect(new TuiYear(9999).formattedYear).toBe('9999');
                });
            });

            describe('absoluteLeapYears returns', () => {
                it('1 if year is 0', () => {
                    expect(new TuiYear(0).absoluteLeapYears).toBe(0);
                });

                it('1 if year is 1', () => {
                    expect(new TuiYear(1).absoluteLeapYears).toBe(1);
                });

                it('1 if year is 2', () => {
                    expect(new TuiYear(2).absoluteLeapYears).toBe(1);
                });

                it('1 if year is 3', () => {
                    expect(new TuiYear(3).absoluteLeapYears).toBe(1);
                });

                it('1 if year is 4', () => {
                    expect(new TuiYear(4).absoluteLeapYears).toBe(1);
                });

                it('2 if year is 5', () => {
                    expect(new TuiYear(5).absoluteLeapYears).toBe(2);
                });

                it('2 if year is 6', () => {
                    expect(new TuiYear(6).absoluteLeapYears).toBe(2);
                });

                it('2 if year is 7', () => {
                    expect(new TuiYear(7).absoluteLeapYears).toBe(2);
                });

                it('2 if year is 8', () => {
                    expect(new TuiYear(8).absoluteLeapYears).toBe(2);
                });

                it('3 if year is 9', () => {
                    expect(new TuiYear(9).absoluteLeapYears).toBe(3);
                });

                it('3 if year is 10', () => {
                    expect(new TuiYear(10).absoluteLeapYears).toBe(3);
                });

                it('485 if year is 2000', () => {
                    expect(new TuiYear(2000).absoluteLeapYears).toBe(485);
                });

                it('2425 if year is 9999', () => {
                    expect(new TuiYear(9999).absoluteLeapYears).toBe(2425);
                });
            });

            describe('isLeapYear returns', () => {
                describe('false if it is not a leap year', () => {
                    it('1', () => {
                        expect(new TuiYear(1).isLeapYear).toBe(false);
                    });

                    it('2', () => {
                        expect(new TuiYear(2).isLeapYear).toBe(false);
                    });

                    it('3', () => {
                        expect(new TuiYear(3).isLeapYear).toBe(false);
                    });

                    it('5', () => {
                        expect(new TuiYear(5).isLeapYear).toBe(false);
                    });

                    it('2001', () => {
                        expect(new TuiYear(2001).isLeapYear).toBe(false);
                    });

                    it('2018', () => {
                        expect(new TuiYear(2018).isLeapYear).toBe(false);
                    });

                    it('2100', () => {
                        expect(new TuiYear(2100).isLeapYear).toBe(false);
                    });

                    it('1995', () => {
                        expect(new TuiYear(1995).isLeapYear).toBe(false);
                    });

                    it('1334', () => {
                        expect(new TuiYear(1334).isLeapYear).toBe(false);
                    });

                    it('3421', () => {
                        expect(new TuiYear(3421).isLeapYear).toBe(false);
                    });
                });

                describe('true if it is a leap year', () => {
                    it('0', () => {
                        expect(new TuiYear(0).isLeapYear).toBe(true);
                    });

                    it('4', () => {
                        expect(new TuiYear(4).isLeapYear).toBe(true);
                    });

                    it('20', () => {
                        expect(new TuiYear(20).isLeapYear).toBe(true);
                    });

                    it('1200', () => {
                        expect(new TuiYear(1200).isLeapYear).toBe(true);
                    });

                    it('2000', () => {
                        expect(new TuiYear(2000).isLeapYear).toBe(true);
                    });

                    it('2020', () => {
                        expect(new TuiYear(2020).isLeapYear).toBe(true);
                    });

                    it('2104', () => {
                        expect(new TuiYear(2104).isLeapYear).toBe(true);
                    });
                });
            });
        });

        describe('method', () => {
            let y2000: TuiYear;
            let y1900: TuiYear;
            let y2000v2: TuiYear;
            let y2100: TuiYear;

            beforeEach(() => {
                y2000 = new TuiYear(2000);
                y1900 = new TuiYear(1900);
                y2000v2 = new TuiYear(2000);
                y2100 = new TuiYear(2100);
            });

            describe('yearBefore returns', () => {
                describe('true if passed year', () => {
                    it('is bigger', () => {
                        expect(y2000.yearBefore(y2100)).toBe(true);
                    });
                });

                describe('false if passed year', () => {
                    it('is smaller', () => {
                        expect(y2000.yearBefore(y1900)).toBe(false);
                    });

                    it('is the same', () => {
                        expect(y2000.yearBefore(y2000v2)).toBe(false);
                    });
                });
            });

            describe('yearSameOrBefore returns', () => {
                describe('true if passed year', () => {
                    it('is the same', () => {
                        expect(y2000.yearSameOrBefore(y2000v2)).toBe(true);
                    });

                    it('is bigger', () => {
                        expect(y2000.yearSameOrBefore(y2100)).toBe(true);
                    });
                });

                describe('false if passed year', () => {
                    it('is smaller', () => {
                        expect(y2000.yearSameOrBefore(y1900)).toBe(false);
                    });
                });
            });

            describe('yearSame returns', () => {
                describe('true if passed year', () => {
                    it('is the same', () => {
                        expect(y2000.yearSame(y2000v2)).toBe(true);
                    });
                });

                describe('false if passed year', () => {
                    it('is smaller', () => {
                        expect(y2000.yearSame(y1900)).toBe(false);
                    });

                    it('is bigger', () => {
                        expect(y2000.yearSame(y2100)).toBe(false);
                    });
                });
            });

            describe('yearSameOrAfter returns', () => {
                describe('true if passed year', () => {
                    it('is smaller', () => {
                        expect(y2000.yearSameOrAfter(y1900)).toBe(true);
                    });

                    it('is the same', () => {
                        expect(y2000.yearSameOrAfter(y2000v2)).toBe(true);
                    });
                });

                describe('false if passed year', () => {
                    it('is bigger', () => {
                        expect(y2000.yearSameOrAfter(y2100)).toBe(false);
                    });
                });
            });

            describe('yearAfter returns', () => {
                describe('true if passed year', () => {
                    it('is smaller', () => {
                        expect(y2000.yearAfter(y1900)).toBe(true);
                    });
                });

                describe('false if passed year', () => {
                    it('is the same', () => {
                        expect(y2000.yearAfter(y2000v2)).toBe(false);
                    });

                    it('is bigger', () => {
                        expect(y2000.yearAfter(y2100)).toBe(false);
                    });
                });
            });

            describe('append returns', () => {
                it('TuiYear {year: 2000} if passed value was {}', () => {
                    expect(y2000.append({}).year).toBe(2000);
                });

                it('TuiYear {year: 2000} if passed value was {year: 0}', () => {
                    expect(y2000.append({year: 0}).year).toBe(2000);
                });

                it('TuiYear {year: 2001} if passed value was {year: 1}', () => {
                    expect(y2000.append({year: 1}).year).toBe(2001);
                });

                it('TuiYear {year: 1999} if passed value was {year: -1}', () => {
                    expect(y2000.append({year: -1}).year).toBe(1999);
                });

                it('TuiYear {year: 2100} if passed value was {year: 100}', () => {
                    expect(y2000.append({year: 100}).year).toBe(2100);
                });

                it('TuiYear {year: 1900} if passed value was {year: -100}', () => {
                    expect(y2000.append({year: -100}).year).toBe(1900);
                });

                it('TuiYear {year: 1900} if passed value was {year: 100}, true', () => {
                    expect(y2000.append({year: 100}, true).year).toBe(1900);
                });
            });

            describe('valueOf returns', () => {
                it('the primitive value of a TuiYear object', () => {
                    const year = new TuiYear(2000);

                    expect(Number(year)).toBeInstanceOf(Number);
                    expect(year.valueOf()).toBeInstanceOf(Number);
                    expect(year > new TuiYear(1999)).toBeTrue();
                    expect(year < new TuiYear(2001)).toBeTrue();
                });
            });

            describe('Symbol.toPrimitive returns', () => {
                it('a number if the hint is number', () => {
                    const year = new TuiYear(1701);

                    expect(Number(year)).toBeInstanceOf(Number);
                    expect(year.valueOf()).toBeInstanceOf(Number);
                    expect(year[Symbol.toPrimitive]('number')).toBeInstanceOf(Number);
                });

                it('a string if the hint is string', () => {
                    const year = new TuiYear(2201);

                    expect(String(year)).toBeInstanceOf(String);
                    expect(year.toString()).toBeInstanceOf(String);
                    expect(year[Symbol.toPrimitive]('string')).toBeInstanceOf(String);
                });

                it('a string if the hint is default', () => {
                    const year = new TuiYear(2002);

                    expect(`${year}`).toBeInstanceOf(String);
                    expect(year[Symbol.toPrimitive]('default')).toBeInstanceOf(String);
                });
            });
        });
    });

    it('stringified value equals formatted', () => {
        const month = new TuiYear(2000);

        expect(month.toString()).toBe(month.formattedYear);
    });
});
