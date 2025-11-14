import {tuiSanitizeText} from '@taiga-ui/cdk';

describe('tuiSanitizeText', () => {
    it('removes ASCII control characters', () => {
        const input = 'Hello\x00World\x07!';
        const expected = 'HelloWorld!';

        expect(tuiSanitizeText(input)).toBe(expected);
    });

    it('removes extended control characters', () => {
        const input = 'Test\x7F\x80\x9FData';
        const expected = 'TestData';

        expect(tuiSanitizeText(input)).toBe(expected);
    });

    it('removes zero-width Unicode characters', () => {
        const input = 'Hello\u200BWorld\u200C!\u200D\uFEFF';
        const expected = 'HelloWorld!';

        expect(tuiSanitizeText(input)).toBe(expected);
    });

    it('handles a mix of control and visible characters', () => {
        const input = 'Mix\x00\x7F\u200B of\x9F\uFEFF chars!';
        const expected = 'Mix of chars!';

        expect(tuiSanitizeText(input)).toBe(expected);
    });

    it('leaves normal text unchanged', () => {
        const input = 'Normal text without control chars';

        expect(tuiSanitizeText(input)).toBe(input);
    });

    it('handles empty string', () => {
        expect(tuiSanitizeText('')).toBe('');
    });

    it('handles string with only control characters', () => {
        const input = '\x00\x1F\x7F\x9F\u200B\uFEFF';

        expect(tuiSanitizeText(input)).toBe('');
    });
});
