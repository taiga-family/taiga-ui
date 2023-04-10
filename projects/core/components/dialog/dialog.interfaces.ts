import {TuiBaseDialogContext, TuiDialog} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

export type TuiDialogSize = TuiSizeL | TuiSizeS | 'auto' | 'fullscreen' | 'page';

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
    readonly size: TuiDialogSize;
    readonly required: boolean;
    readonly closeable: Observable<boolean> | boolean;
    readonly dismissible: Observable<boolean> | boolean;
    readonly label: string;
    readonly header: PolymorpheusContent<TuiDialog<TuiDialogOptions<I>, any>>;
    readonly data: I;
}

export interface TuiDialogContext<O = void, I = any>
    extends TuiBaseDialogContext<O>,
        TuiDialogOptions<I> {}
