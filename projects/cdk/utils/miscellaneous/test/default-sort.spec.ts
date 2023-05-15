import {TuiDay, tuiDefaultSort} from '@taiga-ui/cdk';

describe(`tuiDefaultSort`, () => {
    it(`should return 0 when x and y are equal`, () => {
        expect(tuiDefaultSort(1, 1)).toBe(0);
    });

    it(`should return -1 when x is less than y`, () => {
        expect(tuiDefaultSort(1, 2)).toBe(-1);
    });

    it(`should return 1 when x is greater than y`, () => {
        expect(tuiDefaultSort(2, 1)).toBe(1);
    });

    it(`should compare strings using localeCompare`, () => {
        expect(tuiDefaultSort(`abc`, `bcd`)).toBeLessThan(0);
        expect(tuiDefaultSort(`bcd`, `abc`)).toBeGreaterThan(0);
        expect(tuiDefaultSort(`abc`, `abc`)).toBe(0);
    });

    it(`should convert TuiDay to utcNativeDate when comparing`, () => {
        const day1 = TuiDay.currentLocal();
        const day2 = day1.append({day: 2});

        expect(tuiDefaultSort(day1, day2)).toBeLessThan(0);
        expect(tuiDefaultSort(day2, day1)).toBeGreaterThan(0);
        expect(tuiDefaultSort(day1, day1)).toBe(0);
    });

    it(`should not convert TuiDay to utcNativeDate when comparing with non TuiDay`, () => {
        const day = TuiDay.currentLocal();
        const date = new Date(Date.UTC(2022, 5, 1));

        expect(tuiDefaultSort(day, date as unknown as TuiDay)).toBeGreaterThan(0);
        expect(tuiDefaultSort(date, day as unknown as Date)).toBeLessThan(0);
    });
});
