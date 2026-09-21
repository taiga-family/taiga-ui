# ProgressBar

- **Package**: `KIT`
- **Type**: components

`tuiProgressBar` – attribute component for native html tag `'">` . Usage: `'">` .

### Example

```html
<progress tuiProgressBar class="api-progress" [color]="color" [max]="max" [size]="size" [value]="value" ></progress>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [value] | `number` |  |
| [max] | `number` |  |
| [size] | `TuiSizeXS | TuiSizeXXL` | — |
| [color] | `string` |  |

### Usage Examples

#### Basic

**Template:**
```html
<progress max="100" tuiProgressBar [value]="value$ | async" ></progress>
```

**TypeScript:**
```ts
import {AsyncPipe, isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiProgress} from '@taiga-ui/kit';
import {map, of, startWith, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiProgress],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value$ =
        inject(WA_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))
            ? of(40)
            : timer(300, 300).pipe(
                  map((i) => i + 30),
                  startWith(30),
              );
}
```

#### Multicolor

**Template:**
```html
<h6 class="description">Single color</h6>
<p> Use <code [textContent]="'<progress />'"></code> 's CSS-property <code>color</code> to set solid color of progress indicator. </p>
<progress max="100" tuiProgressBar class="progress" [value]="fastValue$ | async" ></progress>
<h6 class="description">With fancy color gradient</h6>
<p> Set component's input property <code>color</code> to get more complex color combinations. </p>
<progress color="linear-gradient(to right, var(--tui-chart-categorical-02), var(--tui-chart-categorical-14), var(--tui-chart-categorical-12))" max="100" tuiProgressBar class="progress" [value]="fastValue$ | async" ></progress>
<p> Use directive <code>tuiProgressFixedGradient</code> to make gradient fixed. </p>
<progress color="linear-gradient(to right, var(--tui-chart-categorical-02), var(--tui-chart-categorical-14), var(--tui-chart-categorical-12))" max="100" tuiProgressBar tuiProgressFixedGradient class="progress" [value]="fastValue$ | async" ></progress>
<h6 class="description">Multicolor segments</h6>
<p> Use <code>tuiProgressColorSegments</code> directive to to get multicolor segments. </p>
<progress max="100" tuiProgressBar class="progress" [tuiProgressColorSegments]="colors" [value]="fastValue$ | async" ></progress>
<progress tuiProgressBar class="progress" [max]="colors.length" [tuiProgressColorSegments]="colors" [value]="slowValue$ | async" ></progress>
```

**TypeScript:**
```ts
import {AsyncPipe, isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiProgress} from '@taiga-ui/kit';
import {of, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiProgress],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly animationDisabled =
        inject(WA_IS_E2E) || isPlatformServer(inject(PLATFORM_ID));

    protected readonly fastValue$ = this.animationDisabled ? of(80) : timer(500, 100);
    protected readonly slowValue$ = this.animationDisabled ? of(4) : timer(500, 2000);

    protected readonly colors = [
        'var(--tui-chart-categorical-01)',
        'var(--tui-chart-categorical-21)',
        'lightskyblue',
        '#3682db',
        'var(--tui-background-accent-1)',
    ];
}
```

**LESS:**
```less
.progress {
    margin-block-end: 1rem;
    color: var(--tui-chart-categorical-09);
}

.description {
    font: var(--tui-typography-heading-h6);
    margin-block-end: 1rem;

    &:first-child {
        margin-block-start: 0;
    }
}
```

#### Sizes

**Template:**
```html
<progress max="100" size="xs" tuiProgressBar [value]="55" ></progress>
<progress max="100" size="s" tuiProgressBar [value]="60" ></progress>
<progress max="100" size="m" tuiProgressBar [value]="65" ></progress>
<progress max="100" size="l" tuiProgressBar [value]="70" ></progress>
<progress max="100" size="xl" tuiProgressBar [value]="75" ></progress>
<progress max="100" size="xxl" tuiProgressBar [value]="80" ></progress>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [TuiProgress],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```

#### With label

**Template:**
```html
@if (value$ | async; as value) { <label tuiProgressLabel class="label-wrapper" > {{ value }}% <progress size="l" tuiProgressBar [max]="max" [value]="value" ></progress>
</label> }
```

**TypeScript:**
```ts
import {AsyncPipe, isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiProgress} from '@taiga-ui/kit';
import {map, of, startWith, takeWhile, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiProgress],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly max = 100;

    protected readonly value$ =
        inject(WA_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))
            ? of(30)
            : timer(300, 300).pipe(
                  map((i) => i + 30),
                  startWith(30),
                  takeWhile((value) => value <= this.max),
              );
}
```

**LESS:**
```less
.label-wrapper {
    inline-size: 100%;
    text-shadow: 0 0 0.25rem #000;
    color: var(--tui-text-primary-on-accent-1);
}
```

#### Stacked progress bars

**Template:**
```html
<label tuiProgressLabel class="label-wrapper" >
<progress max="4" size="s" tuiProgressBar class="progress" [value]="3" ></progress>
<progress max="4" size="s" tuiProgressBar class="progress" [value]="1" ></progress>
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [TuiProgress],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.label-wrapper {
    inline-size: 100%;
}

.progress {
    &:nth-child(1) {
        color: #a3ecb3;
    }

    &:nth-child(2) {
        color: #39b54a;
    }
}
```

#### Indeterminate

Indeterminate state expresses an unspecified amount of wait time. If there is no `[value]` attribute, the `ProgressBar` is indeterminate.

**Template:**
```html
<progress tuiProgressBar></progress>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [TuiProgress],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Customizable corners

You can toggle off round corners of the progress bar by setting `border-radius: 0` .

**Template:**
```html
<progress tuiProgressBar [max]="100" [value]="50" ></progress>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [TuiProgress],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
[tuiProgressBar] {
    border-radius: 0;
}
```
