import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

import {type TuiDialogOptions} from './dialog.interfaces';

export const TUI_DIALOG_DEFAULT_OPTIONS: TuiDialogOptions<void> = {
    appearance: '',
    size: 'm',
    required: false,
    closable: true,
    dismissible: true,
    label: '',
    header: '',
    data: undefined,
};

/**
 * Default parameters for dialog component
 */
export const [TUI_DIALOG_OPTIONS, tuiDialogOptionsProvider] = tuiCreateOptions(
    TUI_DIALOG_DEFAULT_OPTIONS,
);
