import {TUI_DIGIT_REGEXP} from '@taiga-ui/core';
import {TuiTimeFormatParts} from '@taiga-ui/kit/types';
import {tuiCreateTimeMask} from '@taiga-ui/kit/utils';

describe(`tuiCreateTimeMask`, () => {
    const maxValuesRegular: Partial<Record<TuiTimeFormatParts, number>> = {
        HH: 23,
        MM: 59,
        SS: 59,
        MS: 999,
    };
    const maxValues47h5m: Partial<Record<TuiTimeFormatParts, number>> = {
        HH: 47,
        MM: 5,
        SS: 59,
        MS: 999,
    };
    const maxValuesPartial: Partial<Record<TuiTimeFormatParts, number>> = {
        HH: 23,
        MM: 59,
    };
    const maxValuesEmpty: Partial<Record<TuiTimeFormatParts, number>> = {};

    it(`HH:MM regular`, () => {
        expect(tuiCreateTimeMask(`HH:MM`, maxValuesRegular)).toEqual([
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            `:`,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
        ]);
    });

    it(`HH:MM defaults`, () => {
        expect(tuiCreateTimeMask(`HH:MM`)).toEqual([
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            `:`,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
        ]);
    });

    it(`HH:MM:SS.MSS regular`, () => {
        expect(tuiCreateTimeMask(`HH:MM:SS.MSS`, maxValuesRegular)).toEqual([
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            `:`,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            `:`,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            `.`,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
        ]);
    });

    it(`HH:MM 47h5m`, () => {
        expect(tuiCreateTimeMask(`HH:MM`, maxValues47h5m)).toEqual([
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            `:`,
            TUI_DIGIT_REGEXP,
        ]);
    });

    it(`HH:MM partial`, () => {
        expect(tuiCreateTimeMask(`HH:MM`, maxValuesPartial)).toEqual([
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            `:`,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
        ]);
    });

    it(`HH:MM empty`, () => {
        expect(tuiCreateTimeMask(`HH:MM`, maxValuesEmpty)).toEqual([
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            `:`,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
        ]);
    });
});
