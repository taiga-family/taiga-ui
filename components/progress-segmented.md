# ProgressSegmented

- **Package**: `KIT`
- **Type**: directives

`ProgressSegmented` is a component to visually represent the completion of a process or operation (as a segmented bar). It shows how much has been completed and how much remains. Actually, this component is the same `ProgressBar` processed by css-property `mask` .

### Example

```html
<progress tuiProgressBar [max]="max" [segments]="segments" [size]="size" [tuiProgressColorSegments]="computedColors" [value]="value" ></progress>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [segments] | `number` |  |
| [value] | `number` |  |
| [max] | `number` |  |
| [size] | `TuiSizeXS | TuiSizeXXL` | height of the progress |
| [tuiProgressColorSegments] | `string[]` |  |

### Usage Examples

#### Basic

**Template:**
```html
<progress tuiProgressBar [max]="5" [segments]="5" [value]="3" ></progress>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [TuiProgress],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Sizes

**Template:**
```html
<progress size="xs" tuiProgressBar [max]="7" [segments]="7" [value]="3" ></progress>
<progress size="s" tuiProgressBar [max]="10" [segments]="10" [value]="6" ></progress>
<progress size="m" tuiProgressBar [max]="5" [segments]="5" [value]="4" ></progress>
<progress size="l" tuiProgressBar [max]="3" [segments]="3" [value]="1" ></progress>
<progress size="xl" tuiProgressBar [max]="3" [segments]="3" [value]="2" ></progress>
<progress size="xxl" tuiProgressBar [max]="3" [segments]="3" [value]="3" ></progress>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [TuiProgress],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
```

#### Colors

**Template:**
```html
<progress size="s" tuiProgressBar class="green" [max]="8" [segments]="8" [value]="6" ></progress>
<progress size="s" tuiProgressBar [max]="arrayColors.length" [segments]="arrayColors.length" [tuiProgressColorSegments]="arrayColors" [value]="arrayColors.length" ></progress>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [TuiProgress],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly arrayColors = [
        '#39b54a',
        '#ffd450',
        '#ffd450',
        '#fcc521',
        '#fab619',
        '#f8a34d',
        '#e01f19',
    ];
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.green {
    color: var(--tui-chart-categorical-20);
}
```

#### With labels

**Template:**
```html
<progress tuiProgressBar [max]="5" [segments]="5" [value]="3" ></progress>
<div class="description tui-space_top-2">
<label tuiTitle>
<span tuiSubtitle>Step</span>
<span>{{ 100500 | tuiAmount: 'RUB' }}</span>
</label>
<label tuiTitle>
<span tuiSubtitle>New apartment</span> 2 times left </label>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiTitle} from '@taiga-ui/core';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [TuiAmountPipe, TuiProgress, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.description {
    display: flex;
    justify-content: space-between;

    & > *:first-child {
        text-align: start;
    }

    & > *:last-child {
        text-align: end;
    }

    [tuiSubtitle] {
        color: var(--tui-text-secondary);
    }
}
```

#### No round corners

**Template:**
```html
<progress tuiProgressBar [max]="5" [segments]="5" [value]="3" ></progress>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [TuiProgress],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
[tuiProgressBar]._segmented {
    --tui-segment-gap: 0.25rem;

    border-radius: 0;
    mask-image: linear-gradient(to left, transparent 0 var(--tui-segment-gap), #999 var(--tui-segment-gap) 100%);
}
```
