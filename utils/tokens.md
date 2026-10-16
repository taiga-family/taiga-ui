# Tokens

- **Package**: `CDK`
- **Type**: components/utils

### Usage Examples

#### TUI_BREAKPOINT

**Template:**
```html
<p> Token to observe changes in the current breakpoint. Change the viewport of this window to see changes in breakpoint </p>
<table class="tui-space_top-4">
<thead>
<tr>
<th>CSS</th>
<th>Service</th>
</tr>
</thead>
<tbody>
<td>
<div class="mobile">Mobile</div>
<div class="desktop-small">Desktop small</div>
<div class="desktop-large">Desktop large</div>
</td>
<td> @if (breakpoint() === 'mobile') { <div>Mobile</div> } @if (breakpoint() === 'desktopSmall') { <div>Desktop small</div> } @if (breakpoint() === 'desktopLarge') { <div>Desktop large</div> } </td>
</tbody>
</table>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_BREAKPOINT} from '@taiga-ui/core';

@Component({
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly breakpoint = inject(TUI_BREAKPOINT);
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    display: block;
}

table {
    inline-size: 100%;
    border-spacing: 0;
}

th,
td {
    text-align: start;
    border: 1px solid var(--tui-border-normal);
    block-size: 3.375rem;
    padding: 0 1rem;
    vertical-align: middle;
}

.mobile {
    display: block;
}

.desktop-small {
    display: none;
}

.desktop-large {
    display: none;
}

@media @tui-tablet-min {
    .mobile {
        display: none;
    }

    .desktop-small {
        display: block;
    }

    .desktop-large {
        display: none;
    }
}

@media @tui-desktop-lg-min {
    .mobile {
        display: none;
    }

    .desktop-small {
        display: none;
    }

    .desktop-large {
        display: block;
    }
}
```

#### WA_IS_ANDROID

**Template:**
```html
<p> A token with a factory. It takes <a fragment="is-mobile" routerLink="." tuiLink > WA_IS_MOBILE </a> and <a fragment="is-ios" routerLink="." tuiLink > WA_IS_IOS </a> , returns true if the device is mobile but not iOS (technically includes Windows Phone, Blackberry etc.) </p>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_ANDROID} from '@ng-web-apis/platform';
import {TuiLink} from '@taiga-ui/core';

@Component({
    imports: [RouterLink, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isAndroid = inject(WA_IS_ANDROID);
}
```

#### WA_IS_IOS

**Template:**
```html
<p> A token with a factory. It takes <a fragment="is-mobile" routerLink="." tuiLink > WA_IS_MOBILE </a> and if it is true detects iOS devices with a regex </p>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_IOS} from '@ng-web-apis/platform';
import {TuiLink} from '@taiga-ui/core';

@Component({
    imports: [RouterLink, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isIos = inject(WA_IS_IOS);
}
```

#### WA_IS_MOBILE

**Template:**
```html
<p> A token with a factory. It takes WA_USER_AGENT token and parses it with a complex Regex to detect users with mobile devices </p>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';

@Component({
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isMobile = inject(WA_IS_MOBILE);
}
```

#### TUI_NUMBER_FORMAT

**Template:**
```html
<div>
<div> Using <strong>TUI_NUMBER_FORMAT</strong> injection token you can customize numbers formatting. </div>
<div>For example: 10 500,33</div>
<div>Can be customized as: 10/500.33</div>
<section>
<h3>Defaults:</h3>
<ul class="tui-list tui-list_small">
<li class="tui-list__item"> decimalSeparator = <code>,</code>
</li>
<li class="tui-list__item"> thousandSeparator = <code>CHAR_NO_BREAK_SPACE</code>
</li>
<li class="tui-list__item"> zeroPadding = <code>true</code>
</li>
<li class="tui-list__item"> rounding = <code>truncate</code>
</li>
</ul>
</section>
<section>
<h3>Components that are customizable:</h3>
<ul class="tui-list tui-list_small">
<li class="tui-list__item">
<a tuiLink [routerLink]="routes.Amount" > TuiAmount </a>
</li>
<li class="tui-list__item">
<a tuiLink [routerLink]="routes.FormatNumber" > TuiFormatNumberPipe </a>
</li>
<li class="tui-list__item">
<a tuiLink [routerLink]="routes.InputNumber" > TuiInputNumberComponent </a>
</li>
<li class="tui-list__item">
<a tuiLink [routerLink]="routes.InputSlider" > TuiInputSliderComponent </a>
</li>
<li class="tui-list__item">
<a tuiLink [routerLink]="routes.InputRange" > TuiInputRangeComponent </a>
</li>
</ul>
</section>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiLink} from '@taiga-ui/core';

@Component({
    imports: [RouterLink, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
}
```

#### TUI_DATE_FORMAT

**Template:**
```html
<div>
<div> Using <strong>TUI_DATE_FORMAT</strong> injection token you can customize numbers formatting. </div>
<div>For example: 10.01.2024</div>
<div>Can be customized as: 2024/01/10</div>
<section>
<h3>Description:</h3>
<dl>
<dt>
<code>mode</code>
</dt>
<dd class="tui-space_bottom-5"> active date format ( <code>'dd/mm/yyyy' | 'mm/dd/yyyy' | 'yyyy/mm/dd'</code> ) </dd>
<dt>
<code>separator</code>
</dt>
<dd>single-character date's separator (dot, slash etc.)</dd>
</dl>
</section>
<section>
<h3>Defaults:</h3>
<ul class="tui-list tui-list_small">
<li class="tui-list__item"> mode = <code>dd/mm/yyyy</code>
</li>
<li class="tui-list__item"> separator = <code>.</code>
</li>
</ul>
</section>
<section>
<h3>Components that are customizable:</h3>
<ul class="tui-list tui-list_small">
<li class="tui-list__item">
<a tuiLink [routerLink]="routes.InputDate" > TuiInputDate </a>
</li>
<li class="tui-list__item">
<a tuiLink [routerLink]="routes.InputDateRange" > TuiInputDateRange </a>
</li>
<li class="tui-list__item">
<a tuiLink [routerLink]="routes.InputDateTime" > TuiInputDateTime </a>
</li>
<li class="tui-list__item">
<a tuiLink [routerLink]="routes.InputDateMulti" > TuiInputDateMulti </a>
</li>
</ul>
</section>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiLink} from '@taiga-ui/core';

@Component({
    imports: [RouterLink, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
}
```
