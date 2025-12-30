import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
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
export const [TUI_SHEET_DIALOG_OPTIONS, tuiSheetDialogOptionsProvider] = tuiCreateOptions(
    TUI_SHEET_DIALOG_DEFAULT_OPTIONS,
);
