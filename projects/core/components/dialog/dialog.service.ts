import {Injectable} from '@angular/core';
import {AbstractTuiDialogService} from '@taiga-ui/cdk';
import type {TuiDialogOptions} from '@taiga-ui/core/interfaces';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiDialogComponent} from './dialog.component';

const DIALOG = new PolymorpheusComponent(TuiDialogComponent);
const DEFAULT_OPTIONS = {
    size: `m`,
    required: false,
    closeable: true,
    dismissible: true,
    label: ``,
    header: ``,
} as const;

@Injectable({
    providedIn: `root`,
})
export class TuiDialogService extends AbstractTuiDialogService<TuiDialogOptions<any>> {
    protected readonly component = DIALOG;
    protected readonly defaultOptions: TuiDialogOptions<any> = DEFAULT_OPTIONS as any;
}
