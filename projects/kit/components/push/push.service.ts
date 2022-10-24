import {inject, Injectable} from '@angular/core';
import {AbstractTuiDialogService, TuiBaseDialogContext} from '@taiga-ui/cdk';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TuiPushOptions} from './push.options';
import {TUI_PUSH_OPTIONS} from './push.tokens';
// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
import {TuiPushAlertComponent} from './push-alert.component';

@Injectable({providedIn: `root`})
export class TuiPushService extends AbstractTuiDialogService<TuiPushOptions, string> {
    protected readonly component = new PolymorpheusComponent(TuiPushAlertComponent);
    protected readonly defaultOptions = inject(TUI_PUSH_OPTIONS);

    override open(
        content: PolymorpheusContent<TuiBaseDialogContext<string> & TuiPushOptions>,
        options: Partial<TuiPushOptions> = {},
    ): Observable<string> {
        return super.open(content, options);
    }
}
