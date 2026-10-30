# Sensitive

- **Package**: `KIT`
- **Type**: directives

A directive that allows you to hide sensitive data under a pixel mask. This can be account balances, write-off amounts and any other content

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiSensitive} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiSensitive,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<span [tuiSensitive]="true">text</span>
```

### Example

```html
<span [tuiSensitive]="sensitive">Confidential information</span>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| tuiSensitive | `boolean` | Sensitive mode |

### Usage Examples

#### Basic

**Template:**
```html
<span class="small"> Balance: <span [tuiSensitive]="sensitive">100 000$</span>
</span>
<span class="medium"> Balance: <span [tuiSensitive]="sensitive">100 000$</span>
</span>
<span class="big"> Balance: <span [tuiSensitive]="sensitive">100 000$</span>
</span>
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="sensitive" /> hide </label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabel} from '@taiga-ui/core';
import {TuiSensitive, TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiLabel, TuiSensitive, TuiSwitch],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected sensitive = true;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    inline-size: 30rem;
}

.small {
    font: var(--tui-font-text-s);
}

.medium {
    font: var(--tui-font-heading-6);
}

.big {
    font: var(--tui-font-heading-3);
}
```

#### Components

**Template:**
```html
<button appearance="secondary-destructive" size="m" tuiButton type="button" >
<span> Pay <span [tuiSensitive]="sensitive">1000$</span>
</span>
</button>
<button appearance="flat" size="m" tuiButton type="button" class="tui-space_left-2" >
<span> Pay <span [tuiSensitive]="sensitive">1000$</span>
</span>
</button>
<p>
<tui-badge [style.background]="'var(--tui-status-positive)'" [tuiSensitive]="sensitive" > 12 000$ </tui-badge>
<tui-badge appearance="primary" class="tui-space_left-2" >
<span [tuiSensitive]="sensitive">12 000$</span>
</tui-badge>
<tui-badge appearance="accent" size="xl" class="tui-space_left-2" [tuiSensitive]="sensitive" > 12 000$ </tui-badge>
</p>
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="sensitive" /> Hide </label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiLabel} from '@taiga-ui/core';
import {TuiBadge, TuiSensitive, TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiBadge, TuiButton, TuiLabel, TuiSensitive, TuiSwitch],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected sensitive = true;
}
```
