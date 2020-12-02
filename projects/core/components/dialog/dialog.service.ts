import {Injectable} from '@angular/core';
import {AbstractTuiDialogService} from '@taiga-ui/cdk';
import {TuiDialogOptions} from '@taiga-ui/core/interfaces';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiDialogComponent} from './dialog.component';

const DIALOG = new PolymorpheusComponent(TuiDialogComponent);
const DEFAULT_OPTIONS: TuiDialogOptions<undefined> = {
    size: 'm',
    required: false,
    closeable: true,
    dismissible: true,
    label: '',
    header: '',
    data: undefined,
};

@Injectable({
    providedIn: 'root',
})
export class TuiDialogService extends AbstractTuiDialogService<TuiDialogOptions<any>> {
    protected readonly component = DIALOG;
    protected readonly defaultOptions = DEFAULT_OPTIONS;
}
