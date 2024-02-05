import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {switchMap, takeUntil} from 'rxjs';

import {AlertExampleComponent} from './alert-example/alert-example.component';

@Component({
    selector: 'tui-alerts-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiAlertExampleComponent3 {
    private readonly alerts = inject(TuiAlertService);
    private readonly notification = this.alerts
        .open<boolean>(new PolymorpheusComponent(AlertExampleComponent), {
            label: 'Question',
            status: 'error',
            autoClose: 0,
        })
        .pipe(
            switchMap(response =>
                this.alerts.open(`Got a value — ${response}`, {label: 'Information'}),
            ),
            takeUntil(inject(Router).events),
        );

    showNotification(): void {
        this.notification.subscribe();
    }
}
