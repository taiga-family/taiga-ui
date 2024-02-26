import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiDialogService} from '@taiga-ui/core';
import {TUI_PROMPT, TuiPromptData} from '@taiga-ui/kit';
import {switchMap} from 'rxjs';

@Component({
    selector: 'tui-prompt-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiPromptExample1 {
    private readonly dialogs = inject(TuiDialogService);
    private readonly alerts = inject(TuiAlertService);

    protected onClick(): void {
        const data: TuiPromptData = {
            content:
                'This is <code>PolymorpheusContent</code> so it can be template too!',
            yes: 'That is great!',
            no: 'Who cares?',
        };

        this.dialogs
            .open<boolean>(TUI_PROMPT, {
                label: 'Do you like Taiga UI?',
                size: 's',
                data,
            })
            .pipe(switchMap(response => this.alerts.open(String(response))))
            .subscribe();
    }
}
