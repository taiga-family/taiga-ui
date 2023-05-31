// cspell:disable
import {TUI_CARD_HOLDER_MASK} from '@taiga-ui/addon-commerce';

describe(`TUI_CARD_HOLDER_MASK`, () => {
    describe(`mask property`, () => {
        const re = TUI_CARD_HOLDER_MASK.mask as RegExp;

        it(`accepts uppercase latin letters and space`, () => {
            expect(`NIKITA BARSUKOV`.match(re)).toBeTruthy();
        });

        it(`rejects cyrillics`, () => {
            expect(`NIKITA БАРСУКОВ`.match(re)).toBeFalsy();
        });

        it(`rejects digits`, () => {
            expect(`NIK1TA 6ARSUKOV`.match(re)).toBeFalsy();
        });
    });

    describe(`preprocessor property`, () => {
        const preprocessor = (value: string): string => {
            return (
                TUI_CARD_HOLDER_MASK.preprocessor?.(
                    {elementState: {value: ``, selection: [0, 0]}, data: value},
                    `insert`,
                ).data || ``
            );
        };

        it(`keeps latin letters untouched`, () => {
            expect(preprocessor(`NIKITA BARSUKOV`)).toBe(`NIKITA BARSUKOV`);
        });

        it(`converts cyrillics to latin`, () => {
            expect(preprocessor(`ТШЛШЕФ BARЫГЛЩМ`)).toBe(`NIKITA BARSUKOV`);
        });

        it(`converts lowercase to uppercase`, () => {
            expect(preprocessor(`тшлшеф bARsukov`)).toBe(`NIKITA BARSUKOV`);
        });
    });
});
