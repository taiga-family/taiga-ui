# PullToRefresh

- **Package**: `ADDON-MOBILE`
- **Type**: components

Component to refresh content after pull top. It emulates appearance of native iOS and Android components It emits `(pulled)` event when the pull threshold is reached. You can set that threshold in pixels by `TUI_PULL_TO_REFRESH_THRESHOLD` DI token. You can finish loading with `TUI_PULL_TO_REFRESH_LOADED` stream token that can be provided in DI. While the scroll container is scrolled to the top, the component automatically applies `overscroll-behavior: none;` to it so elastic scrolling on iOS does not interfere with pulling. Once scrolled away from the top, the property is removed and the native bounce works as usual

### Usage Examples

#### Android

**Template:**
```html
<tui-pull-to-refresh (pulled)="onPull()">
<button tuiButton type="button" (click)="finishLoading()" > Finish loading </button>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
</tui-pull-to-refresh>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
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
```

#### iOS

**Template:**
```html
<tui-pull-to-refresh (pulled)="onPull()">
<button tuiButton type="button" (click)="finishLoading()" > Finish loading </button>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
</tui-pull-to-refresh>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_ANDROID, WA_IS_IOS} from '@ng-web-apis/platform';
import {
    TUI_IOS_LOADER,
    TUI_PULL_TO_REFRESH_COMPONENT,
    TUI_PULL_TO_REFRESH_LOADED,
    TuiPullToRefresh,
} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiNotificationService} from '@taiga-ui/core';
import {Subject} from 'rxjs';

@Component({
    imports: [TuiButton, TuiPullToRefresh],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: WA_IS_IOS,
            useValue: true,
        },
        {
            provide: WA_IS_ANDROID,
            useValue: false,
        },
        {
            provide: TUI_PULL_TO_REFRESH_COMPONENT,
            useValue: TUI_IOS_LOADER,
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
```

#### Virtual scroll

**Template:**
```html
<cdk-virtual-scroll-viewport appendOnly itemSize="50" tuiScrollRef class="example-viewport tui-zero-scrollbar" >
<tui-scroll-controls />
<tui-pull-to-refresh (pulled)="onPull()">
<div *cdkVirtualFor="let item of items" class="example-item" > {{ item }} </div>
</tui-pull-to-refresh>
</cdk-virtual-scroll-viewport>
```

**TypeScript:**
```ts
import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_ANDROID, WA_IS_IOS} from '@ng-web-apis/platform';
import {
    TUI_ANDROID_LOADER,
    TUI_PULL_TO_REFRESH_COMPONENT,
    TUI_PULL_TO_REFRESH_LOADED,
    TuiPullToRefresh,
} from '@taiga-ui/addon-mobile';
import {TuiNotificationService, TuiScrollControls, TuiScrollRef} from '@taiga-ui/core';
import {Subject} from 'rxjs';

@Component({
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        TuiPullToRefresh,
        TuiScrollControls,
        TuiScrollRef,
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
```

**LESS:**
```less
.example-viewport {
    block-size: 12.5rem;
    border: 1px solid;
}

.example-item {
    block-size: 3.125rem;
}
```
