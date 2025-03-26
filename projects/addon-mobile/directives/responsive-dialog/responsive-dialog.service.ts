import {Inject, Injectable} from '@angular/core';
import type {TuiSheetDialogOptions} from '@taiga-ui/addon-mobile/components/sheet-dialog';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile/components/sheet-dialog';
import {TUI_IS_MOBILE, tuiIsString} from '@taiga-ui/cdk';
import {TuiDialogContext, TuiDialogOptions, TuiDialogService} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';

export interface TuiResponsiveDialogOptions<I = undefined>
    extends Omit<TuiDialogOptions<I>, 'closeable' | 'label'>,
        TuiSheetDialogOptions<I> {
    readonly label: PolymorpheusContent;
    readonly closeable: boolean;
}

/**
 * Same as `TuiDialogService` but automatically switches to `TuiSheetDialogService` on mobile
 */
@Injectable({
    providedIn: 'root',
})
export class TuiResponsiveDialogService {
    constructor(
        @Inject(TUI_IS_MOBILE) readonly isMobile: boolean,
        @Inject(TuiDialogService) readonly dialogs: TuiDialogService,
        @Inject(TuiSheetDialogService) readonly sheets: TuiSheetDialogService,
    ) {}

    open<G = void>(
        content: PolymorpheusContent<
            TuiDialogContext<G> & TuiResponsiveDialogOptions<any>
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
