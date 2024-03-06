import {inject, Injectable} from '@angular/core';
import type {TuiPopoverContext} from '@taiga-ui/cdk';
import {TuiPopoverService} from '@taiga-ui/cdk';
import {TUI_DIALOGS} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';

import {TuiMobileDialogComponent} from './mobile-dialog.component';
import type {TuiMobileDialogOptions} from './mobile-dialog.options';
import {TUI_MOBILE_DIALOG_OPTIONS} from './mobile-dialog.options';

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
    public override open(
        content: PolymorpheusContent<
            TuiMobileDialogOptions<any> & TuiPopoverContext<number>
        >,
        options: Partial<TuiMobileDialogOptions<any>> = {},
    ): Observable<number> {
        return super.open(content, options);
    }
}
