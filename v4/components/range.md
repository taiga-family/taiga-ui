# Range

- **Package**: `KIT`
- **Type**: components

A two-thumb slider for selecting a range of values

### How to Use (Import)

```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiRange} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiRange,
  ],
})
class Example {
  testForm = new FormGroup({
    testValue: new FormControl(0),
  });
}
```

### How to Use (Template)

```html
<tui-range
  [max]="10"
  [(ngModel)]="model"
></tui-range>

<tui-range
  [formControl]="testValue"
  [max]="10"
></tui-range>
```

### Example

```html
<ng-template>
<tui-range [formControl]="control" [keySteps]="keySteps" [limit]="limit" [margin]="margin" [max]="max" [min]="min" [segments]="segments" [size]="size" [step]="step" />
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [disabled] | `boolean` | ) |
| [min] | `number` |  |
| [max] | `number` |  |
| [step] | `number` |  |
| [size] | `TuiSizeS` |  |
| [segments] | `number` |  |
| [keySteps] | `TuiKeySteps | null` |  |
| [limit] | `number` |  |
| [margin] | `number` |  |

### Usage Examples

#### Sizes

**Template:**
```html
<tui-range size="s" [max]="10" [(ngModel)]="value" />
<tui-range size="m" [formControl]="formControl" [max]="10" />
<p>Custom thickness</p>
<tui-range size="m" [formControl]="formControl" [max]="10" [style.--tui-thickness.rem]="0.25" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TuiRange],
    templateUrl: './index.html',
    styles: [':host {display: flex; flex-direction: column;}'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [4, 6];

    protected readonly formControl = new FormControl([4, 6]);
}
```

#### Segments

**Template:**
```html
<tui-range id="range-with-segments" size="m" class="range" [max]="max" [min]="min" [segments]="segments" [step]="step" [(ngModel)]="value" />
<div class="ticks-labels">
<div *ngFor="let label of labels">
<ng-container *ngIf="label !== 75; else labelWithIcon"> {{ label | i18nPlural: pluralMap }} </ng-container>
</div>
<ng-template #labelWithIcon>
<tui-icon icon="@tui.arrow-up" />
<div>3/4</div>
</ng-template>
</div>
<p class="tui-space_top-12 tui-space_bottom-0"> Control value: <output for="range-with-segments">
<code>{{ value | json }}</code>
</output>
</p>
```

**TypeScript:**
```ts
import {I18nPluralPipe, JsonPipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, I18nPluralPipe, JsonPipe, NgForOf, NgIf, TuiIcon, TuiRange],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly min = 0;
    protected readonly max = 100;
    protected readonly step = 25;
    protected readonly segments = 4;
    protected readonly labels = [...new Array(this.segments + 1).keys()].map(
        (i) => this.min + this.step * i,
    );

    protected value = [0, 25];

    // https://angular.dev/api/common/I18nPluralPipe#example
    protected pluralMap = {'=0': '0', '=1': '# item', '=100': 'MAX', other: '# items'};
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.range {
    z-index: 1;

    /* (Optionally) expand clickable area as you wish */
    &::after {
        content: '';
        position: absolute;
        top: -0.5rem;
        bottom: -1.5rem;
        inline-size: 100%;
    }
}

.ticks-labels {
    .tui-slider-ticks-labels(m);
}

tui-icon {
    border-width: 0.25rem;
}
```

#### KeySteps

**Template:**
```html
<tui-range id="range-with-key-steps" size="m" class="range" [keySteps]="keySteps" [segments]="segments" [step]="stepPercentage" [(ngModel)]="value" />
<div class="ticks-labels">
<span *ngFor="let label of ticksLabels">{{ label }}</span>
</div>
<p class="tui-space_top-12 tui-space_bottom-0"> Control value: <output for="range-with-key-steps">
<code>{{ value | json }}</code>
</output>
</p>
```

**TypeScript:**
```ts
import {JsonPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiKeySteps, TuiRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, JsonPipe, NgForOf, TuiRange],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly ticksLabels = ['0', '10K', '100K', '500k', '1000K'];
    protected readonly segments = this.ticksLabels.length - 1;

    // 12.5% (of total distance) per step
    protected readonly stepPercentage = 100 / (2 * this.segments);

    protected value = [0, 100_000];

    protected readonly keySteps: TuiKeySteps = [
        // [percent, value]
        [0, 0],
        [25, 10_000],
        [50, 100_000],
        [75, 500_000],
        [100, 1_000_000],
    ];
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.range {
    z-index: 1;

    /* (Optionally) expand clickable area as you wish */
    &::after {
        content: '';
        position: absolute;
        top: -0.5rem;
        bottom: -1.5rem;
        inline-size: 100%;
    }
}

.ticks-labels {
    .tui-slider-ticks-labels(m);
}
```
