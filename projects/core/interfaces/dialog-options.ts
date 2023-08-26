import {TuiDialog} from '@taiga-ui/cdk';
import {TuiDialogSize} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

/**
 * Options for a dialog
 *
 * size - size of the dialog ('m' by default)
 * required - closing dialog throws (false by default)
 * closeable - show close button (true by default)
 * dismissible - close dialog by Esc button or click on overlay (true by default)
 * label - string title for the dialog ('' by default)
 * header - content above title ('' by default)
 * data - arbitrary data for dialog (undefined by default)
 */
export interface TuiDialogOptions<I> {
    readonly closeable: Observable<boolean> | boolean;
    readonly data: I;
    readonly dismissible: Observable<boolean> | boolean;
    readonly header: PolymorpheusContent<TuiDialog<TuiDialogOptions<I>, any>>;
    readonly label: string;
    readonly required: boolean;
    readonly size: TuiDialogSize;
}
