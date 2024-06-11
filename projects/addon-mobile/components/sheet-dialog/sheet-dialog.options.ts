import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiSheetDialogOptions<I = undefined> {
    readonly closeable: boolean;
    readonly data: I;
    readonly initial: number;
    readonly label: PolymorpheusContent;
    readonly offset: number;
    readonly stops: readonly string[];
}

export const TUI_SHEET_DIALOG_DEFAULT_OPTIONS: TuiSheetDialogOptions = {
    label: '',
    stops: [],
    initial: 0,
    offset: 16,
    closeable: true,
    data: undefined,
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
