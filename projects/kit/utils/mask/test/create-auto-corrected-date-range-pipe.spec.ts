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

describe('tuiCreateAutoCorrectedDateRangePipe returns', () => {
    describe('the original string if it is', () => {
        it('empty', () => {
            expect(wrapper('')).toBe('');
        });

        it('less than one date', () => {
            expect(wrapper('99.99.99')).toBe('99.99.99');
        });

        it('more than one but less than two dates', () => {
            expect(wrapper(`99.99.9999${RANGE_SEPARATOR_CHAR}99.99.99`)).toBe(
                `99.99.9999${RANGE_SEPARATOR_CHAR}99.99.99`,
            );
        });

        describe('valid and', () => {
            describe('single and', () => {
                it('without dash', () => {
                    expect(wrapper('06.06.2000')).toBe('06.06.2000');
                });

                it('with a dash', () => {
                    expect(wrapper(`06.06.2000${RANGE_SEPARATOR_CHAR}`)).toBe(
                        `06.06.2000${RANGE_SEPARATOR_CHAR}`,
                    );
                });
            });

            it('double', () => {
                expect(wrapper(`01.01.2000${RANGE_SEPARATOR_CHAR}.31.12.3000`)).toBe(
                    `01.01.2000${RANGE_SEPARATOR_CHAR}.31.12.3000`,
                );
            });
        });
    });

    describe('the corrected line if it is', () => {
        describe('single and', () => {
            describe('not valid', () => {
                it('without dash', () => {
                    expect(wrapper('99.99.4444')).toBe('31.12.4444');
                });

                it('with a dash', () => {
                    expect(wrapper(`99.99.4444${RANGE_SEPARATOR_CHAR}`)).toBe(
                        `31.12.4444${RANGE_SEPARATOR_CHAR}`,
                    );
                });
            });

            describe('valid, but', () => {
                describe('less than the minimum date', () => {
                    it('without dash', () => {
                        expect(wrapper('01.01.1000', new TuiDay(2000, 5, 6))).toBe(
                            '06.06.2000',
                        );
                    });

                    it('with a dash', () => {
                        expect(
                            wrapper(
                                `01.01.1000${RANGE_SEPARATOR_CHAR}`,
                                new TuiDay(2000, 5, 6),
                            ),
                        ).toBe(`06.06.2000${RANGE_SEPARATOR_CHAR}`);
                    });
                });
                describe('more than maximum date', () => {
                    it('without dash', () => {
                        expect(wrapper('31.12.3000', null, new TuiDay(2000, 5, 6))).toBe(
                            '06.06.2000',
                        );
                    });

                    it('with a dash', () => {
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

        describe('double and', () => {
            it('dates are swapped', () => {
                expect(wrapper(`31.12.3000${RANGE_SEPARATOR_CHAR}01.01.2000`)).toBe(
                    `01.01.2000${RANGE_SEPARATOR_CHAR}31.12.3000`,
                );
            });

            it('not valid', () => {
                expect(wrapper(`99.99.2000${RANGE_SEPARATOR_CHAR}99.99.3000`)).toBe(
                    `31.12.2000${RANGE_SEPARATOR_CHAR}31.12.3000`,
                );
            });
        });
    });
});
