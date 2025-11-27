import {inject, Injectable} from '@angular/core';
import {
    type TuiSheetDialogOptions,
    TuiSheetDialogService,
} from '@taiga-ui/addon-mobile/components/sheet-dialog';
import {type TuiPortalContext} from '@taiga-ui/cdk/portals';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {type TuiDialogOptions, TuiDialogService} from '@taiga-ui/core/components/dialog';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {type Observable} from 'rxjs';

export interface TuiResponsiveDialogOptions<I = undefined>
    extends TuiDialogOptions<I>,
        TuiSheetDialogOptions<I> {}

/**
 * Same as `TuiDialogService` but automatically switches to `TuiSheetDialogService` on mobile
 */
@Injectable({
    providedIn: 'root',
})
export class TuiResponsiveDialogService {
    readonly #isMobile = inject(TUI_IS_MOBILE);
    readonly #dialogs = inject(TuiDialogService);
    readonly #sheets = inject(TuiSheetDialogService);

    public open<G = void>(
        content: PolymorpheusContent<TuiPortalContext<TuiResponsiveDialogOptions, G>>,
        options: Partial<TuiResponsiveDialogOptions<any>> = {},
    ): Observable<G> {
        return this.#isMobile
            ? this.#sheets.open(content, options)
            : this.#dialogs.open(content, options);
    }
}
