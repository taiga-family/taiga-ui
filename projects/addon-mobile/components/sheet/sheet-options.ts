import {tuiCreateToken} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import type {TuiSheet} from './sheet';

/**
 * @deprecated: drop in v4.0
 */
export interface TuiSheetOptions<I = undefined, O = unknown> {
    readonly closeable: boolean;
    readonly data: I;
    readonly image: PolymorpheusContent<TuiSheet<O, I>>;
    readonly imageSlide: boolean;
    readonly initial: number;
    readonly offset: number;
    readonly overlay: boolean;
    readonly stops: readonly string[];
}

/**
 * @deprecated: drop in v4.0
 */
export const TUI_SHEET_DEFAULT_OPTIONS: Omit<TuiSheetOptions, 'data'> = {
    image: '',
    imageSlide: true,
    stops: [],
    initial: 0,
    offset: 16,
    closeable: true,
    overlay: false,
};

/**
 * @deprecated: drop in v4.0
 * Default parameters for sheet component
 */
export const TUI_SHEET_OPTIONS = tuiCreateToken<Omit<TuiSheetOptions, 'data'>>({
    ...TUI_SHEET_DEFAULT_OPTIONS,
});
