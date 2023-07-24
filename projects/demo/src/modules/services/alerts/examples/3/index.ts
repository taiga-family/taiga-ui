import {Component, Inject, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {switchMap, takeUntil} from 'rxjs/operators';

import {AlertExampleComponent} from './alert-example/alert-example.component';

@Component({
    selector: 'tui-alerts-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiAlertsExampleComponent3 {
    readonly notification: Observable<void>;

    constructor(
        @Inject(TuiAlertService) alerts: TuiAlertService,
        @Inject(Router) router: Router,
        @Inject(Injector) private readonly injector: Injector,
    ) {
        this.notification = alerts
            .open<boolean>(
                new PolymorpheusComponent(AlertExampleComponent, this.injector),
                {
                    label: 'Question',
                    status: 'error',
                    autoClose: false,
                },
            )
            .pipe(
                switchMap(response =>
                    alerts.open(`Got a value — ${response}`, {
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
