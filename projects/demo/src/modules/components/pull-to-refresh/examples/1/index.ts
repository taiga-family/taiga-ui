import {Component} from '@angular/core';
import {TUI_LOADED} from '@taiga-ui/addon-mobile';
import {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiNotificationsService} from '@taiga-ui/core';
import {Subject} from 'rxjs';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

const loaded$ = new Subject<void>();

@Component({
    selector: 'tui-pull-to-refresh-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_IS_IOS,
            useValue: false,
        },
        {
            provide: TUI_IS_ANDROID,
            useValue: true,
        },
        {
            provide: TUI_LOADED,
            useValue: loaded$.asObservable(),
        },
    ],
})
export class TuiPullToRefreshExample1 {
    constructor(private readonly notifications: TuiNotificationsService) {}

    onPull() {
        this.notifications.show('Loading...').subscribe();
    }

    finishLoading() {
        loaded$.next();
    }
}
