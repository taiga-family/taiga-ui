# Pure

- **Package**: `CDK`
- **Type**: components/utils

Decorator for memoization of pure methods and getters Decorator can help to cache result of methods or getters that can be computed once in the first call. The next calls to getter will just use computed static value. If you use decorator with methods, it does not compute the result again if arguments did not change after the last call (concept similar to Angular pure pipes)

```ts
@Component({
  standalone: true,
  // ..
})
export class Example {
  @tuiPure
  get complexCalculationWithFixedResult(): number {
    // ...
  }

  @tuiPure
  someMethod(arg1: number, arg2: {}): {} {
    // ...
  }
}
```

### Usage Examples

#### Getter

**Template:**
```html
<div *ngIf="show" class="tui-space_bottom-2" > fibonacci(42) = {{ fibonacci42 }} </div>
<button tuiButton type="button" (click)="show = !show" > Show/hide </button>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [NgIf, TuiButton],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected show = false;

    @tuiPure
    protected get fibonacci42(): number {
        return this.fibonacci(42);
    }

    private fibonacci(num: number): number {
        return num <= 1 ? num : this.fibonacci(num - 1) + this.fibonacci(num - 2);
    }
}
```

#### Function

**Template:**
```html
<tui-input [(ngModel)]="text">Type a text to start computing</tui-input>
<div class="tui-space_top-2">Called times: {{ counter.count }}</div>
<div *ngIf="show" class="tui-space_top-2" > Result: {{ calculate(counter, text) | json }} </div>
<button tuiButton type="button" class="tui-space_top-2" (click)="show = !show" > Show/hide </button>
```

**TypeScript:**
```ts
import {JsonPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, JsonPipe, NgIf, TuiButton, TuiInputModule],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected text = '';

    protected show = false;

    protected counter = {
        count: 0,
    };

    @tuiPure
    protected calculate(counter: {count: number}, text: string): {text: string} {
        counter.count++;

        return {
            text,
        };
    }
}
```

- Add
`@tuiPure`
decorator for your method or getter:
