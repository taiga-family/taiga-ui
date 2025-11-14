import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiMobileDialogOptions<I = undefined> {
    readonly actions: readonly string[];
    readonly data: I;
    readonly label: string;
}

export const TUI_MOBILE_DIALOG_DEFAULT_OPTIONS: TuiMobileDialogOptions = {
    label: '',
    actions: ['OK'],
    data: undefined,
};

/**
 * Default parameters for mobile dialog component
 */
export const [TUI_MOBILE_DIALOG_OPTIONS, tuiMobileDialogOptionsProvider] =
    tuiCreateOptions(TUI_MOBILE_DIALOG_DEFAULT_OPTIONS);
