import {replaceAttrValue} from '../get-original-attr-text';

describe('replaceAttrValue', () => {
    it('replaces a double-quoted value', () => {
        expect(replaceAttrValue('tuiHintDirection="left"', 'start')).toBe(
            'tuiHintDirection="start"',
        );
    });

    it('replaces a single-quoted value, preserving the quote style', () => {
        expect(replaceAttrValue("tuiHintDirection='left'", 'start')).toBe(
            "tuiHintDirection='start'",
        );
    });

    it('preserves spacing around the "="', () => {
        expect(replaceAttrValue('foo = "old"', 'new')).toBe('foo = "new"');
    });

    it('replaces a binding value that itself contains quotes', () => {
        expect(replaceAttrValue('[tuiHintDirection]="\'left\'"', "'start'")).toBe(
            '[tuiHintDirection]="\'start\'"',
        );
    });

    it('safely handles a replacement value containing "$"', () => {
        expect(replaceAttrValue('(ngModelChange)="old"', 'f($event)')).toBe(
            '(ngModelChange)="f($event)"',
        );
    });

    it('leaves a value-less attribute unchanged', () => {
        expect(replaceAttrValue('tuiTextfield', 'x')).toBe('tuiTextfield');
    });
});
