# Stepper

- **Package**: `KIT`
- **Type**: components

### Example

```html
<tui-stepper [orientation]="orientation" [(activeItemIndex)]="activeItemIndex" >
<button tuiStep [size]="size" > Simple step </button>
<button tuiStep [size]="size" > Simple step </button>
<button tuiStep [icon]="icon" [size]="size" [stepState]="state" > Simple step </button>
<button tuiStep [size]="size" > Simple step </button>
<button tuiStep [size]="size" > Simple step </button>
</tui-stepper>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [orientation] | `TuiOrientation` | — |
| [(activeItemIndex)] | `number` | — |

### Step - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [size] | `TuiSizeL \| TuiSizeS` | — |
| [stepState] | `'normal' \| 'pass' \| 'error'` | — |
| [icon] | `string` | — |

### Usage Examples

#### Basic

**Template:**
```html
<tui-stepper [activeItemIndex]="1">
<button stepState="pass" tuiStep > Finished step </button>
<button tuiStep>Simple step</button>
<button stepState="error" tuiStep > Error step </button>
<button disabled tuiStep > Disabled step </button>
<button icon="@tui.clock" tuiStep > Step with an icon </button>
</tui-stepper>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiStepper} from '@taiga-ui/kit';

@Component({
    imports: [TuiStepper],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Vertical

**Template:**
```html
<tui-stepper orientation="vertical" [activeItemIndex]="1" > @for (step of steps; track step) { <button tuiStep> {{ step }} </button> } </tui-stepper>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiStepper} from '@taiga-ui/kit';

@Component({
    imports: [TuiStepper],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly steps = ['Start Up', 'Cash In', 'Sell Out', 'Bro Down'];
}
```

#### Vertical autoscroll

**Template:**
```html
<tui-stepper orientation="vertical" class="stepper" [activeItemIndex]="5" > @for (step of steps; track step) { <button tuiStep> {{ step }} </button> } </tui-stepper>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiStepper} from '@taiga-ui/kit';

@Component({
    imports: [TuiStepper],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly steps = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
}
```

**LESS:**
```less
.stepper {
    max-block-size: 10rem;
    border: 1px solid var(--tui-border-normal);
}
```

#### Vertical connected

**Template:**
```html
<tui-stepper orientation="vertical" tuiConnected [activeItemIndex]="1" > @for (step of steps; track step) { <button tuiStep> {{ step }} </button> } </tui-stepper>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiConnected, TuiStepper} from '@taiga-ui/kit';

@Component({
    imports: [TuiConnected, TuiStepper],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly steps = [
        'Start Up',
        'Cash In',
        'Sell out this huge amount that you have been saving up for many years of hard work',
        'Bro Down',
    ];
}
```
