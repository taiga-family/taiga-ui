import {type TuiPopoverContext} from '@taiga-ui/cdk/services';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {type Observable} from 'rxjs';

/**
 * Options for a dialog
 *
 * appearance - data-appearance attribute of the dialog ('taiga' by default)
 * closable - show close button (true by default)
 * data - arbitrary data for dialog
 * dismissible - close dialog by Esc button or click on overlay (true by default)
 * label - string title for the dialog ('' by default)
 * required - dismissing or closing dialog by X button throws (false by default)
 * size - size of the dialog ('m' by default)
 */
export interface TuiDialogOptions<I> {
    readonly appearance: string;
    readonly closable: Observable<boolean> | boolean;
    readonly data: I extends void ? undefined : I;
    readonly dismissible: Observable<boolean> | boolean;
    readonly label: string;
    readonly required: boolean;
    readonly size: TuiSizeL | TuiSizeS;
}

export interface TuiDialogContext<O = void, I = undefined>
    extends TuiPopoverContext<O>,
        TuiDialogOptions<I> {}

export const [TUI_DIALOG_OPTIONS, tuiDialogOptionsProvider] = tuiCreateOptions<
    TuiDialogOptions<void>
>({
    appearance: 'taiga',
    size: 'm',
    required: false,
    closable: true,
    dismissible: true,
    label: '',
    data: undefined,
});
