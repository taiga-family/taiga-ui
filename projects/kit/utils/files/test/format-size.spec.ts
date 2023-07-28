import {tuiFormatSize} from '@taiga-ui/kit';

const units: [string, string, string] = [`B`, `KiB`, `MiB`];

describe(`File size formatting`, () => {
    it(`Size in bytes less than 1KiB is output in bytes`, () => {
        expect(tuiFormatSize(units, 900)).toBe(`900 B`);
    });

    it(`Size in bytes 1 KiB, displayed in kibibytes`, () => {
        expect(tuiFormatSize(units, 1024)).toBe(`1 KiB`);
    });

    it(`Size in bytes 1025 bytes are output in kibibytes, rounded down to 1 KB`, () => {
        expect(tuiFormatSize(units, 1025)).toBe(`1 KiB`);
    });

    it(`Bytes larger than 1976 are displayed in kibibytes, rounded up to 2 KB`, () => {
        expect(tuiFormatSize(units, 1977)).toBe(`2 KiB`);
    });

    it(`Size in bytes greater than 1 MiB is displayed in megabytes`, () => {
        expect(tuiFormatSize(units, 10 * 1024 * 1024)).toBe(`10 MiB`);
    });

    it(`Megabytes are rounded to two decimal places`, () => {
        expect(tuiFormatSize(units, 10 * 1000 * 1000 + 220 * 1000)).toBe(`9,75 MiB`);
    });
});
