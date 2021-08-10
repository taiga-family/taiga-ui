import {TuiDay, TuiTime, TuiTimeMode} from '@taiga-ui/cdk';
import {TuiTextMaskPipeResult, TuiWithOptionalMinMax} from '@taiga-ui/core';
import {tuiCreateAutoCorrectedDateTimePipe} from '@taiga-ui/kit/utils';

const createDateTimePipe = (
    timeMode: TuiTimeMode,
    configs: TuiWithOptionalMinMax<TuiDay | [TuiDay, TuiTime]> = {min: null, max: null},
) => (rawValue: string) => {
    const pipe = tuiCreateAutoCorrectedDateTimePipe(
        {...configs, value: [null, null]},
        timeMode,
    );

    return (pipe(rawValue, {} as any) as TuiTextMaskPipeResult).value;
};

describe('tuiCreateAutoCorrectedDateTimePipe', () => {
    it('allows to type value if no min/max constraints', () => {
        expect(createDateTimePipe('HH:MM')('10.08.2021, 19:43')).toBe(
            '10.08.2021, 19:43',
        );
    });

    describe('Has min/max constraints (only day)', () => {
        const pipe = createDateTimePipe('HH:MM', {
            min: new TuiDay(2021, 7, 8),
            max: new TuiDay(2021, 7, 11),
        });

        it('does not forbid to type day in allowed date range', () => {
            expect(pipe('08.08.2021, 12:00')).toBe('08.08.2021, 12:00');
            expect(pipe('09.08.2021, 13:00')).toBe('09.08.2021, 13:00');
            expect(pipe('10.08.2021, 14:00')).toBe('10.08.2021, 14:00');
            expect(pipe('11.08.2021, 15:00')).toBe('11.08.2021, 15:00');
        });

        it('forbids to type day less than min day', () => {
            expect(pipe('07.08.2021, 12:20')).toBe('08.08.2021, 12:20');
            expect(pipe('06.08.2021, 13:54')).toBe('08.08.2021, 13:54');
        });

        it('forbids to type day more than max day', () => {
            expect(pipe('12.08.2021, 12:20')).toBe('11.08.2021, 12:20');
            expect(pipe('13.08.2021, 13:54')).toBe('11.08.2021, 13:54');
        });
    });

    describe('Has min/max constraints (day + time)', () => {
        const pipe = createDateTimePipe('HH:MM', {
            min: [new TuiDay(2021, 7, 8), new TuiTime(11, 48)],
            max: [new TuiDay(2021, 7, 11), new TuiTime(17, 8)],
        });

        it('still does not forbid to type day in allowed date range', () => {
            expect(pipe('08.08.2021, 12:00')).toBe('08.08.2021, 12:00');
            expect(pipe('09.08.2021, 06:00')).toBe('09.08.2021, 06:00');
            expect(pipe('10.08.2021, 19:00')).toBe('10.08.2021, 19:00');
            expect(pipe('11.08.2021, 15:00')).toBe('11.08.2021, 15:00');
        });

        it('sets min day and min time if min limit was violated', () => {
            expect(pipe('07.08.2021, 05:32')).toBe('08.08.2021, 11:48');
        });

        it('forbids to type time less than min time if typed day is min day', () => {
            expect(pipe('08.08.2021, 10:12')).toBe('08.08.2021, 11:48');
        });

        it('sets max day and max time if max limit was violated', () => {
            expect(pipe('12.08.2021, 18:00')).toBe('11.08.2021, 17:08');
        });

        it('forbids to type time more than max time if typed day is max day', () => {
            expect(pipe('11.08.2021, 21:00')).toBe('11.08.2021, 17:08');
        });
    });
});
