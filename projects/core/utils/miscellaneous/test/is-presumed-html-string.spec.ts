import {tuiIsPresumedHTMLString} from '../is-presumed-html-string';

describe(`isPresumedHTMLString`, () => {
    describe(`returns false if`, () => {
        it(`empty string is passed`, () => {
            expect(tuiIsPresumedHTMLString(``)).toBe(false);
        });

        it(`non-html string is passed`, () => {
            expect(tuiIsPresumedHTMLString(`test`)).toBe(false);
        });

        it(`html string is passed that does not start with a tag`, () => {
            expect(tuiIsPresumedHTMLString(`test <div></div>`)).toBe(false);
        });

        it(`html string is passed that does not end with a tag`, () => {
            expect(tuiIsPresumedHTMLString(`<div></div> test`)).toBe(false);
        });
    });

    describe(`returns true if`, () => {
        it(`html tag is passed`, () => {
            expect(tuiIsPresumedHTMLString(`<div>test</div>`)).toBe(true);
        });

        it(`html tag is passed with blanks around`, () => {
            expect(tuiIsPresumedHTMLString(`   <div>test</div> `)).toBe(true);
        });
    });
});
