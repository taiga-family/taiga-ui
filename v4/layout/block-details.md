# BlockDetails

- **Package**: `LAYOUT`
- **Type**: components

Layout directive for describing details. For example, transaction details

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiBlockDetails} from '@taiga-ui/layout';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiBlockDetails,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<div tuiBlockDetails>
  <tui-avatar></tui-avatar>
  <h2 tuiTitle>
    Title
    <div tuiSubtitle>Subtitle</div>
  </h2>

  <span>{{ amount }} | tuiAmount: 'USD' | async }}</span>
  <span tuiAmountDescription>description</span>
  <span tuiComment>comment</span>
  <tui-badge appearance="neutral">Badge</tui-badge>
</div>
```

### Usage Examples

#### Full

**Template:**
```html
<div tuiBlockDetails>
<tui-avatar src="JW" [size]="isMobile ? 'xl' : 'xxl'" />
<h2 tuiTitle> John W <div tuiSubtitle>money transfers</div>
</h2>
<span>{{ -1050 | tuiAmount: 'USD' | async }}</span>
<span tuiSubtitle>today</span>
<span tuiSubtitle>extra subtitle</span>
<span tuiComment>Birthday gift</span>
<div tuiAccessories>
<tui-badge appearance="neutral">private</tui-badge>
<tui-badge appearance="default">fast</tui-badge>
</div>
<div tuiDetailsStatus>
<tui-icon icon="@tui.clock" [style.font-size.rem]="1" /> Pending </div>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiComment} from '@taiga-ui/kit';
import {TuiBlockDetails} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
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
    protected readonly isMobile = inject(TUI_IS_MOBILE);
}
```

#### Customization

**Template:**
```html
<div tuiBlockDetails>
<tui-avatar src="@tui.gift" [size]="isMobile ? 'xl' : 'xxl'" />
<h2 tuiTitle> Auchan <div tuiSubtitle>grocery &#x2022; MMC 5350</div>
</h2>
<span [style.color]="'var(--tui-text-positive)'">{{ 0.5 | tuiAmount: 'USD' | async }}</span>
<span tuiFade tuiSubtitle > promotion (long value with fade) </span>
<tui-badge appearance="neutral">cashback</tui-badge>
</div>
<div tuiBlockDetails>
<tui-avatar src="@tui.star" [size]="isMobile ? 'xl' : 'xxl'" />
<h2 tuiTitle> Uber <div tuiSubtitle>taxi &#x2022; MMC 5550</div>
</h2>
<span [style.color]="'var(--tui-text-negative)'">{{ -10.5 | tuiAmount: 'USD' | async }}</span>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAmountOptionsProvider, TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiFade} from '@taiga-ui/kit';
import {TuiBlockDetails} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        TuiAmountPipe,
        TuiAvatar,
        TuiBadge,
        TuiBlockDetails,
        TuiFade,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiAmountOptionsProvider({sign: 'always'})],
})
export default class Example {
    protected readonly isMobile = inject(TUI_IS_MOBILE);
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
