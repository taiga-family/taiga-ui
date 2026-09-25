# Counter

- **Package**: `KIT`
- **Type**: components

### Example

```html
<tui-counter [appearance]="appearance" [max]="max" [min]="min" [size]="size" [step]="step" [(ngModel)]="value" > {{ content }} </tui-counter>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [appearance] | `string` | appearance of the counter itself |
| [size] | `TuiSizeXS | TuiSizeL` | — |
| [step] | `number` | — |
| [min] | `number` | minimum value |
| [max] | `number` | maximum value |
| ng-content | `string` | text inside counter |

### Usage Examples

#### Sizes

**Template:**
```html
<tui-counter size="l" [(ngModel)]="value" />
<tui-counter size="m" [(ngModel)]="value" />
<tui-counter size="s" [(ngModel)]="value" />
<tui-counter size="xs" [(ngModel)]="value" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCounter} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiCounter],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 0;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```

#### Appearances

**Template:**
```html
<tui-counter appearance="primary" [(ngModel)]="value" > {{ value | i18nPlural: pluralize }} </tui-counter>
<tui-counter appearance="flat" [(ngModel)]="value" > {{ value | i18nPlural: pluralize }} </tui-counter>
<tui-counter appearance="secondary" [(ngModel)]="value" > {{ value | i18nPlural: pluralize }} </tui-counter>
```

**TypeScript:**
```ts
import {I18nPluralPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCounter} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, I18nPluralPipe, TuiCounter],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 0;

    protected readonly pluralize = {
        '=0': '',
        '=1': ' pc',
        other: ' pcs',
    };
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```

#### Adjusts font size

**Template:**
```html
<fieldset tuiTitle>
<legend tuiSubtitle>Price</legend>
<tui-counter appearance="secondary" size="m" [step]="step" [style.inline-size.rem]="10" [(ngModel)]="value" >
<span [style.order]="-1">$</span>
</tui-counter>
</fieldset>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitle} from '@taiga-ui/core';
import {TuiCounter} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiCounter, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly step = 1_000;
    protected value = 9_000;
}
```

#### Animated

**Template:**
```html
<section appearance="neutral" tuiCardMedium >
<h3 tuiTitle> Steak <span tuiSubtitle>$25</span>
</h3>
<footer class="footer"> 250g <tui-counter size="m" class="counter" [class.counter_minimized]="!value" [(ngModel)]="value" />
</footer>
</section>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitle} from '@taiga-ui/core';
import {TuiCounter} from '@taiga-ui/kit';
import {TuiCard} from '@taiga-ui/layout';

@Component({
    imports: [FormsModule, TuiCard, TuiCounter, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 0;
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.footer {
    position: relative;
    display: flex;
    inline-size: 100%;
    block-size: var(--tui-height-m);
    align-items: center;
    color: var(--tui-text-secondary);
}

.counter {
    .transition(inline-size);

    position: absolute;
    inline-size: 100%;
    min-inline-size: var(--tui-height-m);
    inset-inline-end: 0;
    overflow: hidden;

    &_minimized {
        inline-size: var(--tui-height-m);
        color: transparent;
    }
}
```
