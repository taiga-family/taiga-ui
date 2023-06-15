import {inject, Injectable} from '@angular/core';
import {AbstractTuiDialogService} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiPushOptions} from './push.options';
import {TUI_PUSH_OPTIONS} from './push.tokens';
import {TuiPushAlertComponent} from './push-alert.component';

@Injectable({providedIn: `root`})
export class TuiPushService extends AbstractTuiDialogService<TuiPushOptions, string> {
    protected readonly component = new PolymorpheusComponent(TuiPushAlertComponent);
    protected readonly defaultOptions = inject(TUI_PUSH_OPTIONS);
}
