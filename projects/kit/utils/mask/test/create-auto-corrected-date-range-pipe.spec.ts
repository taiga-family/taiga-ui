import {RANGE_SEPARATOR_CHAR, TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiTextMaskPipeResult} from '@taiga-ui/core';
import {tuiCreateAutoCorrectedDateRangePipe} from '../create-auto-corrected-date-range-pipe';

const DUMMY: any = 'any';

function wrapper(
    rawString: string,
    min: TuiDay | null = null,
    max: TuiDay | null = null,
    value: TuiDayRange | null = null,
    filler: string = 'dd.mm.yyyy',
    rangeFiller: string = `${filler}${RANGE_SEPARATOR_CHAR}${filler}`,
): string {
    return (tuiCreateAutoCorrectedDateRangePipe({min, max, value, filler, rangeFiller})(
        rawString,
        DUMMY,
    ) as TuiTextMaskPipeResult).value;
}

describe('tuiCreateAutoCorrectedDateRangePipe возвращает', () => {
    describe('исходную строку, если она', () => {
        it('пустая', () => {
            expect(wrapper('')).toBe('');
        });

        it('меньше одной даты', () => {
            expect(wrapper('99.99.99')).toBe('99.99.99');
        });

        it('больше одной, но меньше двух дат', () => {
            expect(wrapper(`99.99.9999${RANGE_SEPARATOR_CHAR}99.99.99`)).toBe(
                `99.99.9999${RANGE_SEPARATOR_CHAR}99.99.99`,
            );
        });

        describe('валидная и', () => {
            describe('одинарная и', () => {
                it('без тире', () => {
                    expect(wrapper('06.06.2000')).toBe('06.06.2000');
                });

                it('c тире', () => {
                    expect(wrapper(`06.06.2000${RANGE_SEPARATOR_CHAR}`)).toBe(
                        `06.06.2000${RANGE_SEPARATOR_CHAR}`,
                    );
                });
            });

            it('двойная', () => {
                expect(wrapper(`01.01.2000${RANGE_SEPARATOR_CHAR}.31.12.3000`)).toBe(
                    `01.01.2000${RANGE_SEPARATOR_CHAR}.31.12.3000`,
                );
            });
        });
    });

    describe('исправленную строку, если она', () => {
        describe('одинарная и', () => {
            describe('не валидная', () => {
                it('без тире', () => {
                    expect(wrapper('99.99.4444')).toBe('31.12.4444');
                });

                it('с тире', () => {
                    expect(wrapper(`99.99.4444${RANGE_SEPARATOR_CHAR}`)).toBe(
                        `31.12.4444${RANGE_SEPARATOR_CHAR}`,
                    );
                });
            });

            describe('валидная, но', () => {
                describe('меньше минимальной даты', () => {
                    it('без тире', () => {
                        expect(wrapper('01.01.1000', new TuiDay(2000, 5, 6))).toBe(
                            '06.06.2000',
                        );
                    });

                    it('с тире', () => {
                        expect(
                            wrapper(
                                `01.01.1000${RANGE_SEPARATOR_CHAR}`,
                                new TuiDay(2000, 5, 6),
                            ),
                        ).toBe(`06.06.2000${RANGE_SEPARATOR_CHAR}`);
                    });
                });
                describe('больше максимальной даты', () => {
                    it('без тире', () => {
                        expect(wrapper('31.12.3000', null, new TuiDay(2000, 5, 6))).toBe(
                            '06.06.2000',
                        );
                    });

                    it('с тире', () => {
                        expect(
                            wrapper(
                                `31.12.3000${RANGE_SEPARATOR_CHAR}`,
                                null,
                                new TuiDay(2000, 5, 6),
                            ),
                        ).toBe(`06.06.2000${RANGE_SEPARATOR_CHAR}`);
                    });
                });
            });
        });

        describe('двойная и', () => {
            it('даты поменяны местами', () => {
                expect(wrapper(`31.12.3000${RANGE_SEPARATOR_CHAR}01.01.2000`)).toBe(
                    `01.01.2000${RANGE_SEPARATOR_CHAR}31.12.3000`,
                );
            });

            it('не валидная', () => {
                expect(wrapper(`99.99.2000${RANGE_SEPARATOR_CHAR}99.99.3000`)).toBe(
                    `31.12.2000${RANGE_SEPARATOR_CHAR}31.12.3000`,
                );
            });
        });
    });
});
