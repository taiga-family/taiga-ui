import {inject, Injectable} from '@angular/core';
import {
    type TuiSheetDialogOptions,
    TuiSheetDialogService,
} from '@taiga-ui/addon-mobile/components/sheet-dialog';
import {type TuiPortalContext} from '@taiga-ui/cdk/portals';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {type TuiDialogOptions, TuiDialogService} from '@taiga-ui/core/portals/dialog';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {type Observable} from 'rxjs';

export interface TuiResponsiveDialogOptions<I = undefined>
    extends TuiDialogOptions<I>, TuiSheetDialogOptions<I> {}

/**
 * Same as `TuiDialogService` but automatically switches to `TuiSheetDialogService` on mobile
 */
@Injectable({
    providedIn: 'root',
})
export class TuiResponsiveDialogService {
    private readonly isMobile = inject(WA_IS_MOBILE);
    private readonly dialogs = inject(TuiDialogService);
    private readonly sheets = inject(TuiSheetDialogService);

    public open<G = void>(
        content: PolymorpheusContent<TuiPortalContext<TuiResponsiveDialogOptions, G>>,
        options: Partial<TuiResponsiveDialogOptions<any>> = {},
    ): Observable<G> {
        return this.isMobile
            ? this.sheets.open(content, options)
            : this.dialogs.open(content, options);
    }
}
