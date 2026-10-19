# PullToRefresh

- **Package**: `ADDON-MOBILE`
- **Type**: components

Component to refresh content after pull top. It emulates appearance of native iOS and Android components It emits `(pulled)` event when the pull threshold is reached. You can set that threshold in pixels by `TUI_PULL_TO_REFRESH_THRESHOLD` DI token. You can finish loading with `TUI_PULL_TO_REFRESH_LOADED` stream token that can be provided in DI. Use `overscroll-behavior: none;` CSS on your scrolling container to stop elastic scrolling on iOS

### How to Use (Import)

```ts
import {TuiPullToRefresh} from '@taiga-ui/addon-mobile';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiPullToRefresh,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-pull-to-refresh (pulled)="onPulled()">content</tui-pull-to-refresh>
```

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
    standalone: true,
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
import {
    TUI_IOS_LOADER,
    TUI_PULL_TO_REFRESH_COMPONENT,
    TUI_PULL_TO_REFRESH_LOADED,
    TuiPullToRefresh,
} from '@taiga-ui/addon-mobile';
import {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {Subject} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButton, TuiPullToRefresh],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
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
    private readonly alerts = inject(TuiAlertService);
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
<tui-scrollbar>
<tui-pull-to-refresh (pulled)="onPull()">
<cdk-virtual-scroll-viewport appendOnly itemSize="50" tuiScrollable class="example-viewport tui-zero-scrollbar" >
<div *cdkVirtualFor="let item of items" class="example-item" > {{ item }} </div>
</cdk-virtual-scroll-viewport>
</tui-pull-to-refresh>
</tui-scrollbar>
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
import {
    TUI_ANDROID_LOADER,
    TUI_PULL_TO_REFRESH_COMPONENT,
    TUI_PULL_TO_REFRESH_LOADED,
    TuiPullToRefresh,
} from '@taiga-ui/addon-mobile';
import {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiAlertService, TuiScrollable, TuiScrollbar} from '@taiga-ui/core';
import {Subject} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        TuiPullToRefresh,
        TuiScrollable,
        TuiScrollbar,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
    overscroll-behavior: none;
}

.example-item {
    block-size: 3.125rem;
}
```
