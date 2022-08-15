import {Injectable} from '@angular/core';
import {AbstractTuiDialogService} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiPreviewDialogComponent} from './preview-dialog.component';

@Injectable({providedIn: `root`})
export class TuiPreviewDialogService extends AbstractTuiDialogService<unknown> {
    readonly defaultOptions = {};
    readonly component = new PolymorpheusComponent(TuiPreviewDialogComponent);
}
