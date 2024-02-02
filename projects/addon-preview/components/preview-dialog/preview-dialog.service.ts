import {inject, Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk';
import {TUI_DIALOGS} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiPreviewDialogComponent} from './preview-dialog.component';

@Injectable({providedIn: 'root'})
export class TuiPreviewDialogService extends TuiPopoverService<unknown> {
    protected readonly items$ = inject(TUI_DIALOGS);
    protected readonly options = {};
    protected readonly component = new PolymorpheusComponent(TuiPreviewDialogComponent);
}
