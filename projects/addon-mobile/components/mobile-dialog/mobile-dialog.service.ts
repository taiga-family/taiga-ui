import {inject, Injectable} from '@angular/core';
import {TuiBaseDialogContext, TuiPopoverService} from '@taiga-ui/cdk';
import {TUI_DIALOGS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TuiMobileDialogComponent} from './mobile-dialog.component';
import {TUI_MOBILE_DIALOG_OPTIONS, TuiMobileDialogOptions} from './mobile-dialog.options';

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiMobileDialogService(
            TUI_DIALOGS,
            TuiMobileDialogComponent,
            inject(TUI_MOBILE_DIALOG_OPTIONS),
        ),
})
export class TuiMobileDialogService extends TuiPopoverService<
    TuiMobileDialogOptions<any>,
    number
> {
    override open(
        content: PolymorpheusContent<
            TuiBaseDialogContext<number> & TuiMobileDialogOptions<any>
        >,
        options: Partial<TuiMobileDialogOptions<any>> = {},
    ): Observable<number> {
        return super.open(content, options);
    }
}
