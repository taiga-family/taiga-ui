import {inject, InjectionToken} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiSheet} from './sheet';
import {TUI_SHEET_OFFSET} from './sheet-tokens';

export interface TuiSheetOptions<I = undefined, O = unknown> {
    readonly image: PolymorpheusContent<TuiSheet<O, I>>;
    readonly imageSlide: boolean;
    readonly stops: readonly string[];
    readonly initial: number;
    readonly offset: number;
    readonly closeable: boolean;
    readonly overlay: boolean;
    readonly data: I;
}

export const TUI_SHEET_DEFAULT_OPTIONS: Omit<TuiSheetOptions, 'data'> = {
    image: '',
    imageSlide: true,
    stops: [],
    initial: 0,
    offset: 16,
    closeable: true,
    overlay: false,
};

export const TUI_SHEET_OPTIONS = new InjectionToken<Omit<TuiSheetOptions, 'data'>>(
    'Default parameters for sheet component',
    {
        factory: () => ({...TUI_SHEET_DEFAULT_OPTIONS, offset: inject(TUI_SHEET_OFFSET)}),
    },
);
