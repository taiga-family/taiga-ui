import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

type TuiSheetDialogDefaultOptions = Omit<TuiSheetDialogOptions<unknown>, 'data'>;

export interface TuiSheetDialogOptions<I = never> {
    readonly closeable: boolean;
    readonly data: I;
    readonly initial: number;
    readonly label: PolymorpheusContent;
    readonly offset: number;
    readonly stops: readonly string[];
}

export const TUI_SHEET_DIALOG_DEFAULT_OPTIONS: TuiSheetDialogDefaultOptions = {
    label: '',
    stops: [],
    initial: 0,
    offset: 16,
    closeable: true,
};

/**
 * Default parameters for mobile dialog component
 */
export const TUI_SHEET_DIALOG_OPTIONS = tuiCreateToken(TUI_SHEET_DIALOG_DEFAULT_OPTIONS);

export function tuiSheetDialogOptionsProvider(
    options: Partial<TuiSheetDialogDefaultOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_SHEET_DIALOG_OPTIONS,
        options,
        TUI_SHEET_DIALOG_DEFAULT_OPTIONS,
    );
}
