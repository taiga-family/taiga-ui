import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_LOADED} from '@taiga-ui/addon-mobile';
import {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import {Subject} from 'rxjs';

const loaded$ = new Subject<void>();

@Component({
    selector: 'tui-pull-to-refresh-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_IS_IOS,
            useValue: true,
        },
        {
            provide: TUI_IS_ANDROID,
            useValue: false,
        },
        {
            provide: TUI_LOADED,
            useValue: loaded$.asObservable(),
        },
    ],
})
export class TuiPullToRefreshExample2 {
    constructor(
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
    ) {}

    onPull(): void {
        this.alertService.open('Loading...').subscribe();
    }

    finishLoading(): void {
        loaded$.next();
    }
}
