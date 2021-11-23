import {Component, Inject} from '@angular/core';
import {TuiMobileDialogService} from '@taiga-ui/addon-mobile';
import {TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiNotificationsService} from '@taiga-ui/core';
import {switchMap} from 'rxjs/operators';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

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
        private readonly dialogService: TuiMobileDialogService,
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {}

    show() {
        const actions = ['No thanks', 'Remind me later', 'Rate now'];

        this.dialogService
            .open(
                'If you like this app, please take a moment to leave a positive rating.',
                {
                    label: 'What do you think?',
                    actions,
                },
            )
            .pipe(
                switchMap(index =>
                    this.notifications.show(`Selected: ${actions[index]}`),
                ),
            )
            .subscribe();
    }
}
