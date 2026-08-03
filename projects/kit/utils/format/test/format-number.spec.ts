import {CHAR_HYPHEN, CHAR_MINUS, CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';

import {tuiFormatNumber} from '../format-number';

describe('tuiFormatNumber', () => {
    describe('value', () => {
        it('turns null into empty string', () => {
            expect(tuiFormatNumber(null)).toBe('');
        });

        it('turns NaN into empty string', () => {
            expect(tuiFormatNumber(Number.NaN)).toBe('');
        });

        it('formats zero', () => {
            expect(tuiFormatNumber(0)).toBe('0');
        });

        it('drops the sign of negative zero', () => {
            expect(tuiFormatNumber(-0)).toBe('0');
        });

        it('formats bigint zero', () => {
            expect(tuiFormatNumber(0n)).toBe('0');
        });
    });

    describe('decimalSeparator', () => {
        it('is a dot by default', () => {
            expect(tuiFormatNumber(1.234)).toBe('1.234');
        });

        it('accepts passing explicit default dot', () => {
            expect(
                tuiFormatNumber(123.45, {
                    maximumFractionDigits: 2,
                    decimalSeparator: '.',
                }),
            ).toBe('123.45');
        });

        it('accepts comma', () => {
            expect(
                tuiFormatNumber(1234.5, {
                    decimalSeparator: ',',
                    thousandSeparator: ' ',
                }),
            ).toBe('1 234,5');
        });

        it('accepts comma while thousand separator is a dot', () => {
            expect(
                tuiFormatNumber(1234.5, {
                    decimalSeparator: ',',
                    thousandSeparator: '.',
                }),
            ).toBe('1.234,5');
        });

        it('accepts any character', () => {
            expect(tuiFormatNumber(1.5, {decimalSeparator: '·'})).toBe('1·5');
        });

        it('is not rendered when there is no fractional part', () => {
            expect(tuiFormatNumber(123, {decimalSeparator: ','})).toBe('123');
        });
    });

    describe('thousandSeparator', () => {
        it('is a non-breaking space by default', () => {
            expect(tuiFormatNumber(1000)).toBe(`1${CHAR_NO_BREAK_SPACE}000`);
        });

        it('is not inserted for numbers < 1000', () => {
            expect(tuiFormatNumber(999)).toBe('999');
        });

        it('correctly inserts the separator for one higher order', () => {
            expect(tuiFormatNumber(1234567, {thousandSeparator: ' '})).toBe('1 234 567');
        });

        it('correctly inserts the separator for the two higher orders', () => {
            expect(tuiFormatNumber(12345678, {thousandSeparator: ' '})).toBe(
                '12 345 678',
            );
        });

        it('correctly inserts the separator for the three higher orders', () => {
            expect(tuiFormatNumber(123456789, {thousandSeparator: ' '})).toBe(
                '123 456 789',
            );
        });

        it('accepts custom thousands separator', () => {
            expect(
                tuiFormatNumber(12345.67, {
                    maximumFractionDigits: 2,
                    decimalSeparator: ',',
                    thousandSeparator: '.',
                }),
            ).toBe('12.345,67');
        });

        it('accepts multi-character separator', () => {
            expect(tuiFormatNumber(1234567, {thousandSeparator: ' | '})).toBe(
                '1 | 234 | 567',
            );
        });

        it('empty string disables grouping', () => {
            expect(tuiFormatNumber(1234567, {thousandSeparator: ''})).toBe('1234567');
        });

        it('does not group digits of the fractional part', () => {
            expect(
                tuiFormatNumber(0.1234567, {
                    maximumFractionDigits: 7,
                    thousandSeparator: ',',
                }),
            ).toBe('0.1234567');
        });
    });

    describe('thousandSeparatorPattern', () => {
        describe('default pattern', () => {
            const format = (value: bigint | number): string =>
                tuiFormatNumber(value, {thousandSeparator: ','});

            it('groups digits by three', () => {
                expect(format(123456789)).toBe('123,456,789');
            });

            it('leaves an incomplete leading group as is', () => {
                expect(format(12345)).toBe('12,345');
            });

            it('groups digits of bigint values', () => {
                expect(format(123456789012345678901234567890n)).toBe(
                    '123,456,789,012,345,678,901,234,567,890',
                );
            });
        });

        describe('japanese pattern', () => {
            const japaneseYenGrouping = (digits: string): readonly string[] =>
                digits.match(/\d{1,4}(?=(?:\d{4})*$)/g) ?? [];

            const format = (value: number): string =>
                tuiFormatNumber(value, {
                    thousandSeparator: ',',
                    thousandSeparatorPattern: japaneseYenGrouping,
                });

            it('groups digits by four', () => {
                expect(format(123456789)).toBe('1,2345,6789');
            });

            it('does not separate the first four digits', () => {
                expect(format(1000)).toBe('1000');
            });

            it('leaves an incomplete leading group as is', () => {
                expect(format(12345)).toBe('1,2345');
            });
        });

        describe('indian pattern', () => {
            const indianGrouping = (digits: string): readonly string[] =>
                digits.match(/\d{1,2}(?=(?:\d{2})*\d{3}$)|\d{1,3}$/g) ?? [];

            const format = (value: number): string =>
                tuiFormatNumber(value, {
                    thousandSeparator: ',',
                    thousandSeparatorPattern: indianGrouping,
                });

            it('groups the last three digits and then by two', () => {
                expect(format(123456789)).toBe('12,34,56,789');
            });

            it('separates thousands as usual', () => {
                expect(format(1234)).toBe('1,234');
            });

            it('does not separate numbers < 1000', () => {
                expect(format(100)).toBe('100');
            });

            it('formats crore', () => {
                expect(format(10000000)).toBe('1,00,00,000');
            });
        });
    });

    describe('minusSign', () => {
        it('is a minus sign by default', () => {
            expect(tuiFormatNumber(-123)).toBe(`${CHAR_MINUS}123`);
        });

        it('accepts custom sign', () => {
            expect(tuiFormatNumber(-123, {minusSign: CHAR_HYPHEN})).toBe(
                `${CHAR_HYPHEN}123`,
            );
        });

        it('is not added to positive numbers', () => {
            expect(tuiFormatNumber(123, {minusSign: CHAR_MINUS})).toBe('123');
        });

        it('is applied to bigint values', () => {
            expect(
                tuiFormatNumber(-1234567n, {
                    minusSign: CHAR_HYPHEN,
                    thousandSeparator: ' ',
                }),
            ).toBe(`${CHAR_HYPHEN}1 234 567`);
        });

        it('precedes the fractional part', () => {
            expect(tuiFormatNumber(-0.5, {maximumFractionDigits: 2})).toBe(
                `${CHAR_MINUS}0.5`,
            );
        });

        it('is not added when the value is rounded to zero', () => {
            expect(tuiFormatNumber(-0.0001, {maximumFractionDigits: 2})).toBe('0');
        });
    });

    describe('maximumFractionDigits', () => {
        it('preserves the fractional part by default', () => {
            expect(tuiFormatNumber(1.234)).toBe('1.234');
        });

        it('discards the extra fractional part', () => {
            expect(tuiFormatNumber(1.234, {maximumFractionDigits: 2})).toBe('1.23');
        });

        it('does not pad the fractional part on its own', () => {
            expect(tuiFormatNumber(123, {maximumFractionDigits: 2})).toBe('123');
        });

        it('discards the fractional part altogether', () => {
            expect(tuiFormatNumber(5.678, {maximumFractionDigits: 0})).toBe('5');
        });

        it('keeps all digits when infinite', () => {
            expect(tuiFormatNumber(1.23456789, {maximumFractionDigits: Infinity})).toBe(
                '1.23456789',
            );
        });

        it('keeps all significant digits of a value written in exponential notation', () => {
            expect(tuiFormatNumber(1.23e-8, {maximumFractionDigits: 12})).toBe(
                '0.0000000123',
            );
        });

        it('is aliased by the deprecated precision option', () => {
            expect(tuiFormatNumber(1.234, {precision: 2})).toBe('1.23');
        });

        it('takes precedence over the deprecated precision option', () => {
            expect(tuiFormatNumber(1.234, {precision: 2, maximumFractionDigits: 3})).toBe(
                '1.234',
            );
        });

        it('does not mutate value if precision is infinite', () => {
            expect(
                tuiFormatNumber(123_456_789_012_345.67, {
                    precision: Infinity,
                    thousandSeparator: ',',
                }),
            ).toBe('123,456,789,012,345.67');
        });
    });

    describe('minimumFractionDigits', () => {
        it('does not pad the fractional part by default', () => {
            expect(tuiFormatNumber(5.1)).toBe('5.1');
        });

        it('pads an integer value with zeros', () => {
            expect(tuiFormatNumber(5, {minimumFractionDigits: 2})).toBe('5.00');
        });

        it('pads a short fractional part with zeros', () => {
            expect(
                tuiFormatNumber(5.1, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 4,
                }),
            ).toBe('5.10');
        });

        it('zero disables padding of the fractional part', () => {
            expect(
                tuiFormatNumber(5.1, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                }),
            ).toBe('5.1');
        });

        it('zero leaves an integer value without fractional part', () => {
            expect(
                tuiFormatNumber(5, {minimumFractionDigits: 0, maximumFractionDigits: 2}),
            ).toBe('5');
        });

        it('pads even when maximumFractionDigits is infinite', () => {
            expect(tuiFormatNumber(1.5, {minimumFractionDigits: 5})).toBe('1.50000');
        });

        it('pads bigint values', () => {
            expect(
                tuiFormatNumber(1234n, {
                    minimumFractionDigits: 2,
                    thousandSeparator: ' ',
                }),
            ).toBe('1 234.00');
        });
    });

    describe('rounding', () => {
        it('truncates by default', () => {
            expect(tuiFormatNumber(1.239, {maximumFractionDigits: 2})).toBe('1.23');
        });

        it('truncates negative values towards zero', () => {
            expect(
                tuiFormatNumber(-1.239, {maximumFractionDigits: 2, rounding: 'truncate'}),
            ).toBe(`${CHAR_MINUS}1.23`);
        });

        it('rounds half up', () => {
            expect(
                tuiFormatNumber(0.005, {maximumFractionDigits: 2, rounding: 'round'}),
            ).toBe('0.01');
        });

        it('rounds negative half towards zero', () => {
            expect(
                tuiFormatNumber(-1.5, {maximumFractionDigits: 0, rounding: 'round'}),
            ).toBe(`${CHAR_MINUS}1`);
        });

        it('rounds up with ceil', () => {
            expect(
                tuiFormatNumber(1.001, {maximumFractionDigits: 0, rounding: 'ceil'}),
            ).toBe('2');
        });

        it('rounds negative values towards zero with ceil', () => {
            expect(
                tuiFormatNumber(-1.231, {maximumFractionDigits: 2, rounding: 'ceil'}),
            ).toBe(`${CHAR_MINUS}1.23`);
        });

        it('rounds down with floor', () => {
            expect(
                tuiFormatNumber(1.239, {maximumFractionDigits: 2, rounding: 'floor'}),
            ).toBe('1.23');
        });

        it('rounds negative values away from zero with floor', () => {
            expect(
                tuiFormatNumber(-1.5, {maximumFractionDigits: 0, rounding: 'floor'}),
            ).toBe(`${CHAR_MINUS}2`);
        });

        it('carries over to the integer part', () => {
            expect(
                tuiFormatNumber(999.9, {
                    maximumFractionDigits: 0,
                    rounding: 'round',
                    thousandSeparator: ' ',
                }),
            ).toBe('1 000');
        });

        it('is not applied when maximumFractionDigits is infinite', () => {
            expect(tuiFormatNumber(1.239, {rounding: 'ceil'})).toBe('1.239');
        });
    });

    describe('decimalMode', () => {
        describe('omitted', () => {
            it('does not add trailing zeros', () => {
                expect(tuiFormatNumber(345.6, {maximumFractionDigits: 2})).toBe('345.6');
            });

            it('behaves like "not-zero"', () => {
                expect(tuiFormatNumber(345.6078, {maximumFractionDigits: 2})).toBe(
                    tuiFormatNumber(345.6078, {
                        maximumFractionDigits: 2,
                        decimalMode: 'not-zero',
                    }),
                );
            });
        });

        describe('"always"', () => {
            it('pads the fractional part to maximumFractionDigits', () => {
                expect(
                    tuiFormatNumber(345.6, {
                        maximumFractionDigits: 2,
                        decimalMode: 'always',
                    }),
                ).toBe('345.60');
            });

            it('pads an integer value with zeros', () => {
                expect(
                    tuiFormatNumber(5, {maximumFractionDigits: 2, decimalMode: 'always'}),
                ).toBe('5.00');
            });

            it('pads up to explicit minimumFractionDigits', () => {
                expect(
                    tuiFormatNumber(5, {
                        maximumFractionDigits: 3,
                        minimumFractionDigits: 2,
                        decimalMode: 'always',
                    }),
                ).toBe('5.00');
            });
        });

        describe('"pad"', () => {
            it('keeps trailing zeros of a significant fractional part', () => {
                expect(
                    tuiFormatNumber(1.5, {maximumFractionDigits: 3, decimalMode: 'pad'}),
                ).toBe('1.500');
            });

            it('keeps significant zeros of the fractional part', () => {
                expect(
                    tuiFormatNumber(0.01, {maximumFractionDigits: 2, decimalMode: 'pad'}),
                ).toBe('0.01');
            });

            it('keeps zeros preceding a significant digit within maximumFractionDigits', () => {
                expect(
                    tuiFormatNumber(0.001, {
                        maximumFractionDigits: 5,
                        decimalMode: 'pad',
                    }),
                ).toBe('0.00100');
            });

            it('leaves an integer value without fractional part', () => {
                expect(
                    tuiFormatNumber(5, {maximumFractionDigits: 3, decimalMode: 'pad'}),
                ).toBe('5');
            });

            it('drops a fractional part truncated to zeros', () => {
                expect(
                    tuiFormatNumber(345.006, {
                        maximumFractionDigits: 2,
                        decimalMode: 'pad',
                    }),
                ).toBe('345');
            });
        });

        describe('"not-zero"', () => {
            it('does not add trailing zeros', () => {
                expect(
                    tuiFormatNumber(345.6, {
                        maximumFractionDigits: 2,
                        decimalMode: 'not-zero',
                    }),
                ).toBe('345.6');
            });

            it('deletes trailing zeros', () => {
                expect(
                    tuiFormatNumber(345.6078, {
                        maximumFractionDigits: 2,
                        decimalMode: 'not-zero',
                    }),
                ).toBe('345.6');
            });

            it('leaves an integer value without fractional part', () => {
                expect(
                    tuiFormatNumber(5, {
                        maximumFractionDigits: 3,
                        decimalMode: 'not-zero',
                    }),
                ).toBe('5');
            });

            it('drops a fractional part truncated to zeros', () => {
                expect(
                    tuiFormatNumber(0.001, {
                        maximumFractionDigits: 2,
                        decimalMode: 'not-zero',
                    }),
                ).toBe('0');
            });

            it('is overridden by explicit minimumFractionDigits', () => {
                expect(
                    tuiFormatNumber(5, {
                        maximumFractionDigits: 3,
                        minimumFractionDigits: 2,
                        decimalMode: 'not-zero',
                    }),
                ).toBe('5.00');
            });
        });
    });
});
