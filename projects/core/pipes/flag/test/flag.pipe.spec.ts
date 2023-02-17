import {TUI_SVG_DEFAULT_OPTIONS, TuiFlagPipe, TuiSvgOptions} from '@taiga-ui/core';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

describe(`tuiFlagPipe`, () => {
    const svgOptions: TuiSvgOptions = {
        ...TUI_SVG_DEFAULT_OPTIONS,
        path: (_: string) => `path/tuiIcon.svg#tuiIcon`,
    };
    const pipe = new TuiFlagPipe(svgOptions);

    it(`resolves path from TUI_SVG_OPTIONS`, () => {
        expect(pipe.transform(TuiCountryIsoCode.RU)).toContain(`path/`);
    });

    it(`calculates flag path from TUI_SVG_OPTIONS & isoCode`, () => {
        expect(pipe.transform(TuiCountryIsoCode.RU)).toBe(
            `path/${TuiCountryIsoCode.RU}.png`,
        );
    });

    it(`calculates flag path from isoCode`, () => {
        expect(pipe.transform(TuiCountryIsoCode.AD)).toBe(
            `path/${TuiCountryIsoCode.AD}.png`,
        );
    });
});
