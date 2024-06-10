// cspell:disable
import {maskitoPipe} from '@maskito/core';
import {TUI_MASK_CARD_HOLDER} from '@taiga-ui/addon-commerce';

describe('TUI_MASK_CARD_HOLDER', () => {
    describe('mask property', () => {
        const re = TUI_MASK_CARD_HOLDER.mask as RegExp;

        it('accepts uppercase latin letters and space', () => {
            expect('NIKITA BARSUKOV'.match(re)).toBeTruthy();
        });

        it('rejects cyrillics', () => {
            expect('NIKITA БАРСУКОВ'.match(re)).toBeFalsy();
        });

        it('rejects digits', () => {
            expect('NIK1TA 6ARSUKOV'.match(re)).toBeFalsy();
        });
    });

    describe('preprocessors property', () => {
        const preprocessor = (value: string): string => {
            const process = maskitoPipe(TUI_MASK_CARD_HOLDER.preprocessors);

            return (
                process(
                    {elementState: {value: '', selection: [0, 0]}, data: value},
                    'insert',
                ).data || ''
            );
        };

        it('keeps latin letters untouched', () => {
            expect(preprocessor('NIKITA BARSUKOV')).toBe('NIKITA BARSUKOV');
        });

        it('converts cyrillics to latin', () => {
            expect(preprocessor('ТШЛШЕФ BARЫГЛЩМ')).toBe('NIKITA BARSUKOV');
        });

        it('converts lowercase to uppercase', () => {
            expect(preprocessor('тшлшеф bARsukov')).toBe('NIKITA BARSUKOV');
        });
    });
});
