import {Component, inject} from '@angular/core';
import {TuiMobileDialogService} from '@taiga-ui/addon-mobile';
import {TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import {switchMap} from 'rxjs';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-mobile-dialog-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_IS_IOS,
            useValue: false,
        },
    ],
})
export class TuiMobileDialogExample1 {
    private readonly dialogs = inject(TuiMobileDialogService);
    private readonly alerts = inject(TuiAlertService);

    protected show(): void {
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
