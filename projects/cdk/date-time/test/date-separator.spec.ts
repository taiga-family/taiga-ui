import {changeDateSeparator} from '@taiga-ui/cdk/date-time';

describe('changeDateSeparator', () => {
    it('works with DMY format', () => {
        expect(changeDateSeparator('20.12.2021', '/')).toBe('20/12/2021');
    });

    it('works with MDY format', () => {
        expect(changeDateSeparator('12/20/2021', '-')).toBe('12-20-2021');
    });

    it('works with YMD format', () => {
        expect(changeDateSeparator('2021-12-20', '.')).toBe('2021.12.20');
    });

    it('works with DMY filler', () => {
        expect(changeDateSeparator('dd.mm.yyyy', '-')).toBe('dd-mm-yyyy');
    });

    it('works with MDY filler', () => {
        expect(changeDateSeparator('mm.dd.yyyy', '/')).toBe('mm/dd/yyyy');
    });

    it('works with YMD filler', () => {
        expect(changeDateSeparator('yyyy.mm.dd', '/')).toBe('yyyy/mm/dd');
    });

    it('works with cyrillic filler', () => {
        expect(changeDateSeparator('дд.мм.гггг', '/')).toBe('дд/мм/гггг');
    });

    it('keeps the initial separator (if new separator is the same one)', () => {
        expect(changeDateSeparator('10.01.2022', '.')).toBe('10.01.2022');
        expect(changeDateSeparator('01.10.2022', '.')).toBe('01.10.2022');
        expect(changeDateSeparator('2022.01.10', '.')).toBe('2022.01.10');

        expect(changeDateSeparator('dd.mm.yyyy', '.')).toBe('dd.mm.yyyy');
        expect(changeDateSeparator('mm.dd.yyyy', '.')).toBe('mm.dd.yyyy');
        expect(changeDateSeparator('yyyy.mm.dd', '.')).toBe('yyyy.mm.dd');
        expect(changeDateSeparator('ГГГГ.ММ.ДД', '.')).toBe('ГГГГ.ММ.ДД');
    });
});
