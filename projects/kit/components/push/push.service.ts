import {Injectable} from '@angular/core';
import {AbstractTuiDialogService, TuiBaseDialogContext} from '@taiga-ui/cdk';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TUI_PUSH_DEFAULT_OPTIONS, TuiPushOptions} from './push.options';
import {TuiPushAlertComponent} from './push-alert.component';

@Injectable({providedIn: `root`})
export class TuiPushService extends AbstractTuiDialogService<TuiPushOptions> {
    protected readonly component = new PolymorpheusComponent(TuiPushAlertComponent);
    protected readonly defaultOptions = TUI_PUSH_DEFAULT_OPTIONS;

    // TODO: fix types
    // @ts-ignore
    open(
        content: PolymorpheusContent<TuiBaseDialogContext<string> & TuiPushOptions>,
        options: Partial<TuiPushOptions> = {},
    ): Observable<string> {
        return super.open(content, options);
    }
}
