import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiButtonModule} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {switchMap, takeUntil} from 'rxjs';

import {AlertExampleWithDataComponent} from './alert-example-with-data/alert-example-with-data.component';

@Component({
    standalone: true,
    selector: 'tui-alerts-example-4',
    imports: [AlertExampleWithDataComponent, TuiButtonModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiAlertExampleComponent4 {
    private readonly alerts = inject(TuiAlertService);
    private readonly notification = this.alerts
        .open<number>(new PolymorpheusComponent(AlertExampleWithDataComponent), {
            label: 'Heading is so long that it should be shown in two lines of text',
            data: 237,
            status: 'warning',
            autoClose: 0,
        })
        .pipe(
            switchMap(response =>
                this.alerts.open(`Got a value — ${response}`, {label: 'Information'}),
            ),
            takeUntil(inject(Router).events),
        );

    protected showNotification(): void {
        this.notification.subscribe();
    }
}
