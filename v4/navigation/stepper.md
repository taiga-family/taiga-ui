# Stepper

- **Package**: `KIT`
- **Type**: components

### How to Use (Import)

```ts
import {TuiStepper} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiStepper,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-stepper>
  <a
    routerLink="/step-1"
    routerLinkActive
    tuiStep
  >
    One 1
  </a>
  <a
    routerLink="/step-2"
    routerLinkActive
    tuiStep
  >
    Two 2
  </a>
  <a
    routerLink="/step-3"
    routerLinkActive
    tuiStep
  >
    Three 3
  </a>
</tui-stepper>
```

### Example

```html
<tui-stepper [orientation]="orientation" [(activeItemIndex)]="activeItemIndex" >
<button tuiStep>Simple step</button>
<button tuiStep>Simple step</button>
<button tuiStep [icon]="icon" [stepState]="state" > Simple step </button>
<button tuiStep>Simple step</button>
<button tuiStep>Simple step</button>
</tui-stepper>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [orientation] | `TuiOrientation` | Steps direction |
| [(activeItemIndex)] | `number` | Active step index |

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
    standalone: true,
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
<tui-stepper orientation="vertical" [activeItemIndex]="1" >
<button *ngFor="let step of steps" tuiStep > {{ step }} </button>
</tui-stepper>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiStepper} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiStepper],
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
<tui-stepper orientation="vertical" class="stepper" [activeItemIndex]="5" >
<button *ngFor="let step of steps" tuiStep > {{ step }} </button>
</tui-stepper>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiStepper} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiStepper],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
<tui-stepper orientation="vertical" tuiConnected [activeItemIndex]="1" >
<button *ngFor="let step of steps" tuiStep > {{ step }} </button>
</tui-stepper>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiConnected, TuiStepper} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiConnected, TuiStepper],
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
