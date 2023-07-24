import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiSheetDialogOptions<I = never> {
    readonly label: PolymorpheusContent;
    readonly stops: readonly string[];
    readonly initial: number;
    readonly offset: number;
    readonly closeable: boolean;
    readonly data: I;
}

type TuiSheetDialogDefaultOptions = Omit<TuiSheetDialogOptions<unknown>, 'data'>;

export const TUI_SHEET_DIALOG_DEFAULT_OPTIONS: TuiSheetDialogDefaultOptions = {
    label: ``,
    stops: [],
    initial: 0,
    offset: 16,
    closeable: true,
};

/**
 * Default parameters for mobile dialog component
 */
export const TUI_SHEET_DIALOG_OPTIONS = tuiCreateOptions(
    TUI_SHEET_DIALOG_DEFAULT_OPTIONS,
);

export function tuiSheetDialogOptionsProvider(
    options: Partial<TuiSheetDialogDefaultOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_SHEET_DIALOG_OPTIONS,
        options,
        TUI_SHEET_DIALOG_DEFAULT_OPTIONS,
    );
}
