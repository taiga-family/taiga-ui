import {Component, Inject, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotification, TuiNotificationsService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {switchMap, takeUntil} from 'rxjs/operators';

import {AlertExampleComponent} from './alert-example/alert-example.component';

@Component({
    selector: 'tui-notifications-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiNotificationsExampleComponent3 {
    readonly notification: Observable<void>;

    constructor(
        @Inject(TuiNotificationsService) notificationsService: TuiNotificationsService,
        @Inject(Router) router: Router,
        @Inject(Injector) private readonly injector: Injector,
    ) {
        this.notification = notificationsService
            .show<boolean>(
                new PolymorpheusComponent(AlertExampleComponent, this.injector),
                {
                    label: 'Question',
                    status: TuiNotification.Error,
                    autoClose: false,
                },
            )
            .pipe(
                switchMap(response =>
                    notificationsService.show(`Got a value — ${response}`, {
                        label: 'Information',
                    }),
                ),
                takeUntil(router.events),
            );
    }

    showNotification(): void {
        this.notification.subscribe();
    }
}
