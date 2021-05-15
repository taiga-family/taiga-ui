import {Injectable} from '@angular/core';
import {AbstractTuiDialogService, TuiBaseDialogContext} from '@taiga-ui/cdk';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {TuiMobileDialogOptions} from './mobile-dialog-options';
import {TuiMobileDialogComponent} from './mobile-dialog.component';

const DIALOG = new PolymorpheusComponent(TuiMobileDialogComponent);
const DEFAULT_OPTIONS: TuiMobileDialogOptions<void> = {
    label: '',
    actions: ['OK'],
};

@Injectable({
    providedIn: 'root',
})
export class TuiMobileDialogService extends AbstractTuiDialogService<
    TuiMobileDialogOptions<any>
> {
    protected readonly component = DIALOG;
    protected readonly defaultOptions: TuiMobileDialogOptions<any> = DEFAULT_OPTIONS;

    open<I, O = number>(
        content: PolymorpheusContent<TuiBaseDialogContext<O> & TuiMobileDialogOptions<I>>,
        options: Partial<TuiMobileDialogOptions<I>> = {},
    ): Observable<O> {
        // TODO: fix type
        return super.open(content as any, options);
    }
}
