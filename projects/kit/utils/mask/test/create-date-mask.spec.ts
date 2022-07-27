import {TUI_DIGIT_REGEXP} from '@taiga-ui/core';
import {tuiCreateDateMask} from '@taiga-ui/kit/utils';

describe(`tuiCreateDateMask`, () => {
    it(`YMD`, () => {
        expect(tuiCreateDateMask(`YMD`, `.`)).toEqual([
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            `.`,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            `.`,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
        ]);
    });

    it(`MDY`, () => {
        expect(tuiCreateDateMask(`MDY`, `/`)).toEqual([
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            `/`,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            `/`,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
        ]);
    });

    it(`DMY`, () => {
        expect(tuiCreateDateMask(`DMY`, `-`)).toEqual([
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            `-`,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            `-`,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
        ]);
    });
});
