import {InjectionToken, type Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import {type Observable} from 'rxjs';

export interface TuiSheetDialogOptions<I = undefined> {
    readonly appearance: string;
    readonly closable: Observable<boolean> | boolean;
    readonly data: I extends void ? undefined : I;
    readonly initial: number;
    readonly label: string;
    readonly offset: number;
    readonly stops: readonly string[];
    readonly bar: boolean;
    readonly required: boolean;
}

export const TUI_SHEET_DIALOG_DEFAULT_OPTIONS: TuiSheetDialogOptions = {
    label: '',
    appearance: '',
    stops: [],
    initial: 0,
    offset: 16,
    closable: true,
    data: undefined,
    bar: true,
    required: false,
};

/**
 * Default parameters for mobile dialog component
 */
export const TUI_SHEET_DIALOG_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_SHEET_DIALOG_OPTIONS' : '',
    {
        factory: () => TUI_SHEET_DIALOG_DEFAULT_OPTIONS,
    },
);

export function tuiSheetDialogOptionsProvider(
    options: Partial<TuiSheetDialogOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_SHEET_DIALOG_OPTIONS,
        options,
        TUI_SHEET_DIALOG_DEFAULT_OPTIONS,
    );
}
