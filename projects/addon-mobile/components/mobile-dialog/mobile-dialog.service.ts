import {inject, Injectable} from '@angular/core';
import {TuiBaseDialogContext, TuiPopoverService} from '@taiga-ui/cdk';
import {TUI_DIALOGS} from '@taiga-ui/core';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TuiMobileDialogComponent} from './mobile-dialog.component';
import {TUI_MOBILE_DIALOG_OPTIONS} from './mobile-dialog.options';
import {TuiMobileDialogOptions} from './mobile-dialog-options';

@Injectable({
    providedIn: 'root',
})
export class TuiMobileDialogService extends TuiPopoverService<
    TuiMobileDialogOptions<any>,
    number
> {
    protected readonly items$ = inject(TUI_DIALOGS);
    protected readonly component = new PolymorpheusComponent(TuiMobileDialogComponent);
    protected readonly options = {
        ...inject(TUI_MOBILE_DIALOG_OPTIONS),
        data: undefined,
    };

    override open(
        content: PolymorpheusContent<
            TuiBaseDialogContext<number> & TuiMobileDialogOptions<any>
        >,
        options: Partial<TuiMobileDialogOptions<any>> = {},
    ): Observable<number> {
        return super.open(content, options);
    }
}
