import {Injectable} from '@angular/core';
import type {TuiBaseDialogContext} from '@taiga-ui/cdk';
import {AbstractTuiDialogService} from '@taiga-ui/cdk';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';

import type {TuiPushOptions} from './push.options';
import {TUI_PUSH_DEFAULT_OPTIONS} from './push.options';
import {TuiPushAlertComponent} from './push-alert.component';

@Injectable({providedIn: `root`})
export class TuiPushService extends AbstractTuiDialogService<TuiPushOptions, string> {
    protected readonly component = new PolymorpheusComponent(TuiPushAlertComponent);
    protected readonly defaultOptions = TUI_PUSH_DEFAULT_OPTIONS;

    override open(
        content: PolymorpheusContent<TuiBaseDialogContext<string> & TuiPushOptions>,
        options: Partial<TuiPushOptions> = {},
    ): Observable<string> {
        return super.open(content, options);
    }
}
