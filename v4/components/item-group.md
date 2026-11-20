# ItemGroup

- **Package**: `LAYOUT`
- **Type**: components

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiItemGroup} from '@taiga-ui/layout';
// ...

@Component({
  imports: [
    // ...
    TuiItemGroup,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<div tuiItemGroup>
  <tui-chip appearance="primary">{{ value }}</tui-chip>
</div>
```

### Example

```html
<div tuiItemGroup [autoscroll]="autoscroll" [horizontal]="horizontal" >
<label *ngFor="let chip of chips" tuiChip [appearance]="chip === selected ? 'accent' : 'neutral'" > {{ chip }} <input appearance="" name="radio" tuiChip type="radio" [value]="chip" [(ngModel)]="selected" />
</label>
</div>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| horizontal | `boolean` | Horizontal layout (for mobile devices) |
| autoscroll | `boolean` | Enable scrolling to selected chip (for interactive chips in horizontal layout) |

### Usage Examples

#### Basic

**Template:**
```html
<div tuiItemGroup>
<tui-chip *ngFor="let chip of chips">{{ chip }}</tui-chip>
</div>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiChip} from '@taiga-ui/kit';
import {TuiItemGroup} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [NgForOf, TuiChip, TuiItemGroup],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly chips = [
        'Indian cuisine',
        'Wi-Fi',
        'Free parking',
        'Pets allowed',
        'Pool',
        'Air conditioning',
        'Breakfast',
        'Gym',
        'Kitchen',
        'Laundry',
        'Luggage storage',
        'Outdoor seating',
        'Room service',
        'Smoking allowed',
    ];
}
```

#### Single choice

**Template:**
```html
<div tuiPlatform="ios">
<div tuiItemGroup [autoscroll]="true" [horizontal]="true" >
<label *ngFor="let chip of chips" tuiChip [appearance]="chip === selected ? 'accent' : 'neutral'" > {{ chip }} <input appearance="" name="radio" tuiChip type="radio" [value]="chip" [(ngModel)]="selected" />
</label>
</div>
</div>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiChip} from '@taiga-ui/kit';
import {TuiItemGroup} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [FormsModule, NgForOf, TuiChip, TuiItemGroup, TuiPlatform],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly chips = [
        'Indian cuisine',
        'Wi-Fi',
        'Free parking',
        'Pets allowed',
        'Pool',
        'Air conditioning',
        'Breakfast',
        'Gym',
        'Kitchen',
        'Laundry',
        'Luggage storage',
        'Outdoor seating',
        'Room service',
        'Smoking allowed',
    ];

    protected selected = 'Wi-Fi';
}
```

**LESS:**
```less
:host {
    display: block;
    max-inline-size: 30rem;
}
```

#### Multiple choice

**Template:**
```html
<div tuiItemGroup [horizontal]="true" >
<label *ngFor="let chip of chips; let i = index" tuiChip [appearance]="checked[i] ? 'accent' : 'neutral'" > {{ chip }} <input appearance="" tuiChip type="checkbox" [(ngModel)]="checked[i]" />
</label>
</div>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk';
import {TuiChip} from '@taiga-ui/kit';
import {TuiItemGroup} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [FormsModule, NgForOf, TuiChip, TuiItemGroup],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly chips = [
        'Indian cuisine',
        'Wi-Fi',
        'Free parking',
        'Pets allowed',
        'Pool',
        'Air conditioning',
        'Breakfast',
        'Gym',
        'Kitchen',
        'Laundry',
        'Luggage storage',
        'Outdoor seating',
        'Room service',
        'Smoking allowed',
    ];

    protected checked = this.chips.map(TUI_FALSE_HANDLER);
}
```

**LESS:**
```less
:host {
    display: block;
    max-inline-size: 30rem;
}
```

#### With more

**Template:**
```html
<div tuiItemGroup>
<tui-items-with-more [linesLimit]="linesLimit">
<ng-container *ngFor="let chip of chips">
<label *tuiItem tuiChip [appearance]="chip === selected ? 'accent' : 'neutral'" > {{ chip }} <input appearance="" name="radio" tuiChip type="radio" [value]="chip" [(ngModel)]="selected" />
</label>
</ng-container>
<ng-template let-index tuiMore >
<button appearance="neutral" iconEnd="@tui.chevron-down" size="s" tuiChip type="button" class="more" (click)="linesLimit = 100" > More {{ chips.length - index - 1 }} </button>
</ng-template>
</tui-items-with-more>
</div>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiChip, TuiItemsWithMore} from '@taiga-ui/kit';
import {TuiItemGroup} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [FormsModule, NgForOf, TuiChip, TuiItemGroup, TuiItemsWithMore],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected linesLimit = 2;

    protected readonly chips = [
        'Indian cuisine',
        'Wi-Fi',
        'Free parking',
        'Pets allowed',
        'Pool',
        'Air conditioning',
        'Breakfast',
        'Gym',
        'Kitchen',
        'Laundry',
        'Luggage storage',
        'Outdoor seating',
        'Room service',
        'Smoking allowed',
    ];

    protected selected = 'Wi-Fi';
}
```

**LESS:**
```less
:host {
    display: block;
    max-inline-size: 30rem;
}
```
