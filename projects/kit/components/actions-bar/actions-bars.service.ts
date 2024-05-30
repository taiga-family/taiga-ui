import {Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk';

import {TuiActionsBarDialogComponent} from './actions-bar-dialog.component';
import {TUI_ACTIONS_BARS} from './actions-bars.token';

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiActionsBarsService(TUI_ACTIONS_BARS, TuiActionsBarDialogComponent),
})
export class TuiActionsBarsService extends TuiPopoverService<void> {}
