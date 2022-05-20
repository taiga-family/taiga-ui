import {isPresumedHTMLString} from '../is-presumed-html-string';

describe('isPresumedHTMLString', () => {
    describe('returns false if', () => {
        it('empty string is passed', () => {
            expect(isPresumedHTMLString('')).toBe(false);
        });

        it('non-html string is passed', () => {
            expect(isPresumedHTMLString('test')).toBe(false);
        });

        it('html string is passed that does not start with a tag', () => {
            expect(isPresumedHTMLString('test <div></div>')).toBe(false);
        });

        it('html string is passed that does not end with a tag', () => {
            expect(isPresumedHTMLString('<div></div> test')).toBe(false);
        });
    });

    describe('returns true if', () => {
        it('html tag is passed', () => {
            expect(isPresumedHTMLString('<div>test</div>')).toBe(true);
        });

        it('html tag is passed with blanks around', () => {
            expect(isPresumedHTMLString('   <div>test</div> ')).toBe(true);
        });
    });
});
