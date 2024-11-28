import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiResponsiveDialogService} from '@taiga-ui/addon-mobile';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import type {TuiConfirmData} from '@taiga-ui/kit';
import {TUI_CONFIRM} from '@taiga-ui/kit';
import {switchMap} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiResponsiveDialogService);
    private readonly alerts = inject(TuiAlertService);

    protected onClick(): void {
        const data: TuiConfirmData = {
            content:
                'This is <code>PolymorpheusContent</code> so it can be template too!',
            yes: 'That is great!',
            no: 'Who cares?',
        };

        this.dialogs
            .open<boolean>(TUI_CONFIRM, {
                label: 'Do you like Taiga UI?',
                size: 's',
                data,
            })
            .pipe(switchMap((response) => this.alerts.open(String(response))))
            .subscribe();
    }
}
