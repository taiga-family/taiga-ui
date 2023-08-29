import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiDialogService} from '@taiga-ui/core';
import {TUI_PROMPT, TuiPromptData} from '@taiga-ui/kit';
import {switchMap} from 'rxjs/operators';

@Component({
    selector: 'tui-prompt-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiPromptExample1 {
    constructor(
        @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
        @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
    ) {}

    onClick(): void {
        const data: TuiPromptData = {
            content:
                'This is <code>PolymorpheusContent</code> so it can be template too!',
            no: 'Who cares?',
            yes: 'That is great!',
        };

        this.dialogs
            .open<boolean>(TUI_PROMPT, {
                data,
                label: 'Do you like Taiga UI?',
                size: 's',
            })
            .pipe(switchMap(response => this.alerts.open(String(response))))
            .subscribe();
    }
}
