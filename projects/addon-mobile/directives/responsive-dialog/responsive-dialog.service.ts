import {inject, Injectable} from '@angular/core';
import {
    type TuiSheetDialogOptions,
    TuiSheetDialogService,
} from '@taiga-ui/addon-mobile/components/sheet-dialog';
import {TUI_IS_MOBILE, tuiIsString} from '@taiga-ui/cdk';
import {
    type TuiDialogContext,
    type TuiDialogOptions,
    TuiDialogService,
} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';

export interface TuiResponsiveDialogContext<O> extends TuiDialogContext<O> {}
export interface TuiResponsiveDialogOptions<I = undefined>
    extends Omit<TuiDialogOptions<I>, 'label'>,
        TuiSheetDialogOptions<unknown> {
    readonly data: I extends void ? undefined : I & {button?: string};
    readonly label: PolymorpheusContent;
}

/**
 * Same as `TuiDialogService` but automatically switches to `TuiSheetDialogService` on mobile
 */
@Injectable({
    providedIn: 'root',
})
export class TuiResponsiveDialogService {
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly dialogs = inject(TuiDialogService);
    private readonly sheets = inject(TuiSheetDialogService);

    public open<G = void>(
        content: PolymorpheusContent<
            TuiResponsiveDialogOptions<any> & TuiResponsiveDialogContext<G>
        >,
        options: Partial<TuiResponsiveDialogOptions<any>> = {},
    ): Observable<G> {
        return this.isMobile
            ? this.sheets.open(content, options)
            : this.dialogs.open(content, {
                  ...options,
                  label: tuiIsString(options.label) ? options.label : '',
              });
    }
}
