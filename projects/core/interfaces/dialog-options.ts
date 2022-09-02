import type {TuiDialog} from '@taiga-ui/cdk';
import type {TuiDialogSize} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

/**
 * Options for a dialog
 *
 * size - size of the dialog ('m' by default)
 * required - closing dialog throws (false by default)
 * closeable - show close button (true by default)
 * dismissible - close dialog by Esc button or click on overlay (false by default)
 * label - string title for the dialog ('' by default)
 * header - content above title ('' by default)
 * data - arbitrary data for dialog (undefined by default)
 */
export interface TuiDialogOptions<I> {
    readonly size: TuiDialogSize;
    readonly required: boolean;
    readonly closeable: boolean;
    readonly dismissible: boolean;
    readonly label: string;
    readonly header: PolymorpheusContent<TuiDialog<TuiDialogOptions<I>, any>>;
    readonly data: I;
}
