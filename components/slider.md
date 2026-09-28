# Slider

- **Package**: `CORE`
- **Type**: components

Taiga UI styling of native html tag `'">` to choose a value from a limited range Read more about this input type in MDN Docs

### Example

```html
<ng-template>
<input tuiSlider type="range" [formControl]="control" [max]="max" [min]="min" [segments]="segments" [step]="step" [style.--tui-thumb-size.px]="thumbSize" />
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [disabled] | `boolean` | ) |
| [max] | `number` |  |
| [min] | `number` |  |
| [step] | `number` |  |
| [segments] | `number[] \| number` |  |
| [style.--tui-thumb-size.px] | `number` | size of thumb |

### Usage Examples

#### Size

Use css-variable `--tui-thumb-size` to customize radius of the thumb and track thickness.

**Template:**
```html
<input tuiSlider type="range" [formControl]="formControl" />
<p>Custom</p>
<input tuiSlider type="range" [formControl]="formControl" [style.--tui-thumb-size.rem]="1" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSlider} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiSlider],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly formControl = new FormControl(60);
}
```

#### Colors

Customizing colors of the filled track and thumb

**Template:**
```html
<input tuiSlider type="range" value="65" class="first" />
<input tuiSlider type="range" value="80" class="second" />
<input tuiSlider type="range" value="40" class="third" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSlider} from '@taiga-ui/core';

@Component({
    imports: [TuiSlider],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.first {
    color: var(--tui-chart-categorical-01);
}

.second {
    color: var(--tui-chart-categorical-03);
}

.third {
    color: var(--tui-chart-categorical-12);
}
```

#### Segments

Use mixin `tui-slider-ticks-labels` to place labels strictly below ticks

**Template:**
```html
<input tuiSlider type="range" [formControl]="formControl" [max]="1000" [segments]="4" [step]="250" />
<div class="ticks-labels"> @for (label of labels; track label) { <button type="button" class="tick-label" (click)="patchValue(label)" > ${{ label }} </button> } </div>
<p> Control value: <code>{{ formControl.value }}</code>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSlider} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiSlider],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly labels = [0, 250, 500, 750, 1000];
    protected readonly formControl = new FormControl(250);

    protected patchValue(newValue: number): void {
        this.formControl.patchValue(newValue);
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.ticks-labels {
    .tui-slider-ticks-labels();
}

.tick-label {
    .button-clear();

    outline: 0;
    cursor: pointer;
}
```

#### Disabled

Non interactive state

**Template:**
```html
<input disabled tuiSlider type="range" value="80" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSlider} from '@taiga-ui/core';

@Component({
    imports: [TuiSlider],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### KeySteps

Key steps – anchor points of non-uniform format between control's value and slider's position. When `[keySteps]` property is enabled, `[step]` means percentage of total track length.

**Template:**
```html
<input tuiSlider type="range" [formControl]="formControl" [keySteps]="keySteps" [segments]="segments" [step]="100 / steps" />
<div class="ticks-labels"> @for (label of labels; track label) { <span>{{ label }}</span> } </div>
<p automation-id="key-steps-example-control-value"> Control value: <code>{{ formControl.value | number }}</code>
</p>
```

**TypeScript:**
```ts
import {DecimalPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiKeySteps, TuiSlider} from '@taiga-ui/core';

@Component({
    imports: [DecimalPipe, ReactiveFormsModule, TuiSlider],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly labels = ['5 000', '100 000', '300 000', '1 000 000'];
    protected readonly formControl = new FormControl(720_000);
    protected readonly segments = this.labels.length - 1;
    protected readonly steps = this.segments * 10;

    protected readonly keySteps: TuiKeySteps = [
        [0, 5_000],
        [100 / 3, 100_000],
        [(100 / 3) * 2, 300_000],
        [100, 1_000_000],
    ];
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    display: block;
    inline-size: 27rem;
}

.ticks-labels {
    .tui-slider-ticks-labels();
}
```

#### Complex

Use `tuiSliderThumbLabel` for positioning any content so it slides alongside the thumb.

**Template:**
```html
<section class="zoom-controller">
<button appearance="icon" iconStart="@tui.minus" size="xs" tuiIconButton type="button" class="minus" (click)="change(-0.25)" > Minus </button>
<label tuiSliderThumbLabel class="slider-wrapper" >
<div [tuiHint]="value | percent" [tuiHintManual]="!!(showHint$ | async)" ></div>
<input step="any" tuiSlider type="range" [max]="max" [min]="min" [(ngModel)]="value" />
</label>
<button appearance="icon" iconStart="@tui.plus" size="xs" tuiIconButton type="button" class="plus" (click)="change(+0.25)" > Plus </button>
</section>
```

**TypeScript:**
```ts
import {AsyncPipe, PercentPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER, tuiClamp} from '@taiga-ui/cdk';
import {TuiButton, TuiHint, TuiSlider} from '@taiga-ui/core';
import {BehaviorSubject, distinctUntilChanged, map, of, switchMap, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, FormsModule, PercentPipe, TuiButton, TuiHint, TuiSlider],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    host: {
        '(document:pointerup)': 'onKeydown(false)',
        '(pointerdown)': 'onKeydown(true)',
    },
})
export default class Example {
    protected min = 0.5;
    protected max = 2;
    protected value = 1;
    protected readonly active$ = new BehaviorSubject(false);

    protected readonly showHint$ = this.active$.pipe(
        distinctUntilChanged(),
        switchMap((active) =>
            active ? of(true) : timer(1000).pipe(map(TUI_FALSE_HANDLER)),
        ),
    );

    protected onKeydown(show: boolean): void {
        this.active$.next(show);
    }

    protected change(step: number): void {
        this.value = tuiClamp(this.value + step, this.min, this.max);
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

@border-radius: 1rem;

.zoom-controller {
    display: flex;
    border-radius: @border-radius;
    background: var(--tui-background-neutral-1-pressed);
    block-size: var(--tui-height-s);
    justify-content: space-between;
    align-items: center;
    max-inline-size: 18rem;
    padding: 0 0.25rem;
    gap: 0.5rem;

    @media @tui-mobile {
        max-inline-size: 100%;
    }
}

.slider-wrapper {
    flex: 1;
}

.minus {
    border-radius: @border-radius 0 0 @border-radius;
}

.plus {
    border-radius: 0 @border-radius @border-radius 0;
}
```

#### Vertical

Vertical orientation can be achieved using CSS transformations.

**Template:**
```html
<button appearance="icon" iconStart="@tui.volume-2" size="s" tuiDropdown tuiDropdownAppearance="neutral" tuiDropdownAuto tuiDropdownDirection="top" tuiDropdownLimitWidth="fixed" tuiIconButton type="button" > Volume <input *tuiDropdown tuiSlider type="range" [(ngModel)]="value" />
</button>
```

**TypeScript:**
```ts
import {Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiDropdown, TuiSlider} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiButton, TuiDropdown, TuiSlider],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected value = 80;
}
```

**LESS:**
```less
tui-dropdown[data-appearance] {
    min-block-size: 8rem;
    background: var(--tui-background-neutral-1);
    box-shadow: none;
    border: none;
    backdrop-filter: blur(1rem);

    [tuiSlider] {
        position: absolute;
        inline-size: 7rem;
        transform-origin: left;
        transform: rotate(-90deg) translate(-100%, 1rem);

        // chromium browsers
        &::-webkit-slider-thumb {
            cursor: ns-resize;
        }

        // firefox
        &::-moz-range-thumb {
            cursor: ns-resize;
        }
    }
}
```
