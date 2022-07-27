import {Injectable} from '@angular/core';
import {AbstractTuiDialogService, TuiBaseDialogContext} from '@taiga-ui/cdk';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TuiMobileDialogComponent} from './mobile-dialog.component';
import {TuiMobileDialogOptions} from './mobile-dialog-options';

const DIALOG = new PolymorpheusComponent(TuiMobileDialogComponent);
const DEFAULT_OPTIONS = {
    label: ``,
    actions: [`OK`],
} as const;

@Injectable({
    providedIn: `root`,
})
export class TuiMobileDialogService extends AbstractTuiDialogService<
    TuiMobileDialogOptions<any>
> {
    protected readonly component = DIALOG;
    protected readonly defaultOptions: TuiMobileDialogOptions<any> =
        DEFAULT_OPTIONS as any;

    open<I, O = number>(
        content: PolymorpheusContent<TuiBaseDialogContext<O> & TuiMobileDialogOptions<I>>,
        options: Partial<TuiMobileDialogOptions<I>> = {},
    ): Observable<O> {
        return super.open(content, options);
    }
}
