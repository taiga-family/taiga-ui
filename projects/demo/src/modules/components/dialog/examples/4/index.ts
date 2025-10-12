import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiButton, TuiDialogService} from '@taiga-ui/core';
import {TUI_CONFIRM, type TuiConfirmData} from '@taiga-ui/kit';
import {switchMap} from 'rxjs';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);
    private readonly dialogs = inject(TuiDialogService);

    protected onClick(): void {
        const data: TuiConfirmData = {
            content: 'This action cannot be undone',
            yes: 'Sure!',
            no: 'No, thanks',
        };

        this.dialogs
            .open<boolean>(TUI_CONFIRM, {size: 's', label: 'Are you sure?', data})
            .pipe(switchMap((v) => this.alerts.open(v, {label: 'Response'})))
            .subscribe();
    }
}
