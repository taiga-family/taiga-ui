import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiSheetDialogOptions<I = never> {
    readonly closeable: boolean;
    readonly data: I;
    readonly initial: number;
    readonly label: PolymorpheusContent;
    readonly offset: number;
    readonly stops: readonly string[];
}

type TuiSheetDialogDefaultOptions = Omit<TuiSheetDialogOptions<unknown>, 'data'>;

export const TUI_SHEET_DIALOG_DEFAULT_OPTIONS: TuiSheetDialogDefaultOptions = {
    closeable: true,
    initial: 0,
    label: ``,
    offset: 16,
    stops: [],
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
