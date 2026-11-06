# ProgressCircle

- **Package**: `KIT`
- **Type**: components

`'">` is a component to visually represent the completion of a process or operation (as a partially filled circle/ring). It shows how much has been completed and how much remains.

### Example

```html
<tui-progress-circle [arc]="arc" [color]="color" [max]="max" [size]="size" [style.--tui-thickness.px]="thickness" [value]="value" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [value] | `number` | is omitted. |
| [max] | `number` | maximum value of the progress |
| [size] | `TuiSizeXXL \| TuiSizeXXS` | — |
| [color] | `string` |  |
| [arc] | `boolean` | use arc shape with small bottom open arc sector (instead of default circle). |
| [style.--tui-thickness.px] | `number` | width of the circle's stroke |

### Usage Examples

#### Basic

**Template:**
```html
<tui-progress-circle size="xl" [max]="max" [value]="(value$ | async) || 0" />
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
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly max = 100;

    protected readonly value$ =
        inject(WA_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))
            ? of(30)
            : timer(300, 200).pipe(
                  map((i) => i + 30),
                  startWith(30),
                  takeWhile((value) => value <= this.max),
              );
}
```

#### Sizes

**Template:**
```html
@for (size of sizes; track size) { <tui-progress-circle [max]="100" [size]="size" [value]="60" /> }
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
export default class Example {
    protected readonly sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'] as const;
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media @tui-desktop-min {
        flex-direction: row-reverse;
    }
}
```

#### With label

**Template:**
```html
@if (value$ | async; as value) { <label tuiProgressLabel>
<span tuiHeader="h6">
<span tuiTitle>
<span tuiSubtitle>Done</span>
<b>{{ value }}%</b>
</span>
</span>
<tui-progress-circle size="xl" [max]="max" [value]="value" />
</label> }
```

**TypeScript:**
```ts
import {AsyncPipe, isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiTitle} from '@taiga-ui/core';
import {TuiProgress} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';
import {map, of, startWith, takeWhile, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiHeader, TuiProgress, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly max = 100;

    protected readonly value$ =
        inject(WA_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))
            ? of(30)
            : timer(300, 200).pipe(
                  map((i) => i + 30),
                  startWith(30),
                  takeWhile((value) => value <= this.max),
              );
}
```

#### Colors

**Template:**
```html
<tui-progress-circle color="url(#gradient)" size="xl" [max]="4" [value]="3" />
<tui-progress-circle size="l" class="progress" [max]="4" [value]="3" />
<tui-progress-circle size="m" class="progress" [max]="4" [value]="3" />
<tui-progress-circle size="s" class="progress" [max]="4" [value]="3" />
<svg height="0" width="0" >
<defs>
<linearGradient id="gradient" gradientTransform="rotate(95)" >
<stop offset="0%" stop-color="var(--tui-chart-categorical-02)" />
<stop offset="45%" stop-color="var(--tui-chart-categorical-14)" />
<stop offset="100%" stop-color="var(--tui-chart-categorical-12)" />
</linearGradient>
</defs>
</svg>
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
    flex-wrap: wrap;
    gap: 1rem;
}

.progress {
    &[data-size='l'] {
        color: var(--tui-chart-categorical-01);
    }

    &[data-size='m'] {
        color: var(--tui-chart-categorical-03);
    }

    &[data-size='s'] {
        color: var(--tui-chart-categorical-09);
    }
}
```

#### Dynamic color

**Template:**
```html
<tui-progress-circle size="xl" [max]="max" [style.color]="color$ | async" [value]="(value$ | async) || 0" />
```

**TypeScript:**
```ts
import {AsyncPipe, isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiProgress} from '@taiga-ui/kit';
import {map, of, repeat, share, takeWhile, timer} from 'rxjs';

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
            : timer(300, 200).pipe(
                  takeWhile((value) => value <= this.max),
                  share(),
                  repeat(),
              );

    protected readonly color$ = this.value$.pipe(
        map((value) => {
            if (value < 33) {
                return 'red';
            }

            return value < 66 ? 'yellow' : 'green';
        }),
    );
}
```

**LESS:**
```less
tui-progress-circle {
    transition: color 2s;
}
```

#### Anti-clockwise direction

Use power of CSS property `transform` to customize direction and starting point of progress circle.

**Template:**
```html
<tui-progress-circle size="xl" [max]="max" [value]="(value$ | async) || 0" />
```

**TypeScript:**
```ts
import {AsyncPipe, isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiProgress} from '@taiga-ui/kit';
import {of, repeat, takeWhile, timer} from 'rxjs';

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
            : timer(300, 200).pipe(
                  takeWhile((value) => value <= this.max),
                  repeat(),
              );
}
```

**LESS:**
```less
tui-progress-circle {
    transform: scaleX(-1);
}
```

#### Thickness

Use css-variable `--tui-thickness` to customize width of the circle's stroke.

**Template:**
```html
@for (_ of '-'.repeat(4); track $index) { <tui-progress-circle size="l" [max]="100" [value]="60" /> }
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
@import '@taiga-ui/styles/utils';

tui-progress-circle {
    &:nth-child(1) {
        --tui-thickness: 0.125rem;
    }

    &:nth-child(2) {
        --tui-thickness: 0.25rem;
    }

    &:nth-child(3) {
        --tui-thickness: 0.375rem;
    }

    &:nth-child(4) {
        --tui-thickness: 0.5rem;
    }
}

:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media @tui-desktop-min {
        flex-direction: row;
    }
}
```

#### Arc mode

Set `arc` attribute to transform default circular shape into arc with small bottom open arc sector (gap between arc ends).

**Template:**
```html
@for (size of sizes; track size) { <tui-progress-circle arc [size]="size" [value]="0.5" /> }
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
export default class Example {
    protected readonly sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'] as const;
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    display: flex;
    flex-direction: row-reverse;
    gap: 1rem;

    @media @tui-mobile {
        flex-direction: column;
        margin-block-end: 1rem;
    }
}
```
