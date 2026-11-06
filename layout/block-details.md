# BlockDetails

- **Package**: `LAYOUT`
- **Type**: components

Layout directive for describing details. For example, transaction details

### Usage Examples

#### Example 1

**Template:**
```html
<div tuiBlockDetails>
<div tuiAvatar="JW" [size]="isMobile ? 'xl' : 'xxl'" ></div>
<h2 tuiTitle> John W <div tuiSubtitle>money transfers</div>
</h2>
<span>{{ -1050 | tuiAmount: 'USD' }}</span>
<span tuiSubtitle>today</span>
<span tuiSubtitle>extra subtitle</span>
<span tuiComment>Birthday gift</span>
<div tuiAccessories>
<div appearance="neutral" tuiBadge > private </div>
<div appearance="default" tuiBadge > fast </div>
</div>
<div tuiDetailsStatus>
<tui-icon icon="@tui.clock" [style.font-size.rem]="1" /> Pending </div>
</div>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiComment} from '@taiga-ui/kit';
import {TuiBlockDetails} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAmountPipe,
        TuiAvatar,
        TuiBadge,
        TuiBlockDetails,
        TuiComment,
        TuiIcon,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isMobile = inject(WA_IS_MOBILE);
}
```

#### Example 2

**Template:**
```html
<div tuiBlockDetails>
<div tuiAvatar="@tui.gift" [size]="isMobile ? 'xl' : 'xxl'" ></div>
<h2 tuiTitle> Auchan <div tuiSubtitle>grocery &#x2022; MMC 5350</div>
</h2>
<span [style.color]="'var(--tui-text-positive)'">{{ 0.5 | tuiAmount: 'USD' }}</span>
<span tuiFade tuiSubtitle > promotion (long value with fade) </span>
<div appearance="neutral" tuiBadge > cashback </div>
</div>
<div tuiBlockDetails>
<div tuiAvatar="@tui.star" [size]="isMobile ? 'xl' : 'xxl'" ></div>
<h2 tuiTitle> Uber <div tuiSubtitle>taxi &#x2022; MMC 5550</div>
</h2>
<span [style.color]="'var(--tui-text-negative)'">{{ -10.5 | tuiAmount: 'USD' }}</span>
</div>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {tuiAmountOptionsProvider, TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiFade} from '@taiga-ui/kit';
import {TuiBlockDetails} from '@taiga-ui/layout';

@Component({
    imports: [TuiAmountPipe, TuiAvatar, TuiBadge, TuiBlockDetails, TuiFade, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiAmountOptionsProvider({sign: 'always'})],
})
export default class Example {
    protected readonly isMobile = inject(WA_IS_MOBILE);
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 5rem;
}

[tuiSubtitle] {
    white-space: nowrap;
    max-inline-size: 11rem;
}
```

#### Example 3

**Template:**
```html
<button tuiButton type="button" (click)="open = true" > Show dialog </button>
<ng-template let-id="id" let-observer [tuiResponsiveDialogOptions]="{size: 's'}" [(tuiResponsiveDialog)]="open" >
<div tuiBlockDetails>
<div appearance="positive" tuiAvatar="@tui.check" [size]="isMobile ? 'xl' : 'xxl'" ></div>
<h2 tuiTitle [id]="id" > Payment successful <div tuiSubtitle>Transfer to John W</div>
</h2>
<span>{{ -1050 | tuiAmount: 'USD' }}</span>
<span tuiSubtitle>Today, 12:30</span>
</div>
<footer>
<button tuiButton type="button" (click)="observer.complete()" > Done </button>
</footer>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiResponsiveDialog} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiBlockDetails} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAmountPipe,
        TuiAvatar,
        TuiBlockDetails,
        TuiButton,
        TuiResponsiveDialog,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isMobile = inject(WA_IS_MOBILE);
    protected open = false;
}
```
