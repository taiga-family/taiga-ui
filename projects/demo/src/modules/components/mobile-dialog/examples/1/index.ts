import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMobileDialogService} from '@taiga-ui/addon-mobile';
import {TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import {switchMap} from 'rxjs/operators';

@Component({
    selector: 'tui-mobile-dialog-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_IS_IOS,
            useValue: false,
        },
    ],
})
export class TuiMobileDialogExample1 {
    constructor(
        @Inject(TuiMobileDialogService)
        private readonly dialogs: TuiMobileDialogService,
        @Inject(TuiAlertService)
        private readonly alerts: TuiAlertService,
    ) {}

    show(): void {
        const actions = ['No thanks', 'Remind me later', 'Rate now'];

        this.dialogs
            .open(
                'If you like this app, please take a moment to leave a positive rating.',
                {
                    label: 'What do you think?',
                    actions,
                },
            )
            .pipe(switchMap(index => this.alerts.open(`Selected: ${actions[index]}`)))
            .subscribe();
    }
}
