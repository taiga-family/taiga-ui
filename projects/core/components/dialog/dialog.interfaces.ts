import {type TuiPopover, type TuiPopoverContext} from '@taiga-ui/cdk/services';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {type Observable} from 'rxjs';

export type TuiDialogSize = TuiSizeL | TuiSizeS | 'auto' | 'fullscreen' | 'page';

/**
 * Options for a dialog
 *
 * appearance - data-appearance attribute of the dialog ('' by default)
 * size - size of the dialog ('m' by default)
 * required - closing dialog throws (false by default)
 * closeable - show close button (true by default)
 * dismissible - close dialog by Esc button or click on overlay (true by default)
 * label - string title for the dialog ('' by default)
 * header - content above title ('' by default)
 * data - arbitrary data for dialog
 */
export interface TuiDialogOptions<I> {
    readonly appearance: string;
    /**
     * TODO: rename to closable in v5.0
     */
    readonly closeable: Observable<boolean> | boolean;
    readonly data: I extends void ? undefined : I & {button?: string};
    readonly dismissible: Observable<boolean> | boolean;
    readonly header: PolymorpheusContent<TuiPopover<TuiDialogOptions<I>, any>>;
    readonly label: string;
    readonly required: boolean;
    readonly size: TuiDialogSize;
}

export interface TuiDialogContext<O = void, I = undefined>
    extends TuiPopoverContext<O>,
        TuiDialogOptions<I> {}
