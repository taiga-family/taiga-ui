# Range

- **Package**: `KIT`
- **Type**: components

A two-thumb slider for selecting a range of values

### Example

```html
<ng-template>
<tui-range [formControl]="control" [keySteps]="keySteps || undefined" [limit]="limit" [margin]="margin" [max]="max" [min]="min" [segments]="segments" [step]="step" [style.--tui-thumb-size.px]="thumbSize" />
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [disabled] | `boolean` | ) |
| [min] | `number` |  |
| [max] | `number` |  |
| [step] | `number` |  |
| [segments] | `number` |  |
| [keySteps] | `TuiKeySteps | null` |  |
| [limit] | `number` |  |
| [margin] | `number` |  |
| [style.--tui-thumb-size.px] | `number` | size of thumb |

### Usage Examples

#### Size

Use css-variable `--tui-thumb-size` to customize radius of the thumb and track thickness.

**Template:**
```html
<tui-range [(ngModel)]="value" />
<p>Custom</p>
<tui-range [style.--tui-thumb-size.rem]="1" [(ngModel)]="value" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiRange],
    templateUrl: './index.html',
    styles: ':host { display: flex; flex-direction: column; }',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [40, 60];
}
```

#### Segments

Use mixin `tui-slider-ticks-labels` to place labels strictly below ticks

**Template:**
```html
<tui-range id="range-with-segments" size="m" class="range" [max]="max" [min]="min" [segments]="segments" [step]="step" [(ngModel)]="value" />
<div class="ticks-labels"> @for (label of labels; track label) { <div> @if (label !== 75) { {{ label | i18nPlural: pluralMap }} } @else { <tui-icon icon="@tui.arrow-up" />
<div>3/4</div> } </div> } </div>
<p class="tui-space_top-12 tui-space_bottom-0"> Control value: <output for="range-with-segments">
<code>{{ value | json }}</code>
</output>
</p>
```

**TypeScript:**
```ts
import {I18nPluralPipe, JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, I18nPluralPipe, JsonPipe, TuiIcon, TuiRange],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly min = 0;
    protected readonly max = 100;
    protected readonly step = 25;
    protected readonly segments = 4;

    protected readonly labels = Array.from(
        {length: this.segments + 1},
        (_, i) => this.min + this.step * i,
    );

    protected value = [0, 25];

    // https://angular.dev/api/common/I18nPluralPipe#example
    protected pluralMap = {'=0': '0', '=1': '# item', '=100': 'MAX', other: '# items'};
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.range {
    z-index: 1;

    /* (Optionally) expand clickable area as you wish */
    &::after {
        inset-block-start: -0.5rem;
        inset-block-end: -1.5rem;
    }
}

.ticks-labels {
    .tui-slider-ticks-labels();
}

tui-icon::before {
    font-size: 1rem;
}
```

#### KeySteps

Key steps – anchor points of non-uniform format between control's value and slider's position. When `[keySteps]` property is enabled, `[step]` means percentage of total track length.

**Template:**
```html
<tui-range id="range-with-key-steps" size="m" class="range" [keySteps]="keySteps" [segments]="segments" [step]="stepPercentage" [(ngModel)]="value" />
<div class="ticks-labels"> @for (label of ticksLabels; track label) { <span>{{ label }}</span> } </div>
<p class="tui-space_top-12 tui-space_bottom-0"> Control value: <output for="range-with-key-steps">
<code>{{ value | json }}</code>
</output>
</p>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiKeySteps} from '@taiga-ui/core';
import {TuiRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, JsonPipe, TuiRange],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
@import '@taiga-ui/styles/utils';

.range {
    z-index: 1;

    /* (Optionally) expand clickable area as you wish */
    &::after {
        inset-block-start: -0.5rem;
        inset-block-end: -1.5rem;
    }
}

.ticks-labels {
    .tui-slider-ticks-labels();
}
```
