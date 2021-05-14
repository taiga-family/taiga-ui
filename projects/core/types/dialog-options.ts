import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {TuiDialogSize} from './dialog-size';

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
export type TuiDialogOptions<I> = I extends void
    ? TuiDialogBaseOptions & {
          readonly data?: void;
      }
    : TuiDialogBaseOptions & {
          readonly data: I;
      };

export interface TuiDialogBaseOptions {
    readonly size: TuiDialogSize;
    readonly required: boolean;
    readonly closeable: boolean;
    readonly dismissible: boolean;
    readonly label: string;
    readonly header: PolymorpheusContent;
}
