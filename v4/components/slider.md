# Slider

- **Package**: `KIT`
- **Type**: components

Taiga UI styling of native html tag `'">` to choose a value from a limited range Read more about this input type in MDN Docs

### How to Use (Import)

```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiSlider} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiSlider,
  ],
  // ...
})
export class Example {
  readonly control = new FormControl(1);
}
```

### How to Use (Template)

```html
<input
  tuiSlider
  type="range"
  [formControl]="control"
/>
```

### Example

```html
<ng-template>
<input tuiSlider type="range" [formControl]="control" [max]="max" [min]="min" [segments]="segments" [size]="size" [step]="step" />
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [disabled] | `boolean` | ) |
| [max] | `number` |  |
| [min] | `number` |  |
| [step] | `number` |  |
| [size] | `TuiSizeS` | Size |
| [segments] | `number[] | number` | for no ticks) |

### Usage Examples

#### Sizes

**Template:**
```html
<input max="10" size="s" step="1" tuiSlider type="range" [(ngModel)]="value" />
<input size="m" tuiSlider type="range" [formControl]="formControl" />
<p>Custom thickness</p>
<input size="m" tuiSlider type="range" [formControl]="formControl" [style.--tui-thickness.rem]="0.25" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSliderComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TuiSliderComponent],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 4;
    protected formControl = new FormControl(60);
}
```

#### Colors

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
import {TuiSliderComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiSliderComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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

**Template:**
```html
<input size="m" tuiSlider type="range" [formControl]="formControl" [max]="1000" [segments]="4" [step]="250" />
<div class="ticks-labels">
<button *ngFor="let label of labels" type="button" class="tick-label" (click)="patchValue(label)" > ${{ label }} </button>
</div>
<p> Control value: <code>{{ formControl.value }}</code>
</p>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSliderComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, ReactiveFormsModule, TuiSliderComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly labels: number[] = [0, 250, 500, 750, 1000];
    protected readonly formControl = new FormControl(250);

    protected patchValue(newValue: number): void {
        this.formControl.patchValue(newValue);
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.ticks-labels {
    .tui-slider-ticks-labels(m);
}

.tick-label {
    .button-clear();

    outline: 0;
    cursor: pointer;
}
```

#### Disabled

**Template:**
```html
<input disabled tuiSlider type="range" value="80" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSliderComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiSliderComponent],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### KeySteps

**Template:**
```html
<input tuiSlider type="range" [formControl]="formControl" [keySteps]="keySteps" [max]="10 * segments" [segments]="segments" />
<div class="ticks-labels">
<span *ngFor="let label of labels">{{ label }}</span>
</div>
<p automation-id="key-steps-example-control-value"> Control value: <code>{{ formControl.value | number }}</code>
</p>
```

**TypeScript:**
```ts
import {DecimalPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiKeySteps, TuiSlider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [DecimalPipe, NgForOf, ReactiveFormsModule, TuiSlider],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly labels: string[] = ['5 000', '100 000', '300 000', '1 000 000'];
    protected readonly formControl = new FormControl(720_000);
    protected readonly segments = this.labels.length - 1;

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
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: block;
    inline-size: 27rem;
}

.ticks-labels {
    .tui-slider-ticks-labels(m);
}
```

#### Complex

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
import {TuiButton, TuiHint} from '@taiga-ui/core';
import {TuiSlider} from '@taiga-ui/kit';
import {BehaviorSubject, distinctUntilChanged, map, of, switchMap, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, FormsModule, PercentPipe, TuiButton, TuiHint, TuiSlider],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    host: {
        '(pointerdown)': 'onKeydown(true)',
        '(document:pointerup)': 'onKeydown(false)',
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
@import '@taiga-ui/core/styles/taiga-ui-local';

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
