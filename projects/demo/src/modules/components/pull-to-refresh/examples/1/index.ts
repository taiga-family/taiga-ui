import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_ANDROID_LOADER,
    TUI_PULL_TO_REFRESH_COMPONENT,
    TUI_PULL_TO_REFRESH_LOADED,
    TuiPullToRefresh,
} from '@taiga-ui/addon-mobile';
import {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {Subject} from 'rxjs';

@Component({
    imports: [TuiButton, TuiPullToRefresh],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
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
            provide: TUI_PULL_TO_REFRESH_COMPONENT,
            useValue: TUI_ANDROID_LOADER,
        },
        {
            provide: TUI_PULL_TO_REFRESH_LOADED,
            useClass: Subject,
        },
    ],
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);
    private readonly loaded$ = inject<Subject<void>>(TUI_PULL_TO_REFRESH_LOADED);

    protected onPull(): void {
        this.alerts.open('Loading...').subscribe();
    }

    protected finishLoading(): void {
        this.loaded$.next();
    }
}
