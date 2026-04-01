import"./chunk-HU6DUUP4.js";var t=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_ANDROID, WA_IS_IOS} from '@ng-web-apis/platform';
import {
    TUI_ANDROID_LOADER,
    TUI_PULL_TO_REFRESH_COMPONENT,
    TUI_PULL_TO_REFRESH_LOADED,
    TuiPullToRefresh,
} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiNotificationService} from '@taiga-ui/core';
import {Subject} from 'rxjs';

@Component({
    selector: 'example-1',
    imports: [TuiButton, TuiPullToRefresh],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: WA_IS_IOS,
            useValue: false,
        },
        {
            provide: WA_IS_ANDROID,
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
    private readonly alerts = inject(TuiNotificationService);
    private readonly loaded$ = inject<Subject<void>>(TUI_PULL_TO_REFRESH_LOADED);

    protected onPull(): void {
        this.alerts.open('Loading...').subscribe();
    }

    protected finishLoading(): void {
        this.loaded$.next();
    }
}
`;export{t as default};
