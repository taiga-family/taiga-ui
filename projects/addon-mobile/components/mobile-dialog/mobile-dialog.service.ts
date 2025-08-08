import {inject, Injectable} from '@angular/core';
import {type TuiPopoverContext, TuiPopoverService} from '@taiga-ui/cdk/services';
import {TUI_DIALOGS} from '@taiga-ui/core/components/dialog';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {type Observable} from 'rxjs';

import {TuiMobileDialog} from './mobile-dialog.component';
import {
    TUI_MOBILE_DIALOG_OPTIONS,
    type TuiMobileDialogOptions,
} from './mobile-dialog.options';

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiMobileDialogService(
            TUI_DIALOGS,
            TuiMobileDialog,
            inject(TUI_MOBILE_DIALOG_OPTIONS),
        ),
})
export class TuiMobileDialogService extends TuiPopoverService<
    TuiMobileDialogOptions<any>,
    number
> {
    public override open(
        content: PolymorpheusContent<
            TuiMobileDialogOptions<any> & TuiPopoverContext<number>
        >,
        options: Partial<TuiMobileDialogOptions<any>> = {},
    ): Observable<number> {
        return super.open(content, options);
    }
}
