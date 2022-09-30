import {tuiCreateDateRangeMask} from '@taiga-ui/kit/utils';

describe(`tuiCreateDateRangeMask`, () => {
    it(`dateMode = "YMD" && dateSeparator = "-"`, () => {
        expect(tuiCreateDateRangeMask(`YMD`, `-`)).toEqual([
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            `-`,
            /\d/,
            /\d/,
            `-`,
            /\d/,
            /\d/,
            `\u00A0`,
            `\u2013`,
            `\u00A0`,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            `-`,
            /\d/,
            /\d/,
            `-`,
            /\d/,
            /\d/,
        ]);
    });

    it(`dateMode = "MDY" && dateSeparator = "/"`, () => {
        expect(tuiCreateDateRangeMask(`MDY`, `/`)).toEqual([
            /\d/,
            /\d/,
            `/`,
            /\d/,
            /\d/,
            `/`,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            `\u00A0`,
            `\u2013`,
            `\u00A0`,
            /\d/,
            /\d/,
            `/`,
            /\d/,
            /\d/,
            `/`,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
        ]);
    });

    it(`dateMode = "DMY" && dateSeparator = "."`, () => {
        expect(tuiCreateDateRangeMask(`DMY`, `.`)).toEqual([
            /\d/,
            /\d/,
            `.`,
            /\d/,
            /\d/,
            `.`,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            `\u00A0`,
            `\u2013`,
            `\u00A0`,
            /\d/,
            /\d/,
            `.`,
            /\d/,
            /\d/,
            `.`,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
        ]);
    });
});
