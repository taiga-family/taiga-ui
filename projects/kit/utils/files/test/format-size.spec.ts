import {formatSize} from '../format-size';

const units: [string, string, string] = ['B', 'KB', 'MB'];

describe('File size formatting', () => {
    it('Size in bytes less than 1KB is output in bytes', () => {
        expect(formatSize(units, 900)).toBe('900 B');
    });

    it('Size in bytes 1 KB, displayed in kilobytes', () => {
        expect(formatSize(units, 1000)).toBe('1 KB');
    });

    it('Size in bytes 1025 bytes are output in kilobytes, rounded down to 1 KB', () => {
        expect(formatSize(units, 1025)).toBe('1 KB');
    });

    it('Bytes larger than 1976 are displayed in kilobytes, rounded up to 2 KB', () => {
        expect(formatSize(units, 1977)).toBe('2 KB');
    });

    it('Size in bytes greater than 1 MB is displayed in megabytes', () => {
        expect(formatSize(units, 10 * 1000 * 1000)).toBe('10 MB');
    });

    it('Megabytes are rounded to two decimal places', () => {
        expect(formatSize(units, 10 * 1000 * 1000 + 220 * 1000)).toBe('10.22 MB');
    });
});
