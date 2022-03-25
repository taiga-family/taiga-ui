import {Inject, Injectable} from '@angular/core';
import {
    AbstractTuiNotificationsService,
    TUI_NOTIFICATION_OPTIONS,
    TuiNotificationAlertComponent,
    TuiNotificationDefaultOptions,
} from '@taiga-ui/core';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Injectable({providedIn: 'root'})
export class ToastrService extends AbstractTuiNotificationsService<any> {
    protected readonly defaultOptions = this.options;

    component: PolymorpheusContent<any> = new PolymorpheusComponent<any, any>(
        TuiNotificationAlertComponent,
    );

    constructor(
        @Inject(TUI_NOTIFICATION_OPTIONS)
        readonly options: TuiNotificationDefaultOptions,
    ) {
        super();
    }
}
