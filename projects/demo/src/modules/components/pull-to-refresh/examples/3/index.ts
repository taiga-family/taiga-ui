import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_ANDROID_LOADER,
    TUI_PULL_TO_REFRESH_COMPONENT,
    TUI_PULL_TO_REFRESH_LOADED,
    TuiPullToRefresh,
} from '@taiga-ui/addon-mobile';
import {WA_IS_ANDROID, WA_IS_IOS} from '@ng-web-apis/platform';
import {TuiNotificationService, TuiScrollable, TuiScrollbar} from '@taiga-ui/core';
import {Subject} from 'rxjs';

@Component({
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        TuiPullToRefresh,
        TuiScrollable,
        TuiScrollbar,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

    protected items = Array.from({length: 10000}).map((_, i) => `Item #${i}`);

    protected onPull(): void {
        this.alerts.open('Loading...').subscribe();
    }
}
