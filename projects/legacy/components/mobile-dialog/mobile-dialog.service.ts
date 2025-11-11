import {inject, Injectable} from '@angular/core';
import {type TuiPortalContext} from '@taiga-ui/cdk/portals';
import {TuiModalService} from '@taiga-ui/core/components/modal';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {type Observable} from 'rxjs';

import {TuiMobileDialog} from './mobile-dialog.component';
import {
    TUI_MOBILE_DIALOG_OPTIONS,
    type TuiMobileDialogOptions,
} from './mobile-dialog.options';

@Injectable({
    providedIn: 'root',
})
export class TuiMobileDialogService extends TuiModalService<
    TuiMobileDialogOptions<any>,
    number
> {
    protected readonly options = inject(TUI_MOBILE_DIALOG_OPTIONS);
    protected readonly content = TuiMobileDialog;

    public override open(
        content: PolymorpheusContent<
            TuiPortalContext<TuiMobileDialogOptions<any>, number>
        >,
        options: Partial<TuiMobileDialogOptions<any>> = {},
    ): Observable<number> {
        return super.open(content, options);
    }
}
