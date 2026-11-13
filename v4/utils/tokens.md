# Tokens

- **Package**: `CDK`
- **Type**: components/utils

### Usage Examples

#### TUI_DIALOGS

**Template:**
```html
<p> A stream of modal dialogs displayed by <a tuiLink [routerLink]="routes.Dialog" > TuiDialogsComponent </a> . </p>
<p> You can create your own service extending <a tuiLink [routerLink]="routes.DialogCustom" > TuiPopoverService </a> to easily add another modal dialogs behavior to your application. </p>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TUI_DIALOGS, TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [RouterLink, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly dialogs = inject(TUI_DIALOGS);
    protected readonly routes = DemoRoute;
}
```

#### TUI_IS_ANDROID

**Template:**
```html
<p> A token with a factory. It takes <a fragment="is-mobile" routerLink="." tuiLink > TUI_IS_MOBILE </a> and <a fragment="is-ios" routerLink="." tuiLink > TUI_IS_IOS </a> , returns true if the device is mobile but not iOS (technically includes Windows Phone, Blackberry etc.) </p>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_ANDROID} from '@taiga-ui/cdk';
import {TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [RouterLink, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isAndroid = inject(TUI_IS_ANDROID);
}
```

#### TUI_IS_IOS

**Template:**
```html
<p> A token with a factory. It takes <a fragment="is-mobile" routerLink="." tuiLink > TUI_IS_MOBILE </a> and if it is true detects iOS devices with a regex </p>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [RouterLink, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isIos = inject(TUI_IS_IOS);
}
```

#### TUI_IS_MOBILE

**Template:**
```html
<p> A token with a factory. It takes WA_USER_AGENT token and parses it with a complex Regex to detect users with mobile devices </p>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isMobile = inject(TUI_IS_MOBILE);
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
<a tuiLink [routerLink]="routes.InputRangeLegacy" > TuiInputRangeComponent </a>
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
    standalone: true,
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
<dd class="tui-space_bottom-5"> active date format ( <code>'DMY' | 'MDY' | 'YMD'</code> ) </dd>
<dt>
<code>separator</code>
</dt>
<dd>single-character date's separator (dot, slash etc.)</dd>
</dl>
</section>
<section>
<h3>Defaults:</h3>
<ul class="tui-list tui-list_small">
<li class="tui-list__item"> mode = <code>DMY</code>
</li>
<li class="tui-list__item"> separator = <code>.</code>
</li>
</ul>
</section>
<section>
<h3>Components that are customizable:</h3>
<ul class="tui-list tui-list_small">
<li class="tui-list__item">
<a tuiLink [routerLink]="routes.InputDateLegacy" > TuiInputDate </a>
</li>
<li class="tui-list__item">
<a tuiLink [routerLink]="routes.InputDateRangeLegacy" > TuiInputDateRange </a>
</li>
<li class="tui-list__item">
<a tuiLink [routerLink]="routes.InputDateTimeLegacy" > TuiInputDateTime </a>
</li>
<li class="tui-list__item">
<a tuiLink [routerLink]="routes.InputDateMultiLegacy" > TuiInputDateMulti </a>
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
    standalone: true,
    imports: [RouterLink, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
}
```

#### TUI_FIRST_DAY_OF_WEEK

**Template:**
```html
<p class="tui-space_top-0"> Use <code>TUI_FIRST_DAY_OF_WEEK</code> injection token to change start day of the week (Monday by default). </p>
<tui-doc-code [code]="provideFirstDayOfWeekToken" />
<section>
<h3>This token can customize the following components:</h3>
<ul class="tui-list tui-list_small">
<li *ngFor="let component of customizableComponentsViaThisToken" class="tui-list__item" >
<a tuiLink [fragment]="component.fragment" [routerLink]="component.link" > {{ component.name }} </a>
</li>
</ul>
</section>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocCode} from '@taiga-ui/addon-doc';
import {TuiDayOfWeek} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK, TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [NgForOf, RouterLink, TuiDocCode, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_FIRST_DAY_OF_WEEK,
            useValue: TuiDayOfWeek.Sunday,
        },
    ],
})
export default class Example {
    protected readonly provideFirstDayOfWeekToken =
        import('./provide-first-day-of-week-token.md?raw');

    protected readonly customizableComponentsViaThisToken = [
        {
            name: 'Calendar',
            link: '/components/calendar',
            fragment: 'localization',
        },
        {
            name: 'CalendarRange',
            link: '/components/calendar-range',
            fragment: 'localization',
        },
        {
            name: 'MobileCalendar',
            link: '/components/mobile-calendar',
            fragment: 'localization',
        },
    ] as const;
}
```
