import {TuiTime, TuiTimeMode} from '@taiga-ui/cdk';
import {TuiTextMaskPipeResult, TuiWithOptionalMinMax} from '@taiga-ui/core';
import {tuiCreateAutoCorrectedTimePipe} from '../create-auto-corrected-time-pipe';

const createTimePipe = (
    timeMode: TuiTimeMode,
    configs?: TuiWithOptionalMinMax<TuiTime>,
) => (rawValue: string) =>
    (tuiCreateAutoCorrectedTimePipe(timeMode, configs)(
        rawValue,
        {} as any,
    ) as TuiTextMaskPipeResult).value;

describe('tuiCreateAutoCorrectedTimePipe', () => {
    it('allows to type value if no min/max constraints', () => {
        expect(createTimePipe('HH:MM')('19:43')).toBe('19:43');
    });

    describe('Has min/max constraints', () => {
        const pipe = createTimePipe('HH:MM', {
            min: new TuiTime(8, 25),
            max: new TuiTime(16, 40),
        });

        it('does not forbid to type time in allowed time range', () => {
            expect(pipe('14:03')).toBe('14:03');
            expect(pipe('12:38')).toBe('12:38');
            expect(pipe('10:00')).toBe('10:00');
            expect(pipe('08:26')).toBe('08:26');

            // borderline cases
            expect(pipe('08:25')).toBe('08:25');
            expect(pipe('16:40')).toBe('16:40');
        });

        it('forbids to type time less than min time', () => {
            expect(pipe('00:00')).toBe('08:25');
            expect(pipe('05:17')).toBe('08:25');

            expect(pipe('08:23')).toBe('08:25');
            expect(pipe('08:24')).toBe('08:25');
        });

        it('forbids to type time more than max time', () => {
            expect(pipe('16:41')).toBe('16:40');
            expect(pipe('16:42')).toBe('16:40');

            expect(pipe('18:24')).toBe('16:40');
            expect(pipe('23:59')).toBe('16:40');
        });
    });
});
