# LegendItem

- **Package**: `ADDON-CHARTS`
- **Type**: components

A button for a legend of ring or pie charts

### How to Use (Import)

```ts
import {TuiLegendItem} from '@taiga-ui/addon-charts';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiLegendItem,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-legend-item [value]="value">Content</tui-legend-item>
```

### Example

```html
<tui-legend-item [active]="active" [color]="color" [disabled]="disabled" [size]="size" [text]="text" >
<span>{{ 123456 | tuiAmount: 'RUB' | async }}</span>
</tui-legend-item>
<p>
<code>tuiAmount</code> pipe is used to format currency and fraction </p>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [active] | `boolean` | Active state from outside |
| [color] | `TuiColor | string | null` | Indicator color |
| [disabled] | `boolean` | Disabled item (i.e. hidden from the related chart) |
| [size] | `TuiSizeS` | Size |
| [value] | `string` | Text inside |

### Usage Examples

#### With a ring chart

**Template:**
```html
<div class="wrapper">
<tui-ring-chart [value]="value" [(activeItemIndex)]="activeItemIndex" >
<span>{{ sum | tuiAmount: 'RUB' | async }}</span>
<div>Total</div>
</tui-ring-chart>
<div class="legend">
<tui-legend-item *ngFor="let label of labels; let index = index" size="s" class="item" [active]="isItemActive(index)" [color]="'var(--tui-chart-categorical-' + index.toString().padStart(2, '0') + ')'" [text]="label" (tuiHoveredChange)="onHover(index, $event)" >
<span>{{ value[index] || 0 | tuiAmount: 'RUB' | async }}</span>
</tui-legend-item>
</div>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLegendItem, TuiRingChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiHovered, tuiSum} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [AsyncPipe, NgForOf, TuiAmountPipe, TuiHovered, TuiLegendItem, TuiRingChart],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected activeItemIndex = NaN;

    protected readonly value = [13769, 12367, 10172, 3018, 2592];
    protected readonly sum = tuiSum(...this.value);
    protected readonly labels = ['Food', 'Cafe', 'OSS', 'Taxi', 'Other'];

    protected isItemActive(index: number): boolean {
        return this.activeItemIndex === index;
    }

    protected onHover(index: number, hovered: boolean): void {
        this.activeItemIndex = hovered ? index : NaN;
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    --tui-chart-categorical-00: #c779d0;
    --tui-chart-categorical-01: #feac5e;
    --tui-chart-categorical-02: #ff5f6d;
    --tui-chart-categorical-03: #4bc0c8;
    --tui-chart-categorical-04: #9795cd;
}

.wrapper {
    display: flex;
    align-items: center;

    @media @tui-mobile {
        flex-direction: column;
    }
}

.legend {
    margin: 0 0 0 2rem;

    @media @tui-mobile {
        margin: 2rem 0 0;
    }
}

.item {
    margin: 0 0.5rem 0.75rem 0;
}
```

#### Toggling

**Template:**
```html
<tui-notification> In case you need to be able to toggle a category by separate action, for example, if clicking on it should expand it for more details </tui-notification>
<div class="wrapper">
<tui-ring-chart size="s" class="chart" [value]="value" />
<div class="legend">
<tui-legend-item *ngFor="let label of labels; let index = index" #item class="item" [color]="'var(--tui-chart-categorical-' + index.toString().padStart(2, '0') + ')'" [disabled]="!isEnabled(index)" [text]="label" (click)="onClick(index)" (keydown.delete)="toggle(index)" >
<input size="s" tuiCheckbox type="checkbox" [checked]="!item.disabled" />
<span>{{ data[index] || 0 | tuiAmount: 'RUB' | async }}</span>
<tui-icon icon="@tui.x" class="disable" [class.disable_rotated]="item.disabled" (click.stop)="toggle(index)" />
</tui-legend-item>
</div>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLegendItem, TuiRingChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {tuiPure, tuiSum} from '@taiga-ui/cdk';
import {TuiAlertService, tuiFormatNumber, TuiIcon, TuiNotification} from '@taiga-ui/core';
import {TuiCheckbox} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        TuiAmountPipe,
        TuiCheckbox,
        TuiIcon,
        TuiLegendItem,
        TuiNotification,
        TuiRingChart,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);
    private enabled = new Array(5).fill(true);

    protected readonly data = [13769, 12367, 10172, 3018, 2592];
    protected readonly sum = tuiSum(...this.data);
    protected readonly labels = ['Axes', 'Faxes', 'Taxes', 'Saxes', 'Other'];

    protected get value(): readonly number[] {
        return this.getValue(this.data, this.enabled);
    }

    protected isEnabled(index: number): boolean {
        return this.enabled[index];
    }

    protected toggle(index: number): void {
        this.enabled = this.enabled.map((value, i) => (i === index ? !value : value));
    }

    protected onClick(index: number): void {
        if (this.isEnabled(index)) {
            this.alerts
                .open(`Category spending: ${tuiFormatNumber(this.data[index] ?? 0)} ₽`, {
                    label: this.labels[index],
                })
                .subscribe();
        } else {
            this.toggle(index);
        }
    }

    @tuiPure
    private getValue(
        data: readonly number[],
        enabled: readonly number[],
    ): readonly number[] {
        return data.map((value, index) => (enabled[index] ? value : 0));
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    --tui-chart-categorical-00: #c779d0;
    --tui-chart-categorical-01: #feac5e;
    --tui-chart-categorical-02: #ff5f6d;
    --tui-chart-categorical-03: #4bc0c8;
    --tui-chart-categorical-04: #9795cd;
}

.chart {
    pointer-events: none;
}

.wrapper {
    display: flex;
    align-items: center;
    margin-block-start: 1rem;

    @media @tui-mobile {
        flex-direction: column;
    }
}

.disable {
    .transition(~'transform, color');

    margin-inline-start: 0.25rem;
    margin-inline-end: -0.25rem;
    will-change: transform;
    color: var(--tui-text-secondary);
    pointer-events: auto;
    inline-size: 1.5rem;
    block-size: 1.5rem;
    border-width: 0.25rem;

    &:hover {
        color: var(--tui-text-primary);
    }

    &_rotated {
        transform: rotate(45deg);
    }
}

.legend {
    margin: 0 0 0 2rem;
    justify-content: center;

    @media @tui-mobile {
        margin: 2rem 0 0;
    }
}

.item {
    margin: 0 0.5rem 0.75rem 0;
}
```
