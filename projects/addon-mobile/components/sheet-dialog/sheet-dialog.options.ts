import type {Provider} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';

export interface TuiSheetDialogOptions<I = undefined> {
    readonly closeable: Observable<boolean> | boolean;
    readonly data: I;
    readonly initial: number;
    readonly label: PolymorpheusContent<TuiPopover<TuiSheetDialogOptions<I>, any>>;
    readonly offset: number;
    readonly stops: readonly string[];
    readonly bar: boolean;
    readonly fullscreen: boolean;
}

export const TUI_SHEET_DIALOG_DEFAULT_OPTIONS: TuiSheetDialogOptions = {
    label: '',
    stops: [],
    initial: 0,
    offset: 16,
    closeable: true,
    data: undefined,
    bar: true,
    fullscreen: false,
};

/**
 * Default parameters for mobile dialog component
 */
export const TUI_SHEET_DIALOG_OPTIONS = tuiCreateToken(TUI_SHEET_DIALOG_DEFAULT_OPTIONS);

export function tuiSheetDialogOptionsProvider(
    options: Partial<TuiSheetDialogOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_SHEET_DIALOG_OPTIONS,
        options,
        TUI_SHEET_DIALOG_DEFAULT_OPTIONS,
    );
}
